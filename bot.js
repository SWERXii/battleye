const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {

    console.log("The bot is logged in.");
});

client.on('message', message => {
    var sender = message.author;
    var msg = message.content.toLocaleUpperCase();
    let inclusive = ['xs', 'todes', 'elles', 'nosotres', 'bobes', 'divines', 'dibines', 'otres', 'chiques'];
    let foundInText = false;

    client.user.setStatus('available');
    client.user.setGame('xvideos.com', 'https://twitch.tv/nigga');
    
    for (var i in inclusive){
        if (message.content.toLowerCase().includes(inclusive[i].toLowerCase())) foundInText = true;
    }
    if (foundInText) {
        message.channel.send(message.author + '_ escribió en idioma inclusive_');
    }
    if (sender.id === '521820814551678976') {
        return;
    }
    if (msg.includes('NIGGA') || (msg.includes('NIGGER') || (msg.includes('NIBBA') || (msg.includes('IGGA'))))) {
        message.channel.send(message.author + ' _has been banned due to tosic behaviour_')
    }
    if (msg.includes('NIGERIA')){
        message.author.send('Reporta2 al INADI');
    }
    
    
});
client.login(process.env.BOT_TOKEN);
