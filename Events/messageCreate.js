const Discord = require("discord.js");

module.exports  = async (bot, message) => {

    let prefixe = "?";
    let messageArray = message.content.split(" ")
    let commandName = messageArray[0].slice(prefixe.length)
    let args = messageArray.slice(1)

    if (!message.content.startsWith(prefixe)) return;

    let command = require(`../Commandes/${commandName}`)
    if (command) return message.reply("Y'a pas de commande !")

    command.run(bot, message, args)
}