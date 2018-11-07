onst Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "?";
 
client.login('TOKEN');
 
client.on('message', message =>{
    if(message.content === "tu fais quoi?"){
        message.reply('Je mange des pâtes dans ma pastabox ! :heart:');
        console.log('répond à tfq');
    }
});
 
 
client.on('guildMemberAdd', member =>{
    let embed = new Discord.RichEmbed()
        .setDescription(':tada: **' + member.user.username + '** a rejoint ' + member.guild.name)
        .setFooter('Nous sommes désormais ' + member.guild.memberCount)
    member.guild.channels.get('ID DU CHANNEL').send(embed)
    member.addRole('ID DU ROLE A AJOUTER AUTOMATIQUEMENT')
 
});
 
client.on('guildMemberRemove', member =>{
    let embed = new Discord.RichEmbed()
        .setDescription(':cry: **' + member.user.username + '** a quitté ' + member.guild.name)
        .setFooter('Nous sommes désormais ' + member.guild.memberCount)
    member.guild.channels.get('ID DU CHANNEL').send(embed)
 
});
  
  


bot.login(token); //a garder en version heroku
