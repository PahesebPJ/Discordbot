const Discord = require('discord.js');
const client = new Discord.Client(); //Constructor instance

client.on('ready', () => {
    console.log(`Bot is ready as: ${client.user.tag}!`);
    client.user.setStatus('online'); //Set status
});


client.on('message', message => {//Listen event
    //Receiving message
    console.log('Author:',message.author.username,"\nMessage: ",message.content);
    if(message.content === 'Jotaro'){
        message.channel.send('Dio');
    }

    if(message.content === 'Ho… mukatta kuruno ka? Nigetsu ni kono DIO ni chikazuite kuruno ka?'){
        message.channel.send('Chikadzu kanaka teme wo buchi no me tenain de na.');
    }

    if(message.content === 'Hola'){
        message.channel.send(`Hola ${message.author}`);
    }

    if(message.content === 'MUDA!'){
        message.channel.send({files: ["ora.gif"]});
        message.delete();
    }

    if(message.content.includes('!ora')){
        message.channel.send({files: ["ora.gif"]});
    }

    if(message.content === 'puto' || message.content === 'PUTO'){
        message.channel.send('yare yare daze');
        message.delete();
    }
    
});

client.login('');