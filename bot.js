const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {

    console.log('I am ready!');

});

//COMMANDS
//client.on('message', msg => {
//    if (msg.content === '.test') {
//   	  msg.reply('test good');
//    } 
     
//});

let prefix = "!";
client.on("message", msg => {
  // Exit and stop if the prefix is not there or if user is a bot
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;
 
  if (msg.content.startsWith(prefix + "ping")) {
    msg.channel.send("pong!");
  } else
  if (msg.content.startsWith(prefix + "foo")) {
    msg.channel.send("bar!");
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot 
