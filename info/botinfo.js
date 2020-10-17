const discord = require("discord.js");

module.exports = {
  name: "botinfo",
  category: "help",
  description: "INVITE SENPAI",
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()
      .setTitle(
        `__**INFORMATION ABOUT BOT**__ <a:2628_rainbowdown:764201083068743710>`
      )
      .addField("BOT NAME <a:vshield:764199958257336321>", `SHADOW OFFICIAL™`)
      .addField(
        "BOT DEVELOPER <a:vshield:764199958257336321>",
        `

<@672027578181353473>`
      )

      .addField(
        "BOT TEAM <a:vshield:764199958257336321>",
        ` <@479987197844652042> , <@663771450632568833> `
      )

      .addField(
        "TOTAL SERVER <a:vshield:764199958257336321>",
        `${client.guilds.cache.size} Guilds/Servers`,
        true
      )
      .addField(
        "TOTAL CHANNAL <a:vshield:764199958257336321>",
        `${client.channels.cache.size} Channels`
      )
      .addField(
        "TOTAL USER <a:vshield:764199958257336321>",
        `${client.users.cache.size} Users`,
        true
      )
      .addField("BOT LIBRARY <a:vshield:764199958257336321>", `discord.js`)
      .addField(
        "BOT LATENCY <a:vshield:764199958257336321>",
        `${client.ws.ping}ms`
      )
      .addField(
        "ADD BOT <a:vshield:764199958257336321>",
        `[CLICK HERE](https://discord.com/api/oauth2/authorize?client_id=758368489978462218&permissions=21474836398&scope=bot)`
      )

      .addField(
        "SUPPORT SERVER <a:vshield:764199958257336321>",
        `[CLICK HERE](https://discord.gg/wXemeVm)`
      )
      .setThumbnail(client.user.displayAvatarURL())
      .setColor("WHITE")
      .setTimestamp((message.timestamp = Date.now()))
      .setFooter(`BOT CREDIT :- ShaDoW`);

    message.channel.send(embed);
  }
};
