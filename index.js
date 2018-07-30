const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '1'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
 if(message.content.startsWith(prefix + "join")) {
message.member.voiceChannel.join().catch(e => message.channel.send(e));
}
});

  

client.login(process.env.BOT_TOKEN); 
