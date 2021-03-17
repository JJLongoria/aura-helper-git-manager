# **Aura Helper Git Manager Module**
The Git Manager Module has an util methods to handle an manage git repository and has features to use in Aura Helper Framework. Yo can fetch data, list branches, get commits or get diffs.

# [Usage](#usage)

## [Fetch](#fetch)

    const GitManager = require('@ah/git-manager');

    GitManager.fetch('path/to/project/root').then(() => {
        // data retrieved
    }).catch((error) => {
        // handle error
    });


***
## [Get Branches](#get-branches)

    const GitManager = require('@ah/git-manager');

    GitManager.getBranches('path/to/project/root').then((branches) => {
        console.log(branches);
        // ['master', 'branch1', '...']
    }).catch((error) => {
        // handle error
    });

***
## [Get Commits](#get-commits)

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

***
## [Get Diffs](#get-diffs)
With the Get Diffs method you can get diffs from different source and targets like two branches, commits or tags to get the differences.

    const GitManager = require('@ah/git-manager');

    GitManager.getDiffs('path/to/project/root', 'branch1', 'master').then((diffs) => {
        for(const diff of diffs){
            console.log(diff.path);
            console.log(diff.mode);
            console.log(diff.addChanges); // Array with every all lines added per file
            console.log(diff.removeChanges);  // Array with every all lines removed per file
        }
    }).catch((error) => {
        // handle error
    });