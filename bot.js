const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {

    console.log('I am ready!');

});

//COMMANDS
client.on('message', msg => {
    if (msg.content === '.test') {
   	    msg.reply('hi');
        }
});

client.on('message', msg => {
    if (msg.content === '.hi') {
        
const embed = new Discord.RichEmbed()
  .setTitle("This is your title, it can hold 256 characters")
  .setAuthor("Author Name", "https://i.imgur.com/lm8s41J.png")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number. 
   */
  .setColor(0xd213de)
  .setDescription("This is the main body of text, it can hold 2048 characters.")
  .setFooter("This is the footer text, it can hold 2048 characters", "http://i.imgur.com/w1vhFSR.png")
  .setThumbnail("http://i.imgur.com/p2qNFag.png");
 
  msg.reply('this:');
  msg.channel.send({embed});
  
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot 
