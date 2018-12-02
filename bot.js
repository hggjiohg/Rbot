const Discord = require('discord.js');
const client = new Discord.Client();
const figlet = require('figlet');
var prefix = "&";
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

const pr1 = ['449406602286465024' , '297092759611768834' , ''];

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

client.on('message' , message => {
if(message.content === '&vo') { // الامر
    message.channel.send(`**${message.guild.members.filter(g => g.voiceChannel).size}**`);
}
});

client.on('message', message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
   
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
   
  let args = message.content.split(" ").slice(1);
  if(!args) return message.channel.send('${prefix}say <words>'); 
   
  if (command == "say") {
            if (!pr1.includes(message.author.id)) return;
   
  message.channel.send(args.join("  "))
      message.delete();
    }
  });
 

client.on('message', message => {

  if (!message.guild) return;
            if (!pr1.includes(message.author.id)) return;
  if (message.content === '&join') {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { 
          message.reply('OK!');
        })
        .catch(console.log);
    } else {
    }
  }
})

client.on('ready', () => {
  client.channels.find(ch => ch.id === "516266532805017613" && ch.type === 'voice').join();//اكتب اي دي روم صوت هنا
});

client.on('message', async msg =>{
	if (msg.author.bot) return undefined;
    if (!msg.content.startsWith(prefix)) return undefined;
    
    let args = msg.content.split(' ');

	let command = msg.content.toLowerCase().split(" ")[0];
	command = command.slice(prefix.length)

    if(command === `ping`) {
    let embed = new Discord.RichEmbed()
    .setColor(3447003)
    .setTitle("RezinZ Bot Ping")
    .setDescription(`${client.ping} ms,`)
    .setFooter(`Requested by | ${msg.author.tag}`);
    msg.delete().catch(O_o=>{})
    msg.channel.send(embed);
    }
});

const invites = {};

const wait = require('util').promisify(setTimeout);

client.on('ready', () => {
  wait(1000);

  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});

client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const stewart = member.guild.channels.find("name", "rinv");
     stewart.send(`<@${member.user.id}> تمت الدعوه من <@${inviter.id}>`);
   stewart.send(`<@${member.user.id}> joined using invite code ${invite.code} from <@${inviter.id}>. Invite was used ${invite.uses} `);
  }); 
});
//

client.login(process.env.BOT_TOKEN);
