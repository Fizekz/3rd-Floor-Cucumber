require('dotenv').config();

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const BOT_PREFIX = "c!"
const RANDOM_ROLE_COMMAND = "random-role"

client.on('ready', () => {
    console.log('3rd Floor Cucumber has initialized, starting main bootup')
})

client.on('messageCreate', msg =>{
    if (msg.content == 'Checkmark my message') {
        msg.react('✅')
    }

    if (msg.content === `${BOT_PREFIX}${RANDOM_ROLE_COMMAND}`) {
      randomroleUser(msg.member)
    }
})

function randomroleUser(member) {
    member.roles.add('947549506168311850')
}

client.login(process.env.BOT_TOKEN);