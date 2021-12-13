import { Commit, GitBranch, GitDiff, GitTag } from "@aurahelper/core";
/**
 * Class with util methods to handle and manage git repository and has features to use in Aura Helper Framework. Yo can fetch data, list branches, get commits or get diffs from two branches, tags, commits...
 *
 * Can cobine this module with @ah/metadata-factory, @ah/package-generator and @ah/ignore to refactor code, work with git and teams or implement Continuous Integration among other development processes and tasks easy.
 */
export declare class GitManager {
    projectFolder: string;
    /**
     * Constructor to instance a new GitManager object
     *
     * @param {string} [projectFolder] Path to the project under a git repository
     */
    constructor(projectFolder?: string);
    /**
     * Method to set the git project folder path
     * @param {string} projectFolder Path to the project under a git repository
     *
     * @returns {GitManager} Return the GitManager instance
     */
    setProjectFolder(projectFolder: string): GitManager;
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
    getUserName(): Promise<string>;
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
    getUserEmail(): Promise<string>;
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
    getAuthorName(): Promise<string>;
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
    getAuthorEmail(): Promise<string>;
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
    getCommitterName(): Promise<string>;
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
    getCommitterEmail(): Promise<string>;
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
    fetch(): Promise<void>;
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
    getBranches(): Promise<GitBranch[]>;
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
    getTags(sortField?: string): Promise<GitTag[]>;
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
    getCommits(): Promise<Commit[]>;
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
    getDiffs(source: string, target?: string): Promise<GitDiff[]>;
}
