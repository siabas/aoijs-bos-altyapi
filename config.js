module.exports = {
    Bot: {
        token: "", //Botunuzun tokeni
        prefix: "!", //Prefix
        intents: ["MessageContent", "Guilds", "GuildMessages"],
        events: ["onMessage", "onInteractionCreate"]
    }
}