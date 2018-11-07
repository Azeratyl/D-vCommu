const Discord = require('discord.js')
const Command = require ('./command')

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
