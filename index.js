const Bot = require('./scripts/bot');
const core = require('@actions/core');

try {
    const token = core.getInput('account_token');
    const version = core.getInput('version');
    const originOwner = 'ng-zorro-bot';
    const upstreamOwner = 'NG-ZORRO';
    const username = 'ng-zorro-bot';
    const userEmail = 'ng-zorro@users.noreply.github.com';
    const bot = new Bot({token, originOwner, upstreamOwner, username, userEmail});
    if (version) {
        bot.checkOnceWithVersion(version).then()
    } else {
        bot.run().then();

    }
} catch (error) {
    core.setFailed(error.message);
}
