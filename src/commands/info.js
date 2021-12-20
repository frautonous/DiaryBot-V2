/*eslint no-unused-vars: ["error", { "args": "none" }]*/
var version = require('../../package.json').version

exports.run = async(bot, msg, args) => {
    msg.channel.send(`・ **Version:** ${version}\n・ **Developer:** Conni!~#0920\n・ **Diary Bot:** \\📓₎﹐ ★． jaehyun#8492\n・ **Server:** haneul %★ʾ \\📷\n・ **Owner:** juliette#0704`)
}

exports.test = (bot) => {

}

exports.help = {
    name: 'info',
    usage: '> `j!info`',
    description: 'view the bot\'s infomation',
    rank: 0
}
