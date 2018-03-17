const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");

client.on('ready', () => {
    client.user.setStatus('idle');
});

client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'welcome');
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':running_shirt_with_sash: | name :  ',`${member}`)
        .addField(':loudspeaker: | نورت السيرفر يا قلبي' , `Welcome to the server, ${member}`)
        .addField(':id: | user :', "**[" + `${member.id}` + "]**" )
                .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)
               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                     
                                     .addField(' نتمنا لك سعاده', `${member.guild.name}`,true)
                                       
     .setFooter("**SERVER NAME**")
        .setTimestamp()
   
      channel.sendEmbed(embed);
    });


 var args = message.content.split(" ").slice(1);    
          if(message.content.startsWith(prefix + 'id')) {
       var year = message.author.createdAt.getFullYear()
       var month = message.author.createdAt.getMonth()
       var day = message.author.createdAt.getDate()
       var men = message.mentions.users.first();  
let args = message.content.split(' ').slice(1).join(' ');
  //If sender don't input a mention user, then z equal the sender itself.
  if (args == '') {
    var z = message.author;
  }else {
    var z = message.mentions.users.first();
  }

  let d = z.createdAt;          //The date when the user is created.
  let n = d.toLocaleString();   //conver the date to local string.
  let x;                        //Nitro
  let y;                        //Game status

//Logic Gate of the y
  if (z.presence.game !== null) {
    y = `${z.presence.game.name}`;
  } else {
    y = "No Playing... |:zzz:.";
  }

//Check the user is or isn't a bot.
  if (z.bot) {
    var w = 'بوت';
  }else {
    var w = 'عضو';
  }
 let embed = new Discord.RichEmbed()
      .setColor("#502faf")
    .addField(':trident:| اسمك:',`**<@` + `${z.id}` + `>**`, true)
    .addField(':shield:| ايدي:', "**"+ `${z.id}` +"**",true)
    .addField(':hotsprings:| Playing:','**'+y+'**' , true)
    .addField(':robot:| نوع حسابك:',"**"+ w + "**",true)    
    .addField(':name_badge:| الكود حق حسابك:',"**#" +  `${z.discriminator}**`,true)
  .addField('**التاريح الذي انشئ فيه حسابك | :calendar: **: ' ,year + "-"+ month +"-"+ day)    
.addField("**تاريخ دخولك للسيرفر| :watch:   :**", message.member.joinedAt.toLocaleString())    

      .addField('**:watch: | تاريخ انشاء حسابك الكامل:**', message.author.createdAt.toLocaleString())
.addField("**اخر رسالة لك | :speech_balloon:  :**", message.author.lastMessage)            

.setThumbnail(`${z.avatarURL}`)
      .setFooter(message.author.username, message.author.avatarURL)

      message.channel.send({embed});
              if (!message) return message.reply('**ضع المينشان بشكل صحيح  :x: **').catch(console.error);

}
  
});

client.login("NDIzMTUzMzcwNTE0MTk0NDMy.DY0s_A.-JpWdwgAC8dIt2svg1aK-j8M4OU");
