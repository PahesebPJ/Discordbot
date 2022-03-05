const Discord = require('discord.js');
const client = new Discord.Client(); //Constructor instance

client.on('ready', () => {
    console.log(`Bot is ready as: ${client.user.tag}!`);
    client.user.setStatus('online'); //Set status
});


client.on('message', message => {//Listen event
    //Receiving message
    console.log('Author:',message.author.username,"\nMessage: ",message.content);
    if(message.content === 'Dio' || message.content === 'dio'){
        message.channel.send('Ho… mukatta kuruno ka? Nigetsu ni kono DIO ni chikazuite kuruno ka?');
    }

    if(message.content === 'bot' || message.content === 'Bot'){
        message.channel.send('CREISTE QUE ERA UN BOT, PERO ERA YO ¡DIO!');
    }

    if(message.content === 'Hola'){
        message.channel.send(`Hola ${message.author}`);
    }

    if(message.content.includes('!ZA WARUDO' || '!za warudo')){
        message.channel.send("ZA WARUDOOOOOOO!!!",{files: ["Gif_dio.gif"]}); //send images
        message.delete();
    }

    if(message.content.includes('!vampire sounds')){
        message.channel.send('WRYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY!!!!!!!!!!!!!!!!!');
    }

    if(message.content.includes('!roadrollerda')){
        message.channel.send("ROADROLLERDA!",{files: ["roadrollerda.gif"]}); //send images
        message.delete();
    }

    if(message.content.includes('!muda') || message.content.includes('!ORA! ')){
        message.channel.send({files: ["muda.gif"]});
        message.delete();
    }

    if(message.content.includes('Chikadzu kanaka teme wo buchi no me tenain de na.')){
        message.channel.send('Hoho! Dewa juubun chikazukanai youi.');
        message.channel.send({files: ["muda.gif"]});
        message.channel.send('MUDA!');
    }

    if(message.content.includes('!fight')){
        message.channel.send('Jotaro');
        message.delete();
    }
});

client.login('');