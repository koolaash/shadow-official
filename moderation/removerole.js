const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "removerole",
  aliases: ["rrole", "-role"],
  category: "moderation",
  description: "Remove role from any user",
  run: async (client, message, args) => {
    let target = message.mentions.members.first();

    if (!target) return message.reply(`I am unable to find the user`);

    let rrole = message.mentions.roles.first();

    if (!rrole) return message.reply(`I am unable to find the role`);

    if (message.guild.me.roles.highest.position <= rrole.position)
      return message.reply(
        `My Role Isn\'t High Enough to Remove the Role ${rrole}`
      );

    if (message.member.roles.highest.position <= rrole.position)
      return message.reply(
        `Your Role isn't High Enough to Remove The Role! ${rrole.name}`
      );

    if (!rrole) return message.reply(`<:no: please m+ention role for add!`);
    if (message.guild.me.roles.highest.position <= rrole.position)
      return message.reply(
        `My Role Isn\'t High Enough to Remove the Role ${rrole}`
      );

    let ticon = target.user.avatarURL({ dynamic: true, size: 2048 });
    let aicon = message.author.avatarURL({ dynamic: true, size: 2048 });

    const embed = new MessageEmbed()

      .setThumbnail(target.user.displayAvatarURL({ dynamic: true }))
      .setColor("RED")
      .setTitle("ROLE UPDATE")
      .setDescription(
        `<a:tick1:764199777281114133> | ${rrole} role removed from ${target}`
      )
      .setFooter(`Role added by ${message.author.username}`, aicon)
      .setTimestamp();

    await message.channel.send(embed);

    target.roles.remove(rrole);
  }
};
