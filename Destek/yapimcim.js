const Discord = require('discord.js')
exports.run = function(client, message, args) {
let davet = new Discord.MessageEmbed()
.setTitle("RTE Ekonomi | Yapımcım")
.setDescription(`
**Botu Kodlayan** | **\` ventesila.jpg \`**

**Botun Sahibi** | <@821357304100159579>  

[Destek olan ventesila.jpg'ye Teşekkür Ederiz!](https://discord.gg/RndHfyrCC5) )
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
