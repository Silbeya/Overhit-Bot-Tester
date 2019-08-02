const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {

    console.log('I am ready!');

});

client.on('message', msg => {
    if (msg.content === '.help') {
    	msg.reply('hi, Esta Bot here to help! \n \n Type **gr.<hero>** for grimoire info, eg. gr.esta \n Type **sk.<hero>** for skill info, eg. sk.esta \n Type **ld.<hero>** for leader skill info, eg. sk.esta \n \n Please note that the commands are strictly all in lowercase letters. \n \n *Esta Bot v1.0 created by Silbeya 실베야* \n Sorry for the limitations to the bot due to limited knowledge :< but hope it still helps ^^');
  	}
});

//UR HEROES

//Anemone
client.on('message', msg => {
    if (msg.content === 'gr.anemone') {
    	msg.reply('my gun says: \n \n Grimoire: \n **Frontline Jammer** \n [Passive Effect]: Deal additional damage equal to 18.9% of ATK to Magic-Type enemies. \n [Passive Effect]: When HP is 50% or lower, increase ATK of Self by 18.8%. (Success Rate: 100%. Duration 40s.) \n [Buff]: Upon Self KO, increase ATK of Ally x4 by 24.2%. (Success Rate: 100%. Duration: 40s.)');
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
    	msg.reply('my gun says: \n \n Grimoire \n **Frostbite** \n [Status Effect]: Inflict Freeze for 18s when Active Skills are triggered. (Success Rate: 10%.)[Passive Effect]: Increase the ATK of allies in the same row by 11,6%');
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
    	msg.reply('my gun says: \n \n Grimoire: \n **Indomitable Spirit** \n [Buff]: Cast Barrier on Ally x2 that blocks up to 449 + 9.2% of ATK worth of damage when Active Skills is triggered. (Effect applies on Ally x2 with the highest ATK excluding self. Duration: 30s.)[Passive Effect]: Decrease DMG Taken of Self by 8.2%.');
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
    	msg.reply('my gun says: \n \n Grimoire: \n **Heavy World** \n [Buff]: Upon Ally LO, increase ATK of Self by 18.1%. (Success Rate: 100%. Duration: 40s.) \n [Debuff]: Decrease Block Rate of Hit Target by 7.8% when Active Skills are triggered. (Success Rate: 20%. Duration: 30s.)');
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

//Aria
client.on('message', msg => {
    if (msg.content === 'gr.aria') {
    	msg.reply('my gun says: \n \n Grimoire: \n **Soul Release** \n [Buff]: When hit, cast Barrier on Self that blocks up to 368 + 10.7% worth of damage. (Success Rate: 30%. Duration: 30s.)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.aria') {
    	msg.reply('my gun says: \n \n **Quad Slash Impact - cd 82s** \n Level 1: \n :white_small_square:[Regular Damage:] Deal damage equal to 251.7% of ATK to Enemy x1. \n :white_small_square:[Debuff]: Decrease Damage of Enemy x1 by 27,9%. (Success Rate: 50%, Duration 60s.) \n Level 6: \n :white_small_square:[Regular Damage:] Deal damage equal to 371,1% of ATK to Enemy x1. \n :white_small_square:[Debuff]: Decrease Damage of Enemy x1 by 31,6%. (Success Rate: 80%, Duration 60s.) \n :white_small_square:[Additional Damage]: Deal additional damage equal to 7,3% of Max HP to Enemy x1. (Max Damage: 150% of ATK.) \n \n **Cross Impact - cd 92s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 248,4% of ATK to Enemy x1. \n Level 6: \n :white_small_square:[Regular Damage]: Deal damage equal to 366,2% of ATK to Enemy x1. \n :white_small_square:[Additional Damage]: Deal additional damage equal to 186,3% of ATK to enemies affected by Chill. \n :white_small_square:[Additional Damage]: Deal fixed damage of 2029 to Enemy x1.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.aria') {
    	msg.reply('my gun says: \n \n **Leader Skill:** \n **Level 1** \n Increase Max HP of Water allies by 20%. \n \n **Level 2** \n Increase Max HP of Water allies by 30%.');
  	}
});

//Ash
client.on('message', msg => {
    if (msg.content === 'gr.ash') {
    	msg.reply('my gun says: \n \n Grimoire: \n **Mercenary Will** \n [Additional Damage]: Deal additional damage equal to 28.7% of ATK to enemies affected by Burn when Active Skills are triggered.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.ash') {
    	msg.reply('my gun says: \n \n **Accelerator Boost - cd 45s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 258.7% of ATK to Enemy x1. \n :white_small_square:[Status Effect]: Inflict Burn that deals damage equal to 26.1% of ATK every 10s for 20s. (Success Rate: 30%.) \n :white_small_square:[Chain Effect]: Deal damage equal to 245.5% of ATK to enemies affected by Poison. (Guaranteed critical.) \n Level 6: \n :white_small_square:[Regular Damage]: Deal damage equal to 362.2% of ATK to Enemy x1. \n :white_small_square:[Buff]: Increase DEF of Self by 43.2%. (Duration: 60s.) \n :white_small_square:[Status Effect]: Inflict Burn that deals damage equal to 29.5% of ATK every 10s for 20s. (Success Rate: 30%.) \n :white_small_square:[Chain Effect]: Deal damage equal to 245.5% of ATK to enemies affected by Poison. (Guaranteed critical.) \n \n **Voltaic Savior - cd 70s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 211.8% of ATK to Enemy x3. \n :white_small_square:[Debuff]: Decrease ATK of Enemy x3 by 28.6%. (Duration: 60s.) \n Level 6: \n :white_small_square:[Regular Damage]: Deal damage equal to 296.6% of ATK to Enemy x4. \n :white_small_square:[Debuff]: Decrease ATK of Enemy x4 by 32.3%. (Duration: 60s.)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.ash') {
    	msg.reply('my gun says: \n \n **Leader Skill:** \n **Level 1** \n Increase ATK of allies by 25%. \n \n **Level 2** \n Increase ATK of allies by 45%.');
  	}
});

//Blossom
client.on('message', msg => {
    if (msg.content === 'gr.blossom') {
    	msg.reply('my gun says: \n \n Grimoire: \n **Tick-Tick Boom** \n [Additional Damage]: Inflict Time Bomb that deals damage equal to 46.1% of ATK when Active Skills is triggered. (Success Rate: 60%. Apply damage after 12s. Remove 1 Buff from Hit Target.)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.blossom') {
    	msg.reply('my gun says: \n \n **Teddy Bear - cd 52s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 118.2% of ATK to Enemy x3. \n :white_small_square:[Status Effect]: Inflict Burn on Enemy x4, dealing DMG equal to 26.1% of ATK every 10s for 20. (Success Rate: 30%.) \n Level 6: \n :white_small_square:[Regular Damage]: Deal damage equal to 242.2% of ATK to Enemy x4. \n :white_small_square:[Status Effect]: Inflict Burn on Enemy x4, dealing DMG equal to 29.5% of ATK every 10s for 20. (Success Rate: 50%.) \n \n **Terror Bear - cd 88s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 178.6% of ATK to Enemy x3. \n :white_small_square:[Increase DMG Taken of Enemy x3 by 24.2%. (Duration: 60s.) \n Level 6: \n :white_small_square:[Regular Damage]: Deal damage equal to 243.6% of ATK to Enemy x5. \n :white_small_square:[Increase DMG Taken of Enemy x5 by 27.3%. (Duration: 60s.)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.blossom') {
    	msg.reply('my gun says: \n \n **Leader Skill:** \n **Level 1** \n Increase ATK of Fire allies by 40%. \n \n **Level 2** \n Increase ATK of Fire allies by 60%.');
  	}
});

//Beatrice
client.on('message', msg => {
    if (msg.content === 'gr.beatrice') {
    	msg.reply('my gun says: \n \n Grimoire: \n **Pale-Winged Knight** \n [Additional Damage]: Deal additional damage equal to 36.1% of ATK to enemies affected by bleeding when Active Skills are triggered.[Buff]: When hit, remove 1 Debuff from Self. (Success Rate: 20%.)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.beatrice') {
    	msg.reply('my gun says: \n \n **Slashing Frenzy - cd 56s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 252.6% of ATK to Enemy x1. \n :white_small_square:[Status Effect]: Inflict bleed that deals damage equal to 9.3% of ATK every 5s for 30s. (Success Rate: 80%.) \n Level 6: \n :white_small_square:[Regular Damage]: Deal damage equal to 368.8% of ATK to Enemy x1. \n :white_small_square:[Status Effect]: Inflict bleed that deals damage equal to 10.5% of ATK every 5s for 30s. (Success Rate: 80%.) \n :white_small_square:[Buff]: Increase Crit DMG of Self by 32.4% (Duration: 60s.) \n \n **Thousand Graves - cd 94s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal Damage equal to 158.7% of ATK to Enemy x3. (Guaranteed critical.) \n Level 6: \n :white_small_square:[Regular Damage]: Deal Damage equal to 224.9% of ATK to Enemy x4. (Guaranteed critical.) \n :white_small_square:[Additional damage]: Deal fixed damage of 1547 to Enemy x4.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.beatrice') {
    	msg.reply('my gun says: \n \n **Leader Skill:** \n **Level 1** \n If there are at least Ally x3 of Wind allies, increase allies ATK by 35%. Increase Crit DMG of allies by 10%. \n \n **Level 2** \n Not enough data...need more gunpowder!');
  	}
});

//Esta
client.on('message', msg => {
    if (msg.content === 'gr.esta') {
    	msg.reply('my gun says: \n \n Grimoire: \n **Bullet Carnival** \n [Debuff]: Decrease Block Rate of Hit Target by 9,9% when Active Skills are triggered. (Duration: 30s,)[Passive Effect]: increase Crit Rate of Self by 7,6%.');
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
