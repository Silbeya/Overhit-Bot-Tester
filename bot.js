const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {

    console.log('I am ready!');

});

// HEROES
//ESTA
client.on('message', msg => {
    if (msg.content === 'gr.esta') {
    	msg.reply('my gun says: \n \n **Bullet Carnival** \n [Debuff]: Decrease Block Rate of Hit Target by 9,9% when Active Skills are triggered. (Duration: 30s,)[Passive Effect]: increase Crit Rate of Self by 7,6%.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.esta') {
    	msg.reply('my gun says: \n \n **Scattershot - cd 55s** \n Level 1:\n :white_small_square:[Regular Damage]: Deal damage equal to 169,8% of ATK to Enemy x3 \n Level 6: \n :white_small_square:[Regular Damage]: Deal damage equal to 250,3% of ATK to Enemy x3. \n :white_small_square:[Additional Damage]: Deal additional damage equal to 120,3% of ATK to enemies with HP that is 50% or lower. \n :white_small_square:[Buff]: Increase Damage of Self by 27,7%. (Duration: 60s.) \n **Incendiary Shot - cd 100s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 177,2% of ATK to Enemy x3. \n :white_small_square:[Additional Damage]: Deal fixed damage of 414 to Enemy x1. \n Level 6: \n :white_small_square:[Regular Damage]: Deal damage equal to 261,7% of ATK to Enemy x3. \n :white_small_square:[Additional Damage]: Deal fixed damage of 2027 to Enemy x1. \n :white_small_square:[Status Effect]: Inflict Burn on Enemy x3 dealing DMG equal to 24,2% of ATK every 10s for 20s. (Success Rate: 50%.)');
  	}
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot 
