const Discord = require("discord.js") 
const settings = require("./your_settings.json")
const client = new Discord.Client()
client.on('ready', async => {
console.log("Rainbow bot is ready!" + "\n" + client.user.tag + "\n" + "Server Count: "  + client.guilds.size + "\n" + "Cached users: " + client.users.size + "\n" + "Enjoy!")
});
bot.on('message', message => {
