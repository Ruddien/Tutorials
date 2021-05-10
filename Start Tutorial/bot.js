const Discord = require('discord.js');
const bot = new Discord.Client;


bot.on
(`ready`, () => 
{
    console.log('Connected');
    bot.generateInvite({
    	permissions: ['ADMINISTRATOR'],
	})
  	.then(link => console.log(`Generated bot invite link: ${link}`))
    
}
)

bot.login('Ваш токен бота');


    