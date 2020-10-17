const Discord = require("discord.js");
module.exports = {
  name: "emb",
  desciption: "say command",
  category: "fun",
  usage: "emb <message>",
  async run(client, message, args) {
    const sayMessage = args.join(" ");
    message.delete().catch(err => console.log(err));

    const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(sayMessage)
      .setFooter(`${message.author.username}`)
      .setTimestamp();

    try {
      message.channel.send(embed);
    } catch {
      message.reply("Something Went Wrong");
    }
  }
};
