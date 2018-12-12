const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {

    console.log("The bot is logged in.");
});

client.on('message', message => {
    var sender = message.author;
    var msg = message.content.toLocaleUpperCase();

    if (sender.id === '521820814551678976') {
        return;
    }
    if (msg.includes('NIGGA') || (msg.includes('NIGGER') || (msg.includes('NIBBA') || (msg.includes('IGGA'))))) {
        message.channel.send(message.author + ' _has been banned due to tosic behaviour_')
    }
    if (msg.includes('NIGERIA')){
        message.author.send('Reporta2 al INADI');
    }
    if (msg.includes('xs') || (msg.includes('es'))) {
        message.delete();
        message.channel.send(message.author + ' _acaba de escribir la palabra_ ' + message.content + ' _la cual contiene idioma inclusive que esta prohibido en este servxr._');
    }
});
client.login(process.env.BOT_TOKEN);
