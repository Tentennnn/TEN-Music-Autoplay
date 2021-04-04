const Discord = require("discord.js")

module.exports = {
  name: "help",
  aliases: ["h", "cmd", "command"],
  run: async (client, message, args) => {
    let embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setThumbnail("https://cdn.discordapp.com/attachments/700871396540284978/828276493418758154/giphy_1.gif")
      .setTitle(`Commands`)
      .setDescription(client.commands.map(cmd => `\`${cmd.name}\``).join(", "))
      .setTimestamp()
    message.channel.send(embed)
  }
}
