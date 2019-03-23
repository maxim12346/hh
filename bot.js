const Discord = require("discord.js")
const settings = require("./your_settings.json")
const client = new Discord.Client()

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
      }
);
client.on('message', message => {
    const args = message.content.slice(settings.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if(message.user.bot || ! message.content.startsWith(settings.prefix)) return;
    if(command === settings.rainbowcommand) {
        const rolez = message.mentions.roles.first() || message.guild.roles.find(r=> r.name === args[0])
        if(!rolez) return message.channel.send(settings.messageresponse.rolenotfound).catch(err=> message.channel.send("No response"))
        if(!message.guild.member(client.user.id).hasPermission("MANAGE_ROLES")) return message.channel.send(settings.messageresponse.missingperm).catch(err=> message.channel.send("no response"))
        var colors = settings.rainbowrole
        var rolestart = setInterval(function() {
            var colorsz = colors[Math.floor(Math.random() * colors.length)];
            rolez.setColor(colorsz).catch();
        }, settings.rainbowdelay); 
            message.channel.send(settings.messageresponse.success).catch(err=> message.channel.send("No response"))

    }
    if(command === settings.rainbowstop) {
            setTimeout(function () {
           process.exit()
            }, 5000);
            message.channel.send(settings.messageresponse.rainbowstop).catch(err=> message.channel.send("No response"))
        }
    
        if(command == 'help')
               {
                   message.reply("вот помощь: \n***главное***\n**=rainbow @роль** - \`запустить изменение роли., \n=invite - пригласить бота на сервер, \n =stop `отключить изменение роли `");
                   
               }
        if(command == 'invite')
               {
                   message.reply(`пригласить бота: \`https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=2146958591\``);
   
               }             if(command == '8ball')

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
            });
   //{         
                         
    //   message.channel.send(settings.messageresponse.rainbowstop).catch(err=> message.channel.send("No response"));
    //                      }
            //});
           
                       
                       
//});
client.login("NTU3Mjc5ODI5ODA0NzExOTQx.D3fVuA.oYMoa1Jdd15sm_VXdgIey3fJC1g")
