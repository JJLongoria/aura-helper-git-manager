const GitManager = require('../index');
const { FileWriter } = require('@ah/core').FileSystem;

describe('Testing index.js', () => {
    test('Testing getUserName()', async (done) => {
        await new GitManager('../gitTest/SFDXProject').setProjectFolder('../gitTest/SFDXProject').getUserName();
        done();
    });
    test('Testing getUserEmail()', async (done) => {
        await new GitManager('../gitTest/SFDXProject').getUserEmail();
        done();
    });
    test('Testing getAuthorName()', async (done) => {
        await new GitManager('../gitTest/SFDXProject').getAuthorName();
        done();
    });
    test('Testing getAuthorEmail()', async (done) => {
        await new GitManager('../gitTest/SFDXProject').getAuthorEmail();
        done();
    });
    test('Testing getCommitterName()', async (done) => {
        await new GitManager('../gitTest/SFDXProject').getCommitterName();
        done();
    });
    test('Testing getCommitterEmail()', async (done) => {
        await new GitManager('../gitTest/SFDXProject').getCommitterEmail();
        done();
    });
    test('Testing fetch()', async (done) => {
        await new GitManager('../gitTest/SFDXProject').fetch();
        done();
    });
    test('Testing getBranches()', async (done) => {
        const branches = await new GitManager('../gitTest/SFDXProject').getBranches();
        expect(branches.length).toEqual(3);
        done();
    });
    test('Testing getCommits()', async (done) => {
        const commits = await new GitManager('../gitTest/SFDXProject').getCommits();
        expect(commits.length).toEqual(4);
        done();
    });
    test('Testing getDiffs()', async (done) => {
        const diffs = await new GitManager('../gitTest/SFDXProject').getDiffs('test', 'origin/master');
        //console.log(JSON.stringify(diffs, null, 2));
        //FileWriter.createFile('./test/diffOut.json', JSON.stringify(diffs, null, 2))
        done();
    });
});