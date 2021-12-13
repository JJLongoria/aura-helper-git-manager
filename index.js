const { ProcessHandler, ProcessFactory } = require('@aurahelper/core').ProcessManager;
const { Commit, CommitDate, GitDiff } = require('@aurahelper/core').Types;
const { StrUtils, Validator } = require('@aurahelper/core').CoreUtils;

class GitManager {
     * @param {String} [projectFolder] Path to the project under a git repository
    constructor(projectFolder) {
        this.projectFolder = projectFolder;
     * @param {String} projectFolder Path to the project under a git repository 
    setProjectFolder(projectFolder) {
     * @returns {Promise<String>} Return a String promise with the Git User Name
    getUserName() {
        return new Promise((resolve, reject) => {
     * @returns {Promise<String>} Return a String promise with the Git User Email
    getUserEmail() {
        return new Promise((resolve, reject) => {
     * @returns {Promise<String>} Return a String promise with the Git Author Name
    getAuthorName() {
        return new Promise((resolve, reject) => {
     * @returns {Promise<String>} Return a String promise with the Git Author Email
    getAuthorEmail() {
        return new Promise((resolve, reject) => {
     * @returns {Promise<String>} Return a String promise with the Git Committer Name
    getCommitterName() {
        return new Promise((resolve, reject) => {
     * @returns {Promise<String>} Return a String promise with the Git Committer Email
    getCommitterEmail() {
        return new Promise((resolve, reject) => {
     * @returns {Promise<any>} Return an empty promise when finish fetch process
    fetch() {
        return new Promise((resolve, reject) => {
     * @returns {Promise<Array<Object>>} Returns a promise with an object list with branch name and active status
    getBranches() {
        return new Promise((resolve, reject) => {
            const process = ProcessFactory.gitGetBranches(this.projectFolder)
                        if (active)
     * @param {String} [sortField] Field to sort the result (Optional)
     * @returns {Promise<Array<Object>>} Returns a promise with a list of tags
    getTags(sortField) {
            const process = ProcessFactory.gitGetTags(this.projectFolder, sortField)
     * @returns {Promise<Array<Commit>>} Returns a promise with list of Commit objects
    getCommits() {
        return new Promise((resolve, reject) => {
            const process = ProcessFactory.gitLog(this.projectFolder)
                        if (commit)
                    } else if (logLine.startsWith('Author:')) {
                    } else if (logLine.startsWith('Date:')) {
                        if (logLine.trim().length > 0)
                        if (logLine.trim().length === 0 && !commit.message)
                if (commit)
                    let dateA = new Date(commitA.date.dateStr);
                    let dateB = new Date(commitB.date.dateStr);
                    return dateA.valueOf() - dateB.valueOf();
     * @param {String} source Source branch name, tag or commit for get diffs
     * @param {String} [target] Target branch name, tag or commit for get diffs
     * @returns {Promise<Array<GitDiff>>} Returns a promise with GitDiffs objects list with the difference data
    getDiffs(source, target) {
        return new Promise((resolve, reject) => {
            const process = ProcessFactory.gitDiff(this.projectFolder, source, target)
module.exports = GitManager;
function processDiffOut(stdOut) {
    let diffs = [];
                if (extraDiff)
        } else if (tmpLine.startsWith(aPathStart)) {
            if (pathTmp !== '/dev/null' && pathTmp.length > 0)
        } else if (tmpLine.startsWith(adevnull)) {
            if (pathTmp !== '/dev/null' && pathTmp.length > 0)
        } else if (tmpLine.startsWith(bPathStart)) {
            } else if (pathTmp === '/dev/null' || pathTmp.length == 0) {
        } else if (tmpLine.startsWith(bdevnull)) {
            if (pathTmp !== '/dev/null' && pathTmp.length > 0)
        } else if (tmpLine.startsWith(binaryFile)) {
        } else if (tmpLine.startsWith('new file mode')) {
        } else if (tmpLine.startsWith('deleted file mode')) {
        } else if (startChanges) {
                if (extraDiff)
                if (extraDiff)
    if (diff && diff.path && diff.path.indexOf('force-app') !== -1)