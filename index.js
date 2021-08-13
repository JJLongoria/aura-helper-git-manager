const { ProcessHandler, ProcessFactory } = require('@ah/core').ProcessManager;
const { Commit, CommitDate, GitDiff } = require('@ah/core').Types;
const { StrUtils, Validator } = require('@ah/core').CoreUtils;

class GitManager {

    static fetch(projectFolder) {
        projectFolder = Validator.validateFolderPath(projectFolder);
        return new Promise((resolve, reject) => {
            let process = ProcessFactory.gitFetch(projectFolder);
            ProcessHandler.runProcess(process).then(() => {
                resolve();
            }).catch((error) => {
                reject(error);
            });
        });
    }

    static getBranches(projectFolder) {
        projectFolder = Validator.validateFolderPath(projectFolder);
        return new Promise((resolve, reject) => {
            let process = ProcessFactory.gitGetBranches(projectFolder)
            ProcessHandler.runProcess(process).then((response) => {
                let branches = [];
                for (const logLine of response.split('\n')) {
                    let branch = logLine.trim();
                    if (branch.length > 0)
                        branches.push(branch);
                }
                resolve(branches);
            }).catch((error) => {
                reject(error);
            });
        });
    }

    static getCommits(projectFolder) {
        projectFolder = Validator.validateFolderPath(projectFolder);
        return new Promise((resolve, reject) => {
            let process = ProcessFactory.gitLog(projectFolder)
            ProcessHandler.runProcess(process).then((response) => {
                let commits = [];
                let commit;
                for (const logLine of response.split('\n')) {
                    if (logLine.startsWith('commit')) {
                        let words = logLine.split(' ');
                        if (commit)
                            commits.push(commit);
                        commit = new Commit(words[1]);
                    } else if (logLine.startsWith('Author:')) {
                        let words = logLine.split(' ');
                        commit.author = logLine.substring(logLine.indexOf(':') + 1, logLine.indexOf('<')).trim();
                        commit.authorEmail = words[words.length - 1].replace('<', '').replace('>', '');
                    } else if (logLine.startsWith('Date:')) {
                        let words = logLine.split(' ');
                        const commitDate = new CommitDate(words[3], words[4], words[5], words[6], words[7], words[8], logLine.substring(logLine.indexOf(':') + 1).trim());
                        commit.date = commitDate;
                    } else if (commit && commit.date && !commit.title) {
                        if (logLine.trim().length > 0)
                            commit.title = logLine.trim();
                    } else if (commit && commit.title) {
                        if (logLine.trim().length === 0 && !commit.message)
                            continue;
                        commit.message += logLine.trim() + '\n';
                    }
                }
                if (commit)
                    commits.push(commit);
                commits.sort(function (commitA, commitB) {
                    let dateA = new Date(commitA.date.dateStr);
                    let dateB = new Date(commitB.date.dateStr);
                    return dateA.valueOf() - dateB.valueOf();
                });
                resolve(commits);
            }).catch((error) => {
                reject(error);
            });
        });
    }

    static getDiffs(projectFolder, source, target) {
        projectFolder = Validator.validateFolderPath(projectFolder);
        return new Promise((resolve, reject) => {
            let process = ProcessFactory.gitDiff(projectFolder, source, target)
            ProcessHandler.runProcess(process).then((response) => {
                resolve(processDiffOut(response));
            }).catch((error) => {
                reject(error);
            });
        });
    }

}
module.exports = GitManager;

function processDiffOut(stdOut) {
    let lines = stdOut.split('\n');
    let diffs = [];
    let diff;
    let startChanges = false;
    let aPathStart = '--- a/';
    let bPathStart = '+++ b/';
    let adevnull = '--- /dev/null';
    let bdevnull = '+++ /dev/null';
    let binaryFile = 'Binary files';
    let changesAdded = false;
    let removeChangesAdded = false;
    let extraDiff;
    for (const diffLine of lines) {
        let tmpLine = StrUtils.replace(diffLine, ',', '');
        if (tmpLine.indexOf('diff') !== -1 && tmpLine.indexOf('--git') !== -1) {
            startChanges = false;
            if (diff && diff.path && diff.path.indexOf('force-app') !== -1) {
                if (extraDiff)
                    diff.mode = 'deleted file';
                if (!changesAdded) {
                    diff.addChanges = [];
                }
                if (!removeChangesAdded) {
                    diff.removeChanges = [];
                }
                diffs.push(diff);
            }
            if (extraDiff) {
                if (!changesAdded) {
                    extraDiff.addChanges = [];
                }
                if (!removeChangesAdded) {
                    extraDiff.removeChanges = [];
                }
                diffs.push(extraDiff);
                extraDiff = undefined;
            }
            diff = new GitDiff();
            changesAdded = false;
            removeChangesAdded = false;
        } else if (tmpLine.startsWith(aPathStart)) {
            let pathTmp = tmpLine.substring(aPathStart.length).trim();
            if (pathTmp !== '/dev/null' && pathTmp.length > 0)
                diff.path = StrUtils.replace(pathTmp, ',', '');
        } else if (tmpLine.startsWith(adevnull)) {
            let pathTmp = tmpLine.substring(adevnull.length).trim();
            if (pathTmp !== '/dev/null' && pathTmp.length > 0)
                diff.path = StrUtils.replace(pathTmp, ',', '');
        } else if (tmpLine.startsWith(bPathStart)) {
            let pathTmp = tmpLine.substring(bPathStart.length).trim();
            startChanges = true;
            if (diff.path && diff.path !== pathTmp && pathTmp !== '/dev/null' && pathTmp.length > 0) {
                extraDiff = new GitDiff(StrUtils.replace(pathTmp, ',', ''), 'new file');
            } else if (!diff.path && pathTmp !== '/dev/null' && pathTmp.length > 0) {
                diff.path = StrUtils.replace(pathTmp, ',', '');
            } else if (pathTmp === '/dev/null' || pathTmp.length == 0) {
                diff.mode = 'deleted file';
            }
        } else if (tmpLine.startsWith(bdevnull)) {
            startChanges = true;
            let pathTmp = tmpLine.substring(bdevnull.length).trim();
            if (pathTmp !== '/dev/null' && pathTmp.length > 0)
                diff.path = StrUtils.replace(pathTmp, ',', '');
        } else if (tmpLine.startsWith(binaryFile)) {
            let pathTmp = tmpLine.substring(binaryFile.length).trim();
            let splits = pathTmp.split(' and ');
            if (splits.length > 1) {
                if (splits[0].indexOf('/dev/null') === -1) {
                    pathTmp = splits[0].substring('a/'.length);
                } else {
                    pathTmp = splits[1].substring('b/'.length);
                }
                if (pathTmp && !diff.path) {
                    diff.path = pathTmp;
                }
            }
        } else if (tmpLine.startsWith('new file mode')) {
            diff.mode = 'new file';
        } else if (tmpLine.startsWith('deleted file mode')) {
            diff.mode = 'deleted file';
        } else if (startChanges) {
            if (tmpLine.startsWith('-')) {
                diff.removeChanges.push(diffLine.substring(1));
                if (extraDiff)
                    extraDiff.removeChanges.push(diffLine.substring(1));
                removeChangesAdded = true;
            } else if (tmpLine.startsWith('+')) {
                changesAdded = true;
                if (extraDiff)
                    extraDiff.addChanges.push(diffLine.substring(1));
                diff.addChanges.push(diffLine.substring(1));
            }
            else {
                diff.removeChanges.push(diffLine);
                diff.addChanges.push(diffLine);
                if (extraDiff) {
                    extraDiff.removeChanges.push(diffLine);
                    extraDiff.addChanges.push(diffLine);
                }
            }
        }
    }
    if (diff && diff.path && diff.path.indexOf('force-app') !== -1)
        diffs.push(diff);
    return diffs;
}