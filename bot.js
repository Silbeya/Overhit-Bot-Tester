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
  .setTitle("\n \n Grimoire: \n **Frontline Jammer** \n [Passive Effect]: Deal additional damage equal to 18.9% of ATK to Magic-Type enemies. \n [Passive Effect]: When HP is 50% or lower, increase ATK of Self by 18.8%. (Success Rate: 100%. Duration 40s.) \n [Buff]: Upon Self KO, increase ATK of Ally x4 by 24.2%. (Success Rate: 100%. Duration: 40s.")
  .setAuthor("**Anemone")
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
