const Discord = require("discord.js")

module.exports = {
  name: "filter",
  aliases: ["f"],
  run: async (client, message, args) => {
    if ([`3d`, `bassboost`, `echo`, `karaoke`, `nightcore`, `vaporwave`].includes(command)) {
        let filter = distube.setFilter(message, command);
        message.channel.send("Current queue filter: " + (filter || "Off"));
    }
 }
}