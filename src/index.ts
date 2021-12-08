import { Commit, CommitDate, CoreUtils, GitBranch, GitDiff, GitTag, ProcessFactory, ProcessHandler } from "@aurahelper/core";
const Validator = CoreUtils.Validator;
const StrUtils = CoreUtils.StrUtils;
export class GitManager {

    projectFolder: string;
     * @param {string} [projectFolder] Path to the project under a git repository
    constructor(projectFolder?: string) {
        this.projectFolder = projectFolder || './';
     * @param {string} projectFolder Path to the project under a git repository 
    setProjectFolder(projectFolder: string): GitManager {
     * @returns {Promise<string>} Return a String promise with the Git User Name
    getUserName(): Promise<string> {
        return new Promise<string>((resolve, reject) => {
     * @returns {Promise<string>} Return a String promise with the Git User Email
    getUserEmail(): Promise<string> {
        return new Promise<string>((resolve, reject) => {
     * @returns {Promise<string>} Return a String promise with the Git Author Name
    getAuthorName(): Promise<string> {
        return new Promise<string>((resolve, reject) => {
     * @returns {Promise<string>} Return a String promise with the Git Author Email
    getAuthorEmail(): Promise<string> {
        return new Promise<string>((resolve, reject) => {
     * @returns {Promise<string>} Return a String promise with the Git Committer Name
    getCommitterName(): Promise<string> {
        return new Promise<string>((resolve, reject) => {
     * @returns {Promise<string>} Return a String promise with the Git Committer Email
    getCommitterEmail(): Promise<string> {
        return new Promise<string>((resolve, reject) => {
     * @returns {Promise<void>} Return an empty promise when finish fetch process
    fetch(): Promise<void> {
        return new Promise<void>((resolve, reject) => {
     * @returns {Promise<GitBranch[]>} Returns a promise with an object list with branch name and active status
    getBranches(): Promise<GitBranch[]> {
        return new Promise<GitBranch[]>((resolve, reject) => {
            const process = ProcessFactory.gitGetBranches(this.projectFolder);
                        if (active) {
                        }
     * @param {string} [sortField] Field to sort the result (Optional)
     * @returns {Promise<GitTag[]>} Returns a promise with a list of tags
    getTags(sortField?: string): Promise<GitTag[]> {
            const process = ProcessFactory.gitGetTags(this.projectFolder, sortField);
     * @returns {Promise<Commit[]>} Returns a promise with list of Commit objects
    getCommits(): Promise<Commit[]> {
        return new Promise<Commit[]>((resolve, reject) => {
            const process = ProcessFactory.gitLog(this.projectFolder);
                        if (commit) {
                        }
                    } else if (logLine.startsWith('Author:') && commit) {
                    } else if (logLine.startsWith('Date:') && commit) {
                        if (logLine.trim().length > 0) {
                        }
                        if (logLine.trim().length === 0 && !commit.message) {
                        }
                if (commit) {
                }
                    if (commitA.date && commitA.date.dateStr && commitB.date && commitB.date.dateStr) {
                        let dateA = new Date(commitA.date.dateStr);
                        let dateB = new Date(commitB.date.dateStr);
                        return dateA.valueOf() - dateB.valueOf();
                    }
                    return 0;
     * @param {string} source Source branch name, tag or commit for get diffs
     * @param {string} [target] Target branch name, tag or commit for get diffs
     * @returns {Promise<GitDiff[]>} Returns a promise with GitDiffs objects list with the difference data
    getDiffs(source: string, target?: string): Promise<GitDiff[]> {
        return new Promise<GitDiff[]>((resolve, reject) => {
            const process = ProcessFactory.gitDiff(this.projectFolder, source, target);
function processDiffOut(stdOut: string): GitDiff[] {
    let diffs: GitDiff[] = [];
                if (extraDiff) {
                }
        } else if (tmpLine.startsWith(aPathStart) && diff) {
            if (pathTmp !== '/dev/null' && pathTmp.length > 0) {
            }
        } else if (tmpLine.startsWith(adevnull) && diff) {
            if (pathTmp !== '/dev/null' && pathTmp.length > 0) {
            }
        } else if (tmpLine.startsWith(bPathStart) && diff) {
            } else if (pathTmp === '/dev/null' || pathTmp.length === 0) {
        } else if (tmpLine.startsWith(bdevnull) && diff) {
            if (pathTmp !== '/dev/null' && pathTmp.length > 0) {
            }
        } else if (tmpLine.startsWith(binaryFile) && diff) {
        } else if (tmpLine.startsWith('new file mode') && diff) {
        } else if (tmpLine.startsWith('deleted file mode') && diff) {
        } else if (startChanges && diff) {
                if (extraDiff) {
                }
                if (extraDiff) {
                }
    if (diff && diff.path && diff.path.indexOf('force-app') !== -1) {
    }