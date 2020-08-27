const Bot = require('./scripts/bot');
const core = require('@actions/core');

try {
    const token = core.getInput('account_token');
    const originOwner = 'ng-zorro-bot';
    const upstreamOwner = 'NG-ZORRO';
    const username = 'ng-zorro-bot';
    const userEmail = 'ng-zorro@users.noreply.github.com';
    const bot = new Bot({token, originOwner, upstreamOwner, username, userEmail});
    bot.run().then();
} catch (error) {
    core.setFailed(error.message);
}
