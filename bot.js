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
//  .setTitle("")
  .setAuthor("**Anemone**")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number. 
   */
  .setColor(0xd213de)
  .setDescription("\n \n Grimoire: \n **Frontline Jammer** \n [Passive Effect]: Deal additional damage equal to 18.9% of ATK to Magic-Type enemies. \n [Passive Effect]: When HP is 50% or lower, increase ATK of Self by 18.8%. (Success Rate: 100%. Duration 40s.) \n [Buff]: Upon Self KO, increase ATK of Ally x4 by 24.2%. (Success Rate: 100%. Duration: 40s. \n \n Skills: \n **Sky Destructor - cd 83s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 211% of ATK to Enemy x3. \n :white_small_square:[Status Effect]: Inflict Blind on Enemy x3 for 20s. (Success Rate: 50%) \n Level 6: \n :white_small_square:[Regular Damage] : Deal damage equal to 342.5% of ATK to Enemy x4 \n :white_small_square:[Status Effect] : Inflict Blind on Enemy x4 for 20s (Success Rate : 80%.) \n :white_small_square:[Blind] : Decrease Attack Success Rate by 50%. \n \n **Apocalypse Cannon - cd 100s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 158,2% of ATK to Enemy x5. \n :white_small_square:[Chain Effect]: Deal damage equal to 174,1% of ATK to enemies affected by Blind \n Level 6: \n :white_small_square:[Regular Damage] : Deal damage equal to 234.42% of ATK to Enemy x5. \n :white_small_square:[Additional Damage] : Deal fixed damage of 1424 to Enemy x5. \n :white_small_square:[Chain Effect] : Deal damage equal to 242% of ATK to enemies affected by Blind. \n \n Leader Skill:** \n **Level 1** \n For each type of Hero in your Team, the ATK of your heroes is boosted by 20%. \n \n **Level 2** \n Not enough data...need more gunpowder! \n Please DM @Silbeya 실베야#9810 if you have info on this to load gunpowder, thanks!")
  .setFooter("This is the footer text, it can hold 2048 characters", "http://i.imgur.com/w1vhFSR.png")
  .setThumbnail("http://i.imgur.com/p2qNFag.png");
 
  msg.reply('this:');
  msg.channel.send({embed});
  
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot 
