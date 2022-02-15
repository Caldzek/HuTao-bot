const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTQzMjM0MDAzNTI2Mzg1NzI0.YgwFHg.p5fxi1xkn_IEbdueX_mG14JtjSM"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
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

client.login(process.env.TOKEN)