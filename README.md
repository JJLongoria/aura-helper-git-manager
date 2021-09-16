# **Aura Helper Git Manager Module**
The Git Manager Module has an util methods to handle and manage git repository and has features to use in Aura Helper Framework. Yo can fetch data, list branches, get commits or get diffs from two branches, tags, commits...

You can use Aura Helper Metadata Factory Module [@ah/metadata-factory](https://github.com/JJLongoria/aura-helper-metadata-factory) to create a Metadata JSON Object from the Git diffs result, to create a package with Aura Helper Package Generator Module [@ah/package-generator](https://github.com/JJLongoria/aura-helper-package-generator) to create de package and destructive files from git changes to deploy or delete from your org. If you want, can use too the Aura Helper Ignore Module [@ah/ignore](https://github.com/JJLongoria/aura-helper-ignore) to avoid deploy or delete some metadata types. With this workflow, refactor code, work with git and teams or implement Continuous Integration among other development processes and tasks are easy.

# [**GitManager Class**](#gitmanager-class)
Class with util methods to handle and manage git repository and has features to use in Aura Helper Framework. Yo can fetch data, list branches, get commits or get diffs from two branches, tags, commits...

Can cobine this module with @ah/metadata-factory, @ah/package-generator and @ah/ignore to refactor code, work with git and teams or implement Continuous Integration among other development processes and tasks easy.

### *Class Members*
- [**Fields**](#fields)

- [**Constructors**](#constructors)

- [**Methods**](#methods)

</br>

# [**Fields**](#fields)
The fields that start with _ are for internal use only (Does not modify this fields to a correct GitManager work). To the rest of fields, setter methods are recommended instead modify fields.


### [**projectFolder**](#gitmanager-fields-projectfolder)
Path to the project under a git repository 
- String

</br>

# [**Constructors**](#constructors)

## [**constructor(projectFolder)**](#gitmanager-class-constructors-construct)
Constructor to instance a new GitManager object. All parameters are optional and you can use the setters methods to set the values when you want.

### **Parameters:**
  - **projectFolder**: Path to the ignore file
    - String

</br>

# [**Methods**](#gitmanager-class-methods)

  - [**setProjectFolder(projectFolder)**](#setprojectpfolderprojectfolder)

    Method to set the git project folder path

  - [**getUserName()**](#getusername)

    Method to get the User Name set on git config

  - [**getUserEmail()**](#getuseremail)

    Method to get the User Email set on git config

  - [**getAuthorName()**](#getauthorname)

    Method to get the Author Name set on git config

  - [**getAuthorEmail()**](#getauthoremail)

    Method to get the Author Email set on git config

  - [**getCommitterName()**](#getcommittername)

    Method to get the Committer Name set on git config

  - [**getCommitterEmail()**](#getcommitteremail)

    Method to get the Committer Email set on git config

  - [**fetch()**](#fetch)

    Method to fetch repository data into your local Salesforce gitr project

  - [**getBranches()**](#getbranches)

    Method to get branch names from the Salesforce git repository

  - [**getTags(sortField)**](#gettagssortfield)

    Method to list all git tags. You can also sort by field

  - [**getCommits()**](#getcommits)

    Method to get the commits data from the Salesforce git repository

  - [**getDiffs(source, target)**](#getdiffssource-target)

    Method to get a list of GitDiff object with the differences between two branches, commits, tags...

---

## [**setProjectFolder(projectFolder)**](#setprojectfolderprojectfolder)
Method to set the git project folder path

### **Return:**
Return the GitManager instance
- GitManager

### **Examples:**
**Set Project folder**

    const GitManager = require('@ah/git-manager');

    const gitManager = new GitManager();
    gitManager.setProjectFolder('path/to/project/root');

---

## [**getUserName()**](#getusername)
Method to get the User Name set on git config

### **Return:**
Return a String promise with the Git User Name
- Promise\<String\>

### **Throws:**
This method can throw the next exceptions:

- **WrongDirectoryPathException**: If the project folder is not a String or can't convert to absolute path
- **DirectoryNotFoundException**: If the project folder not exists or not have access to it
- **InvalidDirectoryPathException**: If the project folder is not a directory
- **OSNotSupportedException**: When run this processes with not supported operative system

### **Examples:**
**Get git user name**

    const GitManager = require('@ah/git-manager');
    
    const gitManager = new GitManager('path/to/project/root');

    gitManager.getUserName().then((username) => {
        console.log(username);
    }).catch((error) => {
        // handle error
    });
---

## [**getUserEmail()**](#getuseremail)
Method to get the User Email set on git config

### **Return:**
Return a String promise with the Git User Email
- Promise\<String\>

### **Throws:**
This method can throw the next exceptions:

- **WrongDirectoryPathException**: If the project folder is not a String or can't convert to absolute path
- **DirectoryNotFoundException**: If the project folder not exists or not have access to it
- **InvalidDirectoryPathException**: If the project folder is not a directory
- **OSNotSupportedException**: When run this processes with not supported operative system

### **Examples:**
**Get git user email**

    const GitManager = require('@ah/git-manager');
    
    const gitManager = new GitManager('path/to/project/root');

    gitManager.getUserEmail().then((userEmail) => {
        console.log(userEmail);
    }).catch((error) => {
        // handle error
    });
---

## [**getAuthorName()**](#getauthorname)
Method to get the Author Name set on git config

### **Return:**
Return a String promise with the Git Author Name
- Promise\<String\>

### **Throws:**
This method can throw the next exceptions:

- **WrongDirectoryPathException**: If the project folder is not a String or can't convert to absolute path
- **DirectoryNotFoundException**: If the project folder not exists or not have access to it
- **InvalidDirectoryPathException**: If the project folder is not a directory
- **OSNotSupportedException**: When run this processes with not supported operative system

### **Examples:**
**Get git author name**

    const GitManager = require('@ah/git-manager');
    
    const gitManager = new GitManager('path/to/project/root');

    gitManager.getAuthorName().then((authorName) => {
        console.log(authorName);
    }).catch((error) => {
        // handle error
    });
---

## [**getAuthorEmail()**](#getauthoremail)
Method to get the Author Email set on git config

### **Return:**
Return a String promise with the Git Author Email
- Promise\<String\>

### **Throws:**
This method can throw the next exceptions:

- **WrongDirectoryPathException**: If the project folder is not a String or can't convert to absolute path
- **DirectoryNotFoundException**: If the project folder not exists or not have access to it
- **InvalidDirectoryPathException**: If the project folder is not a directory
- **OSNotSupportedException**: When run this processes with not supported operative system

### **Examples:**
**Get git author email**

    const GitManager = require('@ah/git-manager');

    const gitManager = new GitManager('path/to/project/root');

    gitManager.getAuthorEmail().then((authorEmail) => {
        console.log(authorEmail);
    }).catch((error) => {
        // handle error
    });
---

## [**getCommitterName()**](#getcommittername)
Method to get the Committer Name set on git config

### **Return:**
Return a String promise with the Git Committer Name
- Promise\<String\>

### **Throws:**
This method can throw the next exceptions:

- **WrongDirectoryPathException**: If the project folder is not a String or can't convert to absolute path
- **DirectoryNotFoundException**: If the project folder not exists or not have access to it
- **InvalidDirectoryPathException**: If the project folder is not a directory
- **OSNotSupportedException**: When run this processes with not supported operative system

### **Examples:**
**Get git committer name**

    const GitManager = require('@ah/git-manager');

    const gitManager = new GitManager('path/to/project/root');
    
    gitManager.getCommitterName().then((committerName) => {
        console.log(committerName);
    }).catch((error) => {
        // handle error
    });
---

## [**getCommitterEmail()**](#getcommitteremail)
Method to get the Committer Email set on git config

### **Return:**
Return a String promise with the Git Committer Email
- Promise\<String\>

### **Throws:**
This method can throw the next exceptions:

- **WrongDirectoryPathException**: If the project folder is not a String or can't convert to absolute path
- **DirectoryNotFoundException**: If the project folder not exists or not have access to it
- **InvalidDirectoryPathException**: If the project folder is not a directory
- **OSNotSupportedException**: When run this processes with not supported operative system

### **Examples:**
**Get git committer email**

    const GitManager = require('@ah/git-manager');

    const gitManager = new GitManager('path/to/project/root');

    gitManager.getCommitterEmail().then((committerEmail) => {
        console.log(committerEmail);
    }).catch((error) => {
        // handle error
    });
---

---
## [**fetch()**](#fetch)
Method to fetch repository data into your local Salesforce gitr project

### **Return:**
Return an empty promise when finish fetch process
- Promise\<any\>

### **Throws:**
This method can throw the next exceptions:

- **WrongDirectoryPathException**: If the project folder is not a String or can't convert to absolute path
- **DirectoryNotFoundException**: If the project folder not exists or not have access to it
- **InvalidDirectoryPathException**: If the project folder is not a directory
- **OSNotSupportedException**: When run this processes with not supported operative system

### **Examples:**
**Fetch data to the local project**

    const GitManager = require('@ah/git-manager');

    const gitManager = new GitManager('path/to/project/root');

    gitManager.fetch().then(() => {
        // data retrieved
    }).catch((error) => {
        // handle error
    });
---

## [**getBranches()**](#getbranches)
Method to get branch names from the Salesforce git repository

### **Return:**
Returns a promise with an object list with branch name and active status
- Promise\<Array\<Object\>\>

### **Throws:**
This method can throw the next exceptions:

- **WrongDirectoryPathException**: If the project folder is not a String or can't convert to absolute path
- **DirectoryNotFoundException**: If the project folder not exists or not have access to it
- **InvalidDirectoryPathException**: If the project folder is not a directory
- **OSNotSupportedException**: When run this processes with not supported operative system

### **Examples:**
**Get branches from git project**

    const GitManager = require('@ah/git-manager');

    const gitManager = new GitManager('path/to/project/root');

    gitManager.getBranches().then((branches) => {
        console.log(branches);
        // [{ name: 'master', active: false }, { name: 'branch1', active: true }, {...}]
    }).catch((error) => {
        // handle error
    });
---

## [**getTags(sortField)**](#getTagssortfield)
Method to list all git tags. You can also sort by field

### **Parameters:**
  - **sortField**: Field to sort the result (Optional)
    - String

### **Return:**
Returns a promise with a list of tags
- Promise\<Array\<Object\>\>

### **Throws:**
This method can throw the next exceptions:

- **WrongDirectoryPathException**: If the project folder is not a String or can't convert to absolute path
- **DirectoryNotFoundException**: If the project folder not exists or not have access to it
- **InvalidDirectoryPathException**: If the project folder is not a directory
- **OSNotSupportedException**: When run this processes with not supported operative system

### **Examples:**
**Get tags from git project**

    const GitManager = require('@ah/git-manager');

    const gitManager = new GitManager('path/to/project/root');

    gitManager.getTags().then((tags) => {
        console.log(tags);
        // [{ name: 'v.1.0.0', description: 'tag description' }, { name: 'v.1.0.1', description: 'tag description' }, {...}]
    }).catch((error) => {
        // handle error
    });

---
## [**getCommits()**](#getcommits)
Method to get the commits data from the Salesforce git repository

### **Return:**
Returns a promise with list of Commit objects
- Promise\<Array\<Commit\>\>

### **Throws:**
This method can throw the next exceptions:

- **WrongDirectoryPathException**: If the project folder is not a String or can't convert to absolute path
- **DirectoryNotFoundException**: If the project folder not exists or not have access to it
- **InvalidDirectoryPathException**: If the project folder is not a directory
- **OSNotSupportedException**: When run this processes with not supported operative system

### **Examples:**
**Get commits data from git project**

    const GitManager = require('@ah/git-manager');

    const gitManager = new GitManager('path/to/project/root');

    gitManager.getCommits().then((commits) => {
        for(const commit of commits){
            console.log(commit.pointer);
            console.log(commit.author);
            console.log(commit.authorEmail);
            console.log(commit.date.dayName);
            console.log(commit.date.monthName);
            console.log(commit.date.day);
            console.log(commit.date.time);
            console.log(commit.date.year);
            console.log(commit.date.timeoffset);
            console.log(commit.date.dateStr);
            console.log(commit.title);
            console.log(commit.message);
        }
    }).catch((error) => {
        // handle error
    });
---

## [**getDiffs(source, target)**](#getdiffssource-target)
Method to get a list of GitDiff object with the differences between two branches, commits, tags...

### **Parameters:**
  - **source**: Source branch name, tag or commit for get diffs
    - String
  - **target**: Target branch name, tag or commit for get diffs
    - String

### **Return:**
Returns a promise with GitDiffs objects list with the difference data
- Promise\<Array\<GitDiff\>\>

### **Throws:**
This method can throw the next exceptions:

- **WrongDirectoryPathException**: If the project folder is not a String or can't convert to absolute path
- **DirectoryNotFoundException**: If the project folder not exists or not have access to it
- **InvalidDirectoryPathException**: If the project folder is not a directory
- **OSNotSupportedException**: When run this processes with not supported operative system
- **DataRequiredException**: If source is not provided

### **Examples:**
**Get diffs from two branches**

    const GitManager = require('@ah/git-manager');

    const gitManager = new GitManager('path/to/project/root');

    gitManager.getDiffs('branch1', 'master').then((diffs) => {
        for(const diff of diffs){
            console.log(diff.path);
            console.log(diff.mode);
            console.log(diff.addChanges); // Array with every added line per file
            console.log(diff.removeChanges);  // Array with every removed line per file
        }
    }).catch((error) => {
        // handle error
    });