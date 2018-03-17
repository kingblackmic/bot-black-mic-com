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

client.login("NDIzMTUzMzcwNTE0MTk0NDMy.DY0s_A.-JpWdwgAC8dIt2svg1aK-j8M4OU");
