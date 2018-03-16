const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
  client.user.setGame(` By Suhaib #4272 .`,'https://www.twitch.tv/v5bz');
  console.log('---------------');
  console.log(' Bot Is Online')
  console.log('---------------')
});
var prefix = "*";
client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
   message.channel.sendMessage(args.join("  "))
  }
});
client.on('message', message=>{
    if (message.content === prefix + 'add-colors'){
        if (message.channel.guild){
            if (message.member.hasPermission('MANAGE_ROLES')){
                setInterval(function(){})
                  let count = 0;
                  let ecount = 0;
        for(let x = 0; x < 110; x++){
            message.guild.createRole({name:x,
            color: 'RANDOM'})
      }
            }else{
                message.channel.sendMessage('? **You do not have permission to write this command**')
            }
        }else{
            message.channel.sendMessage('?  **This command only in servers**')
        }
    }
    if (message.content === prefix + 'de-colors'){
                if (message.channel.guild){
            if (message.member.hasPermission('MANAGE_ROLES')){
                setInterval(function(){})
                  let count = 0;
                  let ecount = 0;
        for(let x = 0; x < 110; x++){
            message.guild.roles.find('name', x).delete()
      }
            }else{
                message.channel.sendMessage('**You do not have permission to write this command**')
            }
        }else{
            message.channel.sendMessage('**This command only in servers**')
        }
    }
    
})
client.on('message', msg => {
  if (msg.content === '*add-colors') {
    msg.reply('**تم اضافه الاوان بنجاح**');
  }
});
client.login('NDIzMTUzMzcwNTE0MTk0NDMy.DYmL0A.F0u_L8RNxNUuX1RoDB2q0RsQJq4');
