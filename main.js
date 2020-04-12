const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

bot.login('Njk4ODExNTk0ODM0MDUxMDcy.XpLRIQ.dxD7slh7a0XJAEq2tN_ZfiuUoaM');