const Discord = require('discord.js')
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});

const welcomeChannel = '761319091252232202'



client.on('ready', () => {
    console.log("Bot FameMMA wlaczony! Nick i tag bota:" + client.user.tag)
    client.user.setActivity('zykem moj pan', { type: 'PLAYING' })
    
})

client.on('guildMemberAdd', (member) => {

    console.log(member)

    const message = `Nowy ogladacz wbil na serwer, Powitajcie <@${member.id}>`

    const channel = member.guild.channels.cache.get(welcomeChannel)
    channel.send(message)
    member.send("Witaj na serwerze! by dostac dostep do ogladania idz na kanal jak-ogladac i zweryfikuj sie za pomoca !zweryfikuj!")


})

client.on('message', async message => {

    if(message.author.bot) return;
    if(message.content.toLowerCase() === '!brakpozewu' && message.channel.id === '761705758932729916'){

        message.channel.send("Ja wojtek gola muwie rze zykem moze strimowac fame mma");

    }

client.on('message', async message => {

    if(message.author.bot) return;
    if(message.content.toLowerCase() === '!freeppv' && message.channel.id === '761705813675999254'){

        const embed = new Discord.MessageEmbed()
        .setTitle("Ogloszenie")
        .setAuthor("FameMMA 8")
        .setColor("#1364cd")
        .setDescription("Podczas Gali zostana rozdane 3 Konta PPV")
        .setFooter("ZyKeM dEv")
    message.channel.send({embed})

    }

})


})

/*client.on('message', async message => {

    if(message.author.bot) return;
    if(message.content.toLowerCase() === '!zweryfikuj' && message.channel.id === '761319630626750495') {

        const role = message.guild.roles.cache.get('761319944205238292');
        if(role) {
            try {
                await message.member.roles.add(role);
                message.member.send("**BRAWO**\n > Pomyslnie sie zweryfikowales na naszym Serwerze!")
                console.log(message.member.user.tag + " sie zweryfikowal!")
                message.delete();
              }
             catch(err)
            {
                console.log(err);
            }
        }
        
    }

/*})*/

client.on("message", async message => {

    if(message.content.toLowerCase() === '!weryfikacjaembed') {

        const embed = new Discord.MessageEmbed()
        .setTitle("")
        .setAuthor("Weryfikacja")
        .setColor("#cc99ff")
        .setDescription("Kliknij na reakcje aby sie zweryfikowac")
        .setFooter("ZyKeM dEv")
        let msgembed = await message.channel.send(embed)
        msgembed.react('✅')

    }

})

client.on("messageReactionAdd", async (reaction, user) =>{

    if(reaction.message.partial) await reaction.message.fetch();

    if(user.bot) return;
    if(!reaction.message.guild) return;

    if(reaction.message.channel.id === '761705584268804106') {

        if(reaction.emoji.name === '✅') {

            await reaction.message.guild.members.cache.get(user.id).roles.add("751828877395099749")

        }

    }

})


client.login(process.env.token)