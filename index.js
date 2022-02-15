const Discord = require("discord.js")
const { MembershipStates } = require("discord.js/typings/enums")
require("dotenv").config()

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS",
    ]
})

client.on("ready", () => {
    console.log('Logged in as ${client.user.tag}')
})

client.on("messageCreate", (message) => {
    if (message.content == "Hi"){
        message.reply("Hello my enjoyer! ♥")
    }
})

const welcomeChannelId = "943243536608927785"

client.on("guildMemberAdd", (meber) => {
    member.guild.channels.cache.get(welcomeChannelId).send('<@${member.id}> Welcome to the server!')
})

client.login(process.env.TOKEN)