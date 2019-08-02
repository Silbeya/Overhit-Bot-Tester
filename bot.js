const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {

    console.log('I am ready!');

});

//COMMANDS
client.on('message', msg => {
    if (msg.content === '.help') {
    	msg.reply('hi, Esta Bot is here to help! \n \n Type **gr.<hero>** for grimoire info, eg. gr.esta \n Type **sk.<hero>** for skill info, eg. sk.esta \n Type **ld.<hero>** for leader skill info, eg. ld.esta \n \n Please note that the commands are strictly **all in lowercase letters**. \n Eg. GR.esta, Gr.Esta etc. **will not work**. Only gr.esta will work. \n \n Only SSR and UR heroes are available. \n Sorry for the limitations to the bot due to limited knowledge :< but hope it still helps ^^ \n \n *Esta Bot v1.0 created by Silbeya 실베야*');
  	}
});

//UR HEROES

//Anemone
client.on('message', msg => {
    if (msg.content === 'gr.anemone') {
    	msg.reply('my gun says: \n **Anemone** \n \n Grimoire: \n **Frontline Jammer** \n [Passive Effect]: Deal additional damage equal to 18.9% of ATK to Magic-Type enemies. \n [Passive Effect]: When HP is 50% or lower, increase ATK of Self by 18.8%. (Success Rate: 100%. Duration 40s.) \n [Buff]: Upon Self KO, increase ATK of Ally x4 by 24.2%. (Success Rate: 100%. Duration: 40s.)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.anemone') {
    	msg.reply('my gun says: \n **Anemone** \n \n **Sky Destructor - cd 83s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 211% of ATK to Enemy x3. \n :white_small_square:[Status Effect]: Inflict Blind on Enemy x3 for 20s. (Success Rate: 50%) \n Level 6: \n :white_small_square:[Regular Damage] : Deal damage equal to 342.5% of ATK to Enemy x4 \n :white_small_square:[Status Effect] : Inflict Blind on Enemy x4 for 20s (Success Rate : 80%.) \n :white_small_square:[Blind] : Decrease Attack Success Rate by 50%. \n \n **Apocalypse Cannon - cd 100s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 158,2% of ATK to Enemy x5. \n :white_small_square:[Chain Effect]: Deal damage equal to 174,1% of ATK to enemies affected by Blind \n Level 6: \n :white_small_square:[Regular Damage] : Deal damage equal to 234.42% of ATK to Enemy x5. \n :white_small_square:[Additional Damage] : Deal fixed damage of 1424 to Enemy x5. \n :white_small_square:[Chain Effect] : Deal damage equal to 242% of ATK to enemies affected by Blind.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.anemone') {
    	msg.reply('my gun says: \n **Anemone** \n \n **Leader Skill:** \n **Level 1** \n For each type of Hero in your Team, the ATK of your heroes is boosted by 20%. \n \n **Level 2** \n Not enough data...need more gunpowder! \n Please DM @Silbeya 실베야#9810 if you have info on this to load gunpowder, thanks!');
  	}
});

//SSR HEROES

//Aglaea
client.on('message', msg => {
    if (msg.content === 'gr.aglaea') {
    	msg.reply('my gun says: \n **Aglaea** \n \n Grimoire \n **Frostbite** \n [Status Effect]: Inflict Freeze for 18s when Active Skills are triggered. (Success Rate: 10%.)[Passive Effect]: Increase the ATK of allies in the same row by 11,6%');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.aglaea') {
    	msg.reply('my gun says: \n **Aglaea** \n \n **White Freeze - cd 78s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 315,9% of ATK to Enemy x3. (Sequentially attack Enemy x3.) \n :white_small_square:[Status Effect]: Inflict Chill that deals damage equal to 4,3% of ATK every 4s for 36s. (Success Rate: 30%.) \n Level 6: \n :white_small_square:[Regular Damage]: Deal damage equal to 466,5% of ATK to Enemy x3. (Sequentially attack Enemy x3.) \n :white_small_square:[Status Effect]: Inflict Chill on Enemy x3 that deals damage equal to 4,8% of ATK every 4s for 36s. (Success Rate: 100%.) \n \n **Gunnar Comet - cd 105s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 305,5% of ATK to Enemy x1. (Guaranteed critical.) \n :white_small_square:[Additional Damage]: Deal fixed damage of 790 to enemies affected by Chill. \n Level 6: \n :white_small_square:[Regular Damage]: Deal damage equal to 427.8% of ATK to Enemy x1. (Guaranteed critical.) \n :white_small_square:[Additional Damage]: Deal fixed damage of 3871 to enemies affected by Chill.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.aglaea') {
    	msg.reply('my gun says: \n **Aglaea** \n \n Leader Skill: \n **Level 1** \n Increase ATK of Physical-Type Allies by 20%. Increase Crit DMG of Physical-Type Allies by 10%. \n \n **Level 2** \n Not enough data...need more gunpowder! \n Please DM @Silbeya 실베야#9810 if you have info on this to load gunpowder, thanks!');
  	}
});


//Alex
client.on('message', msg => {
    if (msg.content === 'gr.alex') {
    	msg.reply('my gun says: \n **Alex** \n \n Grimoire: \n **Indomitable Spirit** \n [Buff]: Cast Barrier on Ally x2 that blocks up to 449 + 9.2% of ATK worth of damage when Active Skills is triggered. (Effect applies on Ally x2 with the highest ATK excluding self. Duration: 30s.)[Passive Effect]: Decrease DMG Taken of Self by 8.2%.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.alex') {
    	msg.reply('my gun says: \n **Alex** \n \n **Wings of Astraea - cd 60s** \n Level 1: \n :white_small_square:[Buff]: Increase DEF of Ally x5 by 25.2%. (Success Rate: 100%, Duration: 60s.) \n :white_small_square:[Buff]: Cast Barrier on Self that blocks up to 667 + 9.6% of ATK worth of damage. (Success Rate: 100%. Duration: 30s.) \n Level 6: \n :white_small_square:[Buff]: Increase DEF of Ally x5 by 28.5%. (Success Rate: 100%, Duration: 60s.) \n :white_small_square:[Buff]: Cast Barrier on Self that blocks up to 3167 + 21.5% of ATK worth of damage. (Success Rate: 100%. Duration: 50s.) \n :white_small_square:[Buff]: Decrease DMG Taken of Self by 27.7%. (Duration: 60s.) \n \n **Jupiter Burst - cd 84s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 176.5% of ATK to Enemy x3. \n :white_small_square:[Additional Damage]: Deal additional damage equal to 72.5% of DEF to Enemy x3. \n Level 6: \n :white_small_square:[Regular Damage]: Deal damage equal to 260.9% of ATK to Enemy x3. \n :white_small_square:[Additional Damage]: Deal additional damage equal to 101.5% of DEF to Enemy x3. \n :white_small_square:[Debuff]: Increase DMG Taken of Enemy x3 by 25.9%. (Duration: 60s.)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.alex') {
    	msg.reply('my gun says: \n **Alex** \n \n **Leader Skill:** \n **Level 1** \n Increase ATK of Light allies by 40%. \n \n **Level 2** \n Increase ATK of Light allies by 60%.');
  	}
});

//Angelo
client.on('message', msg => {
    if (msg.content === 'gr.angelo') {
    	msg.reply('my gun says: \n **Angelo** \n \n Grimoire: \n **Heavy World** \n [Buff]: Upon Ally LO, increase ATK of Self by 18.1%. (Success Rate: 100%. Duration: 40s.) \n [Debuff]: Decrease Block Rate of Hit Target by 7.8% when Active Skills are triggered. (Success Rate: 20%. Duration: 30s.)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.angelo') {
    	msg.reply('my gun says: \n **Angelo** \n \n **Gravity Slam - cd 54s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 166,7% of ATK to Enemy x4. \n Level 6: \n :white_small_square:[Regular Damage]: Deal damage equal to 237,3% of ATK to Enemy x5. \n :white_small_square:[Additional damage]: Deal fixed damage 1838 to Physical-Type. \n \n **Gravitation Singularity - cd 83s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 184,8% of ATK to Enemy x4. \n :white_small_square:[Additional Damage]: Deal additional damage equal to 3,9% of Max HP to Enemy x4. (Max Damage: 150% of ATK.) \n Level 6: \n :white_small_square:[Regular Damage]: Deal damage equal to 245,9% of ATK to Enemy x5. \n :white_small_square:[Additional Damage]: Deal additional damage equal to 4,9% of Max HP to Enemy x5. (Max Damage: 150% of ATK.) \n :white_small_square:[Debuff]: Increase DMG Taken on Enemy x5 by 23,1%. (Duration: 60s.)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.angelo') {
    	msg.reply('my gun says: \n **Angelo** \n \n **Leader Skill:** \n **Level 1** \n Increase ATK of Dark allies by 40%. \n \n **Level 2** \n Increase ATK of Dark allies by 60%.');
  	}
});

//Aria
client.on('message', msg => {
    if (msg.content === 'gr.aria') {
    	msg.reply('my gun says: \n **Aria** \n \n Grimoire: \n **Soul Release** \n [Buff]: When hit, cast Barrier on Self that blocks up to 368 + 10.7% worth of damage. (Success Rate: 30%. Duration: 30s.)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.aria') {
    	msg.reply('my gun says: \n **Aria** \n \n **Quad Slash Impact - cd 82s** \n Level 1: \n :white_small_square:[Regular Damage:] Deal damage equal to 251.7% of ATK to Enemy x1. \n :white_small_square:[Debuff]: Decrease Damage of Enemy x1 by 27,9%. (Success Rate: 50%, Duration 60s.) \n Level 6: \n :white_small_square:[Regular Damage:] Deal damage equal to 371,1% of ATK to Enemy x1. \n :white_small_square:[Debuff]: Decrease Damage of Enemy x1 by 31,6%. (Success Rate: 80%, Duration 60s.) \n :white_small_square:[Additional Damage]: Deal additional damage equal to 7,3% of Max HP to Enemy x1. (Max Damage: 150% of ATK.) \n \n **Cross Impact - cd 92s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 248,4% of ATK to Enemy x1. \n Level 6: \n :white_small_square:[Regular Damage]: Deal damage equal to 366,2% of ATK to Enemy x1. \n :white_small_square:[Additional Damage]: Deal additional damage equal to 186,3% of ATK to enemies affected by Chill. \n :white_small_square:[Additional Damage]: Deal fixed damage of 2029 to Enemy x1.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.aria') {
    	msg.reply('my gun says: \n **Aria** \n \n **Leader Skill:** \n **Level 1** \n Increase Max HP of Water allies by 20%. \n \n **Level 2** \n Increase Max HP of Water allies by 30%.');
  	}
});

//Ash
client.on('message', msg => {
    if (msg.content === 'gr.ash') {
    	msg.reply('my gun says: \n **Ash** \n \n Grimoire: \n **Mercenary Will** \n [Additional Damage]: Deal additional damage equal to 28.7% of ATK to enemies affected by Burn when Active Skills are triggered.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.ash') {
    	msg.reply('my gun says: \n **Ash** \n \n **Accelerator Boost - cd 45s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 258.7% of ATK to Enemy x1. \n :white_small_square:[Status Effect]: Inflict Burn that deals damage equal to 26.1% of ATK every 10s for 20s. (Success Rate: 30%.) \n :white_small_square:[Chain Effect]: Deal damage equal to 245.5% of ATK to enemies affected by Poison. (Guaranteed critical.) \n Level 6: \n :white_small_square:[Regular Damage]: Deal damage equal to 362.2% of ATK to Enemy x1. \n :white_small_square:[Buff]: Increase DEF of Self by 43.2%. (Duration: 60s.) \n :white_small_square:[Status Effect]: Inflict Burn that deals damage equal to 29.5% of ATK every 10s for 20s. (Success Rate: 30%.) \n :white_small_square:[Chain Effect]: Deal damage equal to 245.5% of ATK to enemies affected by Poison. (Guaranteed critical.) \n \n **Voltaic Savior - cd 70s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 211.8% of ATK to Enemy x3. \n :white_small_square:[Debuff]: Decrease ATK of Enemy x3 by 28.6%. (Duration: 60s.) \n Level 6: \n :white_small_square:[Regular Damage]: Deal damage equal to 296.6% of ATK to Enemy x4. \n :white_small_square:[Debuff]: Decrease ATK of Enemy x4 by 32.3%. (Duration: 60s.)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.ash') {
    	msg.reply('my gun says: \n **Ash** \n \n **Leader Skill:** \n **Level 1** \n Increase ATK of allies by 25%. \n \n **Level 2** \n Increase ATK of allies by 45%.');
  	}
});

//Blossom
client.on('message', msg => {
    if (msg.content === 'gr.blossom') {
    	msg.reply('my gun says: \n **Blossom** \n \n Grimoire: \n **Tick-Tick Boom** \n [Additional Damage]: Inflict Time Bomb that deals damage equal to 46.1% of ATK when Active Skills is triggered. (Success Rate: 60%. Apply damage after 12s. Remove 1 Buff from Hit Target.)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.blossom') {
    	msg.reply('my gun says: \n **Blossom** \n \n **Teddy Bear - cd 52s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 118.2% of ATK to Enemy x3. \n :white_small_square:[Status Effect]: Inflict Burn on Enemy x4, dealing DMG equal to 26.1% of ATK every 10s for 20. (Success Rate: 30%.) \n Level 6: \n :white_small_square:[Regular Damage]: Deal damage equal to 242.2% of ATK to Enemy x4. \n :white_small_square:[Status Effect]: Inflict Burn on Enemy x4, dealing DMG equal to 29.5% of ATK every 10s for 20. (Success Rate: 50%.) \n \n **Terror Bear - cd 88s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 178.6% of ATK to Enemy x3. \n :white_small_square:[Increase DMG Taken of Enemy x3 by 24.2%. (Duration: 60s.) \n Level 6: \n :white_small_square:[Regular Damage]: Deal damage equal to 243.6% of ATK to Enemy x5. \n :white_small_square:[Increase DMG Taken of Enemy x5 by 27.3%. (Duration: 60s.)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.blossom') {
    	msg.reply('my gun says: \n **Blossom** \n \n **Leader Skill:** \n **Level 1** \n Increase ATK of Fire allies by 40%. \n \n **Level 2** \n Increase ATK of Fire allies by 60%.');
  	}
});

//Beatrice
client.on('message', msg => {
    if (msg.content === 'gr.beatrice') {
    	msg.reply('my gun says: \n **Beatrice** \n \n Grimoire: \n **Pale-Winged Knight** \n [Additional Damage]: Deal additional damage equal to 36.1% of ATK to enemies affected by bleeding when Active Skills are triggered.[Buff]: When hit, remove 1 Debuff from Self. (Success Rate: 20%.)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.beatrice') {
    	msg.reply('my gun says: **Beatrice** \n \n **Slashing Frenzy - cd 56s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 252.6% of ATK to Enemy x1. \n :white_small_square:[Status Effect]: Inflict bleed that deals damage equal to 9.3% of ATK every 5s for 30s. (Success Rate: 80%.) \n Level 6: \n :white_small_square:[Regular Damage]: Deal damage equal to 368.8% of ATK to Enemy x1. \n :white_small_square:[Status Effect]: Inflict bleed that deals damage equal to 10.5% of ATK every 5s for 30s. (Success Rate: 80%.) \n :white_small_square:[Buff]: Increase Crit DMG of Self by 32.4% (Duration: 60s.) \n \n **Thousand Graves - cd 94s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal Damage equal to 158.7% of ATK to Enemy x3. (Guaranteed critical.) \n Level 6: \n :white_small_square:[Regular Damage]: Deal Damage equal to 224.9% of ATK to Enemy x4. (Guaranteed critical.) \n :white_small_square:[Additional damage]: Deal fixed damage of 1547 to Enemy x4.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.beatrice') {
    	msg.reply('my gun says: **Beatrice** \n \n **Leader Skill:** \n **Level 1** \n If there are at least Ally x3 of Wind allies, increase allies ATK by 35%. Increase Crit DMG of allies by 10%. \n \n **Level 2** \n Not enough data...need more gunpowder! \n Please DM @Silbeya 실베야#9810 if you have info on this to load gunpowder, thanks!');
  	}
});

//Celesta
client.on('message', msg => {
    if (msg.content === 'gr.celesta') {
    	msg.reply('my gun says: \n **Celesta** \n \n Grimoire: \n **Faerie Dance** \n [Buff]: Increase ATK of Wind Ally by 9.1% when All Attack is triggered. (Success Rate: 30%. Duration: 40s.)[Debuff]: Increase Hit Target Skill Cooldown by 8s when Active Skills are triggered.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.celesta') {
    	msg.reply('my gun says: **Celesta** \n \n **Fatal Impact - cd 42s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 259.2% of ATK to Enemy x1. \n :white_small_square:[Debuff]: Decrease DEF of Enemy x1 by 27.9%. (Duration 60s.) \n Level 6: \n :white_small_square:[Regular Damage]: Deal damage equal to 366,9% of ATK to Enemy x1. \n :white_small_square:[Debuff]: Decrease DEF of Enemy x1 by 31.6%. (Duration 60s.) \n :white_small_square:[Debuff]: Decrease Crit Resist Rate of Enemy x1 by 25.6% (Duration: 60s.) \n \n **Cyclone Shredder - cd 85s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 120% of ATK to Enemy x4. \n :white_small_square:[Status Effect]: Inflict Bleed that deals damage equal to 7.3% of ATK every 5s for 30s. (Success Rate: 40%.) \n Level 6: \n :white_small_square:[Regular Damage]: Deal damage equal to 247.3% of ATK to Enemy x5. \n :white_small_square:[Status Effect]: Inflict Bleed that deals damage equal to 8.2% of ATK every 5s for 30s. (Success Rate: 60%.)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.celesta') {
    	msg.reply('my gun says: **Celesta** \n \n **Leader Skill:** \n **Level 1** \n Increase ATK of Wind allies by 40%. \n \n **Level 2** \n Increase ATK of Wind allies by 60%.');
  	}
});

//Colette
client.on('message', msg => {
    if (msg.content === 'gr.colette') {
    	msg.reply('my gun says: \n **Colette** \n \n Grimoire: \n **Winter Haven** \n [Debuff]: Decrease Damage of Hit Target by 17.7% when Active Skills is triggered. (Duration: 40s.)[Additional Damage]: Deal additional damage equal to 20.3% of ATK to enemies affected by cold when Active Skills are triggered.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.colette') {
    	msg.reply('my gun says: **Colette** \n \n **Hailstorm - cd 80s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 167,4% of ATK to Enemy x3. \n :white_small_square:[Debuff]: Decrease Status Effect Resist Rate of Enemy x3 by 22.9%. (Duration: 60s.) \n Level 6: \n :white_small_square:[Regular Damage]: Deal damage equal to 246,8% of ATK to Enemy x3. \n :white_small_square:[Debuff]: Decrease Status Effect Resist Rate of Enemy x3 by 25,9%. (Duration: 60s.) \n :white_small_square:[Additional Damage]: Deal additional damage equal to 128,9% of ATK to enemies affected by Chill. \n \n **Brinicle - cd 100s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 99.4% of ATK to Enemy x5. \n :white_small_square:[Status Effect]: Inflict Chill that deals damage equal to 2.7% of ATK every 4s for 36s. (Success Rate: 30%.) \n Level 6: \n :white_small_square:[Regular Damage]: Deal damage equal to 146.9% of ATK to Enemy x5. \n :white_small_square:[Status Effect]: Inflict Chill that deals damage equal to 3% of ATK every 4s for 36s. (Success Rate: 50%.) \n :white_small_square:[Status Effect]: Inflict Freeze on Enemy x5 for 18s. (Success Rate: 20%.)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.colette') {
    	msg.reply('my gun says: **Colette** \n \n **Leader Skill:** \n **Level 1** \n Increase ATK of Water Allies by 40%. \n \n **Level 2** \n Not enough data...need more gunpowder! \n Please DM @Silbeya 실베야#9810 if you have info on this to load gunpowder, thanks!');
  	}
});

//Demian
client.on('message', msg => {
    if (msg.content === 'gr.demian') {
    	msg.reply('my gun says: \n **Demian** \n \n Grimoire: \n **Blood Infection** \n [Buff]: When hit, cast Blood Sucking on Self that heals 16.6% of damage. (Success Rate: 40%. Duration: 20s.)[Healing]: Upon Self KO, Heal HP of Ally x4 for 90% of ATK.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.demian') {
    	msg.reply('my gun says: **Demian** \n \n **Vampire Kiss - cd 92s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 215.5% of ATK to Enemy x3. \n :white_small_square:[Healing]: Heal Self for 170.1% of ATK. \n :white_small_square:[Additional Healing]: Additionally heal Ally x1 for 27.2% of Max HP. (Apply effect on Ally x1 with the lowest HP, excluding self.) \n Level 6: \n :white_small_square:[Regular Damage]: Deal damage equal to 301.7% of ATK to Enemy x3. \n :white_small_square:[Healing]: Heal Self for 221.1% of ATK. \n :white_small_square:[Additional Healing]: Additionally heal Ally x3 for 32.1% of Max HP. (Apply effect on Ally x3 with the lowest HP, excluding self.) \n \n **Bloodbath - cd 75s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 176.2% of ATK to Enemy x4. \n :white_small_square:[Status Effect]: Inflict Blind on Enemy x4 for 20s. (Success Rate: 20%.) \n Level 6: \n :white_small_square:[Regular Damage]: Deal damage equal to 246.7% of ATK to Enemy x5. \n :white_small_square:[Status Effect]: Inflict Blind on Enemy x5 for 20s. (Success Rate: 50%.)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.demian') {
    	msg.reply('my gun says: **Demian** \n \n **Leader Skill:** \n **Level 1** \n Increase ATK of allies by 25%. \n \n **Level 2** \n Increase ATK of allies by 45%.');
  	}
});

//Edmund
client.on('message', msg => {
    if (msg.content === 'gr.edmund') {
    	msg.reply('my gun says: \n **Edmund** \n \n Grimoire: \n **Insectoid Wall** \n [Debuff]: Decrease Damage of Hit Target by 17.7% when Active Skills are triggered. (Duration: 40s.)[Additional Damage]: Deal additional fixed damage of 173 to targets affected by Poison when All Attack is triggered.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.edmund') {
    	msg.reply('my gun says: **Edmund** \n \n **Summon Striges - cd 60s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 177.4% of ATK to Enemy x3. \n :white_small_square:[Debuff]: Decrease Block Rate of Enemy x3 by 11.8%. (Success Rate: 50%, Duration: 40s.) \n Level 6: \n :white_small_square:[Regular Damage]: Deal damage equal to 261.7% of ATK to Enemy x3. \n :white_small_square:[Debuff]: Decrease Block Rate of Enemy x3 by 13.3%. (Success Rate: 100%, Duration: 40s.) \n :white_small_square:[Debuff]: Increase Skill Cooldown of Enemy x3 by 17s. \n \n **Summon Jormungand - cd 75s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 103.1% of ATK to Enemy x5. \n :white_small_square:[Status Effect]: Infict Poison that deals damage equal to 9.2% of ATK every 6s for 30s. (Success Rate: 20%. (Poison): Decrease Status Effect Resist Rate by 20% \n Level 6: \n :white_small_square:[Regular Damage]: Deal damage equal to 152.4% of ATK to Enemy x5. \n :white_small_square:[Status Effect]: Infict Poison that deals damage equal to 10.4% of ATK every 6s for 30s. (Success Rate: 50%. (Poison): Decrease Status Effect Resist Rate by 20% \n :white_small_square:[Status Effect]: Inflict Paralyze on Enemy x3 for 20s. (Success Rate: 30%.)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.edmund') {
    	msg.reply('my gun says: **Edmund** \n \n **Leader Skill:** \n **Level 1** \n Increase ATK of Magic-Type Allies by 20%. Increase Block Rate of Magic-Type Allies by 5%. \n \n **Level 2** \n Not enough data...need more gunpowder! \n Please DM @Silbeya 실베야#9810 if you have info on this to load gunpowder, thanks!');
  	}
});

//Elphie
client.on('message', msg => {
    if (msg.content === 'gr.elphie') {
    	msg.reply('my gun says: \n **Elphie** \n \n Grimoire: \n **White Owl Protection** \n [Healing]: Heal Ally x1 HP for 39.7% of ATK when Active Skills are triggered (Apply effect on Ally x1 with the lowest HP.).');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.elphie') {
    	msg.reply('my gun says: **Elphie** \n \n **Asava Singh - cd 63s** \n Level 1: \n :white_small_square:[Healing]: Heal Ally x4 for 107.9% of ATK. (Apply effect on Ally x4 with the lowest HP.) \n :white_small_square:[Buff]: Increase ATK of Ally x4 by 29.7% (Apply effect on Ally x4 with the lowest HP.) \n Level 6: \n :white_small_square:[Healing]: Heal Ally x5 for 140.3% of ATK. (Apply effect on Ally x5 with the lowest HP.) \n :white_small_square:[Buff]: Increase ATK of Ally x5 by 33.6% (Apply effect on Ally x5 with the lowest HP.) \n \n **Kuku Vaya - cd 90s** \n Level 1: \n :white_small_square:[Buff]: Increase Crit Rate of Ally x4 by 21%. (On Allies with the highest ATK, excluding Self. Duration: 60s.) \n :white_small_square:[Buff]: Remove 1 Debuff from Ally x1. (Apply effect on Ally x1 with the highest ATK, excluding self.) \n Level 6: \n :white_small_square:[Buff]: Increase Crit Rate of Ally x4 by 23.7%. (On Allies with the highest ATK, excluding Self. Duration: 60s.) \n :white_small_square:[Buff]: Remove 1 Debuff from Ally x3. (Apply effect on Ally x3 with the highest ATK, excluding self.) \n :white_small_square:[Buff]: Inflict Status Effect Immunity on Ally x3 for 15.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.elphie') {
    	msg.reply('my gun says: **Elphie** \n \n **Leader Skill:** \n **Level 1** \n Increase Crit DMG of Fire allies by 30%. \n \n **Level 2** \n Not enough data...need more gunpowder! \n Please DM @Silbeya 실베야#9810 if you have info on this to load gunpowder, thanks!');
  	}
});

//Emodin
client.on('message', msg => {
    if (msg.content === 'gr.emodin') {
    	msg.reply('my gun says: \n **Emodin** \n \n Grimoire: \n **Cataclysm Fist** \n [Status Effect]: When hit, inflict Chill that deals damage equal to 6.3% of ATK every 4s for 36s. to the attacking target. (Success Rate: 15%.)[Passive Effect]: Decrease DMG Taken of Self by 8.2%.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.emodin') {
    	msg.reply('my gun says: **Emodin** \n \n **Divine Pillar - cd 63s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 245.9% of ATK to Enemy x1. \n :white_small_square:[Debuff]: Decrease ATK of Enemy x1 by 23.5%. (Success Rate: 100%. Duration: 60s.) \n Level 6: \n :white_small_square:[Regular Damage]: Deal damage equal to 344.3% of ATK to Enemy x1. \n :white_small_square:[Debuff]: Decrease ATK of Enemy x3 by 26.6%. (Success Rate: 100%. Duration: 60s.) \n :white_small_square:[Status Effect]: Inflict Stun on Enemy x1 for 18s. (Success Rate: 100%) \n \n **Vanquishing Blast - cd 90s** \n Level 1: \n :white_small_square:[Buff]: Increase ATK of Ally x5 by 20.9%. (Success Rate: 100%. Duration: 60s.) \n :white_small_square:[Buff]: Cast Barrier on Self that blocks up to 668 + 9.3% of ATK worth of damage. (Success Rate: 100%, Duration: 30s.) \n Level 6: \n :white_small_square:[Buff]: Increase ATK of Ally x5 by 23.7%. (Success Rate: 100%. Duration: 60s.) \n :white_small_square:[Buff]: Cast Barrier on Self that blocks up to 3173 + 20.9% of ATK worth of damage. (Success Rate: 100%, Duration: 30s.) \n :white_small_square:[Buff]: Increase Status Effect Resist Rate of Ally x5 by 27.1% (Success Rate: 100%. Duration: 60s.)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.emodin') {
    	msg.reply('my gun says: **Emodin** \n \n **Leader Skill:** \n **Level 1** \n Increase DEF of allies by 20%. \n \n **Level 2** \n Increase DEF of allies by 40%');
  	}
});

//Esta
client.on('message', msg => {
    if (msg.content === 'gr.esta') {
    	msg.reply('my gun says: \n **Esta** \n \n Grimoire: \n **Bullet Carnival** \n [Debuff]: Decrease Block Rate of Hit Target by 9.9% when Active Skills are triggered. (Duration: 30s,)[Passive Effect]: increase Crit Rate of Self by 7.6%.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.esta') {
    	msg.reply('my gun says: \n **Esta** \n \n **Scattershot - cd 55s** \n Level 1:\n :white_small_square:[Regular Damage]: Deal damage equal to 169,8% of ATK to Enemy x3 \n Level 6: \n :white_small_square:[Regular Damage]: Deal damage equal to 250.3% of ATK to Enemy x3. \n :white_small_square:[Additional Damage]: Deal additional damage equal to 120.3% of ATK to enemies with HP that is 50% or lower. \n :white_small_square:[Buff]: Increase Damage of Self by 27.7%. (Duration: 60s.) \n \n **Incendiary Shot - cd 100s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 177.2% of ATK to Enemy x3. \n :white_small_square:[Additional Damage]: Deal fixed damage of 414 to Enemy x1. \n Level 6: \n :white_small_square:[Regular Damage]: Deal damage equal to 261.7% of ATK to Enemy x3. \n :white_small_square:[Additional Damage]: Deal fixed damage of 2027 to Enemy x1. \n :white_small_square:[Status Effect]: Inflict Burn on Enemy x3 dealing DMG equal to 24.2% of ATK every 10s for 20s. (Success Rate: 50%.)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.esta') {
    	msg.reply('my gun says: \n **Esta** \n \n **Leader Skill:** \n **Level 1** \n Increase ATK of Physical-Type allies by 30% \n \n **Level 2** \n Increase ATK of Physical-Type allies by 50%');
  	}
});

//Gleck
client.on('message', msg => {
    if (msg.content === 'gr.gleck') {
    	msg.reply('my gun says: \n **Gleck** \n \n Grimoire: \n **Dark Phalanx** [Healing]: Heal Self HP for 33.7% of ATK when Active Skills are triggered.[Buff]: When hit, Reflect 8.2% of damage taken by Self back at the enemy. (Success Rate: 20%. Duration: 30s.)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.gleck') {
    	msg.reply('my gun says: \n **Gleck** \n \n **Vanguard Blade - cd 43s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 245% of ATK to Enemy x1. \n :white_small_square:[Debuff]: Decrease Pierce Rate of Enemy x1 by 27.9%. (Duration: 7s.) \n Level 6: \n :white_small_square:[Regular Damage]: Deal damage equal to 361.5% of ATK to Enemy x1. \n :white_small_square:[Debuff]: Decrease Pierce Rate of Enemy x1 by 31.6%. (Duration: 7s.) \n :white_small_square:[Status Effect]: Inflict Blind on Enemy x1 for 20s. (Success Rate: 80%.) \n \n **Grand Punisher - cd 85s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 175.1% of ATK to Enemy x3. \n :white_small_square:[Status Effect]: Inflict Stun on Enemy x3 for 18s. (Success Rate: 30%.) \n Level 6: \n :white_small_square:[Regular Damage]: Deal damage equal to 258.3% of ATK to Enemy x3. \n :white_small_square:[Status Effect]: Inflict Stun on Enemy x3 for 18s. (Success Rate: 50%.) \n :white_small_square:[Buff]: Decrease DMG Taken of Self by 27.7%. (Duration:60s.)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.gleck') {
    	msg.reply('my gun says: \n **Gleck** \n \n **Leader Skill:** \n **Level 1** \n Decrease DMG Taken of allies by 10%. \n \n **Level 2** \n Not enough data...need more gunpowder! \n Please DM @Silbeya 실베야#9810 if you have info on this to load gunpowder, thanks!');
  	}
});

//Gordon
client.on('message', msg => {
    if (msg.content === 'gr.gordon') {
    	msg.reply('my gun says: \n **Gordon** \n \n Grimoire: \n **Lion Roar** \n [Passive Effect]: Increase DEF of allies in the back row by 16.1%. \n [Passive Effect]: Decrease DMG Taken by allies in own row by 10.9%.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.gordon') {
    	msg.reply('my gun says: \n **Gordon** \n \n **Massive Earthquake - cd 50s**

Level 1: 
:white_small_square:[Regular Damage]: Deal damage equal to 176.6% of ATK to Enemy x3.
:white_small_square:[Buff]: Remove 1 Debuff from self.
:white_small_square:[Buff]: Increase own DEF by 58.8%. (Success Rate: 100%. Duration: 60s)                 

Level 6: 
:white_small_square:[Regular Damage]: Deal damage equal to 247.3% of ATK to Enemy x3.
:white_small_square:[Buff]: Remove 1 Debuff from self.
:white_small_square:[Buff]: Increase own DEF by 66.4%. (Success Rate: 100%. Duration: 60s)   

Pulverizer - cd 96s

Level 1: 
:white_small_square:[Regular Damage]: Deal damage equal to 265% of ATK to 1 enemy.
:white_small_square:[Additional Damage]: Deal damage equal to 77.6% of DEF to 1 enemy.
:white_small_square:[Status Effect]: Inflict Stun on 1 enemy for 18s (Success Rate: 80%).

Level 6:
:white_small_square:[Regular Damage]: Deal damage equal to 371% of ATK to 1 enemy.
:white_small_square:[Additional Damage]: Deal damage equal to 108.7% of DEF to 1 enemy.
:white_small_square:[Status Effect]: Inflict Stun on 1 enemy for 18s (Success Rate: 80%).');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.gordon') {
    	msg.reply('my gun says: \n **Gordon** \n \n **Leader Skill:** \n **Level 1** \n If there are 3 or more FIRE type allies, increase DEF of all allies by 30%. Decrease DMG Taken of allies by 5%. \n \n **Level 2** \n If there are 3 or more FIRE type allies, increase DEF of all allies by 50%. Decrease DMG Taken of allies by 10%.');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot 
