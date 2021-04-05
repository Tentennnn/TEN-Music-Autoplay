const Discord = require("discord.js")
const config = require("../config.json");
const prefix = process.env.prefix || config.prefix;
module.exports = {
  name: "help",
  aliases: ["h", "cmd", "command"],
  run: async (client, message, args) => {
    let embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(`Commands of ${client.user.username}`, "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/Music.gif")
      .setDescription(`
      \`${prefix}help\`  ${config.altcode}  to show all commands
      \`${prefix}invite\`  ${config.altcode}  To add/invite the bot to your server
      \`${prefix}play\`  ${config.altcode}  To play songs :D
      \`${prefix}queue\`  ${config.altcode}  To show the server songs queue
      \`${prefix}repeat\`  ${config.altcode}  pg error fix hz jam tell XD
      \`${prefix}skip\`  ${config.altcode}  To skip the current music
      \`${prefix}stop\`  ${config.altcode}  To stop the music and clearing the queue
      \`${prefix}volume\`  ${config.altcode}  to show all commands
      \`${prefix}autoplay\`  ${config.altcode}  runing music 24h and auto play
      \`${prefix}filter\`  ${config.altcode}  make the sound music like babayaga @@
      `)
      .setTimestamp()
      .setFooter(`Made In Cambodia @@ | by Tentennnn#6944`)
    message.channel.send(embed)
  }
}

//      .setDescription(client.commands.map(cmd => `\`${cmd.name}\``).join(", "))