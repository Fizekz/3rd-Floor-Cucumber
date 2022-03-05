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
const DONATE_COMMAND = "donate"
const RELEASENOTES_COMMAND = "releasenotes"
const JASON_COMMAND = "jason"

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
	        .setDescription('3rd Floor Cucumber is a bot created by <@!626749993465937946>. \nThis bot is in early release v0.29 . \nDM <@!626749993465937946> for questions. \nDonations greatly appreciated.')

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
                { name: '(c!)italyrick', value: 'Invita un amico molto speciale sul canale' },
                { name: '(c!)donate', value: 'PAY US IN CRYPTO!'},
                { name: '(c!)releasenotes', value: 'Check out what\'s new!'},
                { name: '(c!)jason', value: "This will only work if you have the emoji in your server"},
    )
            .setFooter({ text: '"pls donate"', iconURL: 'https://cdn.discordapp.com/avatars/626749993465937946/ccd004b11ab4581b4f995c4ba9067495.webp?size=80' });

        msg.channel.send({embeds: [helpEmbed] });
    }

    if (msg.content == `${BOT_PREFIX}${DONATE_COMMAND}`) {
        const donateEmbed = new MessageEmbed()
            .setColor('#27f549')
            .setTitle('DONATE')
            .setDescription('Pay us in crypto!')
            .addFields(
                { name: 'Bitcoin Wallet', value: 'Send Bitcoin to \n-> 3PmRZapVxkyGZUmzwLs27MmLN9XSFUWG5w' },
                { name: 'Ethereum Wallet', value: 'Send Ethereum to \n-> 0x52053af1205dbfaf492c469cdb70247a14da7d10' },
    )
            .setFooter({ text: '"if you donate, you get a cookie"', iconURL: 'https://cdn.discordapp.com/avatars/626749993465937946/ccd004b11ab4581b4f995c4ba9067495.webp?size=80' });
        
        msg.channel.send({embeds: [donateEmbed] });
    }

    if (msg.content == `${BOT_PREFIX}${RELEASENOTES_COMMAND}`) {
        const releasenotesEmbed = new MessageEmbed()
            .setColor('#27f549')
            .setTitle('Release Notes')
            .addField('v0.29', 'Testing the (c!)jason command')
            .setFooter({ text: '"everything\'s better with release notes"', iconURL: 'https://cdn.discordapp.com/avatars/626749993465937946/ccd004b11ab4581b4f995c4ba9067495.webp?size=80'})
        
        msg.channel.send({embeds: [releasenotesEmbed] });
    }

    if (msg.content == `${BOT_PREFIX}${JASON_COMMAND}`) {
        const jasonEmbed = new MessageEmbed()
            .setColor('#27f549')
            .setImage('https://cdn.discordapp.com/emojis/934460690511564891.webp?size=96&quality=lossless')

        msg.channel.send({embeds: [jasonEmbed]})
    }


})


client.login(process.env.BOT_TOKEN);
