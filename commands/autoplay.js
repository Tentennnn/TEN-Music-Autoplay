const Discord = require("discord.js")

module.exports = {
  name: "autoplay",
  aliases: ["ap"],
  run: async (client, message, args) => {
    let mode = client.distube.toggleAutoplay(message);
    message.channel.send("Set autoplay mode to `" + (mode ? "On" : "Off") + "`");
  }
}
