const Discord = require('discord.js');
const client = new Discord.Client();
const figlet = require('figlet');
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

const pr1 = ['449406602286465024' , '' , ''];

const CodingXActivity = [
    "Rez", //IT's Broken Here
    "RezinZ",
    "#Rez"
    ]; 
  
  client.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (CodingXActivity.length - 1) + 1);
   client.user.setGame(CodingXActivity[index], "https://www.twitch.tv/CodingXArea");
    }, 10000); //10 seconds
  });
  client.on("guildMemberAdd", async member => {
    let moment2 = require('moment-duration-format'),
        moment = require("moment"),
        date = moment.duration(new Date() - member.user.createdAt).format("d");
  
    if(date < 7) {
      member.ban("Member account age is lower than 7 days.")
    }
  });

  client.on("ready", () => {
    setInterval(function(){
        client.guilds.get("499289822360502272").roles.find("name", "Rainbow").edit({
            color : "RANDOM"
        });
    }, 10000)
});


client.on('message', message =>{
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let prefix = '&';

if(cmd === `${prefix}sug`) {
    var suggestMessage = message.content.substring(2)
    let suggestEMBED = new Discord.RichEmbed()
    .setColor(3447003)
    .setTitle("New Suggestion!")
    .setDescription(`${suggestMessage}`)
    .setFooter(`Suggested By : ${message.author.tag}`);
    message.delete().catch(O_o=>{}) 
    let suggests = message.guild.channels.find(`name`, "suggs");
    if (!suggests) return message.channel.send("You should make A **suggestions** channel!")
    suggests.send(suggestEMBED);
}

});

client.on('message', message => {
	var prefix = "&";
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``Use : " +prefix+ "move @User``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`✅ You Have Moved <@${usermentioned}> To Your Channel`)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("`You Cant Move"+ message.mentions.members.first() +" `The User Should Be In channel To Move It`")
}
} else {
 message.channel.send("**``You Should Be In Room Voice To Move SomeOne``**")
}
} else {
message.react("❌")
 }}});


 client.on('message', message => {
    if (!message.channel.guild) return;
if(message.content =='&count')
var IzRo = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setFooter(message.author.username, message.author.avatarURL)
.setTitle('RezinZ Members')
.addField('Mmeber Count',`${message.guild.memberCount}`)
message.channel.send(IzRo);
});


client.on('message', message => {
    var prefix = "&";
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == prefix + 'bc') {
        if (!args[1]) {
    message.channel.send("**&bc <message>**");
    return;
    }
            message.guild.members.forEach(m => {
                if(!message.member.hasPermission('ADMINISTRATOR')) return;
                var bc = new Discord.RichEmbed()
                .addField('» المرسل : ', `${message.author.username}#${message.author.discriminator}`)
                .addField(' » الرسالة : ', args)
                .setColor('#ff0000')
                // m.send(`[${m}]`);
                m.send(`${m}`,{embed: bc});
            });
        }
        } else {
            return;
        }
    });





client.login(process.env.BOT_TOKEN);
