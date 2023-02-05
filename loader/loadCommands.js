const fs = require("fs")

module.exports = async bot => {
    fs.readdirSync("./commandes").filter(f => f.endsWith(".js")).forEach(async file => {

        let command = require(`../commandes/${file}`)
        if (!command.name || typeof command.name !== "string") throw new TypeError(`La commande ${file.slice(0, file.length - 3)} n'a pas de nom !`) // file.length - 3 car ".js" fait 3 caracteres et on veut uniquement garder le nom
        bot.commands.set(command.name, command)
        console.log(`Commande ${file} chargée avec succès !`)
    })
}