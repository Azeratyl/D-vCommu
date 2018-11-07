const Discord = require('discord.js');
const bot = new Discord.Client();
const token = process.env.token // a garder en version heroku
const prefix = ("?");

module.exports = class Ping extends Command {
  
  static match(message) {
    if(message.content === '!help') {
      return true
    }
  }
  
  static action(message) {
    
    left  help = new  Discord,RichEmbded()
          .setTitle('HELP')
          .setDescription('Liste des commandes')
          .addBlankField()
          .addField('!ping, 'Renvois pong')
          .addField('!info, 'Donne des infos')
          .setColor('0x206694')
          .setFooter('Fin')
    
    message.channel.send(help)
  }
}

bot.on('guildMemberAdd', member => {
  member.createDM().then(channel => {
    return channel.send('Bienvenue sur le serveur DévCommu ! Actuellement en Bêta. ' + member.displayName)
  }).catch(console.error)
  // On pourrait catch l'erreur autrement ici (l'utilisateur a peut être désactivé les MP)
})

bot.on('ready', function () {
    console.log("Je suis prêt à être utilisé.")
    bot.user.setActivity('!help').catch(console.error)    
});

 

  


bot.login(token); //a garder en version heroku
