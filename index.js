const Discord = require('discord.js')
const client = new Discord.Client()

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

})

client.login(process.env.token)