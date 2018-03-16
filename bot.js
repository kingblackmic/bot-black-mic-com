const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");

client.on('ready', () => {
    client.user.setStatus('idle');
});

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`**
      حياك الله ي بعد راسي
       خش بتنورنا فعاليات وكل شيء حلو موجود !
        ي بعد عيني الرابط تحت
          BlackMic (:

                                 [ https://discord.gg/x3h4TJ ] **`)
}).catch(console.error)
})

client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(`**
      حياك الله ي بعد راسي
       خش بتنورنا فعاليات وكل شيء حلو موجود !
        ي بعد عيني الرابط تحت
         Hero (:

                                 [ https://discord.gg/NNzAj2f ] **`)
}).catch(console.error)
})

client.login("NDIzMTUzMzcwNTE0MTk0NDMy.DY0s_A.-JpWdwgAC8dIt2svg1aK-j8M4OU");
