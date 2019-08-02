const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {

    console.log('I am ready!');

});

//UR HEROES

//Anemone
client.on('message', msg => {
    if (msg.content === 'gr.anemone') {
    	msg.reply('my gun says: \n \n Not enough data...need more gunpowder!');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.anemone') {
    	msg.reply('my gun says: \n \n **Sky Destructor - cd 83s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 211% of ATK to Enemy x3. \n :white_small_square:[Status Effect]: Inflict Blind on Enemy x3 for 20s. (Success Rate: 50%) \n Level 6: \n :white_small_square:[Regular Damage] : Deal damage equal to 342.5% of ATK to Enemy x4 \n :white_small_square:[Status Effect] : Inflict Blind on Enemy x4 for 20s (Success Rate : 80%.) \n :white_small_square:[Blind] : Decrease Attack Success Rate by 50%. \n \n **Apocalypse Cannon - cd 100s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 158,2% of ATK to Enemy x5. \n :white_small_square:[Chain Effect]: Deal damage equal to 174,1% of ATK to enemies affected by Blind \n Level 6: \n :white_small_square:[Regular Damage] : Deal damage equal to 234.42% of ATK to Enemy x5. \n :white_small_square:[Additional Damage] : Deal fixed damage of 1424 to Enemy x5. \n :white_small_square:[Chain Effect] : Deal damage equal to 242% of ATK to enemies affected by Blind.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.anemone') {
    	msg.reply('my gun says: \n \n **Leader Skill:** \n **Level 1** \n For each type of Hero in your Team, the ATK of your heroes is boosted by 20%. \n \n **Level 2** \n Not enough data...need more gunpowder!');
  	}
});

//SSR HEROES

//Aglaea
client.on('message', msg => {
    if (msg.content === 'gr.aglaea') {
    	msg.reply('my gun says: \n \n **Imperial Bow** \n Grimoire \n **Frostbite** \n [Status Effect]: Inflict Freeze for 18s when Active Skills are triggered. (Success Rate: 10%.)[Passive Effect]: Increase the ATK of allies in the same row by 11,6%');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.aglaea') {
    	msg.reply('my gun says: \n \n **White Freeze - cd 78s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 315,9% of ATK to Enemy x3. (Sequentially attack Enemy x3.) \n :white_small_square:[Status Effect]: Inflict Chill that deals damage equal to 4,3% of ATK every 4s for 36s. (Success Rate: 30%.) \n Level 6: \n :white_small_square:[Regular Damage]: Deal damage equal to 466,5% of ATK to Enemy x3. (Sequentially attack Enemy x3.) \n :white_small_square:[Status Effect]: Inflict Chill on Enemy x3 that deals damage equal to 4,8% of ATK every 4s for 36s. (Success Rate: 100%.) \n \n **Gunnar Comet - cd 105s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 305,5% of ATK to Enemy x1. (Guaranteed critical.) \n :white_small_square:[Additional Damage]: Deal fixed damage of 790 to enemies affected by Chill. \n Level 6: \n :white_small_square:[Regular Damage]: Deal damage equal to 427.8% of ATK to Enemy x1. (Guaranteed critical.) \n :white_small_square:[Additional Damage]: Deal fixed damage of 3871 to enemies affected by Chill.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.aglaea') {
    	msg.reply('my gun says: \n \n Leader Skill: \n **Level 1** \n Increase ATK of Physical-Type Allies by 20%. Increase Crit DMG of Physical-Type Allies by 10%. \n \n **Level 2** \n Not enough data...need more gunpowder!');
  	}
});


//Alex
client.on('message', msg => {
    if (msg.content === 'gr.alex') {
    	msg.reply('my gun says: \n \n **Blessed Shield** \n Grimoire: \n **Indomitable Spirit** \n [Buff]: Cast Barrier on Ally x2 that blocks up to 449 + 9.2% of ATK worth of damage when Active Skills is triggered. (Effect applies on Ally x2 with the highest ATK excluding self. Duration: 30s.)[Passive Effect]: Decrease DMG Taken of Self by 8.2%.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.alex') {
    	msg.reply('my gun says: \n \n **Wings of Astraea - cd 60s** \n Level 1: \n :white_small_square:[Buff]: Increase DEF of Ally x5 by 25.2%. (Success Rate: 100%, Duration: 60s.) \n :white_small_square:[Buff]: Cast Barrier on Self that blocks up to 667 + 9.6% of ATK worth of damage. (Success Rate: 100%. Duration: 30s.) \n Level 6: \n :white_small_square:[Buff]: Increase DEF of Ally x5 by 28.5%. (Success Rate: 100%, Duration: 60s.) \n :white_small_square:[Buff]: Cast Barrier on Self that blocks up to 3167 + 21.5% of ATK worth of damage. (Success Rate: 100%. Duration: 50s.) \n :white_small_square:[Buff]: Decrease DMG Taken of Self by 27.7%. (Duration: 60s.) \n \n **Jupiter Burst - cd 84s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 176.5% of ATK to Enemy x3. \n :white_small_square:[Additional Damage]: Deal additional damage equal to 72.5% of DEF to Enemy x3. \n Level 6: \n :white_small_square:[Regular Damage]: Deal damage equal to 260.9% of ATK to Enemy x3. \n :white_small_square:[Additional Damage]: Deal additional damage equal to 101.5% of DEF to Enemy x3. \n :white_small_square:[Debuff]: Increase DMG Taken of Enemy x3 by 25.9%. (Duration: 60s.)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.alex') {
    	msg.reply('my gun says: \n \n **Leader Skill:** \n **Level 1** \n Increase ATK of Light allies by 40%. \n \n **Level 2** \n Increase ATK of Light allies by 60%.');
  	}
});

//Angelo
client.on('message', msg => {
    if (msg.content === 'gr.angelo') {
    	msg.reply('my gun says: \n \n Data is updating...need more gunpower!');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.angelo') {
    	msg.reply('my gun says: \n \n **Gravity Slam - cd 54s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 166,7% of ATK to Enemy x4. \n Level 6: \n :white_small_square:[Regular Damage]: Deal damage equal to 237,3% of ATK to Enemy x5. \n :white_small_square:[Additional damage]: Deal fixed damage 1838 to Physical-Type. \n \n **Gravitation Singularity - cd 83s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 184,8% of ATK to Enemy x4. \n :white_small_square:[Additional Damage]: Deal additional damage equal to 3,9% of Max HP to Enemy x4. (Max Damage: 150% of ATK.) \n Level 6: \n :white_small_square:[Regular Damage]: Deal damage equal to 245,9% of ATK to Enemy x5. \n :white_small_square:[Additional Damage]: Deal additional damage equal to 4,9% of Max HP to Enemy x5. (Max Damage: 150% of ATK.) \n :white_small_square:[Debuff]: Increase DMG Taken on Enemy x5 by 23,1%. (Duration: 60s.)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.angelo') {
    	msg.reply('my gun says: \n \n **Leader Skill:** \n **Level 1** \n Increase ATK of Dark allies by 40%. \n \n **Level 2** \n Increase ATK of Dark allies by 60%.');
  	}
});

//Esta
client.on('message', msg => {
    if (msg.content === 'gr.esta') {
    	msg.reply('my gun says: \n \n ** Happy Sniper** \n Grimoire: \n **Bullet Carnival** \n [Debuff]: Decrease Block Rate of Hit Target by 9,9% when Active Skills are triggered. (Duration: 30s,)[Passive Effect]: increase Crit Rate of Self by 7,6%.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.esta') {
    	msg.reply('my gun says: \n \n **Scattershot - cd 55s** \n Level 1:\n :white_small_square:[Regular Damage]: Deal damage equal to 169,8% of ATK to Enemy x3 \n Level 6: \n :white_small_square:[Regular Damage]: Deal damage equal to 250,3% of ATK to Enemy x3. \n :white_small_square:[Additional Damage]: Deal additional damage equal to 120,3% of ATK to enemies with HP that is 50% or lower. \n :white_small_square:[Buff]: Increase Damage of Self by 27,7%. (Duration: 60s.) \n \n **Incendiary Shot - cd 100s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 177,2% of ATK to Enemy x3. \n :white_small_square:[Additional Damage]: Deal fixed damage of 414 to Enemy x1. \n Level 6: \n :white_small_square:[Regular Damage]: Deal damage equal to 261,7% of ATK to Enemy x3. \n :white_small_square:[Additional Damage]: Deal fixed damage of 2027 to Enemy x1. \n :white_small_square:[Status Effect]: Inflict Burn on Enemy x3 dealing DMG equal to 24,2% of ATK every 10s for 20s. (Success Rate: 50%.)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.esta') {
    	msg.reply('my gun says: \n \n **Leader Skill:** \n **Level 1** \n Increase ATK of Physical-Type allies by 30% \n \n **Level 2** \n Increase ATK of Physical-Type allies by 50%');
  	}
});



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot 
