const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "addrole",
  aliases: ["role", "+role"],
  category: "moderation",
  description: "Add role to any user",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send(
        "sorry you need permission to give role to someone"
      );
    }

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("I do not have permission to give roles");
    }

    let target = message.mentions.members.first();

    if (!target)
      return message.reply(
        `<a:reddot:764199882189176843> please mention user!`
      );
    let arole = message.mentions.roles.first();

    if (message.guild.me.roles.highest.position <= arole.position)
      return message.reply(
        `My Role isn't High Enough to Assign The Role! ${arole.name}`
      );
    if (message.member.roles.highest.position <= arole.position)
      return message.reply(
        `Your Role isn't High Enough to Assign The Role! ${arole.name}`
      );

    if (!arole) return message.reply(`<:no: please mention role for add!`);
    if (message.guild.me.roles.highest.position <= arole.position)
      return message.reply(
        `My Role Isn\'t High Enough to Assign the Role ${arole}`
      );

    let ticon = target.user.avatarURL({ dynamic: true, size: 2048 });
    let aicon = message.author.avatarURL({ dynamic: true, size: 2048 });

    const embed = new MessageEmbed()

      .setThumbnail(target.user.displayAvatarURL({ dynamic: true }))
      .setColor("BLUE")
      .setTitle("ROLE UPDATE")
      .setFooter(`Role added by ${message.author.username}`, aicon)

      .setTimestamp()
      .setDescription(
        `<a:tick1:764199777281114133> | ${arole} added role to ${target.user}`
      );

    await message.channel.send(embed);

    target.roles.add(arole);
  }
};
