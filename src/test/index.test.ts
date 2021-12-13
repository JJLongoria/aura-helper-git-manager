import { GitManager } from '../index';


describe('Testing index.js', () => {
    test('Testing getUserName()', async () => {
        await new GitManager('../gitTest/SFDXProject').setProjectFolder('../gitTest/SFDXProject').getUserName();
    });
    test('Testing getUserEmail()', async () => {
        await new GitManager('../gitTest/SFDXProject').getUserEmail();
    });
    test('Testing getAuthorName()', async () => {
        await new GitManager('../gitTest/SFDXProject').getAuthorName();
    });
    test('Testing getAuthorEmail()', async () => {
        await new GitManager('../gitTest/SFDXProject').getAuthorEmail();
    });
    test('Testing getCommitterName()', async () => {
        await new GitManager('../gitTest/SFDXProject').getCommitterName();
    });
    test('Testing getCommitterEmail()', async () => {
        await new GitManager('../gitTest/SFDXProject').getCommitterEmail();
    });
    test('Testing fetch()', async () => {
        await new GitManager('../gitTest/SFDXProject').fetch();
    });
    test('Testing getBranches()', async () => {
        const branches = await new GitManager('../gitTest/SFDXProject').getBranches();
        expect(branches.length).toEqual(3);
    });
    test('Testing getTags()', async () => {
        const tags = await new GitManager('../gitTest/SFDXProject').getTags();
    });
    test('Testing getCommits()', async () => {
        const commits = await new GitManager('../gitTest/SFDXProject').getCommits();
        expect(commits.length).toEqual(4);
    });
    test('Testing getDiffs()', async () => {
        const diffs = await new GitManager('../gitTest/SFDXProject').getDiffs('test', 'origin/master');
        //console.log(JSON.stringify(diffs, null, 2));
        //FileWriter.createFile('./test/diffOut.json', JSON.stringify(diffs, null, 2))
    });
});