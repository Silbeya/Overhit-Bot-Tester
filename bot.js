const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {

    console.log('I am ready!');

});

//COMMANDS
client.on('message', msg => {
    if (msg.content === '.test') {
    	msg.reply('test good');
    } 
     
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot 
