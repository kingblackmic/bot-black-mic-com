const Discord = require("discord.js");
const client = new Discord.Client();



client.on("ready", () => {
client.user.setPresence({
  status: 'dnd',
  game: { 
     type: 0,
     name: '@M.ZUON#4646 ',
     details: `I'm : KBOOSH - Developer and Programmer`,
     url: 'http://twitch.tv/Streammingg',
     state: `إنْ لَمْ تَجِد لكْ حآقدْ إعلمْ أنْك إنسآن فآشِلْ`,
    application_id: '281376075802476544',
     assets: {
        small_image: `366835431037337600`,
        small_text: ' Take This ! ' ,
        large_image: `370451271133429760`,
        large_text: `ҜṦẰ.OMN♥` }

  }
    });
});


client.on('message', message => {  // ui
if (!message.channel.guild) return;
var prefix = "#";
  if (message.content ===  prefix + 'ui') {
let user = message.mentions.users.first();    
 if (!user) { user = message.author }
let guild = message.guild;
let embed = new Discord.RichEmbed()
    .setTitle('User Information')
    .setThumbnail(user.displayAvatarURL)
    .setFooter(message.createdAt , client.user.avatarURL)    
    .setColor("#428cdf")
    .addField("إسمك", "```"+`${user.tag}`+"```" , true)
    .addField("كنية", "```"+`${user.nickname || "None"}`+"```", true)
    .addField("معرف المستخدم", "```"+`${user.id}`+"```", true)
    .addField("تلعب",  user.presence.game ? "```"+ user.presence.game.name +"```" : '```None```', true)
    .addField("حالة المستخدم", "```"+`${user.presence.status}`+"```", true)
    .addField("فعلا", "```"+`${user.bot}`+"```", true)  
	.addField('Roles', message.guild.members.get(user.id).roles.array(role => role.name).slice(1).join(' '))
    message.channel.send({embed});
}
});

client.on('message', message => {
if (message.content === "معلومات") {
if(!message.channel.guild) return;
const millis = new Date().getTime() - message.guild.createdAt.getTime();
const now = new Date();

const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
const days = millis / 1000 / 60 / 60 / 24;
let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
var embed  = new Discord.RichEmbed()
.setAuthor(message.guild.name, message.guild.iconURL)
.addField("**🆔 سيـرفر ايــدي**", "**"+message.guild.id+"**",true)
.addField("**👑 سيــرفر اونـر**", "**"+message.guild.owner+"**" ,true)
.addField("**✅ الشــات الاســاســي**" , "**"+message.guild.DefaultChannel+"**" ,true)
.addField("**🌍 المـوقع**" , "**"+message.guild.region+"**",true)
.addField('**💬 عدد الرومــات الكتابيــة**',`**[ ${message.guild.channels.filter(m => m.type === 'text').size} ] Channel **`,true)
.addField("**📣 عدد الرومــات الصوتــية**", ` ** [ ${message.guild.channels.filter(m => m.type === 'voice').size} ] Channel ** `,true)
.addField("**🤔 عدد ايــام انشــاء السيــرفر**", ` ** [ ${days.toFixed(0)} ] ** Day ` ,true)
.addField("**👔 الــرتــب**",`**[${message.guild.roles.size}]** Role `,true)
.addField("**💠 مســتوى حمــاية الســيرفر**", ` ** [ ${verificationLevels[message.guild.verificationLevel]} ] ** `,true)

.addField("👥عدد الاعضــاء",`
**${message.guild.memberCount}**`)
.setThumbnail(message.guild.iconURL)
.setColor('RANDOM')
message.channel.sendEmbed(embed)

}
});

client.login('NDI3MDk0MzI1NDI0MjkxODYy.DZgA_g.t4K2Rl4CmqWgAGdBLgn7mcMs4sQ');
