const Discord = require('discord.js');
const bot = new Discord.Client();
const token = process.env.token // a garder en version heroku
const prefix = ("?");

bot.on('ready', function () {
    console.log("Je suis prêt à être utilisé.")
    bot.user.setActivity('rien').catch(console.error)
    
    static void UpdatePresence()
    {
        DiscordRichPresence discordPresence;
        memset(&discordPresence, 0, sizeof(discordPresence));
        discordPresence.state = "Playing Solo";
        discordPresence.details = "Competitive";
        discordPresence.startTimestamp = 1507665886;
        discordPresence.endTimestamp = 1507665886;
        discordPresence.largeImageText = "Numbani";
        discordPresence.smallImageText = "Rogue - Level 100";
        discordPresence.partyId = "ae488379-351d-4a4f-ad32-2b9b01c91657";
        discordPresence.partySize = 1;
        discordPresence.partyMax = 5;
        discordPresence.spectateSecret = "MTIzNDV8MTIzNDV8MTMyNDU0";
        discordPresence.joinSecret = "MTI4NzM0OjFpMmhuZToxMjMxMjM= ";
        Discord_UpdatePresence(&discordPresence);
    }
});

  


bot.login(token); //a garder en version heroku
