const { ProcessHandler, ProcessFactory } = require('@ah/core').ProcessManager;
const { Commit, CommitDate, GitDiff } = require('@ah/core').Types;
const { StrUtils, Validator } = require('@ah/core').CoreUtils;

/**
 * Class with util methods to handle and manage git repository and has features to use in Aura Helper Framework. Yo can fetch data, list branches, get commits or get diffs from two branches, tags, commits...
 * 
 * Can cobine this module with @ah/metadata-factory, @ah/package-generator and @ah/ignore to refactor code, work with git and teams or implement Continuous Integration among other development processes and tasks easy. 
 */
class GitManager {

    /**
     * Constructor to instance a new GitManager object
     * 
     * @param {String} [projectFolder] Path to the project under a git repository
     */
    constructor(projectFolder){
        this.projectFolder = projectFolder;
    }

    /**
     * Method to set the git project folder path
     * @param {String} projectFolder Path to the project under a git repository 
     * 
     * @returns {GitManager} Return the GitManager instance
     */
    setProjectFolder(projectFolder){
        this.projectFolder = projectFolder;
        return this;
    }


    /**
     * Method to get the User Name set on git config
     * 
     * @returns {Promise<String>} Return a String promise with the Git User Name
     * 
     * @throws {WrongDirectoryPathException} If the project folder is not a String or can't convert to absolute path
     * @throws {DirectoryNotFoundException} If the project folder  not exists or not have access to it
     * @throws {InvalidDirectoryPathException} If the project folder  is not a directory
     * @throws {OSNotSupportedException} When run this processes with not supported operative system
     */
    getUserName() {
        this.projectFolder = Validator.validateFolderPath(this.projectFolder);
        return new Promise((resolve, reject) => {
            const process = ProcessFactory.gitGetConfig(this.projectFolder, 'user.name');
            ProcessHandler.runProcess(process).then((result) => {
                resolve(result);
            }).catch((error) => {
                reject(error);
            });
        });
    }

    /**
     * Method to get the User Email set on git config
     * 
     * @returns {Promise<String>} Return a String promise with the Git User Email
     * 
     * @throws {WrongDirectoryPathException} If the project folder is not a String or can't convert to absolute path
     * @throws {DirectoryNotFoundException} If the project folder  not exists or not have access to it
     * @throws {InvalidDirectoryPathException} If the project folder  is not a directory
     * @throws {OSNotSupportedException} When run this processes with not supported operative system
     */
    getUserEmail() {
        this.projectFolder = Validator.validateFolderPath(this.projectFolder);
        return new Promise((resolve, reject) => {
            const process = ProcessFactory.gitGetConfig(this.projectFolder, 'user.email');
            ProcessHandler.runProcess(process).then((result) => {
                resolve(result);
            }).catch((error) => {
                reject(error);
            });
        });
    }

    /**
     * Method to get the Author Name set on git config
     * 
     * @returns {Promise<String>} Return a String promise with the Git Author Name
     * 
     * @throws {WrongDirectoryPathException} If the project folder is not a String or can't convert to absolute path
     * @throws {DirectoryNotFoundException} If the project folder  not exists or not have access to it
     * @throws {InvalidDirectoryPathException} If the project folder  is not a directory
     * @throws {OSNotSupportedException} When run this processes with not supported operative system
     */
    getAuthorName() {
        this.projectFolder = Validator.validateFolderPath(this.projectFolder);
        return new Promise((resolve, reject) => {
            const process = ProcessFactory.gitGetConfig(this.projectFolder, 'author.name');
            ProcessHandler.runProcess(process).then((result) => {
                resolve(result);
            }).catch((error) => {
                reject(error);
            });
        });
    }

    /**
     * Method to get the Author Email set on git config
     * 
     * @returns {Promise<String>} Return a String promise with the Git Author Email
     * 
     * @throws {WrongDirectoryPathException} If the project folder is not a String or can't convert to absolute path
     * @throws {DirectoryNotFoundException} If the project folder  not exists or not have access to it
     * @throws {InvalidDirectoryPathException} If the project folder  is not a directory
     * @throws {OSNotSupportedException} When run this processes with not supported operative system
     */
    getAuthorEmail() {
        this.projectFolder = Validator.validateFolderPath(this.projectFolder);
        return new Promise((resolve, reject) => {
            const process = ProcessFactory.gitGetConfig(this.projectFolder, 'author.email');
            ProcessHandler.runProcess(process).then((result) => {
                resolve(result);
            }).catch((error) => {
                reject(error);
            });
        });
    }

    /**
     * Method to get the Committer Name set on git config
     * 
     * @returns {Promise<String>} Return a String promise with the Git Committer Name
     * 
     * @throws {WrongDirectoryPathException} If the project folder is not a String or can't convert to absolute path
     * @throws {DirectoryNotFoundException} If the project folder  not exists or not have access to it
     * @throws {InvalidDirectoryPathException} If the project folder  is not a directory
     * @throws {OSNotSupportedException} When run this processes with not supported operative system
     */
    getCommitterName() {
        this.projectFolder = Validator.validateFolderPath(this.projectFolder);
        return new Promise((resolve, reject) => {
            const process = ProcessFactory.gitGetConfig(this.projectFolder, 'committer.name');
            ProcessHandler.runProcess(process).then((result) => {
                resolve(result);
            }).catch((error) => {
                reject(error);
            });
        });
    }

    /**
     * Method to get the Committer Email set on git config
     * 
     * @returns {Promise<String>} Return a String promise with the Git Committer Email
     * 
     * @throws {WrongDirectoryPathException} If the project folder is not a String or can't convert to absolute path
     * @throws {DirectoryNotFoundException} If the project folder  not exists or not have access to it
     * @throws {InvalidDirectoryPathException} If the project folder  is not a directory
     * @throws {OSNotSupportedException} When run this processes with not supported operative system
     */
    getCommitterEmail() {
        this.projectFolder = Validator.validateFolderPath(this.projectFolder);
        return new Promise((resolve, reject) => {
            const process = ProcessFactory.gitGetConfig(this.projectFolder, 'committer.email');
            ProcessHandler.runProcess(process).then((result) => {
                resolve(result);
            }).catch((error) => {
                reject(error);
            });
        });
    }

    /**
     * Method to fetch repository data into your local Salesforce gitr project
     * 
     * @returns {Promise<any>} Return an empty promise when finish fetch process
     * 
     * @throws {WrongDirectoryPathException} If the project folder is not a String or can't convert to absolute path
     * @throws {DirectoryNotFoundException} If the project folder  not exists or not have access to it
     * @throws {InvalidDirectoryPathException} If the project folder  is not a directory
     * @throws {OSNotSupportedException} When run this processes with not supported operative system
     */
    fetch() {
        this.projectFolder = Validator.validateFolderPath(this.projectFolder);
        return new Promise((resolve, reject) => {
            const process = ProcessFactory.gitFetch(this.projectFolder);
            ProcessHandler.runProcess(process).then(() => {
                resolve();
            }).catch((error) => {
                reject(error);
            });
        });
    }

    /**
     * Method to get branch names from the Salesforce git repository
     *  
     * @returns {Promise<Array<Object>>} Returns a promise with an object list with branch name and active status
     * 
     * @throws {WrongDirectoryPathException} If the project folder is not a String or can't convert to absolute path
     * @throws {DirectoryNotFoundException} If the project folder  not exists or not have access to it
     * @throws {InvalidDirectoryPathException} If the project folder  is not a directory
     * @throws {OSNotSupportedException} When run this processes with not supported operative system
     */
    getBranches() {
        this.projectFolder = Validator.validateFolderPath(this.projectFolder);
        return new Promise((resolve, reject) => {
            const process = ProcessFactory.gitGetBranches(this.projectFolder)
            ProcessHandler.runProcess(process).then((response) => {
                let branches = [];
                for (const logLine of response.split('\n')) {
                    let branch = logLine.trim();
                    if (branch.length > 0) {
                        const active = branch.startsWith('*');
                        if (active)
                            branch = branch.substring(1).trim();
                        branches.push({
                            name: branch,
                            active: active
                        });
                    }

                }
                resolve(branches);
            }).catch((error) => {
                reject(error);
            });
        });
    }

    /**
     * Method to get the commits data from the Salesforce git repository
     * 
     * @returns {Promise<Array<Commit>>} Returns a promise with list of Commit objects
     * 
     * @throws {WrongDirectoryPathException} If the project folder is not a String or can't convert to absolute path
     * @throws {DirectoryNotFoundException} If the project folder  not exists or not have access to it
     * @throws {InvalidDirectoryPathException} If the project folder  is not a directory
     * @throws {OSNotSupportedException} When run this processes with not supported operative system
     */
    getCommits() {
        this.projectFolder = Validator.validateFolderPath(this.projectFolder);
        return new Promise((resolve, reject) => {
            const process = ProcessFactory.gitLog(this.projectFolder)
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

    /**
     * Method to get a list of GitDiff object with the differences between two branches, commits, tags...
     * @param {String} source Source branch name, tag or commit for get diffs
     * @param {String} [target] Target branch name, tag or commit for get diffs
     * 
     * @returns {Promise<Array<GitDiff>>} Returns a promise with GitDiffs objects list with the difference data
     * 
     * @throws {WrongDirectoryPathException} If the project folder is not a String or can't convert to absolute path
     * @throws {DirectoryNotFoundException} If the project folder  not exists or not have access to it
     * @throws {InvalidDirectoryPathException} If the project folder  is not a directory
     * @throws {OSNotSupportedException} When run this processes with not supported operative system
     * @throws {DataRequiredException} If source is not provided
     */
    getDiffs(source, target) {
        this.projectFolder = Validator.validateFolderPath(this.projectFolder);
        return new Promise((resolve, reject) => {
            const process = ProcessFactory.gitDiff(this.projectFolder, source, target)
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