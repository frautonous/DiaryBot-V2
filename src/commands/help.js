/*eslint no-unused-vars: ["error", { "args": "none" }]*/
const Discord = require('discord.js')

exports.run = (bot, msg, args) => {
    const normalTier = new Discord.MessageEmbed()
    normalTier
        .setColor('#2f3136')
        .setTimestamp()
        .setFooter('haneul %★\ʾ 📷', 'https://media.discordapp.net/attachments/921223275688919110/921223338905468948/ezgif-4-5bc5e5a296.gif')
        .setTitle('Jaehyun Commands - General')
    bot.commands.forEach(e => {
        if(e.help.rank == 0) {
            normalTier.addField(`${e.help.name}`, e.help.description + '\n' + e.help.usage, false + '\n')
        }
    })
    msg.channel.send(normalTier)

    const diaryOwnersTier = new Discord.MessageEmbed()
    diaryOwnersTier
        .setColor('#2f3136')
        .setTimestamp()
        .setFooter('haneul %★\ʾ 📷', 'https://media.discordapp.net/attachments/921223275688919110/921223338905468948/ezgif-4-5bc5e5a296.gif')
        .setTitle('Jaehyun Commands - Diary Owners')
    bot.commands.forEach(e => {
        if(e.help.rank == 1) {
            diaryOwnersTier.addField(e.help.name, e.help.description + '\n' + e.help.usage, false + '\n')
        }
    })
    msg.channel.send(diaryOwnersTier)
    
    if(msg.author.id == '299709641271672832') {
        const etcTier = new Discord.MessageEmbed()
        etcTier
        .setColor('#2f3136')
        .setTimestamp()
        .setFooter('haneul %★\ʾ 📷', 'https://media.discordapp.net/attachments/921223275688919110/921223338905468948/ezgif-4-5bc5e5a296.gif')
        .setTitle('Jaehyun Commands - Other')
        bot.commands.forEach(e => {
        if(e.help.rank > 1) {
             etcTier.addField(e.help.name, e.help.description + '\n' + e.help.usage, false + '\n')
            }
        })
        msg.channel.send(etcTier)
    }
}

exports.test = (bot) => {

}

exports.help = {
    name: 'help',
    usage: '> `j!help`',
    description: 'lists all commands of jaehyun',
    rank: 0
}
