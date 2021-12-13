"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitManager = void 0;
var core_1 = require("@aurahelper/core");
var Validator = core_1.CoreUtils.Validator;
var StrUtils = core_1.CoreUtils.StrUtils;
/**
 * Class with util methods to handle and manage git repository and has features to use in Aura Helper Framework. Yo can fetch data, list branches, get commits or get diffs from two branches, tags, commits...
 *
 * Can cobine this module with @ah/metadata-factory, @ah/package-generator and @ah/ignore to refactor code, work with git and teams or implement Continuous Integration among other development processes and tasks easy.
 */
var GitManager = /** @class */ (function () {
    /**
     * Constructor to instance a new GitManager object
     *
     * @param {string} [projectFolder] Path to the project under a git repository
     */
    function GitManager(projectFolder) {
        this.projectFolder = projectFolder || './';
    }
    /**
     * Method to set the git project folder path
     * @param {string} projectFolder Path to the project under a git repository
     *
     * @returns {GitManager} Return the GitManager instance
     */
    GitManager.prototype.setProjectFolder = function (projectFolder) {
        this.projectFolder = projectFolder;
        return this;
    };
    /**
     * Method to get the User Name set on git config
     *
     * @returns {Promise<string>} Return a String promise with the Git User Name
     *
     * @throws {WrongDirectoryPathException} If the project folder is not a String or can't convert to absolute path
     * @throws {DirectoryNotFoundException} If the project folder  not exists or not have access to it
     * @throws {InvalidDirectoryPathException} If the project folder  is not a directory
     * @throws {OSNotSupportedException} When run this processes with not supported operative system
     */
    GitManager.prototype.getUserName = function () {
        var _this = this;
        this.projectFolder = Validator.validateFolderPath(this.projectFolder);
        return new Promise(function (resolve, reject) {
            var process = core_1.ProcessFactory.gitGetConfig(_this.projectFolder, 'user.name');
            core_1.ProcessHandler.runProcess(process).then(function (result) {
                resolve(result);
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    /**
     * Method to get the User Email set on git config
     *
     * @returns {Promise<string>} Return a String promise with the Git User Email
     *
     * @throws {WrongDirectoryPathException} If the project folder is not a String or can't convert to absolute path
     * @throws {DirectoryNotFoundException} If the project folder  not exists or not have access to it
     * @throws {InvalidDirectoryPathException} If the project folder  is not a directory
     * @throws {OSNotSupportedException} When run this processes with not supported operative system
     */
    GitManager.prototype.getUserEmail = function () {
        var _this = this;
        this.projectFolder = Validator.validateFolderPath(this.projectFolder);
        return new Promise(function (resolve, reject) {
            var process = core_1.ProcessFactory.gitGetConfig(_this.projectFolder, 'user.email');
            core_1.ProcessHandler.runProcess(process).then(function (result) {
                resolve(result);
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    /**
     * Method to get the Author Name set on git config
     *
     * @returns {Promise<string>} Return a String promise with the Git Author Name
     *
     * @throws {WrongDirectoryPathException} If the project folder is not a String or can't convert to absolute path
     * @throws {DirectoryNotFoundException} If the project folder  not exists or not have access to it
     * @throws {InvalidDirectoryPathException} If the project folder  is not a directory
     * @throws {OSNotSupportedException} When run this processes with not supported operative system
     */
    GitManager.prototype.getAuthorName = function () {
        var _this = this;
        this.projectFolder = Validator.validateFolderPath(this.projectFolder);
        return new Promise(function (resolve, reject) {
            var process = core_1.ProcessFactory.gitGetConfig(_this.projectFolder, 'author.name');
            core_1.ProcessHandler.runProcess(process).then(function (result) {
                resolve(result);
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    /**
     * Method to get the Author Email set on git config
     *
     * @returns {Promise<string>} Return a String promise with the Git Author Email
     *
     * @throws {WrongDirectoryPathException} If the project folder is not a String or can't convert to absolute path
     * @throws {DirectoryNotFoundException} If the project folder  not exists or not have access to it
     * @throws {InvalidDirectoryPathException} If the project folder  is not a directory
     * @throws {OSNotSupportedException} When run this processes with not supported operative system
     */
    GitManager.prototype.getAuthorEmail = function () {
        var _this = this;
        this.projectFolder = Validator.validateFolderPath(this.projectFolder);
        return new Promise(function (resolve, reject) {
            var process = core_1.ProcessFactory.gitGetConfig(_this.projectFolder, 'author.email');
            core_1.ProcessHandler.runProcess(process).then(function (result) {
                resolve(result);
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    /**
     * Method to get the Committer Name set on git config
     *
     * @returns {Promise<string>} Return a String promise with the Git Committer Name
     *
     * @throws {WrongDirectoryPathException} If the project folder is not a String or can't convert to absolute path
     * @throws {DirectoryNotFoundException} If the project folder  not exists or not have access to it
     * @throws {InvalidDirectoryPathException} If the project folder  is not a directory
     * @throws {OSNotSupportedException} When run this processes with not supported operative system
     */
    GitManager.prototype.getCommitterName = function () {
        var _this = this;
        this.projectFolder = Validator.validateFolderPath(this.projectFolder);
        return new Promise(function (resolve, reject) {
            var process = core_1.ProcessFactory.gitGetConfig(_this.projectFolder, 'committer.name');
            core_1.ProcessHandler.runProcess(process).then(function (result) {
                resolve(result);
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    /**
     * Method to get the Committer Email set on git config
     *
     * @returns {Promise<string>} Return a String promise with the Git Committer Email
     *
     * @throws {WrongDirectoryPathException} If the project folder is not a String or can't convert to absolute path
     * @throws {DirectoryNotFoundException} If the project folder  not exists or not have access to it
     * @throws {InvalidDirectoryPathException} If the project folder  is not a directory
     * @throws {OSNotSupportedException} When run this processes with not supported operative system
     */
    GitManager.prototype.getCommitterEmail = function () {
        var _this = this;
        this.projectFolder = Validator.validateFolderPath(this.projectFolder);
        return new Promise(function (resolve, reject) {
            var process = core_1.ProcessFactory.gitGetConfig(_this.projectFolder, 'committer.email');
            core_1.ProcessHandler.runProcess(process).then(function (result) {
                resolve(result);
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    /**
     * Method to fetch repository data into your local Salesforce gitr project
     *
     * @returns {Promise<void>} Return an empty promise when finish fetch process
     *
     * @throws {WrongDirectoryPathException} If the project folder is not a String or can't convert to absolute path
     * @throws {DirectoryNotFoundException} If the project folder  not exists or not have access to it
     * @throws {InvalidDirectoryPathException} If the project folder  is not a directory
     * @throws {OSNotSupportedException} When run this processes with not supported operative system
     */
    GitManager.prototype.fetch = function () {
        var _this = this;
        this.projectFolder = Validator.validateFolderPath(this.projectFolder);
        return new Promise(function (resolve, reject) {
            var process = core_1.ProcessFactory.gitFetch(_this.projectFolder);
            core_1.ProcessHandler.runProcess(process).then(function () {
                resolve();
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    /**
     * Method to get branch names from the Salesforce git repository
     *
     * @returns {Promise<GitBranch[]>} Returns a promise with an object list with branch name and active status
     *
     * @throws {WrongDirectoryPathException} If the project folder is not a String or can't convert to absolute path
     * @throws {DirectoryNotFoundException} If the project folder  not exists or not have access to it
     * @throws {InvalidDirectoryPathException} If the project folder  is not a directory
     * @throws {OSNotSupportedException} When run this processes with not supported operative system
     */
    GitManager.prototype.getBranches = function () {
        var _this = this;
        this.projectFolder = Validator.validateFolderPath(this.projectFolder);
        return new Promise(function (resolve, reject) {
            var process = core_1.ProcessFactory.gitGetBranches(_this.projectFolder);
            core_1.ProcessHandler.runProcess(process).then(function (response) {
                var branches = [];
                for (var _i = 0, _a = response.split('\n'); _i < _a.length; _i++) {
                    var logLine = _a[_i];
                    var branch = logLine.trim();
                    if (branch.length > 0) {
                        var active = branch.startsWith('*');
                        if (active) {
                            branch = branch.substring(1).trim();
                        }
                        branches.push({
                            name: branch,
                            active: active
                        });
                    }
                }
                resolve(branches);
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    /**
     * Method to list all git tags. You can also sort by field
     * @param {string} [sortField] Field to sort the result (Optional)
     *
     * @returns {Promise<GitTag[]>} Returns a promise with a list of tags
     *
     * @throws {WrongDirectoryPathException} If the project folder is not a String or can't convert to absolute path
     * @throws {DirectoryNotFoundException} If the project folder  not exists or not have access to it
     * @throws {InvalidDirectoryPathException} If the project folder  is not a directory
     * @throws {OSNotSupportedException} When run this processes with not supported operative system
     */
    GitManager.prototype.getTags = function (sortField) {
        var _this = this;
        this.projectFolder = Validator.validateFolderPath(this.projectFolder);
        return new Promise(function (resolve, reject) {
            var process = core_1.ProcessFactory.gitGetTags(_this.projectFolder, sortField);
            core_1.ProcessHandler.runProcess(process).then(function (response) {
                var tags = [];
                for (var _i = 0, _a = response.split('\n'); _i < _a.length; _i++) {
                    var logLine = _a[_i];
                    var tag = logLine.trim();
                    if (tag.length > 0) {
                        var splits = tag.split(' ');
                        tags.push({
                            name: splits.length[0].trim(),
                            description: (splits.length > 0) ? splits.length[1].trim() : undefined
                        });
                    }
                }
                resolve(tags);
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    /**
     * Method to get the commits data from the Salesforce git repository
     *
     * @returns {Promise<Commit[]>} Returns a promise with list of Commit objects
     *
     * @throws {WrongDirectoryPathException} If the project folder is not a String or can't convert to absolute path
     * @throws {DirectoryNotFoundException} If the project folder  not exists or not have access to it
     * @throws {InvalidDirectoryPathException} If the project folder  is not a directory
     * @throws {OSNotSupportedException} When run this processes with not supported operative system
     */
    GitManager.prototype.getCommits = function () {
        var _this = this;
        this.projectFolder = Validator.validateFolderPath(this.projectFolder);
        return new Promise(function (resolve, reject) {
            var process = core_1.ProcessFactory.gitLog(_this.projectFolder);
            core_1.ProcessHandler.runProcess(process).then(function (response) {
                var commits = [];
                var commit;
                for (var _i = 0, _a = response.split('\n'); _i < _a.length; _i++) {
                    var logLine = _a[_i];
                    if (logLine.startsWith('commit')) {
                        var words = logLine.split(' ');
                        if (commit) {
                            commits.push(commit);
                        }
                        commit = new core_1.Commit(words[1]);
                    }
                    else if (logLine.startsWith('Author:') && commit) {
                        var words = logLine.split(' ');
                        commit.author = logLine.substring(logLine.indexOf(':') + 1, logLine.indexOf('<')).trim();
                        commit.authorEmail = words[words.length - 1].replace('<', '').replace('>', '');
                    }
                    else if (logLine.startsWith('Date:') && commit) {
                        var words = logLine.split(' ');
                        var commitDate = new core_1.CommitDate(words[3], words[4], words[5], words[6], words[7], words[8], logLine.substring(logLine.indexOf(':') + 1).trim());
                        commit.date = commitDate;
                    }
                    else if (commit && commit.date && !commit.title) {
                        if (logLine.trim().length > 0) {
                            commit.title = logLine.trim();
                        }
                    }
                    else if (commit && commit.title) {
                        if (logLine.trim().length === 0 && !commit.message) {
                            continue;
                        }
                        commit.message += logLine.trim() + '\n';
                    }
                }
                if (commit) {
                    commits.push(commit);
                }
                commits.sort(function (commitA, commitB) {
                    if (commitA.date && commitA.date.dateStr && commitB.date && commitB.date.dateStr) {
                        var dateA = new Date(commitA.date.dateStr);
                        var dateB = new Date(commitB.date.dateStr);
                        return dateA.valueOf() - dateB.valueOf();
                    }
                    return 0;
                });
                resolve(commits);
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    /**
     * Method to get a list of GitDiff object with the differences between two branches, commits, tags...
     * @param {string} source Source branch name, tag or commit for get diffs
     * @param {string} [target] Target branch name, tag or commit for get diffs
     *
     * @returns {Promise<GitDiff[]>} Returns a promise with GitDiffs objects list with the difference data
     *
     * @throws {WrongDirectoryPathException} If the project folder is not a String or can't convert to absolute path
     * @throws {DirectoryNotFoundException} If the project folder  not exists or not have access to it
     * @throws {InvalidDirectoryPathException} If the project folder  is not a directory
     * @throws {OSNotSupportedException} When run this processes with not supported operative system
     * @throws {DataRequiredException} If source is not provided
     */
    GitManager.prototype.getDiffs = function (source, target) {
        var _this = this;
        this.projectFolder = Validator.validateFolderPath(this.projectFolder);
        return new Promise(function (resolve, reject) {
            var process = core_1.ProcessFactory.gitDiff(_this.projectFolder, source, target);
            core_1.ProcessHandler.runProcess(process).then(function (response) {
                resolve(processDiffOut(response));
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    return GitManager;
}());
exports.GitManager = GitManager;
function processDiffOut(stdOut) {
    var lines = stdOut.split('\n');
    var diffs = [];
    var diff;
    var startChanges = false;
    var aPathStart = '--- a/';
    var bPathStart = '+++ b/';
    var adevnull = '--- /dev/null';
    var bdevnull = '+++ /dev/null';
    var binaryFile = 'Binary files';
    var changesAdded = false;
    var removeChangesAdded = false;
    var extraDiff;
    for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
        var diffLine = lines_1[_i];
        var tmpLine = StrUtils.replace(diffLine, ',', '');
        if (tmpLine.indexOf('diff') !== -1 && tmpLine.indexOf('--git') !== -1) {
            startChanges = false;
            if (diff && diff.path && diff.path.indexOf('force-app') !== -1) {
                if (extraDiff) {
                    diff.mode = 'deleted file';
                }
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
            diff = new core_1.GitDiff();
            changesAdded = false;
            removeChangesAdded = false;
        }
        else if (tmpLine.startsWith(aPathStart) && diff) {
            var pathTmp = tmpLine.substring(aPathStart.length).trim();
            if (pathTmp !== '/dev/null' && pathTmp.length > 0) {
                diff.path = StrUtils.replace(pathTmp, ',', '');
            }
        }
        else if (tmpLine.startsWith(adevnull) && diff) {
            var pathTmp = tmpLine.substring(adevnull.length).trim();
            if (pathTmp !== '/dev/null' && pathTmp.length > 0) {
                diff.path = StrUtils.replace(pathTmp, ',', '');
            }
        }
        else if (tmpLine.startsWith(bPathStart) && diff) {
            var pathTmp = tmpLine.substring(bPathStart.length).trim();
            startChanges = true;
            if (diff.path && diff.path !== pathTmp && pathTmp !== '/dev/null' && pathTmp.length > 0) {
                extraDiff = new core_1.GitDiff(StrUtils.replace(pathTmp, ',', ''), 'new file');
            }
            else if (!diff.path && pathTmp !== '/dev/null' && pathTmp.length > 0) {
                diff.path = StrUtils.replace(pathTmp, ',', '');
            }
            else if (pathTmp === '/dev/null' || pathTmp.length === 0) {
                diff.mode = 'deleted file';
            }
        }
        else if (tmpLine.startsWith(bdevnull) && diff) {
            startChanges = true;
            var pathTmp = tmpLine.substring(bdevnull.length).trim();
            if (pathTmp !== '/dev/null' && pathTmp.length > 0) {
                diff.path = StrUtils.replace(pathTmp, ',', '');
            }
        }
        else if (tmpLine.startsWith(binaryFile) && diff) {
            var pathTmp = tmpLine.substring(binaryFile.length).trim();
            var splits = pathTmp.split(' and ');
            if (splits.length > 1) {
                if (splits[0].indexOf('/dev/null') === -1) {
                    pathTmp = splits[0].substring('a/'.length);
                }
                else {
                    pathTmp = splits[1].substring('b/'.length);
                }
                if (pathTmp && !diff.path) {
                    diff.path = pathTmp;
                }
            }
        }
        else if (tmpLine.startsWith('new file mode') && diff) {
            diff.mode = 'new file';
        }
        else if (tmpLine.startsWith('deleted file mode') && diff) {
            diff.mode = 'deleted file';
        }
        else if (startChanges && diff) {
            if (tmpLine.startsWith('-')) {
                diff.removeChanges.push(diffLine.substring(1));
                if (extraDiff) {
                    extraDiff.removeChanges.push(diffLine.substring(1));
                }
                removeChangesAdded = true;
            }
            else if (tmpLine.startsWith('+')) {
                changesAdded = true;
                if (extraDiff) {
                    extraDiff.addChanges.push(diffLine.substring(1));
                }
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
    if (diff && diff.path && diff.path.indexOf('force-app') !== -1) {
        diffs.push(diff);
    }
    return diffs;
}
//# sourceMappingURL=index.js.map