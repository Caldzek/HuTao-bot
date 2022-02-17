const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js")

module.exports = {
    name: "rolesselector",
    category: "test",
    devOnly: true,
    run: async ({client, message, args}) => {
        message.channel.send({
            embeds: [
                new MessageEmbed().setTitle("Select Role").setDescription("Select roles from the buttons below").setColor("RED")
            ],
            components: [
                new MessageActionRow().addComponents([
                    new MessageButton().setCustomId("role-943221231954591815").setStyle("PRIMARY").setLabel("SuperAdmin")
                ])
            ]
        })
    }
}