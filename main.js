const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('Njk4ODExNTk0ODM0MDUxMDcy.XpLwpA.TIWNzkf5dhP7n9tmH6oKX66XL7s');