const { getFiles } = require("../util/functions")

module.exports = (bot, reload) => {
    const {client} = bot
    
    let events = getFiles("./event/", ".js")

    if (events.length === 0){
        console.log("No events to load")
    }

    events.forEach((f, i) =>{
        if (reload)
            delete require.cache[require.resolve('../event/${f}')]
        const event = require('../events/${f}')
        client.event.set(event.name, event)

    })
}