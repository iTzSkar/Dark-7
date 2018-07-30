const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '@.Savage'

console.log("Welcome Savage.");
 
client.on('message', message => {
  if(message.content.startsWith(prefix + "join")) {
  message.member.voiceChannel.join();
  }
  });
  

client.login(process.env.BOT_TOKEN); 
