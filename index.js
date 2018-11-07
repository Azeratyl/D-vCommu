// Librairie discord.js
const Discord = require("discord.js");
// création du client
const client = new Discord.Client();
// Liaison des fichiers
const ctoken = require('./config/token.json');
const cprefix = require(`./config/prefix.json`);
const cmessage = require(`./config/message.json`)
 

const footer = cmessage.footer;

// Au démarage du bot
client.on('ready', () => {
  // Set Game du bot
  client.user.setPresence({ game: { name: 'En Dév par Clashoux | Romain P.#1045', type: 0 } });
  // Message console de connection
  console.log("DestinyBot est en ligne !")

});

client.on("message", message =>{

  /* Sommaire
    Commande botinfo (Ligne 59)
    Commande serverinfo (Ligne 100)
    Commande userinfo (Ligne )
  */

  // Ignorer msg du bot
  if (message.author.bot) return;
  //Ignorer si le message vient de mp
  if(message.channel.type === "dm")return;
  
  // Création des variables
  let prefix = cprefix.prefix;
  let messageArray =  message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if(!cmd.startsWith(prefix)) return;

 function formatDateToFrench(date, showTime = true) {
  if (!(date instanceof Date)) {
      throw 'Error: date must be a Date object!';
  }

  const [day, month, hour, minute, second] =
      [
          date.getDate(),
          date.getMonth()+1,
          date.getHours(),
          date.getMinutes(),
          date.getSeconds()
      ].map(n => n.toString().padStart(2, '0'));


  return `${day}/${month}/${date.getFullYear()} ` + (showTime && `${hour}:${minute}:${second}`);
}



  /* 
  Commande botinfo 
  */


  // Message envoyer au joueur
  if (cmd === `${prefix}botinfo`){
    let cicon = client.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle(`► Information sur ${client.user.username} ◄`)
    .setColor(`#00FFFF`)  
    .setThumbnail(cicon)
    .setFooter(footer)
    .addField(`Nom du bot :`, client.user.username)
    .addField(`Créé par :`, "Clashoux | Romain P.#1045")
    .addField(`Créé le :`, formatDateToFrench(client.user.createdAt))
    .addField(`Id du bot :`, client.user.id)
    .addField(`Demandé par :`, message.author.tag)
    message.channel.send(botembed)
    
    // Logs de la commandes botinfo
    let uicon = message.author.displayAvatarURL;
    const embed = new Discord.RichEmbed()
    .setTitle(`► Logs DestinyLife ◄`)
    .setDescription(`Un utilisateur a exécuté la commandes ${prefix}botinfo`)
    .setColor('#F6B30F')
    .setFooter(footer)
    .setThumbnail(uicon)
    .addField(`Nom de l'utilisateur :`, message.author.username)
    .addField(`Tag de l'utilisateur :`, message.author.tag)
    .addField(`ID utilisateur :`, message.author.id)
    message.guild.channels.get(`475845550412005376`).send(embed)

    message.delete().catch(O_o=>{});
    return;

  }



  /* 
  Commande serverinfo 
  */


  if(cmd === `${prefix}serverinfo`){
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setTitle(`► Information sur le serveur ${message.guild.name} ◄`)
    .setColor(`#00FFFF`)
    .setThumbnail(sicon)
    .setFooter(footer)
    .addField(`Nom du serveur :`, message.guild.name)
    .addField(`Propriétaire du serveur :`, message.guild.owner)
    .addField(`Créé le :`, formatDateToFrench(message.guild.createdAt))
    .addField(`Régions du serveur :`, message.guild.region)
    .addField(`Membre total du serveur :`, message.guild.memberCount)
    .addField(`Nombre de role :`, `En développement`)
    .addField(`Nombre d'humain sur le serveur :`, `En développement`)
    .addField(`Nombre de bot sur le serveur :`, `En développement`)
    .addField(`Id du serveur :`, message.guild.id)
    .addField(`Id du créateur :`, message.guild.ownerID)
    .addField(`Demandé par :`, message.author.username)
    message.channel.send(serverembed)

    // Logs de la commandes serverinfo
    let uicon = message.author.displayAvatarURL;
    const embed = new Discord.RichEmbed()
    .setTitle(`► Logs DestinyLife ◄`)
    .setDescription(`Un utilisateur a exécuté la commandes ${prefix}serverinfo`)
    .setColor('#F6B30F')
    .setFooter(footer)
    .setThumbnail(uicon)
    .addField(`Nom de l'utilisateur :`, message.author.username)
    .addField(`Tag de l'utilisateur :`, message.author.tag)
    .addField(`ID utilisateur :`, message.author.id)
    message.guild.channels.get(`475845550412005376`).send(embed)
    
    message.delete().catch(O_o=>{});
    return;
  }



  /*
  commande userinfo
  */


 if(cmd === `${prefix}userinfo`){
  let muser = message.guild.member(message.mentions.users.first());
  if(!muser){
    let users = message.author
    let uicon = users.displayAvatarURL;
    let gameName = users.presence.game ? users.presence.game.name : "Aucun jeu actuellement !";
    const guildMember = message.member;
    let datejoinguild = new Date(guildMember.joinedAt);
    let status = users.presence.status;
    if(status === "online"){
      var statul = "En ligne"
    } else if(status === "idle"){
      var statul = "Absent"
    } else if(status === "dnd"){
      var statul = "Ne pas déranger"
    } else if(status === "offline"){
      var statul = "Hors Ligne"
    }
    if(message.member.roles.find(`name`, `👑 ● Administrateur`)){
      var srole = "👑 ● Administrateur"
    }else if(message.member.roles.find(`name`, `✨ ● Ami(e)`)){
      var srole = "✨ ● Ami(e)"
    }else if(message.member.roles.find(`name`, `⭐ ● Responsable Équipe`)){
      var srole = "⭐ ● Responsable Équipe"
    }else if(message.member.roles.find(`name`, `🌟 ● Gérant Projet`)){
      var srole = "🌟 ● Gérant Projet"
    }else if(message.member.roles.find(`name`, `👥 ● Équipe de Modération`)){
      var srole = "👥 ● Équipe de Modération"
    } else {
      var srole = "Utilisateur"
    }
    const userembed = new Discord.RichEmbed()
    .setTitle(`► Information sur ${users.username} ◄`)
    .setColor(`#00FFFF`)
    .setFooter(footer)
    .setThumbnail(uicon)
    .addField(`Pseudo :`, `${users.username}#${users.discriminator}`)
    .addField(`Role :`, srole)
    .addField(`Projet suivi :`, `En développement`)
    .addField(`Niveau`, `En développement`)
    .addField(`XP`, `En développement`)
    .addField(`Date d'arrivée :`, formatDateToFrench(datejoinguild))
    .addField(`Date de création du compte :`, formatDateToFrench(users.createdAt))
    .addField(`Joue à :`, gameName)
    .addField(`Statut de l'utilisateur :`, statul)
    .addField(`Id de l'utilisateur :`, users.id)
    message.channel.send(userembed);
    message.delete().catch(O_o=>{});
    console.log(srole)
    return;

  } else {
    let users = message.mentions.users.first();
    let uicon = users.displayAvatarURL;
    let gameName = users.presence.game ? users.presence.game.name : "Aucun jeu actuellement !";
    const guildMember = message.mentions.members.first();
    let datejoinguild = new Date(guildMember.joinedAt);    
    let status = users.presence.status;
    if(status === "online"){
      var statul = "En ligne"
    } else if(status === "idle"){
      var statul = "Absent"
    } else if(status === "dnd"){
      var statul = "Ne pas déranger"
    } else if(status === "offline"){
      var statul = "Hors Ligne"
    }
    const userembed = new Discord.RichEmbed()
    .setTitle(`► Information sur ${users.username} ◄`)
    .setColor(`#00FFFF`)
    .setFooter(footer)
    .setThumbnail(uicon)
    .addField(`Pseudo :`, users.username)
    .addField(`Membre du Staff :`, `En développement`)
    .addField(`Projet suivi :`, `En développement`)
    .addField(`Niveau`, `En développement`)
    .addField(`XP`, `En développement`)
    .addField(`Date d'arrivée :`, formatDateToFrench(datejoinguild))
    .addField(`Date de création du compte :`, formatDateToFrench(users.createdAt))
    .addField(`Joue à :`, gameName)
    .addField(`Statut de l'utilisateur :`, statul)
    .addField(`Id de l'utilisateur :`, users.id)
    .addField(`Demandé par :`, message.author.username)
    message.channel.send(userembed);
    message.delete().catch(O_o=>{});
  }
    // Logs de la commandes userinfo
    let aicon = message.author.displayAvatarURL;
    const embed = new Discord.RichEmbed()
    .setTitle(`► Logs DestinyLife ◄`)
    .setDescription(`Un utilisateur a exécuté la commandes ${prefix}userinfo`)
    .setColor('#F6B30F')
    .setFooter(footer)
    .setThumbnail(aicon)
    .addField(`Nom de l'utilisateur :`, message.author.username)
    .addField(`Tag de l'utilisateur :`, message.author.tag)
    .addField(`ID utilisateur :`, message.author.id)
    message.guild.channels.get(`475845550412005376`).send(embed) 
    return;  
}



 /* 
  Commande info{nomduprojet} 
  */

// Info SwiftHeberg
 if(cmd === `${prefix}infodestinyrp`){
  let serverembed = new Discord.RichEmbed()
  .setTitle(`► Information sur le projet DestinyRP ◄`)
  .setColor(`#00FFFF`)
  .setFooter(footer)
  .addField(`Nom du projet :`, `DestinyRP`)
  .addField(`Gérant du projet :`, `En développement`)
  .addField(`Nombre de personne suivent le projet :`, `En développement`)
  .addField(`Statut du projet`, cmessage.statutdestinyrp)
  .addField(`Site du serveur :`, cmessage.sdestinyrp)
  .addField(`Ip du serveur :`, cmessage.ipdestinyrp)
  .addField(`TeamSpeak du serveur :`, cmessage.tsdestinyrp)
  .addField(`Demandé par :`, message.author.username)
  message.channel.send(serverembed)

  // Logs de la commandes infoswiftheberg
  let uicon = message.author.displayAvatarURL;
  const embed = new Discord.RichEmbed()
  .setTitle(`► Logs DestinyLife ◄`)
  .setDescription(`Un utilisateur a exécuté la commandes ${prefix}infodestinyrp`)
  .setColor('#F6B30F')
  .setFooter(footer)
  .setThumbnail(uicon)
  .addField(`Nom de l'utilisateur :`, message.author.username)
  .addField(`Tag de l'utilisateur :`, message.author.tag)
  .addField(`ID utilisateur :`, message.author.id)
  message.guild.channels.get(`475845550412005376`).send(embed)
  
  message.delete().catch(O_o=>{});
  return;
 }
   // Info DestinyPayout
   if(cmd === `${prefix}infodestinypayout`){
    let serverembed = new Discord.RichEmbed()
    .setTitle(`► Information sur le projet DestinyPayout ◄`)
    .setColor(`#00FFFF`)
    .setFooter(footer)
    .addField(`Nom du projet :`, `DestinyPayout`)
    .addField(`Gérant du projet :`, `En développement`)
    .addField(`Nombre de personne suivent le projet :`, `En développement`)
    .addField(`Statut du projet`, cmessage.statutdestinypayout)
    .addField(`Site du serveur :`, cmessage.sdestinypayout)
    .addField(`Demandé par :`, message.author.username)
    message.channel.send(serverembed)
  
    // Logs de la commandes infodestinypayout
    let uicon = message.author.displayAvatarURL;
    const embed = new Discord.RichEmbed()
    .setTitle(`► Logs DestinyLife ◄`)
    .setDescription(`Un utilisateur a exécuté la commandes ${prefix}infodestinypayout`)
    .setColor('#F6B30F')
    .setFooter(footer)
    .setThumbnail(uicon)
    .addField(`Nom de l'utilisateur :`, message.author.username)
    .addField(`Tag de l'utilisateur :`, message.author.tag)
    .addField(`ID utilisateur :`, message.author.id)
    message.guild.channels.get(`475845550412005376`).send(embed)
    
    message.delete().catch(O_o=>{});
    return;
   }

});

// Message de Bienvenue + Logs Join

// Message de Bienvenue
client.on("guildMemberAdd", member =>{
  const usern = member.user;
  const guildn = member.guild;
  member.guild.channels.get('460244711668449310').sendMessage(`Bienvenue à ${usern} sur le Discord **${guildn}** ! Faites-lui un bon accueil ! Je t'invite à lire attentivement le ${client.channels.find("id", "460244640076005386")} pour ne pas te prendre une sanction. \n Si tu veut en savoir plus sur nos projets n’hésite pas à les posés au s'équipe d'assistance ou de modération en faisant un ticket -new {Question/Raison} Si tu veux avoir suivre un projet plus en détailles ${client.channels.find("id", "475705472469696512")} :smiley:`)

  // Auto Role - Nouveau
  let role = member.guild.roles.find("name", "👤 ● Visiteur");
  member.addRole(role).catch(console.error);

  //Logs de join 
  let uicon = member.user.displayAvatarURL;
  const embed = new Discord.RichEmbed()
  .setTitle(`► Logs DestinyLife ◄`)
  .setDescription(`Un utilisateur a rejoint le discord`)
  .setColor('#36EE09')
  .setFooter(footer)
  .setThumbnail(uicon)
  .addField(`Nom de l'utilisateur :`, member.user)
  .addField(`Tag de l'utilisateur :`, member.user.tag)
  .addField(`ID utilisateur :`, member.user.id)
  member.guild.channels.get(`475845550412005376`).send(embed).catch(err => console.log(err))
  return;
});
// Logs Left 
client.on("guildMemberRemove", member =>{
  let uicon = member.user.displayAvatarURL;
  const embed = new Discord.RichEmbed()
  .setTitle(`► Logs DestinyLife ◄`)
  .setDescription(`Un utilisateur a quité le discord`)
  .setColor('#ff3300')
  .setFooter(footer)
  .setThumbnail(uicon)
  .addField(`Nom de l'utilisateur :`, member.user)
  .addField(`Tag de l'utilisateur :`, member.user.tag)
  .addField(`ID utilisateur :`, member.user.id)
  member.guild.channels.get(`475845550412005376`).send(embed).catch(err => console.log(err))
  return;
});



// Login du bot grace au token
client.login(process.env.TOKEN);
