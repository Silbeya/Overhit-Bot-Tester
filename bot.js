const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {

    console.log('I am ready!');

});

//COMMANDS
client.on('message', msg => {
    if (msg.content === '.help') {
    	msg.reply('hi, Esta Bot is here to help! \n \n Type **gr.<hero>** for grimoire info, eg. gr.esta \n Type **sk.<hero>** for skill info, eg. sk.esta \n Type **ld.<hero>** for leader skill info, eg. ld.esta \n Type **hr.<hero>** for all info of specified hero, eg. hr.esta \n Type **list.heroes** to see all available heroes (for name spellcheck when entering commands) \n \n Please note that the commands are strictly **all in lowercase letters**. \n Eg. GR.esta, Gr.Esta etc. **will not work**. Only gr.esta will work. \n \n Only SSR and UR heroes are available. \n Sorry for the limitations to the bot due to limited knowledge :< but hope it still helps ^^ \n \n *Esta Bot v1.0 created by Silbeya 실베야*');
  	}
});

//List of Heroes
client.on('message', msg => {
    if (msg.content === 'list.heroes') {
    	msg.reply('my gun says: \n \n **Fire (9)** \n Agnes | Ash | Blossom | Elphie | Esta | Francesca | Gordon | Hien | Ludmila \n \n **Water (10)** \n Aglaea | Aria | Colette | Emodin | Iroha | Luna | Reiz | Rin | Rito | Shoumei \n \n **Wind (9)** \n Beatrice | Celesta | Edmund | Leika | Ophelia | Ren | Saion | SunWukong | Yggdrasil \n \n **Light (9)** \n Alex | Helena | Jack | Jasper | Jinkai | Norn | Renga | Riah | Sophia \n \n **Dark (8)** \n Anemone | Angelo | Demian | Gleck | Malpion| Teze | Unknown | Xanthippe');
  	}
});

//UR HEROES

//Anemone
client.on('message', msg => {
    if (msg.content === 'gr.anemone') {
    	msg.reply('my gun says: \n **Anemone** \n \n __**Grimoire:**__ \n **Frontline Jammer** \n :white_small_square:[Passive Effect]: Deal additional damage equal to 18.9% of ATK to Magic-Type enemies. \n :white_small_square:[Passive Effect]: When HP is 50% or lower, increase ATK of Self by 18.8%. (Success Rate: 100%. Duration 40s.) \n :white_small_square:[Buff]: Upon Self KO, increase ATK of Ally x4 by 24.2%. (Success Rate: 100%. Duration: 40s.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.anemone') {
    	msg.reply('my gun says: \n **Anemone** \n \n __**Skills**__ \n **Sky Destructor - cd 83s** \n Level 1 | __**6**__ : \n :white_small_square:[Regular Damage]: Deal damage equal to 211% | __**342.5%**__ of ATK to Enemy x3 | __**x4**__ . \n :white_small_square:[Status Effect]: Inflict Blind on Enemy x3 | __**x4**__ for 20s. (Success Rate: 50% | __**80%**__) \n \n **Apocalypse Cannon - cd 100s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 158.2% | __**234.42%**__ of ATK to Enemy x5. \n :white_small_square:[Chain Effect]: Deal damage equal to 174.1% | __**242%**__ of ATK to enemies affected by Blind. \n __**:white_small_square:[Additional Damage]: Deal fixed damage of 1424 to Enemy x5.**__');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.anemone') {
    	msg.reply('my gun says: \n **Anemone** \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:For each type of Hero in your Team, the ATK of your heroes is boosted by 20%. \n \n **Level 2** \n :white_small_square:Not enough data...need more gunpowder! \n :white_small_square:Please DM @Silbeya 실베야#9810 if you have info on this to load gunpowder, thanks!');
  	}
});

client.on('message', msg => {
    if (msg.content === 'hr.anemone') {
        
const embed = new Discord.RichEmbed()

  .setAuthor("Anemone")
  .setColor(0x00b8ff)
  .setDescription("\n \n __**Grimoire:**__ \n **Frontline Jammer** \n :white_small_square:[Passive Effect]: Deal additional damage equal to 18.9% of ATK to Magic-Type enemies. \n :white_small_square:[Passive Effect]: When HP is 50% or lower, increase ATK of Self by 18.8%. (Success Rate: 100%. Duration 40s.) \n :white_small_square:[Buff]: Upon Self KO, increase ATK of Ally x4 by 24.2%. (Success Rate: 100%. Duration: 40s. \n \n __**Skills:**__ \n **Sky Destructor - cd 83s** \n Level 1 | __**6**__ : \n :white_small_square:[Regular Damage]: Deal damage equal to 211% | __**342.5%**__ of ATK to Enemy x3 | __**x4**__ . \n :white_small_square:[Status Effect]: Inflict Blind on Enemy x3 | __**x4**__ for 20s. (Success Rate: 50% | __**80%**__) \n \n **Apocalypse Cannon - cd 100s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 158.2% | __**234.42%**__ of ATK to Enemy x5. \n :white_small_square:[Chain Effect]: Deal damage equal to 174.1% | __**242%**__ of ATK to enemies affected by Blind. \n __**:white_small_square:[Additional Damage]: Deal fixed damage of 1424 to Enemy x5.**__ \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:For each type of Hero in your Team, the ATK of your heroes is boosted by 20%. \n \n **Level 2** \n :white_small_square:Not enough data...need more gunpowder!")
  .setFooter("Please inform @Silbeya 실베야#9810 if the info here needs to be updated; so gunpowder can be loaded for Esta Bot ^^")
  .setThumbnail("https://tierlistmania.com/wp-content/uploads/2019/06/Anemone-Hero-Icon-Overhit.png");
 
  msg.reply('my gun says:');
  msg.channel.send({embed});
  
  }
});

//Riah
client.on('message', msg => {
    if (msg.content === 'gr.riah') {
    	msg.reply('my gun says: \n **Riah** \n \n __**Grimoire:**__ \n **Wind of Birth** \n :white_small_square:[Buff]: Increase Ally x5 ATK by 9.7% when All Attack is triggered (Duration 40s). \n :white_small_square:[Debuff]: Increase Hit Target DMG Taken by 16.1% when Regular Attack is triggered (Duration: 40s). \n :white_small_square:[Passive Effect]: When HP is 50% or higher, increase Block Rate of Self by 6.5%');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.riah') {
    	msg.reply('my gun says: \n **Riah** \n \n __**Skills:**__ \n **Sacred Fleur - cd 55s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 336.7% of ATK to Enemy x1. \n :white_small_square:[Status Effect]: Inflict Bleed that deals damage equal to 11.5% of ATK every 5s for 30s. (Success Rate: 100%) (Bleed): Decrease Healing by 20%. \n __**:white_small_square: Not enough data...need more gunpowder! Please DM @Silbeya 실베야#9810 if you have info on this to load gunpowder, thanks!**__ \n \n **Asterisk Advent - cd 63s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal Damage equal to 352.3% of ATK to Enemy x1. (Guaranteed critical.) \n :white_small_square:[Additional Damage]: Deal additional damage equal to 211.4% of ATK to enemies affected by Bleed. \n __**:white_small_square: Not enough data...need more gunpowder! Please DM @Silbeya 실베야#9810 if you have info on this to load gunpowder, thanks!**__');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.riah') {
    	msg.reply('my gun says: \n **Riah** \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:For each type of Hero on your Team, increase allies ATK by 15%. \n \n **Level 2** \n :white_small_square:Not enough data...need more gunpowder! \n :white_small_square:Please DM @Silbeya 실베야#9810 if you have info on this to load gunpowder, thanks!');
  	}
});

client.on('message', msg => {
    if (msg.content === 'hr.riah') {
        
const embed = new Discord.RichEmbed()

  .setAuthor("Riah")
  .setColor(0x00b8ff)
  .setDescription("\n \n __**Grimoire:**__ \n **Wind of Birth** \n :white_small_square:[Buff]: Increase Ally x5 ATK by 9.7% when All Attack is triggered (Duration 40s). \n :white_small_square:[Debuff]: Increase Hit Target DMG Taken by 16.1% when Regular Attack is triggered (Duration: 40s). \n :white_small_square:[Passive Effect]: When HP is 50% or higher, increase Block Rate of Self by 6.5% \n \n __**Skills:**__ \n **Sacred Fleur - cd 55s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 336.7% of ATK to Enemy x1. \n :white_small_square:[Status Effect]: Inflict Bleed that deals damage equal to 11.5% of ATK every 5s for 30s. (Success Rate: 100%) (Bleed): Decrease Healing by 20%. \n __**:white_small_square: Not enough data...need more gunpowder!**__ \n \n **Asterisk Advent - cd 63s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal Damage equal to 352.3% of ATK to Enemy x1. (Guaranteed critical.) \n :white_small_square:[Additional Damage]: Deal additional damage equal to 211.4% of ATK to enemies affected by Bleed. \n __**:white_small_square: Not enough data...need more gunpowder!**__ \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:For each type of Hero on your Team, increase allies ATK by 15%. \n **Level 2** \n :white_small_square:Not enough data...need more gunpowder!")
  .setFooter("Please inform @Silbeya 실베야#9810 if the info here needs to be updated; so gunpowder can be loaded for Esta Bot ^^")
  .setThumbnail("https://tierlistmania.com/wp-content/uploads/2019/06/Riah-Hero-Icon-Overhit.png");
 
  msg.reply('my gun says:');
  msg.channel.send({embed});
  
  }
});

//SSR HEROES

//Aglaea
client.on('message', msg => {
    if (msg.content === 'gr.aglaea') {
    	msg.reply('my gun says: \n **Aglaea** \n \n __**Grimoire:**__ \n **Frostbite** \n :white_small_square:[Status Effect]: Inflict Freeze for 18s when Active Skills are triggered (Success Rate: 10%). \n :white_small_square:[Passive Effect]: Increase the ATK of allies in the same row by 11.6%');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.aglaea') {
    	msg.reply('my gun says: \n **Aglaea** \n \n __**Skills:**__ \n **White Freeze - cd 78s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 315.9% | __**466.5%**__ of ATK to Enemy x3. (Sequentially attack Enemy x3.) \n :white_small_square:[Status Effect]: Inflict Chill that deals damage equal to 4.3% | __**4.8%**__ of ATK every 4s for 36s (Success Rate: 30% | __**100%**__). \n \n **Gunnar Comet - cd 105s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 305.5% | __**427.8%**__ of ATK to Enemy x1. (Guaranteed critical.) \n :white_small_square:[Additional Damage]: Deal fixed damage of 790 | __**3871**__ to enemies affected by Chill.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.aglaea') {
    	msg.reply('my gun says: \n **Aglaea** \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Increase ATK of Physical-Type Allies by 20%. \n :white_small_square:Increase Crit DMG of Physical-Type Allies by 10%. \n \n **Level 2** \n :white_small_square:Not enough data...need more gunpowder! \n :white_small_square:Please DM @Silbeya 실베야#9810 if you have info on this to load gunpowder, thanks!');
  	}
});

client.on('message', msg => {
    if (msg.content === 'hr.aglaea') {
        
const embed = new Discord.RichEmbed()

  .setAuthor("Aglaea")
  .setColor(0x00b8ff)
  .setDescription("\n \n __**Grimoire:**__ \n **Frostbite** \n :white_small_square:[Status Effect]: Inflict Freeze for 18s when Active Skills are triggered (Success Rate: 10%). \n :white_small_square:[Passive Effect]: Increase the ATK of allies in the same row by 11.6% \n \n __**Skills:**__ \n **White Freeze - cd 78s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 315.9% | __**466.5%**__ of ATK to Enemy x3. (Sequentially attack Enemy x3.) \n :white_small_square:[Status Effect]: Inflict Chill that deals damage equal to 4.3% | __**4.8%**__ of ATK every 4s for 36s (Success Rate: 30% | __**100%**__). \n \n **Gunnar Comet - cd 105s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 305.5% | __**427.8%**__ of ATK to Enemy x1. (Guaranteed critical.) \n :white_small_square:[Additional Damage]: Deal fixed damage of 790 | __**3871**__ to enemies affected by Chill. \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Increase ATK of Physical-Type Allies by 20%. \n :white_small_square:Increase Crit DMG of Physical-Type Allies by 10%. \n \n **Level 2** \n :white_small_square:Not enough data...need more gunpowder!")
  .setFooter("Please inform @Silbeya 실베야#9810 if the info here needs to be updated; so gunpowder can be loaded for Esta Bot ^^")
  .setThumbnail("https://tierlistmania.com/wp-content/uploads/2019/06/Aglaea-Hero-Icon-Overhit.png");
 
  msg.reply('my gun says:');
  msg.channel.send({embed});
  
  }
});

//Agnes
client.on('message', msg => {
    if (msg.content === 'gr.agnes') {
    	msg.reply('my gun says: \n **Agnes** \n \n __**Grimoire**__ \n **Paradise Lost** \n :white_small_square:[Debuff]: Increase damage reflected on target by 19.9% when active skill is triggered (Success Rate: 80%. Duration: 30s). \n :white_small_square:[Buff]: Apply 22.4% damage reduction from Enemy to 3 allies when battle begins/ (Apply on the 3 allies with the highest ATK. Duration: 30s.)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.agnes') {
    	msg.reply('my gun says: \n **Agnes** \n \n __**Skills**__ \n **Rose Red Flash - cd 57s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 244.4% | __**342.2%**__ of ATK to Enemy x1. (Final attack applies to 3 enemies.) \n :white_small_square:[Healing]: For every 1 attacks, heal self by 125 | __**500**__ HP. \n :white_small_square:[Buff]: Reflect 15.6% | __**17.7%**__ of damage taken by allies placed in own row. (Success Rate: 100%. Duration: 30s. Max Damage: 100% of ATK.) \n \n **Rose Red Shockwave - cd 100s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 172.7% | __**241.8%**__ of ATK to 3 | __**5**__ enemies. \n :white_small_square:[Debuff]: Decrease Healing of 3 enemies by 45% | __**50.9%**__ (Apply on the 3 enemies with the highest ATK. Duration: 60s). ');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.agnes') {
    	msg.reply('my gun says: \n **Agnes** \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Increase DEF of female allies by 25%. \n :white_small_square:Increase HP of allies by 10% \n \n **Level 2** \n :white_small_square:Increase DEF of female allies by 45%. \n :white_small_square:Increase HP of allies by 20%');
  	}
});

client.on('message', msg => {
    if (msg.content === 'hr.agnes') {
        
const embed = new Discord.RichEmbed()

  .setAuthor("Agnes")
  .setColor(0x00b8ff)
  .setDescription("\n \n __**Grimoire**__ \n **Paradise Lost** \n :white_small_square:[Debuff]: Increase damage reflected on target by 19.9% when active skill is triggered (Success Rate: 80%. Duration: 30s). \n :white_small_square:[Buff]: Apply 22.4% damage reduction from Enemy to 3 allies when battle begins/ (Apply on the 3 allies with the highest ATK. Duration: 30s.) \n \n __**Skills**__ \n **Rose Red Flash - cd 57s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 244.4% | __**342.2%**__ of ATK to Enemy x1. (Final attack applies to 3 enemies.) \n :white_small_square:[Healing]: For every 1 attacks, heal self by 125 | __**500**__ HP. \n :white_small_square:[Buff]: Reflect 15.6% | __**17.7%**__ of damage taken by allies placed in own row. (Success Rate: 100%. Duration: 30s. Max Damage: 100% of ATK.) \n \n **Rose Red Shockwave - cd 100s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 172.7% | __**241.8%**__ of ATK to 3 | __**5**__ enemies. \n :white_small_square:[Debuff]: Decrease Healing of 3 enemies by 45% | __**50.9%**__ (Apply on the 3 enemies with the highest ATK. Duration: 60s). \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Increase DEF of female allies by 25%. \n :white_small_square:Increase HP of allies by 10% \n \n **Level 2** \n :white_small_square:Increase DEF of female allies by 45%. \n :white_small_square:Increase HP of allies by 20%")
  .setFooter("Please inform @Silbeya 실베야#9810 if the info here needs to be updated; so gunpowder can be loaded for Esta Bot ^^")
  .setThumbnail("https://i.imgur.com/tohoWz3.png");
 
  msg.reply('my gun says:');
  msg.channel.send({embed});
  
  }
});

//Alex
client.on('message', msg => {
    if (msg.content === 'gr.alex') {
    	msg.reply('my gun says: \n **Alex** \n \n __**Grimoire:**__ \n **Indomitable Spirit** \n :white_small_square:[Buff]: Cast Barrier on Ally x2 that blocks up to 449 + 9.2% of ATK worth of damage when Active Skills is triggered. (Effect applies on Ally x2 with the highest ATK excluding self. Duration: 30s.) \n :white_small_square:[Passive Effect]: Decrease DMG Taken of Self by 8.2%.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.alex') {
    	msg.reply('my gun says: \n **Alex** \n \n __**Skills:**__ \n **Wings of Astraea - cd 60s** \n Level 1 | __**6**__: \n :white_small_square:[Buff]: Increase DEF of Ally x5 by 25.2% | __**28.5%**__. (Success Rate: 100%, Duration: 60s.) \n :white_small_square:[Buff]: Cast Barrier on Self that blocks up to 667 + 9.6% | __**3167 + 21.5%**__ of ATK worth of damage. (Success Rate: 100%. Duration: 30s | __**50s**__.) \n __**:white_small_square:[Buff]: Decrease DMG Taken of Self by 27.7%. (Duration: 60s.)**__ \n \n **Jupiter Burst - cd 84s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 176.5% | __**260.9%**__ of ATK to Enemy x3. \n :white_small_square:[Additional Damage]: Deal additional damage equal to 72.5% | __**101.5%**__ of DEF to Enemy x3. \n __**:white_small_square:[Debuff]: Increase DMG Taken of Enemy x3 by 25.9%. (Duration: 60s.)**__ ');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.alex') {
    	msg.reply('my gun says: \n **Alex** \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Increase ATK of Light allies by 40%. \n \n **Level 2** \n :white_small_square:Increase ATK of Light allies by 60%.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'hr.alex') {
        
const embed = new Discord.RichEmbed()

  .setAuthor("Alex")
  .setColor(0x00b8ff)
  .setDescription("\n \n __**Grimoire:**__ \n **Indomitable Spirit** \n :white_small_square:[Buff]: Cast Barrier on Ally x2 that blocks up to 449 + 9.2% of ATK worth of damage when Active Skills is triggered. (Effect applies on Ally x2 with the highest ATK excluding self. Duration: 30s.) \n :white_small_square:[Passive Effect]: Decrease DMG Taken of Self by 8.2%. \n \n __**Skills:**__ \n **Wings of Astraea - cd 60s** \n Level 1 | __**6**__: \n :white_small_square:[Buff]: Increase DEF of Ally x5 by 25.2% | __**28.5%**__. (Success Rate: 100%, Duration: 60s.) \n :white_small_square:[Buff]: Cast Barrier on Self that blocks up to 667 + 9.6% | __**3167 + 21.5%**__ of ATK worth of damage. (Success Rate: 100%. Duration: 30s | __**50s**__.) \n __**:white_small_square:[Buff]: Decrease DMG Taken of Self by 27.7%. (Duration: 60s.)**__ \n \n **Jupiter Burst - cd 84s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 176.5% | __**260.9%**__ of ATK to Enemy x3. \n :white_small_square:[Additional Damage]: Deal additional damage equal to 72.5% | __**101.5%**__ of DEF to Enemy x3. \n __**:white_small_square:[Debuff]: Increase DMG Taken of Enemy x3 by 25.9%. (Duration: 60s.)**__ \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Increase ATK of Light allies by 40%. \n \n **Level 2** \n :white_small_square:Increase ATK of Light allies by 60%.")
  .setFooter("Please inform @Silbeya 실베야#9810 if the info here needs to be updated; so gunpowder can be loaded for Esta Bot ^^")
  .setThumbnail("https://tierlistmania.com/wp-content/uploads/2019/06/Alex-Hero-Icon-Overhit.png");
 
  msg.reply('my gun says:');
  msg.channel.send({embed});
  
  }
});

//Angelo
client.on('message', msg => {
    if (msg.content === 'gr.angelo') {
    	msg.reply('my gun says: \n **Angelo** \n \n __**Grimoire:**__ \n **Heavy World** \n :white_small_square:[Buff]: Upon Ally KO, increase ATK of Self by 18.1%. (Success Rate: 100%. Duration: 40s.) \n :white_small_square:[Debuff]: Decrease Block Rate of Hit Target by 7.8% when Active Skills are triggered. (Success Rate: 20%. Duration: 30s.)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.angelo') {
    	msg.reply('my gun says: \n **Angelo** \n \n __**Skills:**__ \n **Gravity Slam - cd 54s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 166.7% | __**237.3%**__ of ATK to Enemy x4 | __**x5**__. \n __**:white_small_square:[Additional damage]: Deal fixed damage 1838 to Physical-Type.**__ \n \n **Gravitation Singularity - cd 83s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 184.8% | __**245.9%**__ of ATK to Enemy x4 | __**x5**__. \n :white_small_square:[Additional Damage]: Deal additional damage equal to 3.9% | __**4.9%**__ of Max HP to Enemy x4 | __**x5**__. (Max Damage: 150% of ATK.) \n __**:white_small_square:[Debuff]: Increase DMG Taken on Enemy x5 by 23.1%. (Duration: 60s.)**__ ');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.angelo') {
    	msg.reply('my gun says: \n **Angelo** \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Increase ATK of Dark allies by 40%. \n \n **Level 2** \n :white_small_square:Increase ATK of Dark allies by 60%.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'hr.angelo') {
        
const embed = new Discord.RichEmbed()

  .setAuthor("Angelo")
  .setColor(0x00b8ff)
  .setDescription("\n \n __**Grimoire:**__ \n **Heavy World** \n :white_small_square:[Buff]: Upon Ally KO, increase ATK of Self by 18.1%. (Success Rate: 100%. Duration: 40s.) \n :white_small_square:[Debuff]: Decrease Block Rate of Hit Target by 7.8% when Active Skills are triggered. (Success Rate: 20%. Duration: 30s.) \n \n __**Skills:**__ \n **Gravity Slam - cd 54s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 166.7% | __**237.3%**__ of ATK to Enemy x4 | __**x5**__. \n __**:white_small_square:[Additional damage]: Deal fixed damage 1838 to Physical-Type.**__ \n \n **Gravitation Singularity - cd 83s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 184.8% | __**245.9%**__ of ATK to Enemy x4 | __**x5**__. \n :white_small_square:[Additional Damage]: Deal additional damage equal to 3.9% | __**4.9%**__ of Max HP to Enemy x4 | __**x5**__. (Max Damage: 150% of ATK.) \n __**:white_small_square:[Debuff]: Increase DMG Taken on Enemy x5 by 23.1%. (Duration: 60s.)**__ \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Increase ATK of Dark allies by 40%. \n \n **Level 2** \n :white_small_square:Increase ATK of Dark allies by 60%.")
  .setFooter("Please inform @Silbeya 실베야#9810 if the info here needs to be updated; so gunpowder can be loaded for Esta Bot ^^")
  .setThumbnail("https://tierlistmania.com/wp-content/uploads/2019/06/Angelo-Hero-Icon-Overhit.png");
 
  msg.reply('my gun says:');
  msg.channel.send({embed});
  
  }
});

//Aria
client.on('message', msg => {
    if (msg.content === 'gr.aria') {
    	msg.reply('my gun says: \n **Aria** \n \n __**Grimoire:**__ \n **Soul Release** \n :white_small_square:[Buff]: When hit, cast Barrier on Self that blocks up to 368 + 10.7% worth of damage. (Success Rate: 30%. Duration: 30s.)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.aria') {
    	msg.reply('my gun says: \n **Aria** \n \n __**Skills:**__ \n **Quad Slash Impact - cd 82s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage:] Deal damage equal to 251.7% | __**371.1%**__ of ATK to Enemy x1. \n :white_small_square:[Debuff]: Decrease Damage of Enemy x1 by 27.9%. | __**31.6%**__ (Success Rate: 50% | __**80%**__, Duration 60s.) \n __**:white_small_square:[Additional Damage]: Deal additional damage equal to 7,3% of Max HP to Enemy x1. (Max Damage: 150% of ATK.)**__ \n \n **Cross Impact - cd 92s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 248.4% | __**366.2%**__ of ATK to Enemy x1. \n __**:white_small_square:[Additional Damage]: Deal additional damage equal to 186.3% of ATK to enemies affected by Chill.**__ \n __**:white_small_square:[Additional Damage]: Deal fixed damage of 2029 to Enemy x1.**__');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.aria') {
    	msg.reply('my gun says: \n **Aria** \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Increase Max HP of Water allies by 20%. \n \n **Level 2** \n :white_small_square:Increase Max HP of Water allies by 30%.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'hr.aria') {
        
const embed = new Discord.RichEmbed()

  .setAuthor("Aria")
  .setColor(0x00b8ff)
  .setDescription("\n \n __**Grimoire:**__ \n **Soul Release** \n :white_small_square:[Buff]: When hit, cast Barrier on Self that blocks up to 368 + 10.7% worth of damage. (Success Rate: 30%. Duration: 30s.) \n \n __**Skills:**__ \n **Quad Slash Impact - cd 82s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage:] Deal damage equal to 251.7% | __**371.1%**__ of ATK to Enemy x1. \n :white_small_square:[Debuff]: Decrease Damage of Enemy x1 by 27.9%. | __**31.6%**__ (Success Rate: 50% | __**80%**__, Duration 60s.) \n __**:white_small_square:[Additional Damage]: Deal additional damage equal to 7,3% of Max HP to Enemy x1. (Max Damage: 150% of ATK.)**__ \n \n **Cross Impact - cd 92s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 248.4% | __**366.2%**__ of ATK to Enemy x1. \n __**:white_small_square:[Additional Damage]: Deal additional damage equal to 186.3% of ATK to enemies affected by Chill.**__ \n __**:white_small_square:[Additional Damage]: Deal fixed damage of 2029 to Enemy x1.**__ \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Increase Max HP of Water allies by 20%. \n \n **Level 2** \n :white_small_square:Increase Max HP of Water allies by 30%.")
  .setFooter("Please inform @Silbeya 실베야#9810 if the info here needs to be updated; so gunpowder can be loaded for Esta Bot ^^")
  .setThumbnail("https://tierlistmania.com/wp-content/uploads/2019/06/Aria-Hero-Icon-Overhit.png");
 
  msg.reply('my gun says:');
  msg.channel.send({embed});
  
  }
});

//Ash
client.on('message', msg => {
    if (msg.content === 'gr.ash') {
    	msg.reply('my gun says: \n **Ash** \n \n __**Grimoire:**__ \n **Mercenary Will** \n :white_small_square:[Additional Damage]: Deal additional damage equal to 28.7% of ATK to enemies affected by Burn when Active Skills are triggered.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.ash') {
    	msg.reply('my gun says: \n **Ash** \n \n __**Skills:**__ \n **Accelerator Boost - cd 45s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 258.7% | __** 362.2%**__ of ATK to Enemy x1. \n :white_small_square:[Status Effect]: Inflict Burn that deals damage equal to 26.1% | __**29.5%**__ of ATK every 10s for 20s. (Success Rate: 30% | __**90%**__.) \n :white_small_square:[Chain Effect]: Deal damage equal to 245.5% | __**362.2%**__ of ATK to enemies affected by Poison. (Guaranteed critical.) \n __**:white_small_square:[Buff]: Increase DEF of Self by 43.2%. (Duration: 60s.)**__ \n \n **Voltaic Savior - cd 70s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 211.8% | __**296.6%**__ of ATK to Enemy x3 | __**x4**__. \n :white_small_square:[Debuff]: Decrease ATK of Enemy x3 | __**x4**__ by 28.6% | __**32.3%**__. (Duration: 60s.)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.ash') {
    	msg.reply('my gun says: \n **Ash** \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Increase ATK of allies by 25%. \n \n **Level 2** \n :white_small_square:Increase ATK of allies by 45%.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'hr.ash') {
        
const embed = new Discord.RichEmbed()

  .setAuthor("Ash")
  .setColor(0x00b8ff)
  .setDescription("\n \n __**Grimoire:**__ \n **Mercenary Will** \n :white_small_square:[Additional Damage]: Deal additional damage equal to 28.7% of ATK to enemies affected by Burn when Active Skills are triggered. \n \n __**Skills:**__ \n **Accelerator Boost - cd 45s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 258.7% | __** 362.2%**__ of ATK to Enemy x1. \n :white_small_square:[Status Effect]: Inflict Burn that deals damage equal to 26.1% | __**29.5%**__ of ATK every 10s for 20s. (Success Rate: 30% | __**90%**__.) \n :white_small_square:[Chain Effect]: Deal damage equal to 245.5% | __**362.2%**__ of ATK to enemies affected by Poison. (Guaranteed critical.) \n __**:white_small_square:[Buff]: Increase DEF of Self by 43.2%. (Duration: 60s.)**__ \n \n **Voltaic Savior - cd 70s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 211.8% | __**296.6%**__ of ATK to Enemy x3 | __**x4**__. \n :white_small_square:[Debuff]: Decrease ATK of Enemy x3 | __**x4**__ by 28.6% | __**32.3%**__. (Duration: 60s.) \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Increase ATK of allies by 25%. \n \n **Level 2** \n :white_small_square:Increase ATK of allies by 45%.")
  .setFooter("Please inform @Silbeya 실베야#9810 if the info here needs to be updated; so gunpowder can be loaded for Esta Bot ^^")
  .setThumbnail("https://tierlistmania.com/wp-content/uploads/2019/06/Ash-Hero-Icon-Overhit.png");
 
  msg.reply('my gun says:');
  msg.channel.send({embed});
  
  }
});

//Blossom
client.on('message', msg => {
    if (msg.content === 'gr.blossom') {
    	msg.reply('my gun says: \n **Blossom** \n \n __**Grimoire:**__ \n **Tick-Tick Boom** \n :white_small_square:[Additional Damage]: Inflict Time Bomb that deals damage equal to 46.1% of ATK when Active Skills is triggered. (Success Rate: 60%. Apply damage after 12s. Remove 1 Buff from Hit Target.)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.blossom') {
    	msg.reply('my gun says: \n **Blossom** \n \n __**Skills:**__ \n**Teddy Bear - cd 52s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 118.2% | __**242.2%**__of ATK to Enemy x3 | __**x4**__. \n :white_small_square:[Status Effect]: Inflict Burn on Enemy x4, dealing DMG equal to 26.1% | __**29.5%**__ of ATK every 10s for 20. (Success Rate: 30% | __**50%**__.) \n \n **Terror Bear - cd 88s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 178.6% | __**243.6%**__ of ATK to Enemy x3 | __**x5**__. \n :white_small_square:[Increase DMG Taken of Enemy x3 | __**x5**__ by 24.2% | __**27.3%**__. (Duration: 60s.)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.blossom') {
    	msg.reply('my gun says: \n **Blossom** \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Increase ATK of Fire allies by 40%. \n \n **Level 2** \n :white_small_square:Increase ATK of Fire allies by 60%.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'hr.blossom') {
        
const embed = new Discord.RichEmbed()

  .setAuthor("Blossom")
  .setColor(0x00b8ff)
  .setDescription("\n \n __**Grimoire:**__ \n **Tick-Tick Boom** \n :white_small_square:[Additional Damage]: Inflict Time Bomb that deals damage equal to 46.1% of ATK when Active Skills is triggered. (Success Rate: 60%. Apply damage after 12s. Remove 1 Buff from Hit Target.) \n \n __**Skills:**__ \n**Teddy Bear - cd 52s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 118.2% | __**242.2%**__of ATK to Enemy x3 | __**x4**__. \n :white_small_square:[Status Effect]: Inflict Burn on Enemy x4, dealing DMG equal to 26.1% | __**29.5%**__ of ATK every 10s for 20. (Success Rate: 30% | __**50%**__.) \n \n **Terror Bear - cd 88s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 178.6% | __**243.6%**__ of ATK to Enemy x3 | __**x5**__. \n :white_small_square:[Increase DMG Taken of Enemy x3 | __**x5**__ by 24.2% | __**27.3%**__. (Duration: 60s.) \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Increase ATK of Fire allies by 40%. \n \n **Level 2** \n :white_small_square:Increase ATK of Fire allies by 60%.")
  .setFooter("Please inform @Silbeya 실베야#9810 if the info here needs to be updated; so gunpowder can be loaded for Esta Bot ^^")
  .setThumbnail("https://tierlistmania.com/wp-content/uploads/2019/06/Blossom-Hero-Icon-Overhit.png");
 
  msg.reply('my gun says:');
  msg.channel.send({embed});
  
  }
});

//Beatrice
client.on('message', msg => {
    if (msg.content === 'gr.beatrice') {
    	msg.reply('my gun says: \n **Beatrice** \n \n __**Grimoire:**__ \n **Pale-Winged Knight** \n :white_small_square:[Additional Damage]: Deal additional damage equal to 36.1% of ATK to enemies affected by bleeding when Active Skills are triggered. \n :white_small_square:[Buff]: When hit, remove 1 Debuff from Self. (Success Rate: 20%.)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.beatrice') {
    	msg.reply('my gun says: \n **Beatrice** \n \n __**Skills:**__ \n **Slashing Frenzy - cd 56s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 252.6% | __** 368.8%**__ of ATK to Enemy x1. \n :white_small_square:[Status Effect]: Inflict bleed that deals damage equal to 9.3% | __**10.5%**__ of ATK every 5s for 30s. (Success Rate: 80%.) \n __**:white_small_square:[Buff]: Increase Crit DMG of Self by 32.4% (Duration: 60s.)**__ \n \n **Thousand Graves - cd 94s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal Damage equal to 158.7% | __**224.9%**__ of ATK to Enemy x3 | __**x4**__. (Guaranteed critical.) \n __**:white_small_square:[Additional damage]: Deal fixed damage of 1547 to Enemy x4.**__');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.beatrice') {
    	msg.reply('my gun says: \n **Beatrice** \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:If there are at least Ally x3 of Wind allies, increase allies ATK by 35%. \n :white_small_square:Increase Crit DMG of allies by 10%. \n \n **Level 2** \n :white_small_square:Not enough data...need more gunpowder! \n :white_small_square:Please DM @Silbeya 실베야#9810 if you have info on this to load gunpowder, thanks!');
  	}
});

client.on('message', msg => {
    if (msg.content === 'hr.beatrice') {
        
const embed = new Discord.RichEmbed()

  .setAuthor("Beatrice")
  .setColor(0x00b8ff)
  .setDescription("\n \n __**Grimoire:**__ \n **Pale-Winged Knight** \n :white_small_square:[Additional Damage]: Deal additional damage equal to 36.1% of ATK to enemies affected by bleeding when Active Skills are triggered. \n :white_small_square:[Buff]: When hit, remove 1 Debuff from Self. (Success Rate: 20%.) \n \n __**Skills:**__ \n **Slashing Frenzy - cd 56s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 252.6% | __** 368.8%**__ of ATK to Enemy x1. \n :white_small_square:[Status Effect]: Inflict bleed that deals damage equal to 9.3% | __**10.5%**__ of ATK every 5s for 30s. (Success Rate: 80%.) \n __**:white_small_square:[Buff]: Increase Crit DMG of Self by 32.4% (Duration: 60s.)**__ \n \n **Thousand Graves - cd 94s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal Damage equal to 158.7% | __**224.9%**__ of ATK to Enemy x3 | __**x4**__. (Guaranteed critical.) \n __**:white_small_square:[Additional damage]: Deal fixed damage of 1547 to Enemy x4.**__ \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:If there are at least Ally x3 of Wind allies, increase allies ATK by 35%. \n :white_small_square:Increase Crit DMG of allies by 10%. \n \n **Level 2** \n :white_small_square:Not enough data...need more gunpowder!")
  .setFooter("Please inform @Silbeya 실베야#9810 if the info here needs to be updated; so gunpowder can be loaded for Esta Bot ^^")
  .setThumbnail("https://tierlistmania.com/wp-content/uploads/2019/06/Beatrice-Hero-Icon-Overhit.png");
 
  msg.reply('my gun says:');
  msg.channel.send({embed});
  
  }
});

//Celesta
client.on('message', msg => {
    if (msg.content === 'gr.celesta') {
    	msg.reply('my gun says: \n **Celesta** \n \n __**Grimoire:**__ \n **Faerie Dance** \n :white_small_square:[Buff]: Increase ATK of Wind Ally by 9.1% when All Attack is triggered. (Success Rate: 30%. Duration: 40s.) \n :white_small_square:[Debuff]: Increase Hit Target Skill Cooldown by 8s when Active Skills are triggered.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.celesta') {
    	msg.reply('my gun says: \n **Celesta** \n \n __**Skills:**__ \n **Fatal Impact - cd 42s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 259.2% | __**366.9%**__ of ATK to Enemy x1. \n :white_small_square:[Debuff]: Decrease DEF of Enemy x1 by 27.9% | __**31.6%**__. (Duration 60s.) \n __**:white_small_square:[Debuff]: Decrease Crit Resist Rate of Enemy x1 by 25.6% (Duration: 60s.) **__ \n \n **Cyclone Shredder - cd 85s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 120% | __**247.3%**__ of ATK to Enemy x4 | __**x5**__. \n :white_small_square:[Status Effect]: Inflict Bleed that deals damage equal to 7.3% | __**8.2%**__ of ATK every 5s for 30s. (Success Rate: 40% | __**60%**__.)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.celesta') {
    	msg.reply('my gun says: \n **Celesta** \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Increase ATK of Wind allies by 40%. \n \n **Level 2** \n :white_small_square:Increase ATK of Wind allies by 60%.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'hr.celesta') {
        
const embed = new Discord.RichEmbed()

  .setAuthor("Celesta")
  .setColor(0x00b8ff)
  .setDescription("\n \n __**Grimoire:**__ \n **Faerie Dance** \n :white_small_square:[Buff]: Increase ATK of Wind Ally by 9.1% when All Attack is triggered. (Success Rate: 30%. Duration: 40s.) \n :white_small_square:[Debuff]: Increase Hit Target Skill Cooldown by 8s when Active Skills are triggered.' \n \n __**Skills:**__ \n **Fatal Impact - cd 42s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 259.2% | __**366.9%**__ of ATK to Enemy x1. \n :white_small_square:[Debuff]: Decrease DEF of Enemy x1 by 27.9% | __**31.6%**__. (Duration 60s.) \n __**:white_small_square:[Debuff]: Decrease Crit Resist Rate of Enemy x1 by 25.6% (Duration: 60s.) **__ \n \n **Cyclone Shredder - cd 85s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 120% | __**247.3%**__ of ATK to Enemy x4 | __**x5**__. \n :white_small_square:[Status Effect]: Inflict Bleed that deals damage equal to 7.3% | __**8.2%**__ of ATK every 5s for 30s. (Success Rate: 40% | __**60%**__.) \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Increase ATK of Wind allies by 40%. \n \n **Level 2** \n :white_small_square:Increase ATK of Wind allies by 60%.")
  .setFooter("Please inform @Silbeya 실베야#9810 if the info here needs to be updated; so gunpowder can be loaded for Esta Bot ^^")
  .setThumbnail("https://tierlistmania.com/wp-content/uploads/2019/06/Celesta-Hero-Icon-Overhit.png");
 
  msg.reply('my gun says:');
  msg.channel.send({embed});
  
  }
});

//Colette
client.on('message', msg => {
    if (msg.content === 'gr.colette') {
    	msg.reply('my gun says: \n **Colette** \n \n __**Grimoire:**__ \n **Winter Haven** \n :white_small_square:[Debuff]: Decrease Damage of Hit Target by 17.7% when Active Skills is triggered. (Duration: 40s.) \n :white_small_square:[Additional Damage]: Deal additional damage equal to 20.3% of ATK to enemies affected by cold when Active Skills are triggered.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.colette') {
    	msg.reply('my gun says: \n **Colette** \n \n __**Skills:**__ \n **Hailstorm - cd 80s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 167.4% | __**246.8%**__ of ATK to Enemy x3. \n :white_small_square:[Debuff]: Decrease Status Effect Resist Rate of Enemy x3 by 22.9% | __**25.9%**__. (Duration: 60s.) \n __**:white_small_square:[Additional Damage]: Deal additional damage equal to 128.9% of ATK to enemies affected by Chill.**__ \n \n **Brinicle - cd 100s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 99.4% | __**146.9%**__ of ATK to Enemy x5. \n :white_small_square:[Status Effect]: Inflict Chill that deals damage equal to 2.7% | __** 3%**__ of ATK every 4s for 36s. (Success Rate: 30% | __**50%**__.) \n __** :white_small_square:[Status Effect]: Inflict Freeze on Enemy x5 for 18s. (Success Rate: 20%.)**__');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.colette') {
    	msg.reply('my gun says: \n **Colette** \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Increase ATK of Water Allies by 40%. \n \n **Level 2** \n :white_small_square:Increase ATK of Water Allies by 60%.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'hr.colette') {
        
const embed = new Discord.RichEmbed()

  .setAuthor("Colette")
  .setColor(0x00b8ff)
  .setDescription("\n \n __**Grimoire:**__ \n **Winter Haven** \n :white_small_square:[Debuff]: Decrease Damage of Hit Target by 17.7% when Active Skills is triggered. (Duration: 40s.) \n :white_small_square:[Additional Damage]: Deal additional damage equal to 20.3% of ATK to enemies affected by cold when Active Skills are triggered. \n \n __**Skills:**__ \n **Hailstorm - cd 80s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 167.4% | __**246.8%**__ of ATK to Enemy x3. \n :white_small_square:[Debuff]: Decrease Status Effect Resist Rate of Enemy x3 by 22.9% | __**25.9%**__. (Duration: 60s.) \n __**:white_small_square:[Additional Damage]: Deal additional damage equal to 128.9% of ATK to enemies affected by Chill.**__ \n \n **Brinicle - cd 100s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 99.4% | __**146.9%**__ of ATK to Enemy x5. \n :white_small_square:[Status Effect]: Inflict Chill that deals damage equal to 2.7% | __** 3%**__ of ATK every 4s for 36s. (Success Rate: 30% | __**50%**__.) \n __** :white_small_square:[Status Effect]: Inflict Freeze on Enemy x5 for 18s. (Success Rate: 20%.)**__ \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Increase ATK of Water Allies by 40%. \n \n **Level 2** \n :white_small_square:Increase ATK of Water Allies by 60%.")
  .setFooter("Please inform @Silbeya 실베야#9810 if the info here needs to be updated; so gunpowder can be loaded for Esta Bot ^^")
  .setThumbnail("https://tierlistmania.com/wp-content/uploads/2019/06/Colette-Hero-Icon-Overhit.png");
 
  msg.reply('my gun says:');
  msg.channel.send({embed});
  
  }
});

//Demian
client.on('message', msg => {
    if (msg.content === 'gr.demian') {
    	msg.reply('my gun says: \n **Demian** \n \n __**Grimoire:**__ \n **Blood Infection** \n :white_small_square:[Buff]: When hit, cast Blood Sucking on Self that heals 16.6% of damage. (Success Rate: 40%. Duration: 20s.) \n :white_small_square:[Healing]: Upon Self KO, Heal HP of Ally x4 for 90% of ATK.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.demian') {
    	msg.reply('my gun says: \n **Demian** \n \n __**Skills:**__ \n **Vampire Kiss - cd 92s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 215.5% | __**301.7%**__ of ATK to Enemy x3. \n :white_small_square:[Healing]: Heal Self for 170.1% | __** 221.1%**__ of ATK. \n :white_small_square:[Additional Healing]: Additionally heal Ally x1 | __**x3**__ for 27.2% | __**32.1%**__ of Max HP. (Apply effect on Ally x1 | __**x3**__ with the lowest HP, excluding self.) \n \n **Bloodbath - cd 75s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 176.2% | __**246.7%**__ of ATK to Enemy x4 | __**x5**__. \n :white_small_square:[Status Effect]: Inflict Blind on Enemy x4 | __**x5**__ for 20s. (Success Rate: 20% | __**50%**__.)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.demian') {
    	msg.reply('my gun says: \n **Demian** \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Increase ATK of allies by 25%. \n \n **Level 2** \n :white_small_square:Increase ATK of allies by 45%.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'hr.demian') {
        
const embed = new Discord.RichEmbed()

  .setAuthor("Demian")
  .setColor(0x00b8ff)
  .setDescription("\n \n __**Grimoire:**__ \n **Blood Infection** \n :white_small_square:[Buff]: When hit, cast Blood Sucking on Self that heals 16.6% of damage. (Success Rate: 40%. Duration: 20s.) \n :white_small_square:[Healing]: Upon Self KO, Heal HP of Ally x4 for 90% of ATK. \n \n __**Skills:**__ \n **Vampire Kiss - cd 92s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 215.5% | __**301.7%**__ of ATK to Enemy x3. \n :white_small_square:[Healing]: Heal Self for 170.1% | __** 221.1%**__ of ATK. \n :white_small_square:[Additional Healing]: Additionally heal Ally x1 | __**x3**__ for 27.2% | __**32.1%**__ of Max HP. (Apply effect on Ally x1 | __**x3**__ with the lowest HP, excluding self.) \n \n **Bloodbath - cd 75s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 176.2% | __**246.7%**__ of ATK to Enemy x4 | __**x5**__. \n :white_small_square:[Status Effect]: Inflict Blind on Enemy x4 | __**x5**__ for 20s. (Success Rate: 20% | __**50%**__.) \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Increase ATK of allies by 25%. \n \n **Level 2** \n :white_small_square:Increase ATK of allies by 45%.")
  .setFooter("Please inform @Silbeya 실베야#9810 if the info here needs to be updated; so gunpowder can be loaded for Esta Bot ^^")
  .setThumbnail("https://tierlistmania.com/wp-content/uploads/2019/06/Demian-Hero-Icon-Overhit.png");
 
  msg.reply('my gun says:');
  msg.channel.send({embed});
  
  }
});

//Edmund
client.on('message', msg => {
    if (msg.content === 'gr.edmund') {
    	msg.reply('my gun says: \n **Edmund** \n \n __**Grimoire:**__ \n **Insectoid Wall** \n :white_small_square:[Debuff]: Decrease Damage of Hit Target by 17.7% when Active Skills are triggered. (Duration: 40s.) \n :white_small_square:[Additional Damage]: Deal additional fixed damage of 173 to targets affected by Poison when All Attack is triggered.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.edmund') {
    	msg.reply('my gun says: \n **Edmund** \n \n __**Skills:**__ \n **Summon Striges - cd 60s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 177.4% | __**261.7%**__ of ATK to Enemy x3. \n :white_small_square:[Debuff]: Decrease Block Rate of Enemy x3 by 11.8% | __**13.3%**__. (Success Rate: 50% | __**100%**__, Duration: 40s.) \n __**:white_small_square:[Debuff]: Increase Skill Cooldown of Enemy x3 by 17s.**__ \n \n **Summon Jormungand - cd 75s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 103.1% | __**152.4%**__ of ATK to Enemy x5. \n :white_small_square:[Status Effect]: Infict Poison that deals damage equal to 9.2% | __**10.4%**__ of ATK every 6s for 30s. (Success Rate: 20% | __**50%**__. (Poison): Decrease Status Effect Resist Rate by 20%) \n __**:white_small_square:[Status Effect]: Inflict Paralyze on Enemy x3 for 20s. (Success Rate: 30%.)**__');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.edmund') {
    	msg.reply('my gun says: \n **Edmund** \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Increase ATK of Magic-Type Allies by 20%. \n :white_small_square:Increase Block Rate of Magic-Type Allies by 5%. \n \n **Level 2** \n :white_small_square:Not enough data...need more gunpowder! \n :white_small_square:Please DM @Silbeya 실베야#9810 if you have info on this to load gunpowder, thanks!');
  	}
});

client.on('message', msg => {
    if (msg.content === 'hr.edmund') {
        
const embed = new Discord.RichEmbed()

  .setAuthor("Edmund")
  .setColor(0x00b8ff)
  .setDescription("\n \n __**Grimoire:**__ \n **Insectoid Wall** \n :white_small_square:[Debuff]: Decrease Damage of Hit Target by 17.7% when Active Skills are triggered. (Duration: 40s.) \n :white_small_square:[Additional Damage]: Deal additional fixed damage of 173 to targets affected by Poison when All Attack is triggered. \n \n __**Skills:**__ \n **Summon Striges - cd 60s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 177.4% | __**261.7%**__ of ATK to Enemy x3. \n :white_small_square:[Debuff]: Decrease Block Rate of Enemy x3 by 11.8% | __**13.3%**__. (Success Rate: 50% | __**100%**__, Duration: 40s.) \n __**:white_small_square:[Debuff]: Increase Skill Cooldown of Enemy x3 by 17s.**__ \n \n **Summon Jormungand - cd 75s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 103.1% | __**152.4%**__ of ATK to Enemy x5. \n :white_small_square:[Status Effect]: Infict Poison that deals damage equal to 9.2% | __**10.4%**__ of ATK every 6s for 30s. (Success Rate: 20% | __**50%**__. (Poison): Decrease Status Effect Resist Rate by 20%) \n __**:white_small_square:[Status Effect]: Inflict Paralyze on Enemy x3 for 20s. (Success Rate: 30%.)**__ \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Increase ATK of Magic-Type Allies by 20%. \n :white_small_square:Increase Block Rate of Magic-Type Allies by 5%. \n \n **Level 2** \n :white_small_square:Not enough data...need more gunpowder!")
  .setFooter("Please inform @Silbeya 실베야#9810 if the info here needs to be updated; so gunpowder can be loaded for Esta Bot ^^")
  .setThumbnail("https://tierlistmania.com/wp-content/uploads/2019/06/Edmund-Hero-Icon-Overhit.png");
 
  msg.reply('my gun says:');
  msg.channel.send({embed});
  
  }
});

//Elphie
client.on('message', msg => {
    if (msg.content === 'gr.elphie') {
    	msg.reply('my gun says: \n **Elphie** \n \n __**Grimoire:**__ \n **White Owl Protection** \n :white_small_square:[Healing]: Heal Ally x1 HP for 39.7% of ATK when Active Skills are triggered (Apply effect on Ally x1 with the lowest HP.).');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.elphie') {
    	msg.reply('my gun says: \n **Elphie** \n \n __**Skills:**__ \n **Asava Singh - cd 63s** \n Level 1 | __**6**__: \n :white_small_square:[Healing]: Heal Ally x4 | __**x5**__ for 107.9% | __**140.3%**__ of ATK. (Apply effect on Ally x4 | __**x5**__ with the lowest HP.) \n :white_small_square:[Buff]: Increase ATK of Ally x4 | __**x5**__ by 29.7% | __**33.6%**__ (Apply effect on Ally x4 | __**x5**__ with the lowest HP.) \n \n **Kuku Vaya - cd 90s** \n Level 1 | __**6**__: \n :white_small_square:[Buff]: Increase Crit Rate of Ally x4 by 21% | __**23.7%**__. (On Allies with the highest ATK, excluding Self. Duration: 60s.) \n :white_small_square:[Buff]: Remove 1 Debuff from Ally x1 | __**x3**__. (Apply effect on Ally x1 | __**x3**__ with the highest ATK, excluding self. \n __**:white_small_square:[Buff]: Inflict Status Effect Immunity on Ally x3 for 15s.**__');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.elphie') {
    	msg.reply('my gun says: \n **Elphie** \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Increase Crit DMG of Fire allies by 30%. \n \n **Level 2** \n :white_small_square:Not enough data...need more gunpowder! \n :white_small_square:Please DM @Silbeya 실베야#9810 if you have info on this to load gunpowder, thanks!');
  	}
});

client.on('message', msg => {
    if (msg.content === 'hr.elphie') {
        
const embed = new Discord.RichEmbed()

  .setAuthor("Elphie")
  .setColor(0x00b8ff)
  .setDescription("\n \n __**Grimoire:**__ \n **White Owl Protection** \n :white_small_square:[Healing]: Heal Ally x1 HP for 39.7% of ATK when Active Skills are triggered (Apply effect on Ally x1 with the lowest HP.). \n \n __**Skills:**__ \n **Asava Singh - cd 63s** \n Level 1 | __**6**__: \n :white_small_square:[Healing]: Heal Ally x4 | __**x5**__ for 107.9% | __**140.3%**__ of ATK. (Apply effect on Ally x4 | __**x5**__ with the lowest HP.) \n :white_small_square:[Buff]: Increase ATK of Ally x4 | __**x5**__ by 29.7% | __**33.6%**__ (Apply effect on Ally x4 | __**x5**__ with the lowest HP.) \n \n **Kuku Vaya - cd 90s** \n Level 1 | __**6**__: \n :white_small_square:[Buff]: Increase Crit Rate of Ally x4 by 21% | __**23.7%**__. (On Allies with the highest ATK, excluding Self. Duration: 60s.) \n :white_small_square:[Buff]: Remove 1 Debuff from Ally x1 | __**x3**__. (Apply effect on Ally x1 | __**x3**__ with the highest ATK, excluding self. \n __**:white_small_square:[Buff]: Inflict Status Effect Immunity on Ally x3 for 15s.**__ \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Increase Crit DMG of Fire allies by 30%. \n \n **Level 2** \n :white_small_square:Not enough data...need more gunpowder!")
  .setFooter("Please inform @Silbeya 실베야#9810 if the info here needs to be updated; so gunpowder can be loaded for Esta Bot ^^")
  .setThumbnail("https://tierlistmania.com/wp-content/uploads/2019/06/Elphie-Hero-Icon-Overhit.png");
 
  msg.reply('my gun says:');
  msg.channel.send({embed});
  
  }
});

//Emodin
client.on('message', msg => {
    if (msg.content === 'gr.emodin') {
    	msg.reply('my gun says: \n **Emodin** \n \n __**Grimoire:**__ \n **Cataclysm Fist** \n :white_small_square:[Status Effect]: When hit, inflict Chill that deals damage equal to 6.3% of ATK every 4s for 36s. to the attacking target. (Success Rate: 15%.) \n :white_small_square:[Passive Effect]: Decrease DMG Taken of Self by 8.2%.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.emodin') {
    	msg.reply('my gun says: \n **Emodin** \n \n __**Skills:**__ \n **Divine Pillar - cd 63s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 245.9% | __**344.3%**__ of ATK to Enemy x1. \n :white_small_square:[Debuff]: Decrease ATK of Enemy x1 | __**x3**__ by 23.5% | __**26.6%**__. (Success Rate: 100%. Duration: 60s.) \n __**:white_small_square:[Status Effect]: Inflict Stun on Enemy x1 for 18s. (Success Rate: 100%) **__ \n \n **Vanquishing Blast - cd 90s** \n Level 1 | __**6**__: \n :white_small_square:[Buff]: Increase ATK of Ally x5 by 20.9% | __**23.7%**__. (Success Rate: 100%. Duration: 60s.) \n :white_small_square:[Buff]: Cast Barrier on Self that blocks up to 668 + 9.3% | __**3173 + 20.9%**__ of ATK worth of damage. (Success Rate: 100%, Duration: 30s.) \n __**:white_small_square:[Buff]: Increase Status Effect Resist Rate of Ally x5 by 27.1% (Success Rate: 100%. Duration: 60s.)**__');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.emodin') {
    	msg.reply('my gun says: \n **Emodin** \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Increase DEF of allies by 20%. \n \n **Level 2** \n :white_small_square:Increase DEF of allies by 40%');
  	}
});

client.on('message', msg => {
    if (msg.content === 'hr.emodin') {
        
const embed = new Discord.RichEmbed()

  .setAuthor("Emodin")
  .setColor(0x00b8ff)
  .setDescription("\n \n __**Grimoire:**__ \n **Cataclysm Fist** \n :white_small_square:[Status Effect]: When hit, inflict Chill that deals damage equal to 6.3% of ATK every 4s for 36s. to the attacking target. (Success Rate: 15%.) \n :white_small_square:[Passive Effect]: Decrease DMG Taken of Self by 8.2%. \n \n __**Skills:**__ \n **Divine Pillar - cd 63s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 245.9% | __**344.3%**__ of ATK to Enemy x1. \n :white_small_square:[Debuff]: Decrease ATK of Enemy x1 | __**x3**__ by 23.5% | __**26.6%**__. (Success Rate: 100%. Duration: 60s.) \n __**:white_small_square:[Status Effect]: Inflict Stun on Enemy x1 for 18s. (Success Rate: 100%) **__ \n \n **Vanquishing Blast - cd 90s** \n Level 1 | __**6**__: \n :white_small_square:[Buff]: Increase ATK of Ally x5 by 20.9% | __**23.7%**__. (Success Rate: 100%. Duration: 60s.) \n :white_small_square:[Buff]: Cast Barrier on Self that blocks up to 668 + 9.3% | __**3173 + 20.9%**__ of ATK worth of damage. (Success Rate: 100%, Duration: 30s.) \n __**:white_small_square:[Buff]: Increase Status Effect Resist Rate of Ally x5 by 27.1% (Success Rate: 100%. Duration: 60s.)**__ \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Increase DEF of allies by 20%. \n \n **Level 2** \n :white_small_square:Increase DEF of allies by 40%")
  .setFooter("Please inform @Silbeya 실베야#9810 if the info here needs to be updated; so gunpowder can be loaded for Esta Bot ^^")
  .setThumbnail("https://tierlistmania.com/wp-content/uploads/2019/06/Emodin-Hero-Icon-Overhit.png");
 
  msg.reply('my gun says:');
  msg.channel.send({embed});
  
  }
});

//Esta
client.on('message', msg => {
    if (msg.content === 'gr.esta') {
    	msg.reply('my gun says: \n **Esta** \n \n __**Grimoire:**__ \n **Bullet Carnival** \n :white_small_square:[Debuff]: Decrease Block Rate of Hit Target by 9.9% when Active Skills are triggered. (Duration: 30s) \n :white_small_square:[Passive Effect]: increase Crit Rate of Self by 7.6%.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.esta') {
    	msg.reply('my gun says: \n **Esta** \n \n __**Skills:**__ \n **Scattershot - cd 55s** \n Level 1 | __**6**__:\n :white_small_square:[Regular Damage]: Deal damage equal to 169.8% | __**250.3%**__ of ATK to Enemy x3 \n __**:white_small_square:[Additional Damage]: Deal additional damage equal to 120.3% of ATK to enemies with HP that is 50% or lower.**__ \n __**:white_small_square:[Buff]: Increase Damage of Self by 27.7%. (Duration: 60s.)**__ \n \n **Incendiary Shot - cd 100s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 177.2% | __**261.7%**__ of ATK to Enemy x3. \n :white_small_square:[Additional Damage]: Deal fixed damage of 414 | __**2027**__ to Enemy x1. \n __**:white_small_square:[Status Effect]: Inflict Burn on Enemy x3 dealing DMG equal to 24.2% of ATK every 10s for 20s. (Success Rate: 50%.)**__');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.esta') {
    	msg.reply('my gun says: \n **Esta** \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Increase ATK of Physical-Type allies by 30% \n \n **Level 2** \n :white_small_square:Increase ATK of Physical-Type allies by 50%');
  	}
});

client.on('message', msg => {
    if (msg.content === 'hr.esta') {
        
const embed = new Discord.RichEmbed()

  .setAuthor("Esta")
  .setColor(0x00b8ff)
  .setDescription("\n \n __**Grimoire:**__ \n **Bullet Carnival** \n :white_small_square:[Debuff]: Decrease Block Rate of Hit Target by 9.9% when Active Skills are triggered. (Duration: 30s) \n :white_small_square:[Passive Effect]: increase Crit Rate of Self by 7.6%. \n \n __**Skills:**__ \n **Scattershot - cd 55s** \n Level 1 | __**6**__:\n :white_small_square:[Regular Damage]: Deal damage equal to 169.8% | __**250.3%**__ of ATK to Enemy x3 \n __**:white_small_square:[Additional Damage]: Deal additional damage equal to 120.3% of ATK to enemies with HP that is 50% or lower.**__ \n __**:white_small_square:[Buff]: Increase Damage of Self by 27.7%. (Duration: 60s.)**__ \n \n **Incendiary Shot - cd 100s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 177.2% | __**261.7%**__ of ATK to Enemy x3. \n :white_small_square:[Additional Damage]: Deal fixed damage of 414 | __**2027**__ to Enemy x1. \n __**:white_small_square:[Status Effect]: Inflict Burn on Enemy x3 dealing DMG equal to 24.2% of ATK every 10s for 20s. (Success Rate: 50%.)**__ \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Increase ATK of Physical-Type allies by 30% \n \n **Level 2** \n :white_small_square:Increase ATK of Physical-Type allies by 50%")
  .setFooter("Please inform @Silbeya 실베야#9810 if the info here needs to be updated; so gunpowder can be loaded for Esta Bot ^^")
  .setThumbnail("https://tierlistmania.com/wp-content/uploads/2019/06/Esta-Hero-Icon-Overhit.png");
 
  msg.reply('my gun says:');
  msg.channel.send({embed});
  
  }
});

//Francesca
client.on('message', msg => {
    if (msg.content === 'gr.francesca') {
    	msg.reply('my gun says: \n **Francesca** \n \n __**Grimoire:**__ \n **Fiery Rabbit** \n :white_small_square:[Additional Damage]: Deal additional damage equal to 29.2% of ATK to 5 enemies every 2 attacks.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.francesca') {
    	msg.reply('my gun says: \n **Francesca** \n \n __**Skills:**__ \n **Morph Hammer - cd 72s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 270.8% | __**379.1%**__ of ATK to 1 enemy. \n :white_small_square:[Chain Effect]: Deal damage equal to 298.6% | __**402%**__ of ATK to all enemies affected by Burn (Final attack applies to 3 enemies.) \n \n **Morph Scythes - cd 94s** \n Level 1 | __**6**__: \n :white_small_square:[Debuff]: Increase damage taken by all enemies in the front row by 39% | __**44.1%**__ (Success Rate: 100%. Duration: 12 seconds.) \n :white_small_square:[Regular Damage]: Deal damage equal to 212% | __**296.9%**__ of ATK to 1 enemy. (Final attack applies to 4 | __**5**__ enemies.)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.francesca') {
    	msg.reply('my gun says: \n **Francesca** \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Increase ATK of fire-type allies by 25%. \n :white_small_square:Increase Max DEF of fire-type allies by 10%. \n \n **Level 2** \n :white_small_square:Increase ATK of fire-type allies by 45%. \n :white_small_square:Increase Max DEF of fire-type allies by 20%.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'hr.francesca') {
        
const embed = new Discord.RichEmbed()

  .setAuthor("Francesca")
  .setColor(0x00b8ff)
  .setDescription("\n \n __**Grimoire:**__ \n **Fiery Rabbit** \n :white_small_square:[Additional Damage]: Deal additional damage equal to 29.2% of ATK to 5 enemies every 2 attacks. \n \n __**Skills:**__ \n **Morph Hammer - cd 72s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 270.8% | __**379.1%**__ of ATK to 1 enemy. \n :white_small_square:[Chain Effect]: Deal damage equal to 298.6% | __**402%**__ of ATK to all enemies affected by Burn (Final attack applies to 3 enemies.) \n \n **Morph Scythes - cd 94s** \n Level 1 | __**6**__: \n :white_small_square:[Debuff]: Increase damage taken by all enemies in the front row by 39% | __**44.1%**__ (Success Rate: 100%. Duration: 12 seconds.) \n :white_small_square:[Regular Damage]: Deal damage equal to 212% | __**296.9%**__ of ATK to 1 enemy. (Final attack applies to 4 | __**5**__ enemies.) \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Increase ATK of fire-type allies by 25%. \n :white_small_square:Increase Max DEF of fire-type allies by 10%. \n \n **Level 2** \n :white_small_square:Increase ATK of fire-type allies by 45%. \n :white_small_square:Increase Max DEF of fire-type allies by 20%.")
  .setFooter("Please inform @Silbeya 실베야#9810 if the info here needs to be updated; so gunpowder can be loaded for Esta Bot ^^")
  .setThumbnail("https://i.imgur.com/0lm4h0r.png");
 
  msg.reply('my gun says:');
  msg.channel.send({embed});
  
  }
});

//Gleck
client.on('message', msg => {
    if (msg.content === 'gr.gleck') {
    	msg.reply('my gun says: \n **Gleck** \n \n __**Grimoire:**__ \n **Dark Phalanx** \n :white_small_square:[Healing]: Heal Self HP for 33.7% of ATK when Active Skills are triggered. \n :white_small_square:[Buff]: When hit, Reflect 8.2% of damage taken by Self back at the enemy. (Success Rate: 20%. Duration: 30s.)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.gleck') {
    	msg.reply('my gun says: \n **Gleck** \n \n __**Skills:**__ \n **Vanguard Blade - cd 43s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 245% | __**361.5%**__ of ATK to Enemy x1. \n :white_small_square:[Debuff]: Decrease Pierce Rate of Enemy x1 by 27.9% | __**31.6%**__ (Duration: 7s.) \n __**:white_small_square:[Status Effect]: Inflict Blind on Enemy x1 for 20s. (Success Rate: 80%.)**__ \n \n **Grand Punisher - cd 85s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 175.1% | __**258.3%**__ of ATK to Enemy x3. \n :white_small_square:[Status Effect]: Inflict Stun on Enemy x3 for 18s. (Success Rate: 30% | __**50%**__.) \n __**:white_small_square:[Buff]: Decrease DMG Taken of Self by 27.7%. (Duration:60s.)**__');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.gleck') {
    	msg.reply('my gun says: \n **Gleck** \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Decrease DMG Taken of allies by 10%. \n \n **Level 2** \n :white_small_square:Not enough data...need more gunpowder! \n :white_small_square:Please DM @Silbeya 실베야#9810 if you have info on this to load gunpowder, thanks!');
  	}
});

client.on('message', msg => {
    if (msg.content === 'hr.gleck') {
        
const embed = new Discord.RichEmbed()

  .setAuthor("Gleck")
  .setColor(0x00b8ff)
  .setDescription("\n \n __**Grimoire:**__ \n **Dark Phalanx** \n :white_small_square:[Healing]: Heal Self HP for 33.7% of ATK when Active Skills are triggered. \n :white_small_square:[Buff]: When hit, Reflect 8.2% of damage taken by Self back at the enemy. (Success Rate: 20%. Duration: 30s.) \n \n __**Skills:**__ \n **Vanguard Blade - cd 43s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 245% | __**361.5%**__ of ATK to Enemy x1. \n :white_small_square:[Debuff]: Decrease Pierce Rate of Enemy x1 by 27.9% | __**31.6%**__ (Duration: 7s.) \n __**:white_small_square:[Status Effect]: Inflict Blind on Enemy x1 for 20s. (Success Rate: 80%.)**__ \n \n **Grand Punisher - cd 85s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 175.1% | __**258.3%**__ of ATK to Enemy x3. \n :white_small_square:[Status Effect]: Inflict Stun on Enemy x3 for 18s. (Success Rate: 30% | __**50%**__.) \n __**:white_small_square:[Buff]: Decrease DMG Taken of Self by 27.7%. (Duration:60s.)**__ \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Decrease DMG Taken of allies by 10%. \n \n **Level 2** \n :white_small_square:Not enough data...need more gunpowder!")
  .setFooter("Please inform @Silbeya 실베야#9810 if the info here needs to be updated; so gunpowder can be loaded for Esta Bot ^^")
  .setThumbnail("https://tierlistmania.com/wp-content/uploads/2019/06/Gleck-Hero-Icon-Overhit.png");
 
  msg.reply('my gun says:');
  msg.channel.send({embed});
  
  }
});

//Gordon
client.on('message', msg => {
    if (msg.content === 'gr.gordon') {
    	msg.reply('my gun says: \n **Gordon** \n \n __**Grimoire:**__ \n **Lion Roar** \n :white_small_square:[Passive Effect]: Increase DEF of allies in the back row by 16.1%. \n :white_small_square:[Passive Effect]: Decrease DMG Taken by allies in own row by 10.9%.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.gordon') {
    	msg.reply('my gun says: \n **Gordon** \n \n __**Skills:**__ \n **Massive Earthquake - cd 50s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 176.6% | __**247.3%**__ of ATK to Enemy x3. \n :white_small_square:[Buff]: Remove 1 Debuff from self. \n :white_small_square:[Buff]: Increase own DEF by 58.8% | __**66.4%**__. (Success Rate: 100%. Duration: 60s) \n \n **Pulverizer - cd 96s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 265% | __**371%**__ of ATK to 1 enemy. \n :white_small_square:[Additional Damage]: Deal damage equal to 77.6% | __**108.7%**__ of DEF to 1 enemy. \n :white_small_square:[Status Effect]: Inflict Stun on 1 enemy for 18s (Success Rate: 80%).');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.gordon') {
    	msg.reply('my gun says: \n **Gordon** \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:If there are 3 or more FIRE type allies, increase DEF of all allies by 30%. \n :white_small_square:Decrease DMG Taken of allies by 5%. \n \n **Level 2** \n :white_small_square:If there are 3 or more FIRE type allies, increase DEF of all allies by 50%. \n :white_small_square:Decrease DMG Taken of allies by 10%.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'hr.gordon') {
        
const embed = new Discord.RichEmbed()

  .setAuthor("Gordon")
  .setColor(0x00b8ff)
  .setDescription("\n \n __**Grimoire:**__ \n **Lion Roar** \n :white_small_square:[Passive Effect]: Increase DEF of allies in the back row by 16.1%. \n :white_small_square:[Passive Effect]: Decrease DMG Taken by allies in own row by 10.9%. \n \n __**Skills:**__ \n **Massive Earthquake - cd 50s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 176.6% | __**247.3%**__ of ATK to Enemy x3. \n :white_small_square:[Buff]: Remove 1 Debuff from self. \n :white_small_square:[Buff]: Increase own DEF by 58.8% | __**66.4%**__. (Success Rate: 100%. Duration: 60s) \n \n **Pulverizer - cd 96s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 265% | __**371%**__ of ATK to 1 enemy. \n :white_small_square:[Additional Damage]: Deal damage equal to 77.6% | __**108.7%**__ of DEF to 1 enemy. \n :white_small_square:[Status Effect]: Inflict Stun on 1 enemy for 18s (Success Rate: 80%). \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:If there are 3 or more FIRE type allies, increase DEF of all allies by 30%. \n :white_small_square:Decrease DMG Taken of allies by 5%. \n \n **Level 2** \n :white_small_square:If there are 3 or more FIRE type allies, increase DEF of all allies by 50%. \n :white_small_square:Decrease DMG Taken of allies by 10%.")
  .setFooter("Please inform @Silbeya 실베야#9810 if the info here needs to be updated; so gunpowder can be loaded for Esta Bot ^^")
  .setThumbnail("https://tierlistmania.com/wp-content/uploads/2019/06/Gordon-Hero-Icon-Overhit.png");
 
  msg.reply('my gun says:');
  msg.channel.send({embed});
  
  }
});

//Helena
client.on('message', msg => {
    if (msg.content === 'gr.helena') {
    	msg.reply('my gun says: \n **Helena** \n \n __**Grimoire:**__ \n **Unbreakable** \n :white_small_square:[Buff]: Upon Self KO, cast Damage Immunity on Ally x4 one time. (Duration: 32s.)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.helena') {
    	msg.reply('my gun says: \n **Helena** \n \n __**Skills:**__ \n **Partian Blessing - cd 63s** \n Level 1 | __**6**__: \n :white_small_square:[Healing]: Heal Ally x5 for 98.5% | __**128%**__ of ATK. \n :white_small_square:[Additional Healing]: Additionally Heal Ally x1 | __**x3**__ for 34.1% | __**44.4%**__ of ATK. (Apply effect on Ally x1 | __**x3**__ with the lowest HP.) \n __**:white_small_square:[Buff]: Apply Damage Immunity effect on Ally x1 one time.**__ \n \n **Rune Wall - cd 90s** \n Level 1 | __**6**__: \n :white_small_square:[Resurrection]: Resurrect Ally x1 with 30% | __**50%**__ of HP. \n :white_small_square:[Buff]: Cast barrier on Ally x4 | __**x5**__ that blocks up to 550 + 8.1% | __**2612 + 18.1%**__ of ATK worth of damage. (Duration: 30s.)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.helena') {
    	msg.reply('my gun says: \n **Helena** \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Increase ATK by 30% for 3 or more targets. \n \n **Level 2** \n :white_small_square:Increase ATK by 50% for 3 or more targets.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'hr.helena') {
        
const embed = new Discord.RichEmbed()

  .setAuthor("Helena")
  .setColor(0x00b8ff)
  .setDescription("\n \n __**Grimoire:**__ \n **Unbreakable** \n :white_small_square:[Buff]: Upon Self KO, cast Damage Immunity on Ally x4 one time. (Duration: 32s.) \n \n __**Skills:**__ \n **Partian Blessing - cd 63s** \n Level 1 | __**6**__: \n :white_small_square:[Healing]: Heal Ally x5 for 98.5% | __**128%**__ of ATK. \n :white_small_square:[Additional Healing]: Additionally Heal Ally x1 | __**x3**__ for 34.1% | __**44.4%**__ of ATK. (Apply effect on Ally x1 | __**x3**__ with the lowest HP.) \n __**:white_small_square:[Buff]: Apply Damage Immunity effect on Ally x1 one time.**__ \n \n **Rune Wall - cd 90s** \n Level 1 | __**6**__: \n :white_small_square:[Resurrection]: Resurrect Ally x1 with 30% | __**50%**__ of HP. \n :white_small_square:[Buff]: Cast barrier on Ally x4 | __**x5**__ that blocks up to 550 + 8.1% | __**2612 + 18.1%**__ of ATK worth of damage. (Duration: 30s.) \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Increase ATK by 30% for 3 or more targets. \n \n **Level 2** \n :white_small_square:Increase ATK by 50% for 3 or more targets.")
  .setFooter("Please inform @Silbeya 실베야#9810 if the info here needs to be updated; so gunpowder can be loaded for Esta Bot ^^")
  .setThumbnail("https://tierlistmania.com/wp-content/uploads/2019/06/Helena-Hero-Icon-Overhit.png");
 
  msg.reply('my gun says:');
  msg.channel.send({embed});
  
  }
});

//Hien
client.on('message', msg => {
    if (msg.content === 'gr.hien') {
    	msg.reply('my gun says: \n **Hien** \n \n __**Grimoire:**__ \n **Scarlet Lily Frenzy** \n :white_small_square:[Additional Damage]: Deal additional damage equal to 30% of ATK to enemies affected by Burn when All Attack is triggered. \n :white_small_square:[Passive Effect]: Increase Pierce Rate of Self by 6%.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.hien') {
    	msg.reply('my gun says: \n **Hien** \n \n __**Skills:**__ \n **Phoenix Wing Strike - cd 73s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 256.5% | __**378.4%**__ of ATK to Enemy x1. \n :white_small_square:[Chain Effect]: Deal additional damage eqial to 256.5% | __**378.4%**__ of ATK when chain attack is triggered. (Guaranteed critical) \n :white_small_square:[Chain Effect]: If the struck enemy is affected by Burn, inflict Burn to deal damage equal to 22% | __**24.8%**__ of ATK every 10s for 20s on Enemy x3. (Success Rate:60% | __**100%**__) \n __** :white_small_square:[Additional Damage]: Deal fixed damage of 1990 to Enemy x1.**__ \n \n **Falcon Claw - cd 95s** \n Level 1 | __**6**__: \n:white_small_square:[Regular Damage]: Deal damage equal to 177.9% | __**262.5%**__ of ATK to Enemy x3. \n:white_small_square:[Debuff]: Decrease Damage of Enemy x3 by 23.5% | __**26.6%**__. (Success Rate: 30% | __**60%**__, Duration: 60s.) \n __**:white_small_square:[Additional Damage]: Deal additional damage equal to 4.7% of Max HP to Enemy x3 (Max Damage: 150% of ATK)**__');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.hien') {
    	msg.reply('my gun says: \n **Hien** \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:If there are at least 3x Fire allies, increase allies ATK by 35%. \n :white_small_square:Increase Crit Rate of allies by 5%. \n \n **Level 2** \n :white_small_square:Not enough data...need more gunpowder! \n :white_small_square:Please DM @Silbeya 실베야#9810 if you have info on this to load gunpowder, thanks!');
  	}
});

client.on('message', msg => {
    if (msg.content === 'hr.hien') {
        
const embed = new Discord.RichEmbed()

  .setAuthor("Hien")
  .setColor(0x00b8ff)
  .setDescription("\n \n __**Grimoire:**__ \n **Scarlet Lily Frenzy** \n :white_small_square:[Additional Damage]: Deal additional damage equal to 30% of ATK to enemies affected by Burn when All Attack is triggered. \n :white_small_square:[Passive Effect]: Increase Pierce Rate of Self by 6%. \n \n __**Skills:**__ \n **Phoenix Wing Strike - cd 73s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 256.5% | __**378.4%**__ of ATK to Enemy x1. \n :white_small_square:[Chain Effect]: Deal additional damage eqial to 256.5% | __**378.4%**__ of ATK when chain attack is triggered. (Guaranteed critical) \n :white_small_square:[Chain Effect]: If the struck enemy is affected by Burn, inflict Burn to deal damage equal to 22% | __**24.8%**__ of ATK every 10s for 20s on Enemy x3. (Success Rate:60% | __**100%**__) \n __** :white_small_square:[Additional Damage]: Deal fixed damage of 1990 to Enemy x1.**__ \n \n **Falcon Claw - cd 95s** \n Level 1 | __**6**__: \n:white_small_square:[Regular Damage]: Deal damage equal to 177.9% | __**262.5%**__ of ATK to Enemy x3. \n:white_small_square:[Debuff]: Decrease Damage of Enemy x3 by 23.5% | __**26.6%**__. (Success Rate: 30% | __**60%**__, Duration: 60s.) \n __**:white_small_square:[Additional Damage]: Deal additional damage equal to 4.7% of Max HP to Enemy x3 (Max Damage: 150% of ATK)**__ \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:If there are at least 3x Fire allies, increase allies ATK by 35%. \n :white_small_square:Increase Crit Rate of allies by 5%. \n \n **Level 2** \n :white_small_square:Not enough data...need more gunpowder!")
  .setFooter("Please inform @Silbeya 실베야#9810 if the info here needs to be updated; so gunpowder can be loaded for Esta Bot ^^")
  .setThumbnail("https://tierlistmania.com/wp-content/uploads/2019/06/Hien-Hero-Icon-Overhit.png");
 
  msg.reply('my gun says:');
  msg.channel.send({embed});
  
  }
});

//Iroha
client.on('message', msg => {
    if (msg.content === 'gr.iroha') {
    	msg.reply('my gun says: \n **Iroha** \n \n __**Grimoire:**__ \n **Spirit Shield** \n :white_small_square:[Passive effect] Reduce damage from Fire-type enemies by 8.7%. \n :white_small_square:[Buff]: When an active skill is used, heal 2 allies for 20.7% of ATK every 8 seconds for 40 seconds.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.iroha') {
    	msg.reply('my gun says: \n **Iroha** \n \n __**Skills:**__ \n **Iron Bastion - cd 65s** \n Level 1 | __**6**__: \n :white_small_square:[Buff] : Cast Barrier on 4 | __**5**__ allies, blocking damage equal to 689 + 13.4% | __**3271 + 30.1%**__ of ATK (Applies to the 4 | __**5**__ allies with the highest DEF, Duration: 30s). \n :white_small_square:[Buff] Raise DEF of 5 allies by 26% | __**29.4%**__. (Duration : 60 seconds) \n \n **Violet Lightning Blast - cd 88s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage] : Deal damage equal to 126.2% | __**176.6%**__ of ATK to 4 | __**5**__ enemies. \n :white_small_square:[Buff] : Reduce damage from 4 | __**5**__ enemies by 25.2% | __**28.5%**__ (Duration : 60 seconds)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.iroha') {
    	msg.reply('my gun says: \n **Iroha** \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:If there are at least 3x Water-type allies, increase ATK of all allies by 15%. \n :white_small_square:Increase Block Rate of all allies by 5%. \n \n **Level 2** \n :white_small_square:Not enough data...need more gunpowder! \n :white_small_square:Please DM @Silbeya 실베야#9810 if you have info on this to load gunpowder, thanks!');
  	}
});

client.on('message', msg => {
    if (msg.content === 'hr.iroha') {
        
const embed = new Discord.RichEmbed()

  .setAuthor("Iroha")
  .setColor(0x00b8ff)
  .setDescription("\n \n __**Grimoire:**__ \n **Spirit Shield** \n :white_small_square:[Passive effect] Reduce damage from Fire-type enemies by 8.7%. \n :white_small_square:[Buff]: When an active skill is used, heal 2 allies for 20.7% of ATK every 8 seconds for 40 seconds. \n \n __**Skills:**__ \n **Iron Bastion - cd 65s** \n Level 1 | __**6**__: \n :white_small_square:[Buff] : Cast Barrier on 4 | __**5**__ allies, blocking damage equal to 689 + 13.4% | __**3271 + 30.1%**__ of ATK (Applies to the 4 | __**5**__ allies with the highest DEF, Duration: 30s). \n :white_small_square:[Buff] Raise DEF of 5 allies by 26% | __**29.4%**__. (Duration : 60 seconds) \n \n **Violet Lightning Blast - cd 88s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage] : Deal damage equal to 126.2% | __**176.6%**__ of ATK to 4 | __**5**__ enemies. \n :white_small_square:[Buff] : Reduce damage from 4 | __**5**__ enemies by 25.2% | __**28.5%**__ (Duration : 60 seconds) \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:If there are at least 3x Water-type allies, increase ATK of all allies by 15%. \n :white_small_square:Increase Block Rate of all allies by 5%. \n \n **Level 2** \n :white_small_square:Not enough data...need more gunpowder!")
  .setFooter("Please inform @Silbeya 실베야#9810 if the info here needs to be updated; so gunpowder can be loaded for Esta Bot ^^")
  .setThumbnail("https://i.imgur.com/K5ZLXE8.png");
 
  msg.reply('my gun says:');
  msg.channel.send({embed});
  
  }
});

//Jack
client.on('message', msg => {
    if (msg.content === 'gr.jack') {
    	msg.reply('my gun says: \n **Jack** \n \n __**Grimoire:**__ \n **Mechaknight Vanguard** \n :white_small_square:[Buff]: When HP is 50% or lower, cast Barrier on Ally x5 that blocks up to 355 + 8.3% of ATK worth of damage. (Duration: 30s.)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.jack') {
    	msg.reply('my gun says: \n **Jack** \n \n __**Skills:**__ \n **Wicked Wrestler - cd 44s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 170.3% | __**361.2%**__ of ATK to Enemy x1. \n :white_small_square:[Additional Damage:] Deal additional damage equal to 147.7% | __**184.7%**__ of ATK to Dark enemies. \n \n **Death Parade - cd 85s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 102% | __**268.2%**__ of ATK to Enemy x3 | __**x4**__. \n :white_small_square:[Additional Damage]: Deal additional damage equal to 41.9% | __**58.6%**__ of DEF if Barrier effect is applied. \n __**:white_small_square:[Debuff]: Decrease Healing of Enemy x4 by 29.6% (Duration: 60s.)**__');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.jack') {
    	msg.reply('my gun says: \n **Jack** \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Increase Crit Resist Rate of allies by 10%. \n \n **Level 2** \n :white_small_square:Increase Crit Resist Rate of allies by 20%');
  	}
});

client.on('message', msg => {
    if (msg.content === 'hr.jack') {
        
const embed = new Discord.RichEmbed()

  .setAuthor("Jack")
  .setColor(0x00b8ff)
  .setDescription("\n \n __**Grimoire:**__ \n **Mechaknight Vanguard** \n :white_small_square:[Buff]: When HP is 50% or lower, cast Barrier on Ally x5 that blocks up to 355 + 8.3% of ATK worth of damage. (Duration: 30s.) \n \n __**Skills:**__ \n **Wicked Wrestler - cd 44s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 170.3% | __**361.2%**__ of ATK to Enemy x1. \n :white_small_square:[Additional Damage:] Deal additional damage equal to 147.7% | __**184.7%**__ of ATK to Dark enemies. \n \n **Death Parade - cd 85s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 102% | __**268.2%**__ of ATK to Enemy x3 | __**x4**__. \n :white_small_square:[Additional Damage]: Deal additional damage equal to 41.9% | __**58.6%**__ of DEF if Barrier effect is applied. \n __**:white_small_square:[Debuff]: Decrease Healing of Enemy x4 by 29.6% (Duration: 60s.)**__ \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Increase Crit Resist Rate of allies by 10%. \n \n **Level 2** \n :white_small_square:Increase Crit Resist Rate of allies by 20%")
  .setFooter("Please inform @Silbeya 실베야#9810 if the info here needs to be updated; so gunpowder can be loaded for Esta Bot ^^")
  .setThumbnail("https://tierlistmania.com/wp-content/uploads/2019/06/Jack-Hero-Icon-Overhit.png");
 
  msg.reply('my gun says:');
  msg.channel.send({embed});
  
  }
});

//Jasper
client.on('message', msg => {
    if (msg.content === 'gr.jasper') {
    	msg.reply('my gun says: \n **Jasper** \n \n __**Grimoire:**__ \n **Paralyzing Drive** \n :white_small_square:[Buff]: Increase Self ATK by 28.2% when Active Skills are triggered. (Duration: 40s.) \n :white_small_square:[Debuff]: When Active Skills are triggered, inflict Block Healing on the struck target. (Success Rate: 50%, Duration. 30s.)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.jasper') {
    	msg.reply('my gun says: \n **Jasper** \n \n __**Skills:**__ \n **Extreme Ride - cd 64s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 212.8% | __**306%**__ of ATK to Enemy x3 | __**x4**__. \n :white_small_square:[Status Effect]: Inflict Silence on Enemy x3 | __**x4**__ for 20s. (Success Rate: 30% | __**40%**__.) \n \n **Omega Drive - cd 80s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 168.2% | __**248.6%**__ of ATK to Enemy x4 | __**x5**__. \n :white_small_square:[Additional Damage]: Deal fixed damage of 288 | __**1410**__ to Enemy x4 | __**x5**__.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.jasper') {
    	msg.reply('my gun says: \n **Jasper** \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Increase ATK of allies by 25%. \n \n **Level 2** \n :white_small_square:Not enough data...need more gunpowder! \n :white_small_square:Please DM @Silbeya 실베야#9810 if you have info on this to load gunpowder, thanks!');
  	}
});

client.on('message', msg => {
    if (msg.content === 'hr.jasper') {
        
const embed = new Discord.RichEmbed()

  .setAuthor("Jasper")
  .setColor(0x00b8ff)
  .setDescription("\n \n __**Grimoire:**__ \n **Paralyzing Drive** \n :white_small_square:[Buff]: Increase Self ATK by 28.2% when Active Skills are triggered. (Duration: 40s.) \n :white_small_square:[Debuff]: When Active Skills are triggered, inflict Block Healing on the struck target. (Success Rate: 50%, Duration. 30s.) \n \n __**Skills:**__ \n **Extreme Ride - cd 64s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 212.8% | __**306%**__ of ATK to Enemy x3 | __**x4**__. \n :white_small_square:[Status Effect]: Inflict Silence on Enemy x3 | __**x4**__ for 20s. (Success Rate: 30% | __**40%**__.) \n \n **Omega Drive - cd 80s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 168.2% | __**248.6%**__ of ATK to Enemy x4 | __**x5**__. \n :white_small_square:[Additional Damage]: Deal fixed damage of 288 | __**1410**__ to Enemy x4 | __**x5**__. \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Increase ATK of allies by 25%. \n \n **Level 2** \n :white_small_square:Not enough data...need more gunpowder!")
  .setFooter("Please inform @Silbeya 실베야#9810 if the info here needs to be updated; so gunpowder can be loaded for Esta Bot ^^")
  .setThumbnail("https://tierlistmania.com/wp-content/uploads/2019/06/Jasper-Hero-Icon-Overhit.png");
 
  msg.reply('my gun says:');
  msg.channel.send({embed});
  
  }
});

//Jinkai
client.on('message', msg => {
    if (msg.content === 'gr.jinkai') {
    	msg.reply('my gun says: \n **Jinkai** \n \n __**Grimoire:**__ \n **Aggressive Defense** \n :white_small_square:[Buff]: Cast Physical Damage Resist effect on Self 1 time when Active Skills are triggered. (Success Rate: 30%. Duration: 32s.)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.jinkai') {
    	msg.reply('my gun says: \n **Jinkai** \n \n __**Skills:**__ \n **Vajra Strike - cd 58s** \n Level 1 | __**6**__: \n :white_small_square:[Buff]: Cast Barrier on Ally x3 | __**x4**__ that blocks up to 458 + 7.8% | __**2174 + 17.7%**__ of ATK worth of damage. (Duration: 30s | __**50s**__.) \n :white_small_square:[Buff]: Apply Taunt on Self, making them priority targets for enemies. (Duration 25s | __**40s**__.) \n __**:white_small_square:[Buff]: Increase DEF of Ally x4 by 34.6%. (Duration: 60.s)**__ \n \n **Asura Path - cd 94s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 138% | __**203.8%**__ of ATK to Enemy x4. \n :white_small_square:[Status Effect]: Inflict Silence on Enemy x4 | __**x5**__ for 20s. (Success Rate: 30%.) \n __**:white_small_square:[Debuff]: Decrease Damage of Enemy x5 by 22.5%. (Duration: 60s.)**__');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.jinkai') {
    	msg.reply('my gun says: \n **Jinkai** \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:If there are at least 3 Light allies, increase allies ATK by 35%. \n :white_small_square:Increase Crit DMG of allies by 10%. \n \n **Level 2** \n :white_small_square:Not enough data...need more gunpowder! \n :white_small_square:Please DM @Silbeya 실베야#9810 if you have info on this to load gunpowder, thanks!');
  	}
});

client.on('message', msg => {
    if (msg.content === 'hr.jinkai') {
        
const embed = new Discord.RichEmbed()

  .setAuthor("Jinkai")
  .setColor(0x00b8ff)
  .setDescription("\n \n __**Grimoire:**__ \n **Aggressive Defense** \n :white_small_square:[Buff]: Cast Physical Damage Resist effect on Self 1 time when Active Skills are triggered. (Success Rate: 30%. Duration: 32s.) \n \n __**Skills:**__ \n **Vajra Strike - cd 58s** \n Level 1 | __**6**__: \n :white_small_square:[Buff]: Cast Barrier on Ally x3 | __**x4**__ that blocks up to 458 + 7.8% | __**2174 + 17.7%**__ of ATK worth of damage. (Duration: 30s | __**50s**__.) \n :white_small_square:[Buff]: Apply Taunt on Self, making them priority targets for enemies. (Duration 25s | __**40s**__.) \n __**:white_small_square:[Buff]: Increase DEF of Ally x4 by 34.6%. (Duration: 60.s)**__ \n \n **Asura Path - cd 94s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 138% | __**203.8%**__ of ATK to Enemy x4. \n :white_small_square:[Status Effect]: Inflict Silence on Enemy x4 | __**x5**__ for 20s. (Success Rate: 30%.) \n __**:white_small_square:[Debuff]: Decrease Damage of Enemy x5 by 22.5%. (Duration: 60s.)**__ \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:If there are at least 3 Light allies, increase allies ATK by 35%. \n :white_small_square:Increase Crit DMG of allies by 10%. \n \n **Level 2** \n :white_small_square:Not enough data...need more gunpowder!")
  .setFooter("Please inform @Silbeya 실베야#9810 if the info here needs to be updated; so gunpowder can be loaded for Esta Bot ^^")
  .setThumbnail("https://tierlistmania.com/wp-content/uploads/2019/06/Jinkai-Hero-Icon-Overhit.png");
 
  msg.reply('my gun says:');
  msg.channel.send({embed});
  
  }
});

//Leika
client.on('message', msg => {
    if (msg.content === 'gr.leika') {
    	msg.reply('my gun says: \n **Leika** \n \n __**Grimoire:**__ \n **White Snake Tear** \n :white_small_square:[Buff]: Increase Self ATK by 21.2% when Block is triggered. (Duration: 40s.) \n :white_small_square:[Passive Effect]: Increase the Block Rate of allies in the same row by 4%.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.leika') {
    	msg.reply('my gun says: \n **Leika** \n \n __**Skills:**__ \n **Sakura Strike: Sange Blade - cd 83s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 213.4% | __**303.1%**__ of ATK to Enemy x3 | __**x4**__. \n :white_small_square:[Debuff]: Decrease Crit Rate of Enemy x3 | __**x4**__ by 23.2% | __**26.2%**__. (Duration: 60s.) \n \n **Sakura Strike: Rakshasa Blade - cd 105s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 137.3% | __**232.8%**__ of ATK to Enemy x3 | __**x4**__. \n :white_small_square:[Additional Damage]: Deal fixed damage of 332 | __**1627**__ to enemies affected by Bleed. \n __**:white_small_square:[Buff] Increase Crit Rate of Self by 19.3%.**__');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.leika') {
    	msg.reply('my gun says: \n **Leika** \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Increase ATK of allies by 25%. \n \n **Level 2** \n :white_small_square:Not enough data...need more gunpowder! \n :white_small_square:Please DM @Silbeya 실베야#9810 if you have info on this to load gunpowder, thanks!');
  	}
});

client.on('message', msg => {
    if (msg.content === 'hr.leika') {
        
const embed = new Discord.RichEmbed()

  .setAuthor("Leika")
  .setColor(0x00b8ff)
  .setDescription("\n \n __**Grimoire:**__ \n **White Snake Tear** \n :white_small_square:[Buff]: Increase Self ATK by 21.2% when Block is triggered. (Duration: 40s.) \n :white_small_square:[Passive Effect]: Increase the Block Rate of allies in the same row by 4%. \n \n __**Skills:**__ \n **Sakura Strike: Sange Blade - cd 83s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 213.4% | __**303.1%**__ of ATK to Enemy x3 | __**x4**__. \n :white_small_square:[Debuff]: Decrease Crit Rate of Enemy x3 | __**x4**__ by 23.2% | __**26.2%**__. (Duration: 60s.) \n \n **Sakura Strike: Rakshasa Blade - cd 105s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 137.3% | __**232.8%**__ of ATK to Enemy x3 | __**x4**__. \n :white_small_square:[Additional Damage]: Deal fixed damage of 332 | __**1627**__ to enemies affected by Bleed. \n __**:white_small_square:[Buff] Increase Crit Rate of Self by 19.3%.**__ \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Increase ATK of allies by 25%. \n \n **Level 2** \n :white_small_square:Not enough data...need more gunpowder!")
  .setFooter("Please inform @Silbeya 실베야#9810 if the info here needs to be updated; so gunpowder can be loaded for Esta Bot ^^")
  .setThumbnail("https://tierlistmania.com/wp-content/uploads/2019/06/Leika-Hero-Icon-Overhit.png");
 
  msg.reply('my gun says:');
  msg.channel.send({embed});
  
  }
});

//Ludmila
client.on('message', msg => {
    if (msg.content === 'gr.ludmila') {
    	msg.reply('my gun says: \n **Ludmila** \n \n __**Grimoire:**__ \n **Volcanic Formula** \n :white_small_square:[Passive Effect]: Increase Crit Rate of Fire Allies by 7.4%. \n :white_small_square:[Buff]: Decrease Skill Cooldown of Self by 6s when Regular Attack is triggered (Success Rate: 100%).');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.ludmila') {
    	msg.reply('my gun says: \n **Ludmila** \n \n __**Skills:**__ \n **Infernal Lava - cd 68s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 316.2% | __**467%**__ of ATK to Enemy x3. (Sequentially attack Enemy x3.) \n :white_small_square:[Status Effect]: Inflict Burn that deals damage equal to 26.7% | __**30.2%**__ of ATK every 10s for 20s. (Success Rate: 30% | __**100%**__.) \n \n **Cremation - cd 88s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 142.2% | __**238.5%**__ of ATK to Enemy x3 | __**x4**__. \n :white_small_square:[Additional Damage]: Deal additional damage equal to 85.3% | __**106.6%**__ of ATK to enemies affected by Burn. \n __**:white_small_square:[Status Effect]: Inflict Stun on Enemy x4 for 18s. (Success Rate: 30%.)**__');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.ludmila') {
    	msg.reply('my gun says: \n **Ludmila** \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Increase ATK of Fire allies by 30%. \n :white_small_square:Increase Max HP of Fire allies by 10%. \n \n **Level 2** \n :white_small_square:Not enough data...need more gunpowder! \n :white_small_square:Please DM @Silbeya 실베야#9810 if you have info on this to load gunpowder, thanks!');
  	}
});

client.on('message', msg => {
    if (msg.content === 'hr.ludmila') {
        
const embed = new Discord.RichEmbed()

  .setAuthor("Ludmila")
  .setColor(0x00b8ff)
  .setDescription("\n \n __**Grimoire:**__ \n **Volcanic Formula** \n :white_small_square:[Passive Effect]: Increase Crit Rate of Fire Allies by 7.4%. \n :white_small_square:[Buff]: Decrease Skill Cooldown of Self by 6s when Regular Attack is triggered (Success Rate: 100%). \n \n __**Skills:**__ \n **Infernal Lava - cd 68s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 316.2% | __**467%**__ of ATK to Enemy x3. (Sequentially attack Enemy x3.) \n :white_small_square:[Status Effect]: Inflict Burn that deals damage equal to 26.7% | __**30.2%**__ of ATK every 10s for 20s. (Success Rate: 30% | __**100%**__.) \n \n **Cremation - cd 88s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 142.2% | __**238.5%**__ of ATK to Enemy x3 | __**x4**__. \n :white_small_square:[Additional Damage]: Deal additional damage equal to 85.3% | __**106.6%**__ of ATK to enemies affected by Burn. \n __**:white_small_square:[Status Effect]: Inflict Stun on Enemy x4 for 18s. (Success Rate: 30%.)**__ \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Increase ATK of Fire allies by 30%. \n :white_small_square:Increase Max HP of Fire allies by 10%. \n \n **Level 2** \n :white_small_square:Not enough data...need more gunpowder!")
  .setFooter("Please inform @Silbeya 실베야#9810 if the info here needs to be updated; so gunpowder can be loaded for Esta Bot ^^")
  .setThumbnail("https://tierlistmania.com/wp-content/uploads/2019/06/Ludmila-Hero-Icon-Overhit.png");
 
  msg.reply('my gun says:');
  msg.channel.send({embed});
  
  }
});

//Luna
client.on('message', msg => {
    if (msg.content === 'gr.luna') {
    	msg.reply('my gun says: \n **Luna** \n \n __**Grimoire:**__ \n **Lunar Protection** \n :white_small_square:[Debuff]: Decrease ATK of Fire Enemies by 17.7% when Active Skills are triggered. (Duration: 40s.) \n :white_small_square:[Debuff]: Decrease DEF of Hit Target by 9.7% when Regular Attack is triggered. (Success Rate: 30%. Duration: 40s.)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.luna') {
    	msg.reply('my gun says: \n **Luna** \n \n __**Skills:**__ \n **Prism Beam - cd 66s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage] Deal Damage equal to 189.5% | __**265.3%**__ of ATK to Enemy x3. \n :white_small_square:[Debuff] Remove 1 Buff from Enemy x1 | __**x3**__. \n __**:white_small_square:[Additional Damage] Deal additional damage equal to 6% of Max Enemy HP to Enemy x3. (Max Damage: 150% of ATK) **__ \n \n  **Resonant Beam - cd 95s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal Damage equal to 130.2% | __**182.3%**__ of ATK to Enemy x4 | __**x5**__. \n :white_small_square:[Additional Damage]: Deal additional Damage equal to 63.8% | __**79.7%**__ of ATK to enemies affected by Chill. \n __**:white_small_square:[Debuff]: Increase Skill Cooldown of Enemy x5 by 12s. **__');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.luna') {
    	msg.reply('my gun says: \n **Luna** \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Increase ATK of Magic-Type Allies by 30%. \n \n **Level 2** \n :white_small_square:Not enough data...need more gunpowder! \n :white_small_square:Please DM @Silbeya 실베야#9810 if you have info on this to load gunpowder, thanks!');
  	}
});

client.on('message', msg => {
    if (msg.content === 'hr.luna') {
        
const embed = new Discord.RichEmbed()

  .setAuthor("Luna")
  .setColor(0x00b8ff)
  .setDescription("\n \n __**Grimoire:**__ \n **Lunar Protection** \n :white_small_square:[Debuff]: Decrease ATK of Fire Enemies by 17.7% when Active Skills are triggered. (Duration: 40s.) \n :white_small_square:[Debuff]: Decrease DEF of Hit Target by 9.7% when Regular Attack is triggered. (Success Rate: 30%. Duration: 40s.) \n \n __**Skills:**__ \n **Prism Beam - cd 66s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage] Deal Damage equal to 189.5% | __**265.3%**__ of ATK to Enemy x3. \n :white_small_square:[Debuff] Remove 1 Buff from Enemy x1 | __**x3**__. \n __**:white_small_square:[Additional Damage] Deal additional damage equal to 6% of Max Enemy HP to Enemy x3. (Max Damage: 150% of ATK) **__ \n \n  **Resonant Beam - cd 95s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal Damage equal to 130.2% | __**182.3%**__ of ATK to Enemy x4 | __**x5**__. \n :white_small_square:[Additional Damage]: Deal additional Damage equal to 63.8% | __**79.7%**__ of ATK to enemies affected by Chill. \n __**:white_small_square:[Debuff]: Increase Skill Cooldown of Enemy x5 by 12s. **__ \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Increase ATK of Magic-Type Allies by 30%. \n \n **Level 2** \n :white_small_square:Not enough data...need more gunpowder!")
  .setFooter("Please inform @Silbeya 실베야#9810 if the info here needs to be updated; so gunpowder can be loaded for Esta Bot ^^")
  .setThumbnail("https://tierlistmania.com/wp-content/uploads/2019/06/Luna-Hero-Icon-Overhit.png");
 
  msg.reply('my gun says:');
  msg.channel.send({embed});
  
  }
});

//Malpion
client.on('message', msg => {
    if (msg.content === 'gr.malpion') {
    	msg.reply('my gun says: \n **Malpion** \n \n __**Grimoire:**__ \n **Mad Dog Awakening** \n :white_small_square:[Additional Damage]: Deal additional damage equal to 36.1% of ATK to enemies affected by Blind when Active Skills are triggered. \n :white_small_square:[Passive Effect]: Increase Pierce Rate of Self by 6%.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.malpion') {
    	msg.reply('my gun says: \n **Malpion** \n \n __**Skills:**__ \n **Venomous Blade - cd 45s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage] Deal Damage equal to 258.4% | __**381.3%**__ of ATK to Enemy x1. \n :white_small_square:[Buff] Increase Crit Rate of Self by 27.9% | __**31.6%**__. (Duration: 7s.) \n __**:white_small_square:[Buff] Cast Blood Sucking on Self that heals 42.6% of damage. (Success Rate: 100%. Duration: 5s. Heal up to 50% of ATK.)**__ \n \n **Critical Stance - cd 80s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage to 263.5% | __**389.4%**__ of ATK to Enemy x1. \n :white_small_square:[Status Effect]: Inflict Blind on Enemy x1. for 20s. (Success Rate: 50%) \n __**:white_small_square:[Additional Damage]: Deal additional damage equal to 186.6% of ATK to enemies with HP that is 50% or lower.**__');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.malpion') {
    	msg.reply('my gun says: \n **Malpion** \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Increase Crit DMG of Dark allies by 30%. \n \n **Level 2** \n :white_small_square:Not enough data...need more gunpowder! \n :white_small_square:Please DM @Silbeya 실베야#9810 if you have info on this to load gunpowder, thanks!');
  	}
});

client.on('message', msg => {
    if (msg.content === 'hr.malpion') {
        
const embed = new Discord.RichEmbed()

  .setAuthor("Malpion")
  .setColor(0x00b8ff)
  .setDescription("\n \n __**Grimoire:**__ \n **Mad Dog Awakening** \n :white_small_square:[Additional Damage]: Deal additional damage equal to 36.1% of ATK to enemies affected by Blind when Active Skills are triggered. \n :white_small_square:[Passive Effect]: Increase Pierce Rate of Self by 6%. \n \n __**Skills:**__ \n **Venomous Blade - cd 45s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage] Deal Damage equal to 258.4% | __**381.3%**__ of ATK to Enemy x1. \n :white_small_square:[Buff] Increase Crit Rate of Self by 27.9% | __**31.6%**__. (Duration: 7s.) \n __**:white_small_square:[Buff] Cast Blood Sucking on Self that heals 42.6% of damage. (Success Rate: 100%. Duration: 5s. Heal up to 50% of ATK.)**__ \n \n **Critical Stance - cd 80s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage to 263.5% | __**389.4%**__ of ATK to Enemy x1. \n :white_small_square:[Status Effect]: Inflict Blind on Enemy x1. for 20s. (Success Rate: 50%) \n __**:white_small_square:[Additional Damage]: Deal additional damage equal to 186.6% of ATK to enemies with HP that is 50% or lower.**__ \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Increase Crit DMG of Dark allies by 30%. \n \n **Level 2** \n :white_small_square:Not enough data...need more gunpowder!")
  .setFooter("Please inform @Silbeya 실베야#9810 if the info here needs to be updated; so gunpowder can be loaded for Esta Bot ^^")
  .setThumbnail("https://tierlistmania.com/wp-content/uploads/2019/06/Malpion-Hero-Icon-Overhit.png");
 
  msg.reply('my gun says:');
  msg.channel.send({embed});
  
  }
});

//Norn
client.on('message', msg => {
    if (msg.content === 'gr.norn') {
    	msg.reply('my gun says: \n **Norn** \n \n __**Grimoire:**__ \n **Neuron Wave** \n :white_small_square:[Status Effect]: Inflict Silence on Hit Target when Active Skills are triggered (Success Rate: 30%. Duration: 20s) \n :white_small_square:[Passive Effect]: Increase own ATK by 10.6%.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.norn') {
    	msg.reply('my gun says: \n **Norn** \n \n __**Skills:**__ \n **Justice Flash - cd 56s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage] Deal Damage equal to 209.5% | __**293.3%**__ of ATK to Enemy x4. \n \n **Dragon Flare - cd 95s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 171.1% | __**239.5%**__ of ATK to Enemy x4 | __**x5**__. \n :white_small_square:[Additional Damage]: Deal fixed damage of 70.6% | __**88.3%**__ of ATK to Dark-type enemies.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.norn') {
    	msg.reply('my gun says: \n **Norn** \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Increase ATK of Magic-type allies by 20%. \n :white_small_square:If there are at least 3 Light-type allies, decrease allies Taken DMG by 5%. \n \n **Level 2** \n :white_small_square:Increase ATK of Magic-type allies by 40%. \n :white_small_square:If there are at least 3 Light-type allies, decrease allies Taken DMG by 10%.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'hr.norn') {
        
const embed = new Discord.RichEmbed()

  .setAuthor("Norn")
  .setColor(0x00b8ff)
  .setDescription(" \n \n __**Grimoire:**__ \n **Neuron Wave** \n :white_small_square:[Status Effect]: Inflict Silence on Hit Target when Active Skills are triggered (Success Rate: 30%. Duration: 20s) \n :white_small_square:[Passive Effect]: Increase own ATK by 10.6%. \n \n __**Skills:**__ \n **Justice Flash - cd 56s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage] Deal Damage equal to 209.5% | __**293.3%**__ of ATK to Enemy x4. \n \n **Dragon Flare - cd 95s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 171.1% | __**239.5%**__ of ATK to Enemy x4 | __**x5**__. \n :white_small_square:[Additional Damage]: Deal fixed damage of 70.6% | __**88.3%**__ of ATK to Dark-type enemies. \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Increase ATK of Magic-type allies by 20%. \n :white_small_square:If there are at least 3 Light-type allies, decrease allies Taken DMG by 5%. \n \n **Level 2** \n :white_small_square:Increase ATK of Magic-type allies by 40%. \n :white_small_square:If there are at least 3 Light-type allies, decrease allies Taken DMG by 10%.")
  .setFooter("Please inform @Silbeya 실베야#9810 if the info here needs to be updated; so gunpowder can be loaded for Esta Bot ^^")
  .setThumbnail("https://i.imgur.com/maoorc0.png");
 
  msg.reply('my gun says:');
  msg.channel.send({embed});
  
  }
});

//Ophelia
client.on('message', msg => {
    if (msg.content === 'gr.ophelia') {
    	msg.reply('my gun says: \n **Ophelia** \n \n __**Grimoire:**__ \n **Ground Upheaval** \n :white_small_square:[Healing]: When hit, heal HP for 16.6% of ATK every 8s for 40s. (Success Rate: 50%.) \n :white_small_square:[Passive Effect]: Increase Block Rate of Ally x1 by 2.3%.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.ophelia') {
    	msg.reply('my gun says: \n **Ophelia** \n \n __**Skills:**__ \n **Shield of Sverin - cd 90s** \n Level 1 | __**6**__: \n :white_small_square:[Buff]: Transfer 50% of damage taken by Ally x3 to the caster. Decrease damage taken by the caster by 30%. (Duration 49s | __**63s**__.) \n :white_small_square:[Buff]: Decrease DMG Taken of Self by 37.2% | __**42.1%**__. (Duration: 60s.) \n :white_small_square:[Buff]: Increase Pierce Rate of Ally x2 | __**x4**__ with the highest ATK by 19.1% | __**21.6%**__. (Duration: 40s.) \n \n **Aegion Hammer - cd 60s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 252.6% | __**393.1%**__ of ATK to Enemy x1. \n :white_small_square:[Status Effect]: Inflict Stun on Enemy x1 for 18s. (Success Rate: 80%.) \n __**:white_small_square:[Debuff]: Increase DMG Taken of Enemy x1 by 31.6% (Duration: 60s.)**__');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.ophelia') {
    	msg.reply('my gun says: \n **Ophelia** \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Increase Block rate of Wind allies by 10%. \n \n **Level 2** \n :white_small_square:Not enough data...need more gunpowder! \n :white_small_square:Please DM @Silbeya 실베야#9810 if you have info on this to load gunpowder, thanks!');
  	}
});

client.on('message', msg => {
    if (msg.content === 'hr.ophelia') {
        
const embed = new Discord.RichEmbed()

  .setAuthor("Ophelia")
  .setColor(0x00b8ff)
  .setDescription("\n \n __**Grimoire:**__ \n **Ground Upheaval** \n :white_small_square:[Healing]: When hit, heal HP for 16.6% of ATK every 8s for 40s. (Success Rate: 50%.) \n :white_small_square:[Passive Effect]: Increase Block Rate of Ally x1 by 2.3%. \n \n __**Skills:**__ \n **Shield of Sverin - cd 90s** \n Level 1 | __**6**__: \n :white_small_square:[Buff]: Transfer 50% of damage taken by Ally x3 to the caster. Decrease damage taken by the caster by 30%. (Duration 49s | __**63s**__.)\n :white_small_square:[Buff]: Decrease DMG Taken of Self by 37.2% | __**42.1%**__. (Duration: 60s.) \n :white_small_square:[Buff]: Increase Pierce Rate of Ally x2 | __**x4**__ with the highest ATK by 19.1% | __**21.6%**__. (Duration: 40s.) \n \n **Aegion Hammer - cd 60s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 252.6% | __**393.1%**__ of ATK to Enemy x1. \n :white_small_square:[Status Effect]: Inflict Stun on Enemy x1 for 18s. (Success Rate: 80%.) \n __**:white_small_square:[Debuff]: Increase DMG Taken of Enemy x1 by 31.6% (Duration: 60s.)**__ \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Increase Block rate of Wind allies by 10%. \n \n **Level 2** \n :white_small_square:Not enough data...need more gunpowder!")
  .setFooter("Please inform @Silbeya 실베야#9810 if the info here needs to be updated; so gunpowder can be loaded for Esta Bot ^^")
  .setThumbnail("https://tierlistmania.com/wp-content/uploads/2019/06/Ophelia-Hero-Icon-Overhit.png");
 
  msg.reply('my gun says:');
  msg.channel.send({embed});
  
  }
});

//Reiz
client.on('message', msg => {
    if (msg.content === 'gr.reiz') {
    	msg.reply('my gun says: \n **Reiz** \n \n __**Grimoire:**__ \n **Gauss Jammer** \n :white_small_square:[Passive Effect]: Increase the ATK of allies in the same row by 12.9%.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.reiz') {
    	msg.reply('my gun says: \n **Reiz** \n \n __**Skills:**__ \n **Astral Fist - cd 55s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 243.6% | __**359.2%**__ of ATK to Enemy x1. \n :white_small_square:[Status Effect]: Inflict Chill that deals damage equal to 4.2% | __**4.7%**__ of ATK every 4s for 36s. \n __**:white_small_square:[Debuff]: Increase DMG Taken of Enemy x1 by 30.7%. (Duration: 60s.)**__ \n \n **Bolt of Victory - cd 70s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 222.3% | __**328.2%**__ of ATK to Enemy x1. (Guaranteed critical) \n __**:white_small_square:[Additional Damage]: Deal additional damage equal to 194.4% of ATK to enemies affected by chill. (Guaranteed critical)**__ \n __**:white_small_square:[Status Effect]: Apply Freeze effect on enemies affected by Chill. (Duration: 18s.)**__');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.reiz') {
    	msg.reply('my gun says: \n **Reiz** \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:If there are at least 3 Water allies, increase allies ATK by 35%. \n :white_small_square:Increase Crit DMG of allies by 10%. \n \n **Level 2** \n :white_small_square:Not enough data...need more gunpowder! \n :white_small_square:Please DM @Silbeya 실베야#9810 if you have info on this to load gunpowder, thanks!');
  	}
});

client.on('message', msg => {
    if (msg.content === 'hr.reiz') {
        
const embed = new Discord.RichEmbed()

  .setAuthor("Reiz")
  .setColor(0x00b8ff)
  .setDescription("\n \n __**Grimoire:**__ \n **Gauss Jammer** \n :white_small_square:[Passive Effect]: Increase the ATK of allies in the same row by 12.9%. \n \n __**Skills:**__ \n **Astral Fist - cd 55s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 243.6% | __**359.2%**__ of ATK to Enemy x1. \n :white_small_square:[Status Effect]: Inflict Chill that deals damage equal to 4.2% | __**4.7%**__ of ATK every 4s for 36s. \n __**:white_small_square:[Debuff]: Increase DMG Taken of Enemy x1 by 30.7%. (Duration: 60s.)**__ \n \n **Bolt of Victory - cd 70s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 222.3% | __**328.2%**__ of ATK to Enemy x1. (Guaranteed critical) \n __**:white_small_square:[Additional Damage]: Deal additional damage equal to 194.4% of ATK to enemies affected by chill. (Guaranteed critical)**__ \n __**:white_small_square:[Status Effect]: Apply Freeze effect on enemies affected by Chill. (Duration: 18s.)**__ \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:If there are at least 3 Water allies, increase allies ATK by 35%. \n :white_small_square:Increase Crit DMG of allies by 10%. \n \n **Level 2** \n :white_small_square:Not enough data...need more gunpowder!")
  .setFooter("Please inform @Silbeya 실베야#9810 if the info here needs to be updated; so gunpowder can be loaded for Esta Bot ^^")
  .setThumbnail("https://tierlistmania.com/wp-content/uploads/2019/06/Reiz-Hero-Icon-Overhit.png");
 
  msg.reply('my gun says:');
  msg.channel.send({embed});
  
  }
});

//Ren
client.on('message', msg => {
    if (msg.content === 'gr.ren') {
    	msg.reply('my gun says: \n **Ren** \n \n __**Grimoire:**__ \n **Wind Blade** \n :white_small_square:[Passive Effect]: Deal additional damage equal to 18% of ATK to Water enemies. \n :white_small_square:[Buff]: When hit, increase Self Crit Rate by 12.6%. (Duration: 40s.)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.ren') {
    	msg.reply('my gun says: \n **Ren** \n \n __**Skills:**__ \n **Sakura Shrike: Blinding Firestorm - cd 82s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 288.6% | __**404.1%**__ of ATK to Enemy x1 (Deals damage to the enemy with the lowest HP) \n :white_small_square:[Status Effect]: Inflict Poison that deals damage equal to 14% | __**15.8%**__ of ATK every 6s for 30s. \n \n **Sakura Shrike: Toxic Phoenix - cd 75s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 170.7% | __**238.9%**__ of ATK to Enemy x3 | __**x4**__. \n :white_small_square:[Status Effect]: Inflict Bleed on Enemy x3 | __**x4**__ that deals damage equal to 7% | __** 7.9%**__ of ATK every 5s for 30s. (Success Rate: 30% | __**60%**__) \n __**:white_small_square:[Status Effect]: Inflict Bleed on enemy x1 that deals damage equal to 10.8% of ATK every 5s for 30s. (Apply effect on 1 enemy with the highest ATK) (Success Rate: 100%)**__');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.ren') {
    	msg.reply('my gun says: \n **Ren** \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Increase Crit DMG of Physical-Type allies by 20% \n \n **Level 2** \n :white_small_square:Not enough data...need more gunpowder! \n :white_small_square:Please DM @Silbeya 실베야#9810 if you have info on this to load gunpowder, thanks!');
  	}
});

client.on('message', msg => {
    if (msg.content === 'hr.ren') {
        
const embed = new Discord.RichEmbed()

  .setAuthor("Ren")
  .setColor(0x00b8ff)
  .setDescription("\n \n __**Grimoire:**__ \n **Wind Blade** \n :white_small_square:[Passive Effect]: Deal additional damage equal to 18% of ATK to Water enemies. \n :white_small_square:[Buff]: When hit, increase Self Crit Rate by 12.6%. (Duration: 40s.) \n \n __**Skills:**__ \n **Sakura Shrike: Blinding Firestorm - cd 82s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 288.6% | __**404.1%**__ of ATK to Enemy x1 (Deals damage to the enemy with the lowest HP) \n :white_small_square:[Status Effect]: Inflict Poison that deals damage equal to 14% | __**15.8%**__ of ATK every 6s for 30s. \n \n **Sakura Shrike: Toxic Phoenix - cd 75s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 170.7% | __**238.9%**__ of ATK to Enemy x3 | __**x4**__. \n :white_small_square:[Status Effect]: Inflict Bleed on Enemy x3 | __**x4**__ that deals damage equal to 7% | __** 7.9%**__ of ATK every 5s for 30s. (Success Rate: 30% | __**60%**__) \n __**:white_small_square:[Status Effect]: Inflict Bleed on enemy x1 that deals damage equal to 10.8% of ATK every 5s for 30s. (Apply effect on 1 enemy with the highest ATK) (Success Rate: 100%)**__ \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Increase Crit DMG of Physical-Type allies by 20% \n \n **Level 2** \n :white_small_square:Not enough data...need more gunpowder!")
  .setFooter("Please inform @Silbeya 실베야#9810 if the info here needs to be updated; so gunpowder can be loaded for Esta Bot ^^")
  .setThumbnail("https://tierlistmania.com/wp-content/uploads/2019/06/Ren-Hero-Icon-Overhit.png");
 
  msg.reply('my gun says:');
  msg.channel.send({embed});
  
  }
});

//Renga
client.on('message', msg => {
    if (msg.content === 'gr.renga') {
    	msg.reply('my gun says: \n **Renga** \n \n __**Grimoire:**__ \n **Unwavering Emotions** \n :white_small_square:[Buff]: Apply All DMG immunity on all allies in own row 1 time at the start of battle (Duration: 30s) \n :white_small_square:[Passive Effect]: Increase ATK of allies in own row by 10.6%.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.renga') {
    	msg.reply('my gun says: \n **Renga** \n \n __**Skills:**__ \n **Clearwater Dance - cd 84s** \n Level 1 | __**6**__: \n :white_small_square:[Buff]: Reset cooldown of Ally x1 (Applies to the Ally with the highest ATK.) \n :white_small_square:[Buff]: Decrease DMG from enemies by 27.7% | __**31.3%**__ for Ally x3 | __**x5**__ (Duration:60s). \n \n **Midnight Sun Embrace - cd 94s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 126.4% | __**177%**__ of ATK to Enemy x4 | __**x5**__. \n :white_small_square:[Debuff]: Increase Cooldown by 13s | __**17s**__ for Enemy x1 | __**x3**__ (Applies to the enemy with the highest ATK). \n :white_small_square:[Debuff]: Increase DMG Taken of Hit Target by 22.6% | __**25.5%**__ (Duration: 60s).');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.renga') {
    	msg.reply('my gun says: \n **Renga** \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Increase DEF of all allies by 30% if there are at least 3 light-type allies. \n :white_small_square:Increase HP of allies by 10%. \n \n **Level 2** \n :white_small_square:Not enough data...need more gunpowder! \n :white_small_square:Please DM @Silbeya 실베야#9810 if you have info on this to load gunpowder, thanks!');
  	}
});

client.on('message', msg => {
    if (msg.content === 'hr.renga') {
        
const embed = new Discord.RichEmbed()

  .setAuthor("Renga")
  .setColor(0x00b8ff)
  .setDescription("\n \n __**Grimoire:**__ \n **Unwavering Emotions** \n :white_small_square:[Buff]: Apply All DMG immunity on all allies in own row 1 time at the start of battle (Duration: 30s) \n :white_small_square:[Passive Effect]: Increase ATK of allies in own row by 10.6%. \n \n __**Skills:**__ \n **Clearwater Dance - cd 84s** \n Level 1 | __**6**__: \n :white_small_square:[Buff]: Reset cooldown of Ally x1 (Applies to the Ally with the highest ATK.) \n :white_small_square:[Buff]: Decrease DMG from enemies by 27.7% | __**31.3%**__ for Ally x3 | __**x5**__ (Duration:60s). \n \n **Midnight Sun Embrace - cd 94s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 126.4% | __**177%**__ of ATK to Enemy x4 | __**x5**__. \n :white_small_square:[Debuff]: Increase Cooldown by 13s | __**17s**__ for Enemy x1 | __**x3**__ (Applies to the enemy with the highest ATK). \n :white_small_square:[Debuff]: Increase DMG Taken of Hit Target by 22.6% | __**25.5%**__ (Duration: 60s). \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Increase DEF of all allies by 30% if there are at least 3 light-type allies. \n :white_small_square:Increase HP of allies by 10%. \n \n **Level 2** \n :white_small_square:Not enough data...need more gunpowder!")
  .setFooter("Please inform @Silbeya 실베야#9810 if the info here needs to be updated; so gunpowder can be loaded for Esta Bot ^^")
  .setThumbnail("https://i.imgur.com/CE5UPbB.png");
 
  msg.reply('my gun says:');
  msg.channel.send({embed});
  
  }
});

//Rin
client.on('message', msg => {
    if (msg.content === 'gr.rin') {
    	msg.reply('my gun says: \n **Rin** \n \n __**Grimoire:**__ \n **Garuda Breath** \n :white_small_square:[Passive Effect]: Increase own ATK by 5% when All Attack is triggered (Can be stacked).');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.rin') {
    	msg.reply('my gun says: \n **Rin** \n \n __**Skills:**__ \n **Sylphid Twilight - cd 72s** \n Level 1 | __**6**__: \n :white_small_square:[Debuff]: Remove 1 buff from 1 enemy. \n :white_small_square:[Regular Damage]: Deal damage equal to 246.8% | __**345.5%**__ of ATK to 1 enemy. \n __**:white_small_square:[Buff]: Cast Barrier on Ally x3 that blocks up to 2706 + 18.6% of ATK worth of damage (Applies to Ally x3 with the lowest HP. Duration: 30s).**__ \n \n **Sylphid Breath - cd 94s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 149.1% | __**208.7%**__ of ATK to Enemy x4 | __**x5**__. \n :white_small_square:[Debuff]: Decrease ATK of 1 enemy by 35.6% | __**40.2%**__ (Duration: 60s).');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.rin') {
    	msg.reply('my gun says: \n **Rin** \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:If there are at least 3 water-type allies, increase allies Crit DMG by 15%. \n :white_small_square:Increase DEF of allies by 10% \n \n **Level 2** \n :white_small_square:If there are at least 3 water-type allies, increase allies Crit DMG by 25%. \n :white_small_square:Increase DEF of allies by 20%');
  	}
});

client.on('message', msg => {
    if (msg.content === 'hr.rin') {
        
const embed = new Discord.RichEmbed()

  .setAuthor("Rin")
  .setColor(0x00b8ff)
  .setDescription("\n \n __**Grimoire:**__ \n **Garuda Breath** \n :white_small_square:[Passive Effect]: Increase own ATK by 5% when All Attack is triggered (Can be stacked). \n \n __**Skills:**__ \n **Sylphid Twilight - cd 72s** \n Level 1 | __**6**__: \n :white_small_square:[Debuff]: Remove 1 buff from 1 enemy. \n :white_small_square:[Regular Damage]: Deal damage equal to 246.8% | __**345.5%**__ of ATK to 1 enemy. \n __**:white_small_square:[Buff]: Cast Barrier on Ally x3 that blocks up to 2706 + 18.6% of ATK worth of damage (Applies to Ally x3 with the lowest HP. Duration: 30s).**__ \n \n **Sylphid Breath - cd 94s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 149.1% | __**208.7%**__ of ATK to Enemy x4 | __**x5**__. \n :white_small_square:[Debuff]: Decrease ATK of 1 enemy by 35.6% | __**40.2%**__ (Duration: 60s). \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:If there are at least 3 water-type allies, increase allies Crit DMG by 15%. \n :white_small_square:Increase DEF of allies by 10% \n \n **Level 2** \n :white_small_square:If there are at least 3 water-type allies, increase allies Crit DMG by 25%. \n :white_small_square:Increase DEF of allies by 20%")
  .setFooter("Please inform @Silbeya 실베야#9810 if the info here needs to be updated; so gunpowder can be loaded for Esta Bot ^^")
  .setThumbnail("https://i.imgur.com/JbrSrTf.png");
 
  msg.reply('my gun says:');
  msg.channel.send({embed});
  
  }
});

//Rito
client.on('message', msg => {
    if (msg.content === 'gr.rito') {
    	msg.reply('my gun says: \n **Rito** \n \n __**Grimoire:**__ \n **Doomsday Thunder** \n :white_small_square:[Buff] When an active skill is used, reduce damage to allies by 14%. (Success Rate: 100%; Duration 40 seconds) \n :white_small_square:[Addtional Damage] Add damage equal to 38.9% of ATK to all attacks.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.rito') {
    	msg.reply('my gun says: \n **Rito** \n \n __**Skills:**__ \n **Punishing Bolt - cd 85s** \n Level 1 | __**6**__: \n :white_small_square:[Standard Damage]: Deal damage equal to 173.1% | __**242.4%**__ of ATK to 3 | __**5**__ enemies. \n :white_small_square:[Additional Damage]: Deal damage equal to 46.2% | __**57.7%**__ of ATK to physical-type enemies. \n \n **Retribution - cd 110s** \n Level 1 | __**6**__: \n :white_small_square:[Standard Damage]: Deal damage equal to 184.9% | __**258.8%**__ of ATK to Enemy x4. \n :white_small_square:[Status Effect]: Inflict Shock on targets affected by Chill (Success Rate: 70%. Duration: 18s)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.rito') {
    	msg.reply('my gun says: \n **Rito** \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Increase ATK of all water-type allies by 25%. \n :white_small_square:Increase DEF of all water-type allies by 10%. \n \n **Level 2** \n :white_small_square:Increase ATK of all water-type allies by 45%. \n :white_small_square:Increase DEF of all water-type allies by 20%.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'hr.rito') {
        
const embed = new Discord.RichEmbed()

  .setAuthor("Rito")
  .setColor(0x00b8ff)
  .setDescription("\n \n __**Grimoire:**__ \n **Doomsday Thunder** \n :white_small_square:[Buff] When an active skill is used, reduce damage to allies by 14%. (Success Rate: 100%; Duration 40 seconds) \n :white_small_square:[Addtional Damage] Add damage equal to 38.9% of ATK to all attacks. \n \n __**Skills:**__ \n **Punishing Bolt - cd 85s** \n Level 1 | __**6**__: \n :white_small_square:[Standard Damage]: Deal damage equal to 173.1% | __**242.4%**__ of ATK to 3 | __**5**__ enemies. \n :white_small_square:[Additional Damage]: Deal damage equal to 46.2% | __**57.7%**__ of ATK to physical-type enemies. \n \n **Retribution - cd 110s** \n Level 1 | __**6**__: \n :white_small_square:[Standard Damage]: Deal damage equal to 184.9% | __**258.8%**__ of ATK to Enemy x4. \n :white_small_square:[Status Effect]: Inflict Shock on targets affected by Chill (Success Rate: 70%. Duration: 18s) \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Increase ATK of all water-type allies by 25%. \n :white_small_square:Increase DEF of all water-type allies by 10%. \n \n **Level 2** \n :white_small_square:Increase ATK of all water-type allies by 45%. \n :white_small_square:Increase DEF of all water-type allies by 20%.")
  .setFooter("Please inform @Silbeya 실베야#9810 if the info here needs to be updated; so gunpowder can be loaded for Esta Bot ^^")
  .setThumbnail("https://i.imgur.com/39Egj2q.png");
 
  msg.reply('my gun says:');
  msg.channel.send({embed});
  
  }
});

//Saion
client.on('message', msg => {
    if (msg.content === 'gr.saion') {
    	msg.reply('my gun says: \n **Saion** \n \n __**Grimoire:**__ \n **Primal Heart** \n :white_small_square:[Passive Effect]: Increase DEF of allies in own back row by 13.2%. \n :white_small_square:[Buff]: Apply Physical Damage Resist to self when HP is below 30%. (Apply only 1 time during the battle. Duration: 35 seconds.)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.saion') {
    	msg.reply('my gun says: \n **Saion** \n \n __**Skills:**__ \n **Wrecker - cd 64s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 134.4% | __**193.2%**__ of ATK to 4 | __**5**__enemies. \n :white_small_square:[Debuff]: Decrease ATK of target by 18.9% | __** 21.3%**__. (Success Rate: 80%. Duration 60 seconds.) \n :white_small_square:[Buff]: Apply Taunt to self, making self priority target for enemies (Success Rate: 30%. Duration: 37s | __**48s**__). \n \n **Raging Firestorm - cd 80s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 291.7% | __**408.4%**__ of ATK to 1 enemy. \n :white_small_square:[Status Effect]: Apply Desertion to target for 15 seconds. (Success Rate: 80%) \n :white_small_square:[Desertion]: Desertion applied for the effect duration. Regular attacks and active skills are unavailable, and target cannot be set during Desertion. Increase Cooldown by 15 seconds when returning to battle.)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.saion') {
    	msg.reply('my gun says: \n **Saion** \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Increase HP of allies by 10%. \n :white_small_square:Decrease damage taken by wind-type allies by 5%. \n \n **Level 2** \n :white_small_square:Increase HP of allies by 20%. \n :white_small_square:Decrease damage taken by wind-type allies by 10%.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'hr.saion') {
        
const embed = new Discord.RichEmbed()

  .setAuthor("Saion")
  .setColor(0x00b8ff)
  .setDescription("\n \n __**Grimoire:**__ \n **Primal Heart** \n :white_small_square:[Passive Effect]: Increase DEF of allies in own back row by 13.2%. \n :white_small_square:[Buff]: Apply Physical Damage Resist to self when HP is below 30%. (Apply only 1 time during the battle. Duration: 35 seconds.) \n \n __**Skills:**__ \n **Wrecker - cd 64s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 134.4% | __**193.2%**__ of ATK to 4 | __**5**__enemies. \n :white_small_square:[Debuff]: Decrease ATK of target by 18.9% | __** 21.3%**__. (Success Rate: 80%. Duration 60 seconds.) \n :white_small_square:[Buff]: Apply Taunt to self, making self priority target for enemies (Success Rate: 30%. Duration: 37s | __**48s**__). \n \n **Raging Firestorm - cd 80s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 291.7% | __**408.4%**__ of ATK to 1 enemy. \n :white_small_square:[Status Effect]: Apply Desertion to target for 15 seconds. (Success Rate: 80%) \n :white_small_square:[Desertion]: Desertion applied for the effect duration. Regular attacks and active skills are unavailable, and target cannot be set during Desertion. Increase Cooldown by 15 seconds when returning to battle.) \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Increase HP of allies by 10%. \n :white_small_square:Decrease damage taken by wind-type allies by 5%. \n \n **Level 2** \n :white_small_square:Increase HP of allies by 20%. \n :white_small_square:Decrease damage taken by wind-type allies by 10%.")
  .setFooter("Please inform @Silbeya 실베야#9810 if the info here needs to be updated; so gunpowder can be loaded for Esta Bot ^^")
  .setThumbnail("https://i.imgur.com/SutFnDc.png");
 
  msg.reply('my gun says:');
  msg.channel.send({embed});
  
  }
});

//Shoumei
client.on('message', msg => {
    if (msg.content === 'gr.shoumei') {
    	msg.reply('my gun says: \n **Shoumei** \n \n __**Grimoire:**__ \n **World Changer** \n :white_small_square:[Status Effect]: Inflict Block Healing for 30s when Regular Attack is triggered. (Duration: 30s.) \n :white_small_square:[Healing]: Heal Self HP for 24.8% of ATK when Regular Attack is triggered. (Success Rate: 30%.)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.shoumei') {
    	msg.reply('my gun says: \n **Shoumei** \n \n __**Skills:**__ \n **Bountiful Blooms - cd 84s** \n Level 1 | __**6**__: \n :white_small_square:[Healing]: Heal Ally x5 for 98.1% | __**127.6%**__ of ATK. \n :white_small_square:[Buff]: Increase DEF of Ally x5 by 23.9% | __**27.1%**__. (Duration: 60s.) \n __**:white_small_square:[Additional Healing]: Additionally heal Ally x1 for 63.5% of ATK. (Apply effect on Ally x1 with the lowest HP.)**__ \n \n **Flower Burst - cd 108s** \n Level 1 | __**6**__: \n :white_small_square:[Buff]: Inflict Status Effect Immunity on Ally x4 | __**x5**__for 15s. (Duration: 15s.) \n :white_small_square:[Buff]: Decrease DMG Taken of Ally x4 | __**x5**__ by 16.6% | __**18.7%**__. (Duration: 60s.) \n __**:white_small_square:[Buff]: Remove 1 Debuff from Ally x5.**__');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.shoumei') {
    	msg.reply('my gun says: \n **Shoumei** \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Increase ATK of allies by 25%. \n \n **Level 2** \n :white_small_square:Not enough data...need more gunpowder! \n :white_small_square:Please DM @Silbeya 실베야#9810 if you have info on this to load gunpowder, thanks!');
  	}
});

client.on('message', msg => {
    if (msg.content === 'hr.shoumei') {
        
const embed = new Discord.RichEmbed()

  .setAuthor("Shoumei")
  .setColor(0x00b8ff)
  .setDescription("\n \n __**Grimoire:**__ \n **World Changer** \n :white_small_square:[Status Effect]: Inflict Block Healing for 30s when Regular Attack is triggered. (Duration: 30s.) \n :white_small_square:[Healing]: Heal Self HP for 24.8% of ATK when Regular Attack is triggered. (Success Rate: 30%.) \n \n __**Skills:**__ \n **Bountiful Blooms - cd 84s** \n Level 1 | __**6**__: \n :white_small_square:[Healing]: Heal Ally x5 for 98.1% | __**127.6%**__ of ATK. \n :white_small_square:[Buff]: Increase DEF of Ally x5 by 23.9% | __**27.1%**__. (Duration: 60s.) \n __**:white_small_square:[Additional Healing]: Additionally heal Ally x1 for 63.5% of ATK. (Apply effect on Ally x1 with the lowest HP.)**__ \n \n **Flower Burst - cd 108s** \n Level 1 | __**6**__: \n :white_small_square:[Buff]: Inflict Status Effect Immunity on Ally x4 | __**x5**__for 15s. (Duration: 15s.) \n :white_small_square:[Buff]: Decrease DMG Taken of Ally x4 | __**x5**__ by 16.6% | __**18.7%**__. (Duration: 60s.) \n __**:white_small_square:[Buff]: Remove 1 Debuff from Ally x5.**__ \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Increase ATK of allies by 25%. \n \n **Level 2** \n :white_small_square:Not enough data...need more gunpowder!")
  .setFooter("Please inform @Silbeya 실베야#9810 if the info here needs to be updated; so gunpowder can be loaded for Esta Bot ^^")
  .setThumbnail("https://tierlistmania.com/wp-content/uploads/2019/06/Shoumei-Hero-Icon-Overhit.png");
 
  msg.reply('my gun says:');
  msg.channel.send({embed});
  
  }
});

//Sophia
client.on('message', msg => {
    if (msg.content === 'gr.sophia') {
    	msg.reply('my gun says: \n **Sophia** \n \n __**Grimoire:**__ \n **Maiden Blessing** \n :white_small_square:[Buff]: Decrease Skill Cooldown of Ally x1 by 10s when Active Skills is triggered. (Apply effect on Ally x1 with the highest ATK, excluding Self.) \n :white_small_square:[Passive Effect]: Increase healing of Light Ally by 11.7%.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.sophia') {
    	msg.reply('my gun says: \n **Sophia** \n \n __**Skills:**__ \n **Tender Care - cd 63s** \n Level 1 | __**6**__: \n :white_small_square:[Healing]: Heal Ally x3 | __**x4**__ for 161.5% | __**209.9%**__of ATK. \n __**:white_small_square:[Buff]: Remove 1 Debuff from Ally x2.**__ \n \n **Resplendent Bloom - cd 80s** \n Level 1 | __**6**__: \n :white_small_square:[Resurrection]: Resurrect Ally x1 with 40% | __**60%**__ of HP. \n :white_small_square:[Healing]: Heal HP of revived ally for 37% | __**43.9%**__ of ATK every 8s for 40s. \n __**:white_small_square:[Buff]: Increase Status Effect Resist Rate of Ally x3 by 35.5%. (Duration: 60s.)**__');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.sophia') {
    	msg.reply('my gun says: \n **Sophia** \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Increase DEF of Light-type allies by 40%. \n \n **Level 2** \n :white_small_square:Not enough data...need more gunpowder! \n :white_small_square:Please DM @Silbeya 실베야#9810 if you have info on this to load gunpowder, thanks!');
  	}
});

client.on('message', msg => {
    if (msg.content === 'hr.sophia') {
        
const embed = new Discord.RichEmbed()

  .setAuthor("Sophia")
  .setColor(0x00b8ff)
  .setDescription("\n \n __**Grimoire:**__ \n **Maiden Blessing** \n :white_small_square:[Buff]: Decrease Skill Cooldown of Ally x1 by 10s when Active Skills is triggered. (Apply effect on Ally x1 with the highest ATK, excluding Self.) \n :white_small_square:[Passive Effect]: Increase healing of Light Ally by 11.7%. \n \n __**Skills:**__ \n **Tender Care - cd 63s** \n Level 1 | __**6**__: \n :white_small_square:[Healing]: Heal Ally x3 | __**x4**__ for 161.5% | __**209.9%**__of ATK. \n __**:white_small_square:[Buff]: Remove 1 Debuff from Ally x2.**__ \n \n **Resplendent Bloom - cd 80s** \n Level 1 | __**6**__: \n :white_small_square:[Resurrection]: Resurrect Ally x1 with 40% | __**60%**__ of HP. \n :white_small_square:[Healing]: Heal HP of revived ally for 37% | __**43.9%**__ of ATK every 8s for 40s. \n __**:white_small_square:[Buff]: Increase Status Effect Resist Rate of Ally x3 by 35.5%. (Duration: 60s.)**__ \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Increase DEF of Light-type allies by 40%. \n \n **Level 2** \n :white_small_square:Not enough data...need more gunpowder!")
  .setFooter("Please inform @Silbeya 실베야#9810 if the info here needs to be updated; so gunpowder can be loaded for Esta Bot ^^")
  .setThumbnail("https://tierlistmania.com/wp-content/uploads/2019/06/Sophia-Hero-Icon-Overhit.png");
 
  msg.reply('my gun says:');
  msg.channel.send({embed});
  
  }
});

//SunWukong
client.on('message', msg => {
    if (msg.content === 'gr.sunwukong') {
    	msg.reply('my gun says: \n **SunWukong** \n \n __**Grimoire:**__ \n **Peach of Immortality** \n :white_small_square:[Buff]: Decrease own Cooldown by 2s when healed. \n :white_small_square:[Debuff]: Deal Bleed Damage equal to 6.3% of ATK every 5s for 30s when using a regular attack on a target not affected by Bleed. \n :white_small_square:[Status Effect]: Inflict Silence on a hit target for 20s when using a regular attack on targets affected by Bleed (Duration: 20s).');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.sunwukong') {
    	msg.reply('my gun says: \n **SunWukong** \n \n __**Skills:**__ \n **Staff of Heavenly Tears - cd 100s** \n Level 1 | __**6**__: \n :white_small_square:[Buff]: Temporarily increase own Pierce Rate by 35.6% | __**40.2%**__. (Success Rate: 100%. Duration: 7 seconds.) \n :white_small_square:[Regular Damage]: Deal damage equal to 198.9% | __**278.4%**__ of ATK to 3 | __**4**__ enemies \n \n **Great Sage Staff - cd 120s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 158% | __**221.1%**__ of ATK to Enemy x5. \n :white_small_square:[Additional Damage]: Deal additional damage equal to 64% | __**80%**__ of ATK to enemies affected by Bleed. \n :white_small_square:[Status Effect]: Inflict Stun on 5 enemies for 18 seconds (30% chance if own HP is above 50%, 60% if own HP is below 50%.)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.sunwukong') {
    	msg.reply('my gun says: \n **SunWukong** \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Increase ATK of physical-type allies by 20%. \n :white_small_square:Decrease ATK of enemies by 5%. \n \n **Level 2** \n :white_small_square:Increase ATK of physical-type allies by 40%. \n :white_small_square:Decrease ATK of enemies by 10%.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'hr.sunwukong') {
        
const embed = new Discord.RichEmbed()

  .setAuthor("SunWukong")
  .setColor(0x00b8ff)
  .setDescription("\n \n __**Grimoire:**__ \n **Peach of Immortality** \n :white_small_square:[Buff]: Decrease own Cooldown by 2s when healed. \n :white_small_square:[Debuff]: Deal Bleed Damage equal to 6.3% of ATK every 5s for 30s when using a regular attack on a target not affected by Bleed. \n :white_small_square:[Status Effect]: Inflict Silence on a hit target for 20s when using a regular attack on targets affected by Bleed (Duration: 20s). \n \n __**Skills:**__ \n **Staff of Heavenly Tears - cd 100s** \n Level 1 | __**6**__: \n :white_small_square:[Buff]: Temporarily increase own Pierce Rate by 35.6% | __**40.2%**__. (Success Rate: 100%. Duration: 7 seconds.) \n :white_small_square:[Regular Damage]: Deal damage equal to 198.9% | __**278.4%**__ of ATK to 3 | __**4**__ enemies \n \n **Great Sage Staff - cd 120s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 158% | __**221.1%**__ of ATK to Enemy x5. \n :white_small_square:[Additional Damage]: Deal additional damage equal to 64% | __**80%**__ of ATK to enemies affected by Bleed. \n :white_small_square:[Status Effect]: Inflict Stun on 5 enemies for 18 seconds (30% chance if own HP is above 50%, 60% if own HP is below 50%.) \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Increase ATK of physical-type allies by 20%. \n :white_small_square:Decrease ATK of enemies by 5%. \n \n **Level 2** \n :white_small_square:Increase ATK of physical-type allies by 40%. \n :white_small_square:Decrease ATK of enemies by 10%.")
  .setFooter("Please inform @Silbeya 실베야#9810 if the info here needs to be updated; so gunpowder can be loaded for Esta Bot ^^")
  .setThumbnail("https://i.imgur.com/U5jPlB9.png");
 
  msg.reply('my gun says:');
  msg.channel.send({embed});
  
  }
});

//Teze
client.on('message', msg => {
    if (msg.content === 'gr.teze') {
    	msg.reply('my gun says: \n **Teze** \n \n __**Grimoire:**__ \n **Dark Acceleration** \n :white_small_square:[Buff]: When hit, increase Self Crit DMG by 15.1%. (Duration: 40s.) \n :white_small_square:[Passive Effect]: When HP is 50% lower, increase ATK of Self by 17.6%.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.teze') {
    	msg.reply('my gun says: \n **Teze** \n \n __**Skills:**__ \n **Shunyata - cd 45s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 251.7% | __**371.1%**__ of ATK to Enemy x1. \n :white_small_square:[Additional Damage]: Deal additional damage equal to 144.3% | __**180.4%**__ of ATK if ATK + effect is applied. \n __**:white_small_square:[Buff]: Increase Crit DMG of Self by 30.7%. (Duration: 60s.)**__ \n \n **Yaksha Wrath - cd 75s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 278.2% | __**411.8%**__ of ATK to Enemy x1. (Guaranteed critical) \n __**:white_small_square:[Debuff]: Decrease ATK SPD of Enemy x1 by 23. (Duration: 60s.)**__ \n __**:white_small_square:[Additional Damage]: Deal fixed damage of 2215 to Enemy x1.**__');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.teze') {
    	msg.reply('my gun says: \n **Teze** \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:If there are at least x3 Dark Type allies, increase allies ATK by 35%. \n :white_small_square:Increase Crit Rate of allies by 5%. \n \n **Level 2** \n :white_small_square:If there are at least x3 Dark Type allies, increase allies ATK by 55%. \n :white_small_square:Increase Crit Rate of allies by 10%.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'hr.teze') {
        
const embed = new Discord.RichEmbed()

  .setAuthor("Teze")
  .setColor(0x00b8ff)
  .setDescription("\n \n __**Grimoire:**__ \n **Dark Acceleration** \n :white_small_square:[Buff]: When hit, increase Self Crit DMG by 15.1%. (Duration: 40s.) \n :white_small_square:[Passive Effect]: When HP is 50% lower, increase ATK of Self by 17.6%. \n \n __**Skills:**__ \n **Shunyata - cd 45s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 251.7% | __**371.1%**__ of ATK to Enemy x1. \n :white_small_square:[Additional Damage]: Deal additional damage equal to 144.3% | __**180.4%**__ of ATK if ATK + effect is applied. \n __**:white_small_square:[Buff]: Increase Crit DMG of Self by 30.7%. (Duration: 60s.)**__ \n \n **Yaksha Wrath - cd 75s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 278.2% | __**411.8%**__ of ATK to Enemy x1. (Guaranteed critical) \n __**:white_small_square:[Debuff]: Decrease ATK SPD of Enemy x1 by 23. (Duration: 60s.)**__ \n __**:white_small_square:[Additional Damage]: Deal fixed damage of 2215 to Enemy x1.**__ \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:If there are at least x3 Dark Type allies, increase allies ATK by 35%. \n :white_small_square:Increase Crit Rate of allies by 5%. \n \n **Level 2** \n :white_small_square:If there are at least x3 Dark Type allies, increase allies ATK by 55%. \n :white_small_square:Increase Crit Rate of allies by 10%.")
  .setFooter("Please inform @Silbeya 실베야#9810 if the info here needs to be updated; so gunpowder can be loaded for Esta Bot ^^")
  .setThumbnail("https://tierlistmania.com/wp-content/uploads/2019/06/Teze-Hero-Icon-Overhit.png");
 
  msg.reply('my gun says:');
  msg.channel.send({embed});
  
  }
});

//Unknown
client.on('message', msg => {
    if (msg.content === 'gr.unknown') {
    	msg.reply('my gun says: \n **Unknown** \n \n __**Grimoire:**__ \n **Evening Bell** \n :white_small_square:[Passive Effect]: Increase ATK of Dark Ally by 9.1%. \n :white_small_square:[Additional Damage]: Deal additional damage equal to 30.6% of ATK when Active Skills are triggered.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.unknown') {
    	msg.reply('my gun says: \n **Unknown** \n \n __**Skills:**__ \n **Shadow Servant - cd 55s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 219.6% | __**307.4%**__ of ATK to 3 enemies (Apply on the 3 enemies with the highest ATK). \n :white_small_square:[Additional Damage]: Deal damage equal to 185.7% | __**232.2%**__ of ATK to 1 enemy (Apply to the enemy with the highest ATK). \n \n **Shadow World - cd 98s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 190.4% | __**266.6%**__ of ATK to 3 | __**4**__ enemies. \n :white_small_square:[Buff]: Temporarily inflict Blood Sucking on self, recovering 33.7% | __**43.9%**__ of damage received (Recovers up to 50% of Max ATK. Duration: 10s) \n :white_small_square:[Buff]: Temporarily inflict Blood Sucking on 3 allies, recovering 19% | __**24.8%**__ of damage received (Applies to 3 allies with the lowest HP, excluding self. Recovers up to 50% of Max ATK. Duration: 40s)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.unknown') {
    	msg.reply('my gun says: \n **Unknown** \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:If there are at least 3 Dark Type allies, increase ATK of all allies by 30%. \n :white_small_square:Decrease ATK of Light-type enemies by 10%. \n \n **Level 2** \n :white_small_square:Not enough data...need more gunpowder! \n :white_small_square:Please DM @Silbeya 실베야#9810 if you have info on this to load gunpowder, thanks!');
  	}
});

client.on('message', msg => {
    if (msg.content === 'hr.unknown') {
        
const embed = new Discord.RichEmbed()

  .setAuthor("Unknown")
  .setColor(0x00b8ff)
  .setDescription("\n \n __**Grimoire:**__ \n **Evening Bell** \n :white_small_square:[Passive Effect]: Increase ATK of Dark Ally by 9.1%. \n :white_small_square:[Additional Damage]: Deal additional damage equal to 30.6% of ATK when Active Skills are triggered. \n \n __**Skills:**__ \n **Shadow Servant - cd 55s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 219.6% | __**307.4%**__ of ATK to 3 enemies (Apply on the 3 enemies with the highest ATK). \n :white_small_square:[Additional Damage]: Deal damage equal to 185.7% | __**232.2%**__ of ATK to 1 enemy (Apply to the enemy with the highest ATK). \n \n **Shadow World - cd 98s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 190.4% | __**266.6%**__ of ATK to 3 | __**4**__ enemies. \n :white_small_square:[Buff]: Temporarily inflict Blood Sucking on self, recovering 33.7% | __**43.9%**__ of damage received (Recovers up to 50% of Max ATK. Duration: 10s) \n :white_small_square:[Buff]: Temporarily inflict Blood Sucking on 3 allies, recovering 19% | __**24.8%**__ of damage received (Applies to 3 allies with the lowest HP, excluding self. Recovers up to 50% of Max ATK. Duration: 40s) \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:If there are at least 3 Dark Type allies, increase ATK of all allies by 30%. \n :white_small_square:Decrease ATK of Light-type enemies by 10%. \n \n **Level 2** \n :white_small_square:Not enough data...need more gunpowder!")
  .setFooter("Please inform @Silbeya 실베야#9810 if the info here needs to be updated; so gunpowder can be loaded for Esta Bot ^^")
  .setThumbnail("https://tierlistmania.com/wp-content/uploads/2019/06/Unknown-Hero-Icon-Overhit.png");
 
  msg.reply('my gun says:');
  msg.channel.send({embed});
  
  }
});

//Xanthippe
client.on('message', msg => {
    if (msg.content === 'gr.xanthippe') {
    	msg.reply('my gun says: \n **Xanthippe** \n \n __**Grimoire:**__ \n **Brand of the Guilty** \n :white_small_square:[Debuff]: Regular attacks Mark target. \n :white_small_square:[Mark]: Disappears after 40s, dealing damage equal to 25.2% of ATK. \n :white_small_square:[Note]: Mark targets again after Mark is removed. Immediately deal Mark DMG if target is already Marked.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.xanthippe') {
    	msg.reply('my gun says: \n **Xanthippe** \n \n __**Skills:**__ \n **Altar of Misery - cd 66s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 166.2% | __**232.7%**__ of ATK to 3 enemies | __**4 enemies**__. \n :white_small_square:[Debuff]: Has a 50% chance of Marking a target (Mark disappears after 40s, dealing damage equal to 41.3% | __**48.7%**__ of ATK). \n :white_small_square:[Chain Attack]: Deal damage equal to 176.4% | __**247%**__ of ATK to 3 | __**4**__ Marked enemies. \n :white_small_square:[Chain Effect]: Heal HP of 3 | __**4**__ allies for 132.7% | __**172.5%**__ of ATK when chain attack is triggered). \n :white_small_square:[Chain Effect]: Mark disappears, immediately inflicting Mark DMG when chain attack is triggered. \n \n **Hammer of Judgement - cd 100s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 150.9% | __**202.1%**__ of ATK to 4 | __**5**__ enemies. \n :white_small_square:[Debuff]: Has a 50% chance of Marking targets (Mark disappears after 40s, dealing damage equal to 52.1% | __**61.5%**__ of ATK). \n :white_small_square:[Chain Attack]: Deal damage equal to 187.1% | __**262%**__ of ATK to 4 | __**5**__ enemies (Marked enemies trigger chain attacks). \n :white_small_square:[Chain Effect]: Decrease ATK of Hit Targets by 26.8% | __**30.2%**__ when chain attack is triggered (Duration:60s). \n :white_small_square:[Chain Effect]: Mark disappears, immediately inflicting Mark DMG when chain attack is triggered.');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.xanthippe') {
    	msg.reply('my gun says: \n **Xanthippe** \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Increase ATK of Dark-type allies by 40%. \n \n **Level 2** \n :white_small_square:Not enough data...need more gunpowder! \n :white_small_square:Please DM @Silbeya 실베야#9810 if you have info on this to load gunpowder, thanks!');
  	}
});

client.on('message', msg => {
    if (msg.content === 'hr.xanthippe') {
        
const embed = new Discord.RichEmbed()

  .setAuthor("Xanthippe")
  .setColor(0x00b8ff)
  .setDescription("\n \n __**Grimoire:**__ \n **Brand of the Guilty** \n :white_small_square:[Debuff]: Regular attacks Mark target. \n :white_small_square:[Mark]: Disappears after 40s, dealing damage equal to 25.2% of ATK. \n :white_small_square:[Note]: Mark targets again after Mark is removed. Immediately deal Mark DMG if target is already Marked. \n \n __**Skills:**__ \n **Altar of Misery - cd 66s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 166.2% | __**232.7%**__ of ATK to 3 enemies | __**4 enemies**__. \n :white_small_square:[Debuff]: Has a 50% chance of Marking a target (Mark disappears after 40s, dealing damage equal to 41.3% | __**48.7%**__ of ATK). \n :white_small_square:[Chain Attack]: Deal damage equal to 176.4% | __**247%**__ of ATK to 3 | __**4**__ Marked enemies. \n :white_small_square:[Chain Effect]: Heal HP of 3 | __**4**__ allies for 132.7% | __**172.5%**__ of ATK when chain attack is triggered). \n :white_small_square:[Chain Effect]: Mark disappears, immediately inflicting Mark DMG when chain attack is triggered. \n \n **Hammer of Judgement - cd 100s** \n Level 1 | __**6**__: \n :white_small_square:[Regular Damage]: Deal damage equal to 150.9% | __**202.1%**__ of ATK to 4 | __**5**__ enemies. \n :white_small_square:[Debuff]: Has a 50% chance of Marking targets (Mark disappears after 40s, dealing damage equal to 52.1% | __**61.5%**__ of ATK). \n :white_small_square:[Chain Attack]: Deal damage equal to 187.1% | __**262%**__ of ATK to 4 | __**5**__ enemies (Marked enemies trigger chain attacks). \n :white_small_square:[Chain Effect]: Decrease ATK of Hit Targets by 26.8% | __**30.2%**__ when chain attack is triggered (Duration:60s). \n :white_small_square:[Chain Effect]: Mark disappears, immediately inflicting Mark DMG when chain attack is triggered. \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Increase ATK of Dark-type allies by 40%. \n \n **Level 2** \n :white_small_square:Not enough data...need more gunpowder!")
  .setFooter("Please inform @Silbeya 실베야#9810 if the info here needs to be updated; so gunpowder can be loaded for Esta Bot ^^")
  .setThumbnail("https://i.imgur.com/j42XAd3.png");
 
  msg.reply('my gun says:');
  msg.channel.send({embed});
  
  }
});

//Yggdrasil
client.on('message', msg => {
    if (msg.content === 'gr.yggdrasil') {
    	msg.reply('my gun says: \n **Yggdrasil** \n \n __**Grimoire:**__ \n **Popohype** \n :white_small_square:[Buff]: Decrease DMG Taken of Ally x1 by 17.9% when Active Skills are triggered. (Apply effect on Ally x1 with the highest ATK.) \n :white_small_square:[Buff]: When hit, increase Self healing by 22.7% (Sucess Rate: 70%. Duration: 40s.)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'sk.yggdrasil') {
    	msg.reply('my gun says: \n **Yggdrasil** \n \n __**Skills:**__ \n **Mystletainn Blessing - cd 80s** \n Level 1 | __**6**__: \n :white_small_square:[Buff]: Apply Damage Immunity effect on Ally x3 | __**x5**__ one time. (Duration: 32s | __**41s**__.) \n __**:white_small_square:[Buff]: Decrease Skill Cooldown of Ally x3 by 18s. (Apply effect on Ally x3 with the highest ATK.)**__ \n \n **World Tree Light - cd 110s** \n Level 1 | __**6**__: \n :white_small_square:[Healing]: Heal HP of Ally x5 for 29.8% | __**35.2%**__ of ATK every 8s for 40s. \n :white_small_square:[Buff]: Increase DEF of Ally x5 by 29.1% | __**32.8%**__. (Duration: 60s.)');
  	}
});

client.on('message', msg => {
    if (msg.content === 'ld.yggdrasil') {
    	msg.reply('my gun says: \n **Yggdrasil** \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Increase Status Effect Resist Rate of allies by 10%. \n \n **Level 2** \n :white_small_square:Not enough data...need more gunpowder! \n :white_small_square:Please DM @Silbeya 실베야#9810 if you have info on this to load gunpowder, thanks!');
  	}
});

client.on('message', msg => {
    if (msg.content === 'hr.yggdrasil') {
        
const embed = new Discord.RichEmbed()

  .setAuthor("Yggdrasil")
  .setColor(0x00b8ff)
  .setDescription("\n \n __**Grimoire:**__ \n **Popohype** \n :white_small_square:[Buff]: Decrease DMG Taken of Ally x1 by 17.9% when Active Skills are triggered. (Apply effect on Ally x1 with the highest ATK.) \n :white_small_square:[Buff]: When hit, increase Self healing by 22.7% (Sucess Rate: 70%. Duration: 40s.) \n \n __**Skills:**__ \n **Mystletainn Blessing - cd 80s** \n Level 1 | __**6**__: \n :white_small_square:[Buff]: Apply Damage Immunity effect on Ally x3 | __**x5**__ one time. (Duration: 32s | __**41s**__.) \n __**:white_small_square:[Buff]: Decrease Skill Cooldown of Ally x3 by 18s. (Apply effect on Ally x3 with the highest ATK.)**__ \n \n **World Tree Light - cd 110s** \n Level 1 | __**6**__: \n :white_small_square:[Healing]: Heal HP of Ally x5 for 29.8% | __**35.2%**__ of ATK every 8s for 40s. \n :white_small_square:[Buff]: Increase DEF of Ally x5 by 29.1% | __**32.8%**__. (Duration: 60s.) \n \n __**Leader Skill:**__ \n **Level 1** \n :white_small_square:Increase Status Effect Resist Rate of allies by 10%. \n \n **Level 2** \n :white_small_square:Not enough data...need more gunpowder!")
  .setFooter("Please inform @Silbeya 실베야#9810 if the info here needs to be updated; so gunpowder can be loaded for Esta Bot ^^")
  .setThumbnail("https://tierlistmania.com/wp-content/uploads/2019/06/Yggdrasil-Hero-Icon-Overhit.png");
 
  msg.reply('my gun says:');
  msg.channel.send({embed});
  
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot 
