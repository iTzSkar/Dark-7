const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '1'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});


client.on('message', message => {
  if (message.content.startsWith('play')) {
    const voiceChannel = message.member.voiceChannel;
    voiceChannel.join()
      });
  } else if(message.content.startsWith(prefix + "join")) {
message.member.voiceChannel.join();
}
});

  

client.login(process.env.BOT_TOKEN); 
