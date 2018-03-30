const Discord = require("discord.js");
const client = new Discord.Client();
console.log(' stream is Online')

client.on('ready', () => {
  client.user.setGame(`تحت ططوير`,'https://www.twitch.tv/v5bz');
});



client.on('message', message => {  // ui
if (!message.channel.guild) return;
var prefix = "!";
  if (message.content ===  prefix + 'an') {
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
if (message.content === "!ml") {
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



client.on('message', message => {
var prefix = "!";

    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
    if (!args[1]) {
message.channel.send("**f!bc <message>**");
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .addField('» السيرفر :', `${message.guild.name}`)
            .addField('» المرسل : ', `${message.author.username}#${message.author.discriminator}`)
            .addField(' » الرسالة : ', args)
            .setColor('#ff0000')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
        });
    }
    } else {
        return;
    }
});


client.on('message', message => {
    if (message.content.startsWith("!link")) {
if(!message.channel.guild) return;

        message.channel.createInvite({
        thing: true,
        maxUses: 5,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription(`  في الخاص ${message.guild.name}تم ارسالك رابط سيرفر `)
   .setFooter("اسم السيرفر","رابط صوره السيرفر")
      message.channel.sendEmbed(embed).then(message => {message.delete(3000)})
              const EmbedMalek = new Discord.RichEmbed()
        .setColor("000000")
        .setDescription(`هذا الرابط لخمسه مستخدمين فقط لمده اربعه وعشرين ساعه${message.guild.name} https://discord.gg/MGhjs5K  `)
        .setFooter("Hero","رابط صوره السيرفر")
      message.author.sendEmbed(EmbedMalek)
    }
});






client.on("message", message => {
    if (message.content === "!help") {
     const embed = new Discord.RichEmbed() 
         .setColor("#ffff00")
         .setFooter('By Hero')
         .setThumbnail(message.author.avatarURL)
         .setDescription(`
  
-🚀 سرعه اتصال ممتازه
-😎 سهل الاستخدام 
-⚠ صيانه كل يوم
-💵 مجاني بل كامل 
-📚 البوت عربي و سيتم اضافه اللغه الانجلزيه

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
                  **✨ Commands | اوامر ✨**
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
**رابط** | !link
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
**رساله** | !bc
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
**معلومات سيرفر** | !ml
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
**عنك** | !an
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
**عدد الاشخاص في السيرفر** | !bot
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

   `)
   message.author.sendEmbed(embed)
   
   }
   }); 



client.on('message', message => {
    if (message.content === "-Gta v") {
        if(!message.channel.guild) return;
        message.member.addRole(message.guild.roles.find("name", "Gta v"));
  }
    
});



client.on('message', msg => {
  if (msg.content === '!help') {
    msg.reply('تم الارسال على الخاص :white_check_mark: ');
  }
});



 client.on('message', message => {
                    var prefix = "!";
                    
                      if (!message.content.startsWith(prefix)) return;
                      var args = message.content.split(' ').slice(1);
                      var argresult = args.join(' ');
                      if (message.author.id == 427094325424291862) return;
                    
                    
                    if (message.content.startsWith(prefix + 'playing')) {
                    if (message.author.id !== '257111476404224001') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
                    client.user.setGame(argresult);
                        message.channel.sendMessage(`**${argresult}** : تم تغيير الحالة`)
                    } else
                    
                     
                    if (message.content.startsWith(prefix + 'streem')) {
                    if (message.author.id !== '257111476404224001') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
                    client.user.setGame(argresult, "http://twitch.tv/SMILE");
                        message.channel.sendMessage(`**${argresult}** :تم تغيير الحالة الى ستريمنج`)
                    } else
                    
                    if (message.content.startsWith(prefix + 'setname')) {
                    if (message.author.id !== '257111476404224001') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
                      client.user.setUsername(argresult).then
                          message.channel.sendMessage(`**${argresult}** : تم تغير الأسم`)
                      return message.reply("**لا تستطيع تغير الأسم الا بعد ساعتين**");
                    } else

if (message.content.startsWith(prefix + 'setavatar')) {
                    if (message.author.id !== '257111476404224001') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
                    client.user.setAvatar(argresult);
                        message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
                    } else
                    
                    
                    if (message.content.startsWith(prefix + 'watching')) {
                    if (message.author.id !== '257111476404224001') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
                        client.user.setActivity(argresult, {type : 'watching'});
                     message.channel.sendMessage(`**${argresult}** : تم تغيير الووتشينق الى`)
                    }
                    
});



client.on('message', message => {
    if(message.content === "!bot") {
        const embed = new Discord.RichEmbed()
        .setColor("#00FFFF")
        .setDescription(`**الخوادم** 🌐 **__${client.guilds.size}__**
**المستخدمين** 👥 **__${client.users.size}__**
**قنوات** 📚 **__${client.channels.size}__** `)
               message.channel.sendEmbed(embed);
           }
});


client.on('guildMemberAdd', (member) => {
member.addRole(member.guild.roles.find('name', 'New-Hero'));
});




client.on('message', msg => {
  if (msg.content === 'السعودية') {      
    msg.react("🇸🇦")
	msg.channel.send("🇸🇦")
  }
});

client.on('message', msg => {
  if (msg.content === 'مصر') {      
    msg.react("🇪🇬")
	msg.channel.send("🇪🇬")
  }
});

client.on('message', msg => {
  if (msg.content === 'المغرب') {      
    msg.react("🇲🇦")
	msg.channel.send("🇲🇦")
  }
});

client.on('message', msg => {
  if (msg.content === 'العراق') {      
    msg.react("🇮🇶")
	msg.channel.send("🇮🇶")
  }
});

client.on('message', msg => {
  if (msg.content === 'الجزائر') {      
    msg.react("🇩🇿")
	msg.channel.send("🇩🇿")
  }
});

client.on('message', msg => {
  if (msg.content === 'الامارات') {      
    msg.react("🇦🇪")
	msg.channel.send("🇦🇪")
  }
});

client.on('message', msg => {
  if (msg.content === 'تونس') {      
    msg.react("🇹🇳")
	msg.channel.send("🇹🇳")
  }
});

client.on('message', msg => {
  if (msg.content === 'سوريا') {      
    msg.react("🇸🇾")
	msg.channel.send("🇸🇾")
  }
});

client.on('message', msg => {
  if (msg.content === 'ليبيا') {      
    msg.react("🇱🇾")
	msg.channel.send("🇱🇾")
  }
});

client.on('message', msg => {
  if (msg.content === 'قطر') {      
    msg.react("🇶🇦")
	msg.channel.send("🇶🇦")
  }
});

client.on('message', msg => {
  if (msg.content === 'الصومال') {      
    msg.react("🇸🇴")
	msg.channel.send("🇸🇴")
  }
});

client.on('message', msg => {
  if (msg.content === 'عمان') {      
    msg.react("🇴🇲")
	msg.channel.send("🇴🇲")
  }
});

client.on('message', msg => {
  if (msg.content === 'موريتانيا') {      
    msg.react("🇲🇷")
	msg.channel.send("🇲🇷")
  }
});

client.on('message', msg => {
  if (msg.content === 'السودان') {      
    msg.react("🇸🇩")
	msg.channel.send("🇸🇩")
  }
});

client.on('message', msg => {
  if (msg.content === 'جيبوتي') {      
    msg.react("🇩🇯")
	msg.channel.send("🇩🇯")
  }
});

client.on('message', msg => {
  if (msg.content === 'لبنان') {      
    msg.react("🇱🇧")
	msg.channel.send("🇱🇧")
  }
});

client.on('message', msg => {
  if (msg.content === 'البحرين') {      
    msg.react("🇧🇭")
	msg.channel.send("🇧🇭")
  }
});

client.on('message', msg => {
  if (msg.content === 'الاردن') {      
    msg.react("🇯🇴")
	msg.channel.send("🇯🇴")
  }
});

client.on('message', msg => {
  if (msg.content === 'اليمن') {      
    msg.react("🇾🇪")
	msg.channel.send("🇾🇪")
  }
});

client.on('message', msg => {
  if (msg.content === 'الكويت') {      
    msg.react("🇰🇼")
	msg.channel.send("🇰🇼")
  }
});

client.login('NDI3MDk0MzI1NDI0MjkxODYy.DZgA_g.t4K2Rl4CmqWgAGdBLgn7mcMs4sQ');
