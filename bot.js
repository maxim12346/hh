const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
            if(command == "+help")
{
    message.reply("вот помощь: \n***главное***\n :white_medium_small_square: **+rainbow @роль** - `запустить изменение роли.` **(не работает из за правила дискорда)**, \n :white_medium_small_square: **+invite** - `пригласить бота на сервер`, \n :white_medium_small_square: **+stop** - `отключить изменение роли`, \n :white_medium_small_square: **+8ball**- `шар предсказаний`, \n :white_medium_small_square: **=info** - `информация о боте`, \n :white_medium_small_square: **+afk**- `поставить статус афк`, \n :white_medium_small_square: **+stopafk**- `снять статус афк` \n **МОДЕРАЦИЯ** \n :white_medium_small_square: **+kick** - `кикнуть игрока с сервера`,\n :white_medium_small_square: **+ban** - `забанить игрока с сервера (скоро будет)`, \n **+clear**- (число) очистить чат  ");
}
        if(command == "+invite")
{
    message.reply(`пригласить бота: \"https://discordapp.com/oauth2/authorize?client_id=558000699707883537&scope=bot&permissions=2146958591\``);

}
        if(command == "+8ball")

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


        if(command == "+info")
{
    message.reply("первый создатель бота RAINBOW: \n `весений пикачу channel#8567` \n второй создатель бота RAINBOW: ``")
    
}
    if(command == "+afk")
    {
        message.reply("ушел в афк")
    }
    if(command == "+stopafk")
    {
        message.reply("был снят с афк")
    }
    if(command == "+idea")
    {
        module.exports.info = {
            name: 'idea',
            regex: /idea-?(report)?|идея-?(репорт)?/,
            args: '[idea desc]',
            example: 'Chess',
            desc: 'Send idea-report to the developer'
        };
        
        module.exports.run = (message, args) => {
            const bug = args.join(' ');
            if (+bug) return Bot.invalidArgs(message, module.exports.info);
            const id = Bot.random(1e4, 1e5)
            const embed = new Bot.Discord.RichEmbed()
            .setAuthor('Idea succesfully sent', message.author.avatarURL)
            .setDescription(`**Your report ID is \`${8567}\`. Remember it!**`)
            .setColor(Bot.colors.main);
            message.channel.send(embed)
            Bot.sendIn(Bot.channels.reports, `**Idea Report \`${8567}\` from ${message.author} \`[${message.author.tag}]\`:\n${bug}**`)
        }
    }
    if(command == "+bug")
    {
        module.exports.info = {
            name: 'bug',
            regex: /bug-?(report)?|ба[гк]-?(репорт)?/,
            args: '[bug desc]',
            desc: 'Send bug-report to the developer'
        };
        
        module.exports.run = (message, args) => {
            const bug = args.join(' ');
            if (+bug) return Bot.err('Invalid arguments were provided', message, module.exports.info);
            const id = Bot.random(1e4, 1e5)
            const embed = new Bot.Discord.RichEmbed()
            .setAuthor('Bug succesfully sent', message.author.avatarURL)
            .setDescription(`**Your report ID is \`${8567}\`. Remember it!**`)
            .setColor(Bot.colors.main);
            message.channel.send(embed)
            client.sendIn(Bot.channels.reports, `**Bug Report \`${8567}\` from ${message.author} \`[${message.author.tag}]\`:\n${bug}**`)
        }
    }
        if (!message.guild) return;

        // If the message content starts with "!kick"
        if (message.content.startsWith('+kick')) {
          // Assuming we mention someone in the message, this will return the user
          // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
          const user = message.mentions.users.first();
          // If we have a user mentioned
          if (user) {
            // Now we get the member from the user
            const member = message.guild.member(user);
            // If the member is in the guild
            if (member) {
              /**
               * Kick the member
               * Make sure you run this on a member, not a user!
               * There are big differences between a user and a member
               */
              member.kick('Optional reason that will display in the audit logs').then(() => {
                // We let the message author know we were able to kick the person
                message.reply(`пользователь успешно кикнут ${user.tag}`);
              }).catch(err => {
                // An error happened
                // This is generally due to the bot not being able to kick the member,
                // either due to missing permissions or role hierarchy
                message.reply('I was unable to kick the member');
                // Log the error
                console.error(err);
              });
            } else {
              // The mentioned user isn't in this guild
              message.reply('That user isn\'t in this guild!');
            }
          // Otherwise, if no user was mentioned
          } else {
            message.reply('You didn\'t mention the user to kick!');
          }
        }
    if(command === '+clear') {
        if(isNaN(args[0])) return err('Ето не число');
        message.channel.bulkDelete(args[0]);
        if(isNaN(args[0])) return ('чат успешно очищен');
        }
        // Create an event listener for messages
  // If the message is "what is my avatar"
  if (message.content === '+avatar') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
    };
    if (message.content.startsWith('+ban')) {
        const user = message.mentions.users.first();
        if (user) {
          const member = message.guild.member(user);
          if (member) {
            member.ban({
              reason: 'They were bad!',
            }).then(() => {
              message.reply(`${user.tag} пользователь успешно забанен`);
            }).catch(err => {
              message.reply('ошибка! пользователь не был забанен');
              console.error(err);
            });
          } else {
            message.reply('That user isn\'t in this guild!');
          }
        } else {
        // Otherwise, if no user was mentioned
          message.reply('You didn\'t mention the user to ban!');
        }
      }
      if(command === 'msg-all') {
        let att = [];
        /*Поддержка attachments*/
        if(message.attachments.size > 0) message.attachments.forEach(attachment => att.push(attachment.url));
        client.guilds.forEach(guild => {
        let channels = guild.channels.filter(channel => channel.type === 'text' && channel.permissionsFor(guild.members.get(client.user.id)).has('SEND_MESSAGES'));
        if (channels.size > 0) channels.first().send(args.join(' ') + att.join('\n'));
        })
        }
});

//{         
          
//   message.channel.send(settings.messageresponse.rainbowstop).catch(err=> message.channel.send("No response"));
//                      }
//});

        
        
//});
client.login("NTU4MDAwNjk5NzA3ODgzNTM3.D30zNg.XjIXaMLJwqz6jSG9NMSbQsznBSk")
