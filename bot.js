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
    var prefix = "f!"
    let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);


if(command == "draw") {
    var Canvas = require('canvas')
  , Image = new Canvas.Image
  , canvas = new Canvas(450, 170)
  , ctx = canvas.getContext('2d');
  ctx.font = '30px Impact';
  let args = message.content.split(" ").slice(1);
  
Image.src = canvas.toBuffer();

    console.log(Image);
ctx.drawImage(Image, 0, 0, Image.width / 470, Image.height / 170);
ctx.fillText(args.join("  "),110, 70);


ctx.beginPath();
ctx.lineTo(50, 102);
ctx.stroke();

message.channel.sendFile(canvas.toBuffer());
}
}).on('ready', () => {

});

client.login('NDI3MDk0MzI1NDI0MjkxODYy.DZgA_g.t4K2Rl4CmqWgAGdBLgn7mcMs4sQ');
