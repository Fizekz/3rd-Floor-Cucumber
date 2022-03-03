require('dotenv').config();

const { Client, Intents, MessageEmbed } = require('discord.js');
const { MessageButtonStyles } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const BOT_PREFIX = "c!"
const TEST_COMMAND = "test"
const ABOUT_COMMAND = "about"
const UA = "ukraine"
const WHO = "who?"
const RICKROLL = "rick"
const ITALIANRICK = "italyrick"
const EMBED_TEST_COMMAND = "embedtest"
const HELP_COMMAND = "help"

client.on('ready', () => {
    console.log('3rd Floor Cucumber has initialized, starting main bootup')
    client.user.setActivity("c!help", {
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
        const aboutEmbed = new MessageEmbed()
	        .setColor('#27f549')
	        .setTitle('About')
	        .setAuthor({ name: 'Fizekz', iconURL: 'https://cdn.discordapp.com/avatars/626749993465937946/ccd004b11ab4581b4f995c4ba9067495.webp?size=80' })
	        .setThumbnail('https://cdn.discordapp.com/avatars/626749993465937946/ccd004b11ab4581b4f995c4ba9067495.webp?size=80')
	        .setDescription('3rd Floor Cucumber is a bot created by <@!626749993465937946>. \nThis bot is in early release/development. \nDM <@!626749993465937946> for questions. \nDonations greatly appreciated.')

        msg.channel.send({ embeds: [aboutEmbed] });
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

    if (msg.content == `${BOT_PREFIX}${EMBED_TEST_COMMAND}`) {
        const exampleEmbed = new MessageEmbed()
	        .setColor('#27f549')
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

        msg.channel.send({ embeds: [exampleEmbed] });    
    }

    if (msg.content == `${BOT_PREFIX}${HELP_COMMAND}`) {
        const helpEmbed = new MessageEmbed()
            .setColor('#27f549')
            .setTitle('Help')
            .setDescription('An expansive list of commands, with more being added every day! \nAll commands start with the prefix c!')
            .addFields(
                { name: '(c!)test', value: 'Check to see if the bot is running' },
                { name: '(c!)about', value: 'Displays some info about the bot' },
                { name: '(c!)ukraine', value: 'Stand strong with Ukraine' },
                { name: '(c!)embedtest', value: 'Displays a reference embed for code purposes' },
                { name: '(c!)help', value: 'If you don\'t know what this command does, you  need help' },
                { name: '(c!)who?', value: 'Try this command to see what it does' },
                { name: '(c!)rick', value: 'Invites a very special friend to the channel' },
                { name: '(c!)italyrick', value: 'Our very special friend has gone abroad' },
    )
            .setFooter({ text: 'pls donate', iconURL: 'https://cdn.discordapp.com/avatars/626749993465937946/ccd004b11ab4581b4f995c4ba9067495.webp?size=80' });

        msg.channel.send({embeds: [helpEmbed] });
    }

})

function randomroleUser(member) {
    member.roles.add('947549506168311850')
}

client.login(process.env.BOT_TOKEN);
