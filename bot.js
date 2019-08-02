const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {

    console.log('I am ready!');

});

client.on('message', msg => {
    if (msg.content === 'ping') {
    	msg.reply('my gun says \n **Bullet Carnival** \n [Debuff]: Decrease Block Rate of Hit Target by 9,9% when Active Skills are triggered. (Duration: 30s,)[Passive Effect]: increase Crit Rate of Self by 7,6%.');
  	}
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot 
