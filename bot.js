const Discord = require("discord.js") 
const settings = require("./your_settings.json")
const client = new Discord.Client()
client.on('ready', async => {
console.log("Rainbow bot is ready!" + "\n" + client.user.tag + "\n" + "Server Count: "  + client.guilds.size + "\n" + "Cached users: " + client.users.size + "\n" + "Enjoy!")
client.user.setActivity("server  I =help",  {type: "WATCHING"})
});
client.on('message', message => {
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    /*
    if(command === settings.prefix + settings.rainbowcommand) {
        const rolez = message.mentions.roles.first() || message.guild.roles.find(r=> r.name === args [0])
        if(!rolez) return message.channel.send(settings.messageresponse.rolenotfound).catch(err=> message.channel.send("No response"))
        if(!message.guild.member(client.user.id).hasPermission("MANAGE_ROLES")) return message.channel.send(settings.messageresponse.missingperm).catch(err=> message.channel.send("no response"))
        var colors = settings.rainbowrole
        var rolestart = setInterval(function() {
            var colorsz = colors[Math.floor(Math.random() * colors.length)];
            rolez.setColor(colorsz)
        }, settings.rainbowdelay); 
            message.channel.send(settings.messageresponse.success).catch(err=> message.channel.send("No response"))

    }
    */
    if(command === settings.prefix + settings.rainbowstop) {
            setTimeout(function () {
           process.exit()
            }, 10000);
           
                       message.channel.send(settings.messageresponse.rainbowstop).catch(err=> message.channel.send("No response"))
                       }

        if(command == "help")
{
    message.reply("вот помощь: \n***главное***\n**=rainbow @роль** - \`запустить изменение роли. (не работает из за правила дискорда), \n =invite - пригласить бота на сервер, \n =stop - \`отключить изменение роли`, \n **=8ball**- \`шар предсказаний, \n =info - `информация о боте` `");
    
}
        if(command == "invite")
{
    message.reply(`пригласить бота: \`https://discordapp.com/oauth2/authorize?client_id=557279829804711941&scope=bot&permissions=2146958591\``);

}
        if(command == "8ball")

{
var fortunes = [
    "Без сомннения!",
    "да",
    "без сомнения!",
    "неа",
    "не совсем",
    "абсолютно!",
    "абсолютно нет",
    "нет",
    "неееет",
    "я вообще не знаю.."
]
if (args[0]) message.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
}


        if(command == "info")
{
    message.reply("первый создатель бота RAINBOW: \n `весений пикачу channel#8567` \n второй создатель бота RAINBOW: ``")
    
}
});

//{         
          
//   message.channel.send(settings.messageresponse.rainbowstop).catch(err=> message.channel.send("No response"));
//                      }
//});

        
        
//});
client.login("NTU3Mjc5ODI5ODA0NzExOTQx.D3vyZA.CCuT1WMbUMXZ0mU0YPR6BaI7bBs")
