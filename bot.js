require('dotenv').config();

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const BOT_PREFIX = "c!"
const RANDOM_ROLE_COMMAND = "random-role"
const TEST_COMMAND = "test"
const ABOUT_COMMAND = "about"

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

    if (msg.content == `${BOT_PREFIX}${TEST_COMMAND}`) {
        msg.channel.send('3rd Floor Cucumber is initialized. Use c!about to learn about me.')
    }

    if (msg.content == `${BOT_PREFIX}${ABOUT_COMMAND}`) {
        msg.channel.send("3rd Floor Cucumber is a bot created by Fizekz#7407. DM for questions. Donations highly appreciated.")
    }

    if (msg.content === `${BOT_PREFIX}${RANDOM_ROLE_COMMAND}`) {
      randomroleUser(msg.member)
    }
})

function randomroleUser(member) {
    member.roles.add('947549506168311850')
}

client.login(process.env.BOT_TOKEN);
