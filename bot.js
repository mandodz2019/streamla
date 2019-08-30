const Discord = require('discord.js');

const fs = require('fs')

const client = new Discord.Client();

                    

const prefix = '!';

client.on('ready', () => {

  
    console.log(`Logged in as [ FOIL]`);

});

















const adminprefix = "!";
const developers = ["546374068346159104"];

console.log("FOIL");

client.on('ready', () => {
    console.log(`Logged as ${client.user.tag}`)
})


client.on('message', message => {//// حقوق @! FOIL 
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'a')) {
    client.user.setGame(argresult);
      message.channel.send(`**:white_check_mark:  تم تغيير البلاينق الى   ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "z")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'e')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**:white_check_mark:  تَم تغيير الواتشينق الى   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'r')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**:white_check_mark:  تَم تغيير الليسينينق الى   ${argresult}**`)
  } else
  if (message.content.startsWith(adminprefix + 't')) {
    client.user.setGame(argresult, "https://www.twitch.tv/paaaaaartly");
      message.channel.send(`**:white_check_mark:  تم تغييرك حالتك بالتويتش الى   ${argresult}**`)
  }
  if (message.content.startsWith(adminprefix + 'y')) {
  client.user.setUsername(argresult).then
      message.channel.send(`**:white_check_mark:  جاري تغيير الأسم لـ ..${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'u')) {
  client.user.setAvatar(argresult);
    message.channel.send(`**:white_check_mark:  جاري تغيير الأفتار... :** `);
}
});








































client.login("NTQ2Mzc0MDY4MzQ2MTU5MTA0.XU_XoA.qhtyyMtI2qIFJsda9FnusitT4K4");