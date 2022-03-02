require('dotenv').config();

const { MessageEmbed } = require('discord.js');
const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const BOT_PREFIX = "c!"
const RANDOM_ROLE_COMMAND = "random-role"
const TEST_COMMAND = "test"
const ABOUT_COMMAND = "about"
const UA = "ukraine"
const WHO = "who?"
const RICKROLL = "rick"
const ITALIANRICK = "italyrick"

client.on('ready', () => {
    console.log('3rd Floor Cucumber has initialized, starting main bootup')
    client.user.setActivity("c!test", {
        type: "LISTENING",
      });
})

client.on('messageCreate', msg =>{
    if (msg.content == 'Checkmark my message') {
        msg.react('✅')
    }

    if (msg.content == `${BOT_PREFIX}${UA}`) {
        msg.channel.send(' :flag_ua: ')
    }

    if (msg.content == `${BOT_PREFIX}${TEST_COMMAND}`) {
        msg.channel.send('3rd Floor Cucumber is initialized. Use c!about to learn about me.')
    }

    if (msg.content == `${BOT_PREFIX}${ABOUT_COMMAND}`) {
        msg.channel.send("3rd Floor Cucumber is a bot created by Fizekz#7407. DM for questions. Donations highly appreciated.")
    }

    if (msg.content == `${BOT_PREFIX}${RANDOM_ROLE_COMMAND}`) {
      randomroleUser(msg.member)
    }

    if (msg.content == `${BOT_PREFIX}${WHO}`) {
        msg.channel.send("cares")
    }

    if (msg.content == `${BOT_PREFIX}${ITALIANRICK}`) {
        msg.channel.send("http://www.5z8.info/worm_hvwc")
    }

    if (msg.content ==`${BOT_PREFIX}${RICKROLL}`) {
        msg.channel.send("http://www.5z8.info/inject_now_yauf")
    }

    if (msg.content == "c!embedtest") {
        const exampleEmbed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Some title')
            .setURL('https://discord.js.org/')
            .setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
            .setDescription('Some description here')
            .setThumbnail('https://i.imgur.com/AfFp7pu.png')
            .addFields(
            { name: 'Regular field title', value: 'Some value here' },
            { name: '\u200B', value: '\u200B' },
            { name: 'Inline field title', value: 'Some value here', inline: true },
            { name: 'Inline field title', value: 'Some value here', inline: true },
        )
            .addField('Inline field title', 'Some value here', true)
            .setImage('https://i.imgur.com/AfFp7pu.png')
            .setTimestamp()
            .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });
        channel.send({ embeds: [exampleEmbed] });
    }

})

function randomroleUser(member) {
    member.roles.add('947549506168311850')
}

client.login(process.env.BOT_TOKEN);
