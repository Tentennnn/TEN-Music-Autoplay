module.exports = {
  name: "volume",
  aliases: ["v", "set", "set-volume"],
  run: async (client, message, args) => {
    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} | You must be in a voice channel!`)
    if (!client.distube.isPlaying(message)) return message.channel.send(`${client.emotes.error} | There is nothing playing!`)
    let volume = parseInt(args[0]);
    if (isNaN(volume)) return message.channel.send(`${client.emotes.error} | Please enter a valid number!`)
    client.distube.setVolume(message, volume);
    message.channel.send(`${client.emotes.success} | Volume set to \`${volume}\``)
  }
}
