const Discord = require('discord.js')
exports.run = function(client, message, args) {
let davet = new Discord.MessageEmbed()
.setTitle("RTE | Davet")
.setDescription(`
**Beni Sunucuna Ekle ve Eğlenmeye Başla**

[≫ Davet Etmek İçin Buraya Tıkla ≪](https://discord.gg/RndHfyrCC5)
`)

  return message.channel.send(davet)
  
};
exports.conf = {
    enabled: true, 
    aliases: ["invite","inv"],
  };
  
  exports.help = {
    name: 'davet'
  };
