const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NDIzMTUzMzcwNTE0MTk0NDMy.DYmL0A.F0u_L8RNxNUuX1RoDB2q0RsQJq4');
