import { Client } from "discord.js";
interface BotConfig {
    bot_token: string
}

export function startBot(config: BotConfig) { // TODO: Get a logger. Make this return a promise.
    const client = new Client({});

    client.once("ready", () => {
        console.log("Bot is ready.");
        console.log("Fetching bot invite url...");
        client.generateInvite("ADMINISTRATOR").then(url => {
            console.log(`Bot invite url: ${url}`);
        }).catch(error => {
            console.warn("Failed to get bot invite url. Error: " + error);
        })
    });

    // Load database here
    // TODO

    // Register handlers here
    // TODO

    client.login(config.bot_token).catch(() => {
        console.log("Bot failed to login.");
    });
}