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

//Riah
client.on('message', msg => {
    if (msg.content === 'gr.riah') {
    	msg.reply('my gun says: \n **Riah** \n \n Grimoire: \n **Wind of Birth** \n [Buff]: Increase Ally x5 ATK by 9.7% when All Attack is triggered (Duration 40s). \n [Debuff]: Increase Hit Target DMG Taken by 16.1% when Regular Attack is triggered (Duration: 40s). \n [Passive Effect]: When HP is 50% or higher, increase Block Rate of Self by 6.5%');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.riah') {
    	msg.reply('my gun says: \n **Riah** \n \n **Sacred Fleur - cd 55s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 336.7% of ATK to Enemy x1. \n :white_small_square:[Status Effect]: Inflict Bleed that deals damage equal to 11.5% of ATK every 5s for 30s. (Success Rate: 100%) (Bleed): Decrease Healing by 20%. \n Level 6: \n :white_small_square: Not enough data...need more gunpowder! Please DM @Silbeya 실베야#9810 if you have info on this to load gunpowder, thanks! \n \n **Asterisk Advent - cd 63s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal Damage equal to 352.3% of ATK to Enemy x1. (Guaranteed critical.) \n :white_small_square:[Additional Damage]: Deal additional damage equal to 211.4% of ATK to enemies affected by Bleed. \n Level 6: \n :white_small_square: Not enough data...need more gunpowder! Please DM @Silbeya 실베야#9810 if you have info on this to load gunpowder, thanks!');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.riah') {
    	msg.reply('my gun says: \n **Riah** \n \n **Leader Skill:** \n **Level 1** \n For each type of Hero on your Team, increase allies ATK by 15%. \n \n **Level 2** \n Not enough data...need more gunpowder! \n Please DM @Silbeya 실베야#9810 if you have info on this to load gunpowder, thanks!');
  	}
});

//SSR HEROES

//Aglaea
client.on('message', msg => {
    if (msg.content === 'gr.aglaea') {
    	msg.reply('my gun says: \n **Aglaea** \n \n Grimoire \n **Frostbite** \n [Status Effect]: Inflict Freeze for 18s when Active Skills are triggered. (Success Rate: 10%.)[Passive Effect]: Increase the ATK of allies in the same row by 11.6%');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.aglaea') {
    	msg.reply('my gun says: \n **Aglaea** \n \n **White Freeze - cd 78s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 315.9% of ATK to Enemy x3. (Sequentially attack Enemy x3.) \n :white_small_square:[Status Effect]: Inflict Chill that deals damage equal to 4.3% of ATK every 4s for 36s. (Success Rate: 30%.) \n Level 6: \n :white_small_square:[Regular Damage]: Deal damage equal to 466.5% of ATK to Enemy x3. (Sequentially attack Enemy x3.) \n :white_small_square:[Status Effect]: Inflict Chill on Enemy x3 that deals damage equal to 4.8% of ATK every 4s for 36s. (Success Rate: 100%.) \n \n **Gunnar Comet - cd 105s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 305.5% of ATK to Enemy x1. (Guaranteed critical.) \n :white_small_square:[Additional Damage]: Deal fixed damage of 790 to enemies affected by Chill. \n Level 6: \n :white_small_square:[Regular Damage]: Deal damage equal to 427.8% of ATK to Enemy x1. (Guaranteed critical.) \n :white_small_square:[Additional Damage]: Deal fixed damage of 3871 to enemies affected by Chill.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.aglaea') {
    	msg.reply('my gun says: \n **Aglaea** \n \n Leader Skill: \n **Level 1** \n Increase ATK of Physical-Type Allies by 20%. Increase Crit DMG of Physical-Type Allies by 10%. \n \n **Level 2** \n Not enough data...need more gunpowder! \n Please DM @Silbeya 실베야#9810 if you have info on this to load gunpowder, thanks!');
  	}
});

//Agnes
client.on('message', msg => {
    if (msg.content === 'gr.agnes') {
    	msg.reply('my gun says: \n **Agnes** \n \n Grimoire \n **Paradise Lost** \n [Debuff]: Increase damage reflected on target by 19.9% when active skill is triggered. (Success Rate: 80%. Duration: 30 seconds.) [Buff]: Apply 22.4% damage reduction from Enemy to 3 allies when battle begins/ (Apply on the 3 allies with the highest ATK. Duration: 30 seconds.)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.agnes') {
    	msg.reply('my gun says: \n **Agnes** \n \n **Rose Red Flash - cd 57s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 244.4% of ATK to Enemy x1. (Final attack applies to 3 enemies.) \n :white_small_square:[Healing]: For every 1 attacks, heal self by 125 HP. \n :white_small_square:[Buff]: Reflect 15.6% of damage taken by allies placed in own row. (Success Rate: 100%. Duration: 30 seconds. Max Damage: 100% of ATK.) \n Level 6: \n :white_small_square:[Regular Damage]: Deal damage equal to 342.2% of ATK to Enemy x1. (Final attack applies to 3 enemies.) \n :white_small_square:[Healing]: For every 1 attacks, heal self by 500 HP. \n :white_small_square:[Buff]: Reflect 17.7% of damage taken by allies placed in own row. (Success Rate: 100%. Duration: 30 seconds. Max Damage: 100% of ATK.) \n \n **Rose Red Shockwave - cd 100s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 172.7% of ATK to 3 enemies. \n :white_small_square:[Debuff]: Decrease Healing of 3 enemies by 45%. (Apply on the 3 enemies with the highest ATK. Duration: 60 seconds.) \n Level 6: \n :white_small_square:[Regular Damage]: Deal damage equal to 241.8% of ATK to 5 enemies. \n :white_small_square:[Debuff]: Decrease Healing of 3 enemies by 50.9%. (Apply on the 3 enemies with the highest ATK. Duration: 60 seconds.)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.agnes') {
    	msg.reply('my gun says: \n **Agnes** \n \n Leader Skill: \n **Level 1** \n Increase DEF of female allies by 25%. Increase HP of allies by 10% \n \n **Level 2** \n Increase DEF of female allies by 45%. Increase HP of allies by 20%');
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
    	msg.reply('my gun says: **Colette** \n \n **Leader Skill:** \n **Level 1** \n Increase ATK of Water Allies by 40%. \n \n **Level 2** \n Increase ATK of Water Allies by 60%.');
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

//Francesca
client.on('message', msg => {
    if (msg.content === 'gr.francesca') {
    	msg.reply('my gun says: \n **Francesca** \n \n Grimoire: \n **Fiery Rabbit** \n [Additional Damage]: Deal additional damage equal to 29.2% of ATK to 5 enemies every 2 attacks.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.francesca') {
    	msg.reply('my gun says: \n **Francesca** \n \n **Morph Hammer - cd 72s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 270.8% of ATK to 1 enemy. \n :white_small_square:[Chain Effect]: Deal damage equal to 298.6% of ATK to all enemies affected by Burn (Final attack applies to 3 enemies.) \n Level 6: \n :white_small_square:[Regular Damage]: Deal damage equal to 379.1% of ATK to 1 enemy. \n :white_small_square:[Chain Effect]: Deal damage equal to 402% of ATK to all enemies affected by Burn (Final attack applies to 3 enemies.) \n \n **Morph Scythes - cd 94s** \n Level 1: \n :white_small_square:[Debuff]: Increase damage taken by all enemies in the front row by 39% (Success Rate: 100%. Duration: 12 seconds.) \n :white_small_square:[Regular Damage]: Deal damage equal to 212% of ATK to 1 enemy. (Final attack applies to 4 enemies.) \n Level 6: \n :white_small_square:[Debuff]: Increase damage taken by all enemies in the front row by 44.1% (Success Rate: 100%. Duration: 12 seconds.) \n :white_small_square:[Regular Damage]: Deal damage equal to 296.9% of ATK to 1 enemy. (Final attack applies to 5 enemies.)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.francesca') {
    	msg.reply('my gun says: \n **Francesca** \n \n **Leader Skill:** \n **Level 1** \n Increase ATK of fire-type allies by 25%. Increase Max DEF of fire-type allies by 10%. \n \n **Level 2** \n Increase ATK of fire-type allies by 45%. Increase Max DEF of fire-type allies by 20%.');
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
    	msg.reply('my gun says: \n **Gordon** \n \n **Massive Earthquake - cd 50s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 176.6% of ATK to Enemy x3. \n :white_small_square:[Buff]: Remove 1 Debuff from self. \n :white_small_square:[Buff]: Increase own DEF by 58.8%. (Success Rate: 100%. Duration: 60s) \n Level 6: \n :white_small_square:[Regular Damage]: Deal damage equal to 247.3% of ATK to Enemy x3. \n :white_small_square:[Buff]: Remove 1 Debuff from self. \n :white_small_square:[Buff]: Increase own DEF by 66.4%. (Success Rate: 100%. Duration: 60s) \n \n **Pulverizer - cd 96s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 265% of ATK to 1 enemy. \n :white_small_square:[Additional Damage]: Deal damage equal to 77.6% of DEF to 1 enemy. \n :white_small_square:[Status Effect]: Inflict Stun on 1 enemy for 18s (Success Rate: 80%). \n Level 6: \n :white_small_square:[Regular Damage]: Deal damage equal to 371% of ATK to 1 enemy. \n :white_small_square:[Additional Damage]: Deal damage equal to 108.7% of DEF to 1 enemy. \n :white_small_square:[Status Effect]: Inflict Stun on 1 enemy for 18s (Success Rate: 80%).');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.gordon') {
    	msg.reply('my gun says: \n **Gordon** \n \n **Leader Skill:** \n **Level 1** \n If there are 3 or more FIRE type allies, increase DEF of all allies by 30%. Decrease DMG Taken of allies by 5%. \n \n **Level 2** \n If there are 3 or more FIRE type allies, increase DEF of all allies by 50%. Decrease DMG Taken of allies by 10%.');
  	}
});

//Helena
client.on('message', msg => {
    if (msg.content === 'gr.helena') {
    	msg.reply('my gun says: \n **Helena** \n \n Grimoire: \n **Unbreakable** \n [Buff]: Upon Self KO, cast Damage Immunity on Ally x4 one time. (Duration: 32s.)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.helena') {
    	msg.reply('my gun says: \n **Helena** \n \n **Partian Blessing - cd 63s** \n Level 1: \n :white_small_square:[Healing]: Heal Ally x5 for 98.5% of ATK. \n :white_small_square:[Additional Healing]: Additionally Heal Ally x1 for 34.1% of ATK. (Apply effect on Ally x1 with the lowest HP.) \n Level 6: \n :white_small_square:[Healing]: Heal Ally x5 for 128% of ATK. \n :white_small_square:[Additional Healing]: Additionally Heal Ally x3 for 44.4% of ATK. (Apply effect on Ally x3 with the lowest HP.) \n :white_small_square:[Buff]: Apply Damage Immunity effect on Ally x1 1 time. \n \n **Rune Wall - cd 90s** \n Level 1: \n :white_small_square:[Resurrection]: Resurrect Ally x1 with 30% of HP. \n :white_small_square:[Buff]: Cast barrier on Ally x4 that blocks up to 550 + 8.1% of ATK worth of damage. (Duration: 30s.) \n Level 6: \n :white_small_square:[Resurrection]: Resurrect Ally x1 with 50% of HP. \n :white_small_square:[Buff]: Cast barrier on Ally x5 that blocks up to 2612 + 18.1% of ATK worth of damage. (Duration: 30s.)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.helena') {
    	msg.reply('my gun says: \n **Helena** \n \n **Leader Skill:** \n **Level 1** \n Increase ATK by 30% for 3 or more targets. \n \n **Level 2** \n Increase ATK by 50% for 3 or more targets.');
  	}
});

//Hien
client.on('message', msg => {
    if (msg.content === 'gr.hien') {
    	msg.reply('my gun says: \n **Hien** \n \n Grimoire: \n **Scarlet Lily Frenzy** \n [Additional Damage]: Deal additional damage equal to 30% of ATK to enemies affected by Burn when All Attack is triggered.[Passive Effect]: Increase Pierce Rate of Self by 6%.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.hien') {
    	msg.reply('my gun says: \n **Hien** \n \n **Phoenix Wing Strike - cd 73s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 256.5% of ATK to Enemy x1. \n :white_small_square:[Chain Effect]: Deal additional damage eqial to 256.5% of ATK when chain attack is triggered. (Guaranteed critical) \n :white_small_square:[Chain Effect]: If the struck enemy is affected by Burn, inflict Burn to deal damage equal to 22% of ATK every 10s for 20s on Enemy x3. (Success Rate:60%.) \n Level 6: \n :white_small_square:[Regular Damage]: Deal damage equal to 378.4% of ATK to Enemy x1. \n :white_small_square:[Chain Effect]: Deal additional damage eqial to 378.4% of ATK when chain attack is triggered. (Guaranteed critical) \n :white_small_square:[Chain Effect]: If the struck enemy is affected by Burn, inflict Burn to deal damage equal to 24.8% of ATK every 10s for 20s on Enemy x3. (Success Rate:100%.) \n :white_small_square:[Additional Damage]: Deal fixed damage of 1990 to Enemy x1. \n \n **Falcon Claw - cd 95s** \n Level 1: \n:white_small_square:[Regular Damage]: Deal damage equal to 177.9% of ATK to Enemy x3. \n:white_small_square:[Debuff]: Decrease Damage of Enemy x3 by 23.5%. (Success Rate: 30%, Duration: 60s.) \n Level 6: \n :white_small_square:[Regular Damage]: Deal damage equal to 262.5% of ATK to Enemy x3. \n :white_small_square:[Debuff]: Decrease Damage of Enemy x3 by 26.66%. (Success Rate: 60%, Duration: 60s.) \n :white_small_square:[Additional Damage]: Deal additional damage equal to 4.7% of Max HP to Enemy x3 (Max Damage: 150% of ATK)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.hien') {
    	msg.reply('my gun says: \n **Hien** \n \n **Leader Skill:** \n **Level 1** \n If there are at least 3x Fire allies, increase allies ATK by 35%. Increase Crit Rate of allies by 5%. \n \n **Level 2** \n Not enough data...need more gunpowder! \n Please DM @Silbeya 실베야#9810 if you have info on this to load gunpowder, thanks!');
  	}
});

//Iroha
client.on('message', msg => {
    if (msg.content === 'gr.iroha') {
    	msg.reply('my gun says: \n **Iroha** \n \n Grimoire: \n **Spirit Shield** \n [Passive effect] Reduce damage from Fire-type enemies by 8.7%.[Buff]: When an active skill is used, heal 2 allies for 20.7% of ATK every 8 seconds for 40 seconds.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.iroha') {
    	msg.reply('my gun says: \n **Iroha** \n \n **Iron Bastion - cd 65s** \n Level 1: \n :white_small_square:[Buff] : Cast Barrier on 4 allies, blocking damage equal to 689 + 13.4% of ATK (Applies to the 4 allies with the highest DEF). \n :white_small_square:[Buff] Raise DEF of 5 allies by 26%. (Duration : 60 seconds) \n Level 6: \n :white_small_square:[Buff] : Cast Barrier on 5 allies, blocking damage equal to 3271 + 30.1% of ATK. (Duration : 30 seconds) \n :white_small_square:[Buff] Raise DEF of 5 allies by 29.4%. (Duration : 60 seconds) \n \n **Violet Lightning Blast - cd 88s** \n Level 1: \n :white_small_square:[Regular Damage] : Deal damage equal to 126.2% of ATK to 4 enemies. \n :white_small_square:[Buff] : Reduce damage from 4 enemies by 25.2% (Duration : 60 seconds) \n Level 6: \n :white_small_square:[Regular Damage] : Deal damage equal to 176.6% of ATK to 5 enemies. \n :white_small_square:[Buff] : Reduce damage from 5 enemies by 28.5% (Duration : 60 seconds)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.iroha') {
    	msg.reply('my gun says: \n **Iroha** \n \n **Leader Skill:** \n **Level 1** \n If there are at least 3x Water-type allies, increase ATK of all allies by 15%. Increase Block Rate of all allies by 5%. \n \n **Level 2** \n Not enough data...need more gunpowder! \n Please DM @Silbeya 실베야#9810 if you have info on this to load gunpowder, thanks!');
  	}
});

//Jack
client.on('message', msg => {
    if (msg.content === 'gr.jack') {
    	msg.reply('my gun says: \n **Jack** \n \n Grimoire: \n **Mechaknight Vanguard** \n [Buff]: When HP is 50% or lower, cast Barrier on Ally x5 that blocks up to 355 + 8.3% of ATK worth of damage. (Duration: 30s.)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.jack') {
    	msg.reply('my gun says: \n **Jack** \n \n **Wicked Wrestler - cd 44s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 170.3% of ATK to Enemy x1. \n :white_small_square:[Additional Damage:] Deal additional damage equal to 147.7% of ATK to Dark enemies. \n Level 6: \n :white_small_square:[Regular Damage]: Deal damage equal to 361.2% of ATK to Enemy x1. \n :white_small_square:[Additional Damage:] Deal additional damage equal to 184.7% of ATK to Dark enemies. \n \n **Death Parade - cd 85s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 102% of ATK to Enemy x3. \n :white_small_square:[Additional Damage]: Deal additional damage equal to 41.9% of DEF if Barrier effect is applied. \n Level 6: \n :white_small_square:[Regular Damage]: Deal damage equal to 268.2% of ATK to Enemy x4. \n :white_small_square:[Additional Damage]: Deal additional damage equal to 58.6% of DEF if Barrier effect is applied. \n :white_small_square:[Debuff]: Decrease Healing of Enemy x4 by 29.6% (Duration: 60s.)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.jack') {
    	msg.reply('my gun says: \n **Jack** \n \n **Leader Skill:** \n **Level 1** \n Increase Crit Resist Rate of allies by 10%. \n \n **Level 2** \n Increase Crit Resist Rate of allies by 20%');
  	}
});

//Jasper
client.on('message', msg => {
    if (msg.content === 'gr.jasper') {
    	msg.reply('my gun says: \n **Jasper** \n \n Grimoire: \n **Paralyzing Drive** \n [Buff]: Increase Self ATK by 28.2% when Active Skills are triggered. (Duration: 40s.)[Debuff]: When Active Skills are triggered, inflict Block Healing on the struck target. (Success Rate: 50%, Duration. 30s.)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.jasper') {
    	msg.reply('my gun says: \n **Jasper** \n \n **Extreme Ride - cd 64s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 212.8% of ATK to Enemy x3. \n :white_small_square:[Status Effect]: Inflict Silence on Enemy x3 for 20s. (Success Rate: 30%.) \n Level 6: \n :white_small_square:[Regular Damage]: Deal damage equal to 306% of ATK to Enemy x4. \n :white_small_square:[Status Effect]: Inflict Silence on Enemy x4 for 20s. (Success Rate: 40%.) \n \n **Omega Drive - cd 80s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 168.2% of ATK to Enemy x4. \n :white_small_square:[Additional Damage]: Deal fixed damage of 288 to Enemy x4. \n Level 6: \n :white_small_square:[Regular Damage]: Deal damage equal to 248.6% of ATK to Enemy x5. \n :white_small_square:[Additional Damage]: Deal fixed damage of 1410 to Enemy x5.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.jasper') {
    	msg.reply('my gun says: \n **Jasper** \n \n **Leader Skill:** \n **Level 1** \n Increase ATK of allies by 25%. \n \n **Level 2** \n Not enough data...need more gunpowder! \n Please DM @Silbeya 실베야#9810 if you have info on this to load gunpowder, thanks!');
  	}
});

//Jinkai
client.on('message', msg => {
    if (msg.content === 'gr.jinkai') {
    	msg.reply('my gun says: \n **Jinkai** \n \n Grimoire: \n **Aggressive Defense** \n [Buff]: Cast Physical Damage Resist effect on Self 1 time when Active Skills are triggered. (Success Rate: 30%. Duration: 32s.)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.jinkai') {
    	msg.reply('my gun says: \n **Jinkai** \n \n **Vajra Strike - cd 58s** \n Level 1: \n :white_small_square:[Buff]: Cast Barrier on Ally x3 that blocks up to 458 + 7.8% of ATK worth of damage. (Duration: 30s.) \n :white_small_square:[Buff]: Apply Taunt on Self, making them priority targets for enemies. (Duration 25s.) \n Level 6: \n :white_small_square:[Buff]: Cast Barrier on Ally x4 that blocks up to 2174 + 17.7% of ATK worth of damage. (Duration: 50s.) \n :white_small_square:[Buff]: Apply Taunt on Self, making them priority targets for enemies. (Duration 40s.) \n :white_small_square:[Buff]: Increase DEF of Ally y4 by 34.6%. (Duration: 60.s) \n \n **Asura Path - cd 94s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 138% of ATK to Enemy x4. \n :white_small_square:[Status Effect]: Inflict Silence on Enemy x4 for 20s. (Success Rate: 30%.) \n Level 6: \n :white_small_square:[Regular Damage]: Deal damage equal to 203.8% of ATK to Enemy x4. \n :white_small_square:[Status Effect]: Inflict Silence on Enemy x5 for 20s. (Success Rate: 30%.) \n :white_small_square:[Debuff]: Decrease Damage of Enemy x5 by 22.5%. (Duration: 60s.)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.jinkai') {
    	msg.reply('my gun says: \n **Jinkai** \n \n **Leader Skill:** \n **Level 1** \n If there are at least 3 Light allies, increase allies ATK by 35%. Increase Crit DMG of allies by 10%. \n \n **Level 2** \n Not enough data...need more gunpowder! \n Please DM @Silbeya 실베야#9810 if you have info on this to load gunpowder, thanks!');
  	}
});

//Leika
client.on('message', msg => {
    if (msg.content === 'gr.leika') {
    	msg.reply('my gun says: \n **Leika** \n \n Grimoire: \n **White Snake Tear** \n [Buff]: Increase Self ATK by 21.2% when Block is triggered. (Duration: 40s.)[Passive Effect]: Increase the Block Rate of allies in the same row by 4%.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.leika') {
    	msg.reply('my gun says: \n **Leika** \n \n **Sakura Strike: Sange Blade - cd 83s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 213.4% of ATK to Enemy x3. \n :white_small_square:[Debuff]: Decrease Crit Rate of Enemy x3 by 23.2%. (Duration: 60s.) \n Level 6: \n :white_small_square:[Regular Damage]: Deal damage equal to 303.1% of ATK to Enemy x4. \n :white_small_square:[Debuff]: Decrease Crit Rate of Enemy x4 by 26.2%. (Duration: 60s.) \n \n **Sakura Strike: Rakshasa Blade - cd 105s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 137.3% of ATK to Enemy x3. \n :white_small_square:[Additional Damage]: Deal fixed damage of 332 to enemies affected by Bleed. \n Level 6: \n :white_small_square:[Regular Damage]: Deal damage equal to 232.8% of ATK to Enemy x4. \n :white_small_square:[Additional Damage]: Deal fixed damage of 1627 to enemies affected by Bleed. \n :white_small_square:[Buff] Increase Crit Rate of Self by 19.3%.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.leika') {
    	msg.reply('my gun says: \n **Leika** \n \n **Leader Skill:** \n **Level 1** \n Increase ATK of allies by 25%. \n \n **Level 2** \n Not enough data...need more gunpowder! \n Please DM @Silbeya 실베야#9810 if you have info on this to load gunpowder, thanks!');
  	}
});

//Ludmila
client.on('message', msg => {
    if (msg.content === 'gr.ludmila') {
    	msg.reply('my gun says: \n **Ludmila** \n \n Grimoire: \n **Volcanic Formula** \n [Passive Effect]: Increase Crit Rate of Fire Allies by 7.4%. \n [Buff]: Decrease Skill Cooldown of Self by 6s when Regular Attack is triggered (Success Rate: 100%).');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.ludmila') {
    	msg.reply('my gun says: \n **Ludmila** \n \n **Infernal Lava - cd 68s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 316.2% of ATK to Enemy x3. (Sequentially attack Enemy x3.) \n :white_small_square:[Status Effect]: Inflict Burn that deals damage equal to 26.7% of ATK every 10s for 20s. (Success Rate: 30%.) \n Level 6: \n :white_small_square:[Regular Damage]: Deal damage equal to 467% of ATK to Enemy x3. (Sequentially attack Enemy x3.) \n :white_small_square:[Status Effect]: Inflict Burn that deals damage equal to 30.2% of ATK every 10s for 20s. (Success Rate: 100%.) \n \n **Cremation - cd 88s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 142.2% of ATK to Enemy x3. \n :white_small_square:[Additional Damage]: Deal additional damage equal to 85.3% of ATK to enemies affected by Burn. \n Level 6: \n :white_small_square:[Regular Damage]: Deal damage equal to 238.5% of ATK to Enemy x4. \n :white_small_square:[Additional Damage]: Deal additional damage equal to 106.6% of ATK to enemies affected by Burn. \n :white_small_square:[Status Effect]: Inflict Stun on Enemy x4 for 18s. (Success Rate: 30%.)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.ludmila') {
    	msg.reply('my gun says: \n **Ludmila** \n \n **Leader Skill:** \n **Level 1** \n Increase ATK of Fire allies by 30%. Increase Max HP of Fire allies by 10%. \n \n **Level 2** \n Not enough data...need more gunpowder! \n Please DM @Silbeya 실베야#9810 if you have info on this to load gunpowder, thanks!');
  	}
});

//Luna
client.on('message', msg => {
    if (msg.content === 'gr.luna') {
    	msg.reply('my gun says: \n **Luna** \n \n Grimoire: \n **Lunar Protection** \n [Debuff]: Decrease ATK of Fire Enemies by 17.7% when Active Skills are triggered. (Duration: 40s.)[Debuff]: Decrease DEF of Hit Target by 9.7% when Regular Attack is triggered. (Success Rate: 30%. Duration: 40s.)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.luna') {
    	msg.reply('my gun says: \n **Luna** \n \n **Prism Beam - cd 66s** \n Level 1: \n :white_small_square:[Regular Damage] Deal Damage equal to 189.5% of ATK to Enemy x3. \n :white_small_square:[Debuff] Remove 1 Buff from Enemy x1. \n Level 6: \n :white_small_square:[Regular Damage] Deal Damage equal to 265.3% of ATK to Enemy x3. \n :white_small_square:[Additional Damage] Deal additional damage equal to 6% of Max Enemy HP to Enemy x3. (Max Damage: 150% of ATK) \n :white_small_square:[Debuff] Remove 1 Buff from Enemy x3. \n \n  **Resonant Beam - cd 95s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal Damage equal to 130.2% of ATK to Enemy x4. \n :white_small_square:[Additional Damage]: Deal additional Damage equal to 63.8% of ATK to enemies affected by Chill. \n Level 6: \n :white_small_square:[Regular Damage]: Deal Damage equal to 182.3% of ATK to Enemy x5. \n :white_small_square:[Debuff]: Increase Skill Cooldown of Enemy x5 by 12s. \n :white_small_square:[Additional Damage]: Deal additional Damage equal to 79.7% of ATK to enemies affected by Chill.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.luna') {
    	msg.reply('my gun says: \n **Luna** \n \n **Leader Skill:** \n **Level 1** \n Increase ATK of Magic-Type Allies by 30%. \n \n **Level 2** \n Not enough data...need more gunpowder! \n Please DM @Silbeya 실베야#9810 if you have info on this to load gunpowder, thanks!');
  	}
});

//Malpion
client.on('message', msg => {
    if (msg.content === 'gr.malpion') {
    	msg.reply('my gun says: \n **Malpion** \n \n Grimoire: \n **Mad Dog Awakening** \n [Additional Damage]: Deal additional damage equal to 36.1% of ATK to enemies affected by Blind when Active Skills are triggered.[Passive Effect]: Increase Pierce Rate of Self by 6%.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.malpion') {
    	msg.reply('my gun says: \n **Malpion** \n \n **Venomous Blade - cd 45s** \n Level 1: \n :white_small_square:[Regular Damage] Deal Damage equal to 258.4% of ATK to Enemy x1. \n :white_small_square:[Buff] Increase Crit Rate of Self by 27.9%. (Duration: 7s.) \n Level 6: \n :white_small_square:[Regular Damage] Deal Damage equal to 381.3% of ATK to Enemy x1. \n :white_small_square:[Buff] Increase Crit Rate of Self by 31.6%. (Duration: 7s.) \n :white_small_square:[Buff] Cast Blood Sucking on Self that heals 42.6% of damage. (Success Rate: 100%. Duration: 5s. Heal up to 50% of ATK.) \n \n **Critical Stance - cd 80s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage to 263.5% of ATK to Enemy x1. \n :white_small_square:[Status Effect]: Inflict Blind on Enemy x1. for 20s. (Success Rate: 50%) \n Level 6: \n :white_small_square:[Regular Damage]: Deal damage to 389.4% of ATK to Enemy x1. \n :white_small_square:[Additional Damage]: Deal additional damage equal to 186.6% of ATK to enemies with HP that is 50% or lower. \n :white_small_square:[Status Effect]: Inflict Blind on Enemy x1. for 20s. (Success Rate: 50%)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.malpion') {
    	msg.reply('my gun says: \n **Malpion** \n \n **Leader Skill:** \n **Level 1** \n Increase Crit DMG of Dark allies by 30%. \n \n **Level 2** \n Not enough data...need more gunpowder! \n Please DM @Silbeya 실베야#9810 if you have info on this to load gunpowder, thanks!');
  	}
});

//Ophelia
client.on('message', msg => {
    if (msg.content === 'gr.ophelia') {
    	msg.reply('my gun says: \n **Ophelia** \n \n Grimoire: \n **Ground Upheaval** \n [Healing]: When hit, heal HP for 16.6% of ATK every 8s for 40s. (Success Rate: 50%.)[Passive Effect]: Increase Block Rate of Ally x1 by 2.3%.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.ophelia') {
    	msg.reply('my gun says: \n **Ophelia** \n \n **Shield of Sverin - cd 90s** \n Level 1: \n :white_small_square:[Buff]: Transfer 50% of damage taken by Ally x3 to the caster. Decrease damage taken by the caster by 30%. (Duration 49s.) \n :white_small_square:[Buff]: Decrease DMG Taken of Self by 37.2%. (Duration: 60s.) \n :white_small_square:[Buff]: Increase Pierce Rate of Ally x2 with the highest ATK by 19.1%. (Duration: 40s.) \n Level 6: \n :white_small_square:[Buff]: Transfer 50% of damage taken by Ally x3 to the caster. Decrease damage taken by the caster by 30%. (Duration 63s.) \n :white_small_square:[Buff]: Decrease DMG Taken of Self by 42.1%. (Duration: 60s.) \n :white_small_square:[Buff]: Increase Pierce Rate of Ally x4 with the highest ATK by 21.6%. (Duration: 40s.) \n \n **Aegion Hammer - cd 60s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 252.6% of ATK to Enemy x1. \n :white_small_square:[Status Effect]: Inflict Stun on Enemy x1 for 18s. (Success Rate: 80%.) \n Level 6: \n :white_small_square:[Regular Damage]: Deal damage equal to 393.1% of ATK to Enemy x1. \n :white_small_square:[Status Effect]: Inflict Stun on Enemy x1 for 18s. \n :white_small_square:[Debuff]: Increase DMG Taken of Enemy x1 by 31.6% (Duration: 60s.)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.ophelia') {
    	msg.reply('my gun says: \n **Ophelia** \n \n **Leader Skill:** \n **Level 1** \n Increase Block rate of Wind allies by 10%. \n \n **Level 2** \n Not enough data...need more gunpowder! \n Please DM @Silbeya 실베야#9810 if you have info on this to load gunpowder, thanks!');
  	}
});

//Reiz
client.on('message', msg => {
    if (msg.content === 'gr.reiz') {
    	msg.reply('my gun says: \n **Reiz** \n \n Grimoire: \n **Gauss Jammer** \n [Passive Effect]: Increase the ATK of allies in the same row by 12.9%.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.reiz') {
    	msg.reply('my gun says: \n **Reiz** \n \n **Astral Fist - cd 55s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 243.6% of ATK to Enemy x1. \n :white_small_square:[Status Effect]: Inflict Chill that deals damage equal to 4.2% of ATK every 4s for 36s. \n Level 6: \n :white_small_square:[Regular Damage]: Deal damage equal to 359.2% of ATK to Enemy x1. \n :white_small_square:[Status Effect]: Inflict Chill that deals damage equal to 4.7% of ATK every 4s for 36s. \n :white_small_square:[Debuff]: Increase DMG Taken of Enemy x1 by 30.7%. (Duration: 60s.) \n \n **Bolt of Victory - cd 70s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 222.3% of ATK to Enemy x1. (Guaranteed critical) \n Level 6: \n :white_small_square:[Regular Damage]: Deal damage equal to 328.2% of ATK to Enemy x1. (Guaranteed critical) \n :white_small_square:[Additional Damage]: Deal additional damage equal to 194.4% of ATK to enemies affected by chill. (Guaranteed critical) \n :white_small_square:[Status Effect]: Apply Freeze effect on enemies affected by Chill. (Duration: 18s.)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.reiz') {
    	msg.reply('my gun says: \n **Reiz** \n \n **Leader Skill:** \n **Level 1** \n If there are at least 3 Water allies, increase allies ATK by 35%. Increase Crit DMG of allies by 10%. \n \n **Level 2** \n Not enough data...need more gunpowder! \n Please DM @Silbeya 실베야#9810 if you have info on this to load gunpowder, thanks!');
  	}
});

//Ren
client.on('message', msg => {
    if (msg.content === 'gr.ren') {
    	msg.reply('my gun says: \n **Ren** \n \n Grimoire: \n **Wind Blade** \n [Passive Effect]: Deal additional damage equal to 18% of ATK to Water enemies.[Buff]: When hit, increase Self Crit Rate by 12.6%. (Duration: 40s.)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.ren') {
    	msg.reply('my gun says: \n **Ren** \n \n **Sakura Shrike: Blinding Firestorm - cd 82s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 288.6% of ATK to Enemy x1 (Deals damage to the enemy with the lowest HP) \n :white_small_square:[Status Effect]: Inflict Poison that deals damage equal to 14% of ATK every 6s for 30s. \n Level 6: \n :white_small_square:[Regular Damage]: Deal damage equal to 404.1% of ATK to Enemy x1. \n :white_small_square:[Status Effect]: Inflict Poison that deals damage equal to 15.8% of ATK every 6s for 30s. \n :white_small_square:[Debuff]: Decrease ATK SPD of Enemy x1 by 21. (Duration: 60s.) \n \n **Sakura Shrike: Toxic Phoenix - cd 75s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 170.7% of ATK to Enemy x3. \n :white_small_square:[Status Effect]: Inflict Bleed that deals damage equal to 7% of ATK every 5s for 30s. (Success Rate: 30%) \n Level 6: \n :white_small_square:[Regular Damage]: Deal damage equal to 238.9% of ATK to Enemy x4. \n :white_small_square:[Status Effect]: Inflict Bleed on enemy x4 that deals damage equal to 7.9% of ATK every 5s for 30s. (Success Rate: 60%) \n :white_small_square:[Status Effect]: Inflict Bleed on enemy x1 that deals damage equal to 10.8% of ATK every 5s for 30s. (Apply effect on 1 enemy with the highest ATK) (Success Rate: 100%)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.ren') {
    	msg.reply('my gun says: \n **Ren** \n \n **Leader Skill:** \n **Level 1** \n Increase Crit DMG of Physical-Type allies by 20% \n \n **Level 2** \n Not enough data...need more gunpowder! \n Please DM @Silbeya 실베야#9810 if you have info on this to load gunpowder, thanks!');
  	}
});

//Renga
client.on('message', msg => {
    if (msg.content === 'gr.renga') {
    	msg.reply('my gun says: \n **Renga** \n \n Grimoire: \n **Unwavering Emotions** \n [Buff]: Apply All DMG immunity on all allies in own row 1 time at the start of battle (Duration: 30s) \n [Passive Effect]: Increase ATK of allies in own row by 10.6%.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.renga') {
    	msg.reply('my gun says: \n **Renga** \n \n **Clearwater Dance - cd 84s** \n Level 1: \n :white_small_square:[Buff]: Reset cooldown of Ally x1 (Applies to the Ally with the highest ATK.) \n :white_small_square:[Buff]: Decrease DMG from enemies by 27.7% for Ally x3 (Duration:60s). \n Level 6: \n :white_small_square: Not enough data...need more gunpowder! \n Please DM @Silbeya 실베야#9810 if you have info on this to load gunpowder, thanks! \n \n **Midnight Sun Embrace - cd 94s** \n Level 1: \n :white_small_square:[Regular Damage]: Deal damage equal to 126.4% of ATK to Enemy x4. \n :white_small_square:[Debuff]: Increase Cooldown by 13s for 1 enemy (Applies to the enemy with the highest ATK). \n :white_small_square:[Debuff]: Increase DMG Taken of Hit Target by 22.6% (Duration: 60s). \n Level 6: \n :white_small_square:Not enough data...need more gunpowder! \n Please DM @Silbeya 실베야#9810 if you have info on this to load gunpowder, thanks!');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.renga') {
    	msg.reply('my gun says: \n **Renga** \n \n **Leader Skill:** \n **Level 1** \n Increase DEF of all allies by 30% if there are at least 3 light-type allies. Increase HP of allies by 10%. \n \n **Level 2** \n Not enough data...need more gunpowder! \n Please DM @Silbeya 실베야#9810 if you have info on this to load gunpowder, thanks!');
  	}
});

//Rin


//Rito
client.on('message', msg => {
    if (msg.content === 'gr.rito') {
    	msg.reply('my gun says: \n **Rito** \n \n Grimoire: \n **Doomsday Thunder** \n [Buff] When an active skill is used, reduce damage to allies by 14%. (Success Rate: 100%; Duration 40 seconds)[Addtional Damage] Add damage equal to 38.9% of ATK to all attacks.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.rito') {
    	msg.reply('my gun says: \n **Rito** \n \n **Punishing Bolt - cd 85s** \n Level 1: \n :white_small_square:[Standard Damage]: Deal damage equal to 173.1% of ATK to 3 enemies. \n :white_small_square:[Additional Damage]: Deal damage equal to 46.2% of ATK to physical-type enemies. \n Level 6: \n :white_small_square:[Standard Damage]: Deal damage equal to 242.4% of ATK to 5 enemies. \n :white_small_square: [Additional Damage]: Deal damage equal to 57.7% of ATK to physical-type enemies. \n \n **Retribution - cd 110s** \n Level 1: \n :white_small_square:[Standard Damage]: Deal damage equal to 184.9% of ATK to Enemy x4. \n :white_small_square:[Status Effect]: Inflict Shock on targets affected by Chill (Success Rate: 70%. Duration: 18s) \n Level 6: \n :white_small_square:[Standard Damage]: Deal damage equal to 258.8% of ATK to Enemy x4. \n :white_small_square:[Status Effect]: Inflict Shock on targets affected by Chill (Success Rate: 70%. Duration: 18s)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.rito') {
    	msg.reply('my gun says: \n **Rito** \n \n **Leader Skill:** \n **Level 1** \n Increase ATK of all water-type allies by 25%. Increase DEF of all water-type allies by 10%. \n \n **Level 2** \n Increase ATK of all water-type allies by 45%. Increase DEF of all water-type allies by 20%.');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot 
