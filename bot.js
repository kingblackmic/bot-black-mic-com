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

client.login('NDI3MDk0MzI1NDI0MjkxODYy.DZgA_g.t4K2Rl4CmqWgAGdBLgn7mcMs4sQ');
