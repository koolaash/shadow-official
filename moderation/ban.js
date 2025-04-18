const discord = require("discord.js");

module.exports = {
  name: "ban",
  category: "moderation",
  description: "Ban anyone with one shot whithout knowing anyone xD",
  usage: "ban <@user> <reason>",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send(
        `**${message.author.username}**, You do not have perms to ban that user`
      );
    }

    if (!message.guild.me.hasPermission("BAN_MEMBERS")) {
      return message.channel.send(
        `**${message.author.username}**, I do not have perms to ban that user`
      );
    }

    const target = message.mentions.members.first();

    if (!target) {
      return message.channel.send(
        `**${message.author.username}**, Please mention the person who you want to ban.`
      );
    }

    if (!target) return message.reply(`<:no: please mention a member to ban!`);
    if (message.guild.me.roles.highest.position <= target.roles.position)
      return message.reply(
        `My Role Isn\'t High Enough to Ban The Member ${target}`
      );
    if (message.member.roles.highest.position <= target.roles.position)
      return message.reply(
        `Your Role isn't High Enough to  a member to ban! ${target}`
      );

    if (target.id === message.author.id) {
      return message.channel.send(
        `**${message.author.username}**, You can not ban yourself!`
      );
    }

    if (!args[1]) {
      return message.channel.send(
        `**${message.author.username}**, Please Give Reason To ban Member`
      );
    }

    let embed = new discord.MessageEmbed()
      .setTitle("Action : Ban")
      .setDescription(`Banned ${target} (${target.id})`)
      .setColor("#ff2050")
      .setThumbnail(target.avatarURL)
      .setFooter(`Banned by ${message.author.tag}`);

    message.channel.send(embed);
    target.ban(args[1]);
  }
};
