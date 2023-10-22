const Discord = require('discord.js')
exports.run = function(client, message, args) {
let davet = new Discord.MessageEmbed()
.setTitle("parsher Ekonomi | Yapımcım")
.setDescription(`
**Botu Kodlayan** | **\` parsher \`**

**Botun Sahibi** | <@689447667465453599>  

[Destek olan parsher'a Teşekkür Ederiz!](https://discord.gg/FATqHBJ97W) )
`)

  return message.channel.send(davet)
  
};
exports.conf = {
    enabled: true, 
    aliases: ["yapimcim","yapımcı","yapimci"],
  };
  
  exports.help = {
    name: 'yapımcım'
  };
