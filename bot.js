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



const Discord = require('discord.js');
const client = new Discord.Client();

      client.on('guildMemberAdd', member=> {

client.channels.get("411198472943829014").send(`**#2432 اهلا نورت ليتم تفعيلك بالقروب اكتب ${member}****`);
});

client.on('message', function(message) {
    
   var prefix = ".";

 if(message.content.startsWith(prefix + '#2432')) {
 let guild = message.mentions.members.first();
let modlog = client.channels.find('name', 'general');
 if (!modlog) return message.reply("**__`av` لم يتم العثور على شات __**").catch(console.error);
 let ActivRole = client.guilds.get(message.guild.id).roles.find('name', '#2432');
   if (!ActivRole) return message.reply("**__`#2432`لا توجد رتبة   __**").catch(console.error);

//الكود من برمجت الرحال
  let ZmA = new Discord.RichEmbed()
  .setColor('RANDOM')
.setDescription('**:white_check_mark:   تم تفعيلك في السيرفر**')
.addField('تم تفعيل العضو :', "<@" + message.author.id + ">")
    message.delete("..");


      //  message.member.addRole(message.guild.roles.find('name', 'Activated'));
                    message.channel.send({embed:ZmA});
    }
});

client.on('message', message => {
 if (message.content === "#2432") {
     if(!message.channel.guild) return;
         message.delete()

  message.member.addRole(message.guild.roles.find("name", "#2432"));
 
 }
 }); 
 


client.login("NDIzMTUzMzcwNTE0MTk0NDMy.DY0s_A.-JpWdwgAC8dIt2svg1aK-j8M4OU");
