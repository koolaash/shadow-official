const { MessageFlags } = require("discord.js");

module.exports = {
  name: "say",
  desciption: "say command",
  category: "fun",
  usage: "say <message>",

  async run(client, message, args) {
    if (message.author.id !== "672027578181353473")
      return message.channel.send("This command can only be used by owner");
    let msg;
    let textChannel = message.mentions.channels.first();
    message.delete();

    if (textChannel) {
      msg = args.slice(1).join(" ");
      textChannel.send(msg);
    } else {
      msg = args.join(" ");
      message.channel.send(msg);
    }
  }
};
