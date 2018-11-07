const Discord = require('discord.js');
const bot = new Discord.Client();
const token = process.env.token // a garder en version heroku
const prefix = ("?");

bot.on("guildMemberAdd", member => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage(`Welcome ${member.user} to this server.`).catch(console.error);
});

bot.on('ready', function () {
    console.log("Je suis prêt à être utilisé.")
    bot.user.setActivity('!help').catch(console.error)    
});

 if (command === "add") {
    let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce( (p, c) => p+c);
 
    message.channel.sendMessage(total).catch(console.error);
  }
 
  if (command === "say") {
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
 
  if (command === "help") {
      message.channel.sendMessage("List of commands: add , say , help , ping , foo , kick , eval.")
  }
 
  if (command === "ping") {
    message.channel.sendMessage("Pong!").catch(console.error);
  } else
 
const ban = require('./kick et ban/ban');


bot.on('message', function (message){
    if (ban.match(message)){
        return ban.action(message)
    }
});  
  


bot.login(token); //a garder en version heroku
