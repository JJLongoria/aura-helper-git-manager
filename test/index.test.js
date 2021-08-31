const GitManager = require('../index');
const { FileWriter } = require('@ah/core').FileSystem;

describe('Testing index.js', () => {
    test('Testing getUserName()', async (done) => {
        await GitManager.getUserName('../gitTest/SFDXProject');
        done();
    });
    test('Testing getUserEmail()', async (done) => {
        await GitManager.getUserEmail('../gitTest/SFDXProject');
        done();
    });
    test('Testing getAuthorName()', async (done) => {
        await GitManager.getAuthorName('../gitTest/SFDXProject');
        done();
    });
    test('Testing getAuthorEmail()', async (done) => {
        await GitManager.getAuthorEmail('../gitTest/SFDXProject');
        done();
    });
    test('Testing getCommitterName()', async (done) => {
        await GitManager.getCommitterName('../gitTest/SFDXProject');
        done();
    });
    test('Testing getCommitterEmail()', async (done) => {
        await GitManager.getCommitterEmail('../gitTest/SFDXProject');
        done();
    });
    test('Testing fetch()', async (done) => {
        await GitManager.fetch('../gitTest/SFDXProject');
        done();
    });
    test('Testing getBranches()', async (done) => {
        const branches = await GitManager.getBranches('../gitTest/SFDXProject');
        expect(branches.length).toEqual(3);
        done();
    });
    test('Testing getCommits()', async (done) => {
        const commits = await GitManager.getCommits('../gitTest/SFDXProject');
        expect(commits.length).toEqual(4);
        done();
    });
    test('Testing getDiffs()', async (done) => {
        const diffs = await GitManager.getDiffs('../gitTest/SFDXProject', 'test', 'origin/master');
        //console.log(JSON.stringify(diffs, null, 2));
        //FileWriter.createFile('./test/diffOut.json', JSON.stringify(diffs, null, 2))
        done();
    });
});