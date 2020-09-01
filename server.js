const Discord = require("discord.js");
const bot = new Discord.Client();

const prefix = "$";

bot.on('ready', () => {
    console.log(`Bot ready`);
});

bot.on('message', msg => {
    let args = msg.content.substring(prefix.length).split(" ");

    if (!msg.content.startsWith(prefix)) return;
    if (msg.author.bot) return;

    switch(args[0]) {
        case "hbd":
            const embed = new Discord.MessageEmbed()

            .setTitle("Happy Birthday To Big A! (AKA Ahnaf)  🥳")
            .setDescription("On your birthday may your spirit be enriched in light, love, and hope for a prosperous year ahead. Live long you hoodlum! ")
            .setColor("BLUE")
            .setImage("https://firebasestorage.googleapis.com/v0/b/nomical.appspot.com/o/Screenshot%202020-09-01%20at%2010.07.29%20AM.png?alt=media&token=bae66f09-8f2d-41af-9092-2abea78c006b")

            msg.channel.send(embed);
            break;
    }
});

bot.login(process.env.TOKEN);