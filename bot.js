const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NTIxODQ5OTU4ODc0MzQ5NjA4.DvCnzg.lN69DpQmf4qEsQ2Lhmm5Usjq3_0';

client.login(process.env.BOT_TOKEN);

client.on('ready', () => {

    console.log("The bot is logged in.");
});

client.on('message', message => {
    var sender = message.author;
    var msg = message.content.toLocaleUpperCase();

    if (sender.id === '521820814551678976') {
        return;
    }
    if (msg.includes('NIGGA') || (msg.includes('NIGGER') || (msg.includes('NIBBA')))) {
        message.channel.send(message.author + ' _has been banned due to tosic behaviour_')
    }
    if (msg.includes('NIGERIA'))
        message.author.send('Reporta2 al INADI')
});
