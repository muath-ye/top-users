const git = require('../../core/git');
let commitGit = function () {
    let INSIGHT_BOT_USERNAME = 'muath-ye';
    let INSIGHT_BOT_EMAIL = 'muath.ye@gmail.com';
    let commit = async function (message) {
        console.log(`Git Commit "${message}"`)
        try {
            await git.commit(INSIGHT_BOT_USERNAME, INSIGHT_BOT_EMAIL, message);
        } catch (error) {
            console.log(error);
        }
    }
    return {
        commit: commit
    };
}();
module.exports = commitGit;
