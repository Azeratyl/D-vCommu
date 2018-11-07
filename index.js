const Discord = require('discord.js');
const bot = new Discord.Client();
const token = process.env.token // a garder en version heroku
const prefix = ("?");

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
