const Discord = require("discord.js")

module.exports = {
  name: "invite",
  aliases: ["inv"],
  run: async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`Extra Links and Information`, "https://cdn.discordapp.com/attachments/717095581394403379/828557691491188736/bow.gif")
    .setDescription(`
Hello I am **${client.user.username}**,
I am a bot from Cambodia.
I made it with JavaScript programming language with discord.js as a framework,
don't forget to follow my social media

Invite the bot [ [Click Here](https://discord.com/oauth2/authorize?client_id=${client.id}&scope=bot&permissions=2148846673) ], Join support server [ [click here](https://discord.gg/VYRyTJ3) ]
    `)
    message.channel.send(embed);
    message.react("📄")
 }
}