const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By ESMAEL");





client.on("ready", () => {
let channel =     client.channels.get("506353680509960193")
setInterval(function() {
channel.send(`نوفرج نوفرج نوفرج نوفرج نوفرج نوفرج  نوفرج نوفرج نوفرج نوفرج نوفرج نوفرج نوفرج نوفرج نوفرج نوفرج نوفرج نوفرج  نوفرج نوفرج نوفرج ر نوفرج نوفرج نوفرج نوفرج نوفرج نوفرج  نوفرج نوفرج نوفرج نوفرج نوفرج نوفرج نوفرج نوفرج نوفرج نوفرج نوفرج نوفرج رر رر نوفرج نوفرج نوفرج  نوفرج نوفرج نوفرج نوفرج نوفرج نوفرج  نوفرج نوفرج نوفرج  نوفرج نوفرج نوفرج  رنوفرج نوفرج نوفرج  نوفرج نوفرج نوفرج  رر`);
}, 25)
})









<input class="inputDefault-_djjkz input-cIJ7To size16-14cGz5" placeholder="https://discord.gg/SJvFFY">











        var prefix = "n";
    client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "n") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('لا تستطيع تأخذ الكريدت او اي شي تبيه');


   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });






client.on('message', message => {
            if (message.content.startsWith(prefix + "help")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **n ** ' ,' **  عشان تاخذ الكريدت ** ')
.setColor('Novritsch_Pro#6808')
  message.channel.sendEmbed(embed);
    }
});








const credits = JSON.parse(fs.readFileSync("./creditsCode.json", "utf8"));
const coolDown = new Set();

client.on('message',async message => {
    
if(message.author.bot) return;
if(!credits[message.author.id]) credits[message.author.id] = {
    credits: 50
};

let userData = credits[message.author.id];
let m = userData.credits;

fs.writeFile("./creditsCode.json", JSON.stringify(credits), (err) => {
    if (err) console.error(err);
  });
  credits[message.author.id] = {
      credits: m + 0.5,
  }
  
    if(message.content.startsWith(prefix + "credit" || prefix + "credits")) {
message.channel.send(`**${message.author.username}, your :credit_card: balance is \`\`${userData.credits}\`\`.**`);
}
});

client.on('message', async message => {
    let amount = 250;
    if(message.content.startsWith(prefix + "daily")) {
    if(message.author.bot) return;
    if(coolDown.has(message.author.id)) return message.channel.send(`**:stopwatch: | ${message.author.username}, your daily :yen: credits refreshes in \`\`1 Day\`\`.**`);
    
    let userData = credits[message.author.id];
    let m = userData.credits + amount;
    credits[message.author.id] = {
    credits: m
    };

    fs.writeFile("./creditsCode.json", JSON.stringify(userData.credits + amount), (err) => {
    if (err) console.error(err);
    });
    
    message.channel.send(`**:atm: | ${message.author.username}, you received your :yen: ${amount} credits!**`).then(() => {
        coolDown.add(message.author.id);
    });
    
    setTimeout(() => {
       coolDown.remove(message.author.id);
    },86400000);
    }
});

















client.on('message', message => {
 
    if(message.content.startsWith(prefix + 'rep')) {
      if(!message.channel.guild) return;
                    moment.locale('en');
                  var getvalueof = message.mentions.users.first()
                    if(!getvalueof) return message.channel.send(`**:mag: |  ${message.author.username}, the user could not be found.    **`);
                       if(getvalueof.id == message.author.id) return message.channel.send(`**${message.author.username}, you cant give yourself a reputation !**`)
    if(profile[message.author.id].reps != moment().format('L')) {
            profile[message.author.id].reps = moment().format('L');
            profile[getvalueof.id].rep = Math.floor(profile[getvalueof.id].rep+1);
         message.channel.send(`** :up:  |  ${message.author.username} has given ${getvalueof} a reputation point!**`)
        } else {
         message.channel.send(`**:stopwatch: |  ${message.author.username}, you can raward more reputation  ${moment().endOf('day').fromNow()} **`)
        }
       }
});















 
 
client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
