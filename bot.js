const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {

    console.log('I am ready!');

});

// SAMPLE CODE
// client.on('message', msg => {
//    if (msg.content === 'gr.esta') {
//    	msg.reply('my gun says:');
//  	}
// });

//SSR HEROES

//Aglaea
client.on('message', msg => {
    if (msg.content === 'gr.aglaea') {
    	msg.reply('my gun says: \n \n **Frostbite** \n [Status Effect]: Inflict Freeze for 18s when Active Skills are triggered. (Success Rate: 10%.)[Passive Effect]: Increase the ATK of allies in the same row by 11,6%');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.aglaea') {
    	msg.reply('my gun says: \n \n **White Freeze - cd 78s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 315,9% of ATK to Enemy x3. (Sequentially attack Enemy x3.) \n :white_small_square:[Status Effect]: Inflict Chill that deals damage equal to 4,3% of ATK every 4s for 36s. (Success Rate: 30%.) \n Level 6: \n :white_small_square:[Regular Damage]: Deal damage equal to 466,5% of ATK to Enemy x3. (Sequentially attack Enemy x3.) \n :white_small_square:[Status Effect]: Inflict Chill on Enemy x3 that deals damage equal to 4,8% of ATK every 4s for 36s. (Success Rate: 100%.) \n \n **Gunnar's Comet - cd 105s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 305,5% of ATK to Enemy x1. (Guaranteed critical.) \n :white_small_square:[Additional Damage]: Deal fixed damage of 790 to enemies affected by Chill. \n Level 6: \n :white_small_square:[Regular Damage]: Deal damage equal to 427,8% of ATK to Enemy x1. (Guaranteed critical.) \n :white_small_square:[Additional Damage]: Deal fixed damage of 3871 to enemies affected by Chill.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.aglaea') {
    	msg.reply('my gun says: \n \n **Leader Skill** \n **Level 1** \n Increase ATK of Physical-Type Allies by 20%. Increase Crit DMG of Physical-Type Allies by 10%. \n \n **Level 2** \n Not enough data...need more gunpowder!');
  	}
});

//Esta
client.on('message', msg => {
    if (msg.content === 'gr.esta') {
    	msg.reply('my gun says: \n \n **Bullet Carnival** \n [Debuff]: Decrease Block Rate of Hit Target by 9,9% when Active Skills are triggered. (Duration: 30s,)[Passive Effect]: increase Crit Rate of Self by 7,6%.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.esta') {
    	msg.reply('my gun says: \n \n **Scattershot - cd 55s** \n Level 1:\n :white_small_square:[Regular Damage]: Deal damage equal to 169,8% of ATK to Enemy x3 \n Level 6: \n :white_small_square:[Regular Damage]: Deal damage equal to 250,3% of ATK to Enemy x3. \n :white_small_square:[Additional Damage]: Deal additional damage equal to 120,3% of ATK to enemies with HP that is 50% or lower. \n :white_small_square:[Buff]: Increase Damage of Self by 27,7%. (Duration: 60s.) \n \n **Incendiary Shot - cd 100s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 177,2% of ATK to Enemy x3. \n :white_small_square:[Additional Damage]: Deal fixed damage of 414 to Enemy x1. \n Level 6: \n :white_small_square:[Regular Damage]: Deal damage equal to 261,7% of ATK to Enemy x3. \n :white_small_square:[Additional Damage]: Deal fixed damage of 2027 to Enemy x1. \n :white_small_square:[Status Effect]: Inflict Burn on Enemy x3 dealing DMG equal to 24,2% of ATK every 10s for 20s. (Success Rate: 50%.)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.esta') {
    	msg.reply('my gun says: \n \n **Leader Skill** \n **Level 1** \n Increase ATK of Physical-Type allies by 30% \n \n **Level 2** \n Increase ATK of Physical-Type allies by 50%');
  	}
});



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot 
