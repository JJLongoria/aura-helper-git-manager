# **Aura Helper Git Manager Module**
The Git Manager Module has an util methods to handle and manage git repository and has features to use in Aura Helper Framework. Yo can fetch data, list branches, get commits or get diffs from two branches, tags, commits...

You can use Aura Helper Metadata Factory Module [@ah/metadata-factory](https://github.com/JJLongoria/aura-helper-metadata-factory) to create a Metadata JSON Object from the Git diffs result, to create a package with Aura Helper Package Generator Module [@ah/package-generator](https://github.com/JJLongoria/aura-helper-package-generator) to create de package and destructive files from git changes to deploy or delete from your org. If you want, can use too the Aura Helper Ignore Module [@ah/ignore](https://github.com/JJLongoria/aura-helper-ignore) to avoid deploy or delete some metadata types. With this workflow, refactor code, work with git and teams or implement Continuous Integration among other development processes and tasks are easy.

# [**GitManager Class**](#gitmanager-class)
Class with util methods to handle and manage git repository and has features to use in Aura Helper Framework. Yo can fetch data, list branches, get commits or get diffs from two branches, tags, commits...

Can cobine this module with @ah/metadata-factory, @ah/package-generator and @ah/ignore to refactor code, work with git and teams or implement Continuous Integration among other development processes and tasks easy.

# [**Methods**](#gitmanager-class-methods)

  - [**getUserName(projectFolder)**](#getusernameprojectfolder)

    Method to get the User Name set on git config

  - [**getUserEmail(projectFolder)**](#getuseremailprojectfolder)

    Method to get the User Email set on git config

  - [**getAuthorName(projectFolder)**](#getauthornameprojectfolder)

    Method to get the Author Name set on git config

  - [**getAuthorEmail(projectFolder)**](#getauthoremailprojectfolder)

    Method to get the Author Email set on git config

  - [**getCommitterName(projectFolder)**](#getcommitternameprojectfolder)

    Method to get the Committer Name set on git config

  - [**getCommitterEmail(projectFolder)**](#getcommitteremailprojectfolder)

    Method to get the Committer Email set on git config

  - [**fetch(projectFolder)**](#fetchprojectfolder)

    Method to fetch repository data into your local Salesforce gitr project

  - [**getBranches(projectFolder)**](#getbranchesprojectfolder)

    Method to get branch names from the Salesforce git repository

  - [**getCommits(projectFolder)**](#getcommitsprojectfolder)

    Method to get the commits data from the Salesforce git repository

  - [**getDiffs(projectFolder, source, target)**](#getdiffsprojectfolder-source-target)

    Method to get a list of GitDiff object with the differences between two branches, commits, tags...

---
## [**getUserName(projectFolder)**](#getusernameprojectfolder)
Method to get the User Name set on git config

### **Parameters:**
  - **projectFolder**: Path to the Salesforce project under git repository
    - String

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

    GitManager.getUserName('path/to/project/root').then((username) => {
        console.log(username);
    }).catch((error) => {
        // handle error
    });
---

## [**getUserEmail(projectFolder)**](#getuseremailprojectfolder)
Method to get the User Email set on git config

### **Parameters:**
  - **projectFolder**: Path to the Salesforce project under git repository
    - String

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

    GitManager.getUserEmail('path/to/project/root').then((userEmail) => {
        console.log(userEmail);
    }).catch((error) => {
        // handle error
    });
---

## [**getAuthorName(projectFolder)**](#getauthornameprojectfolder)
Method to get the Author Name set on git config

### **Parameters:**
  - **projectFolder**: Path to the Salesforce project under git repository
    - String

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

    GitManager.getAuthorName('path/to/project/root').then((authorName) => {
        console.log(authorName);
    }).catch((error) => {
        // handle error
    });
---

## [**getAuthorEmail(projectFolder)**](#getauthoremailprojectfolder)
Method to get the Author Email set on git config

### **Parameters:**
  - **projectFolder**: Path to the Salesforce project under git repository
    - String

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

    GitManager.getAuthorEmail('path/to/project/root').then((authorEmail) => {
        console.log(authorEmail);
    }).catch((error) => {
        // handle error
    });
---

## [**getCommitterName(projectFolder)**](#getcommitternameprojectfolder)
Method to get the Committer Name set on git config

### **Parameters:**
  - **projectFolder**: Path to the Salesforce project under git repository
    - String

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

    GitManager.getCommitterName('path/to/project/root').then((committerName) => {
        console.log(committerName);
    }).catch((error) => {
        // handle error
    });
---

## [**getCommitterEmail(projectFolder)**](#getcommitteremailprojectfolder)
Method to get the Committer Email set on git config

### **Parameters:**
  - **projectFolder**: Path to the Salesforce project under git repository
    - String

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

    GitManager.getCommitterEmail('path/to/project/root').then((committerEmail) => {
        console.log(committerEmail);
    }).catch((error) => {
        // handle error
    });
---

---
## [**fetch(projectFolder)**](#fetchprojectfolder)
Method to fetch repository data into your local Salesforce gitr project

### **Parameters:**
  - **projectFolder**: Path to the Salesforce project under git repository
    - String

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

    GitManager.fetch('path/to/project/root').then(() => {
        // data retrieved
    }).catch((error) => {
        // handle error
    });
---

## [**getBranches(projectFolder)**](#getbranchesprojectfolder)
Method to get branch names from the Salesforce git repository

### **Parameters:**
  - **projectFolder**: Path to the Salesforce project under git repository
    - String

### **Return:**
Returns a promise with list with the branch names
- Promise\<Array\<String\>\>

### **Throws:**
This method can throw the next exceptions:

- **WrongDirectoryPathException**: If the project folder is not a String or can't convert to absolute path
- **DirectoryNotFoundException**: If the project folder not exists or not have access to it
- **InvalidDirectoryPathException**: If the project folder is not a directory
- **OSNotSupportedException**: When run this processes with not supported operative system

### **Examples:**
**Get branches names from git project**

    const GitManager = require('@ah/git-manager');

    GitManager.getBranches('path/to/project/root').then((branches) => {
        console.log(branches);
        // ['master', 'branch1', '...']
    }).catch((error) => {
        // handle error
    });
---

## [**getCommits(projectFolder)**](#getcommitsprojectfolder)
Method to get the commits data from the Salesforce git repository

### **Parameters:**
  - **projectFolder**: Path to the Salesforce project under git repository
    - String

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

    GitManager.getCommits('path/to/project/root').then((commits) => {
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

## [**getDiffs(projectFolder, source, target)**](#getdiffsprojectfolder-source-target)
Method to get a list of GitDiff object with the differences between two branches, commits, tags...

### **Parameters:**
  - **projectFolder**: Path to the Salesforce project under git repository
    - String
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

    GitManager.getDiffs('path/to/project/root', 'branch1', 'master').then((diffs) => {
        for(const diff of diffs){
            console.log(diff.path);
            console.log(diff.mode);
            console.log(diff.addChanges); // Array with every added line per file
            console.log(diff.removeChanges);  // Array with every removed line per file
        }
    }).catch((error) => {
        // handle error
    });