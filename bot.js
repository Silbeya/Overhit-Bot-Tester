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




// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot 
