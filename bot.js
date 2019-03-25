const Discord = require("discord.js") 
const settings = require("./your_settings.json")
const client = new Discord.Client()
client.on('ready', async => {
console.log("Rainbow bot is ready!" + "\n" + client.user.tag + "\n" + "Server Count: "  + client.guilds.size + "\n" + "Cached users: " + client.users.size + "\n" + "Enjoy!")
});
bot.on('message', message => {
      const args = message.content.slice(settings.prefix.length).trim().split(/ +/g);
    //const poll = message.content.slice(prefix.length).trim().split(/;+/g);
    const command = args.shift().toLowerCase();
    if(message.user.bot || ! message.content.startsWith(settings.prefix)) return;
    if(command === settings.rainbowcommand) {
        const rolez = message.mentions.roles.first() || message.guild.roles.find(r=> r.name === args[0])
