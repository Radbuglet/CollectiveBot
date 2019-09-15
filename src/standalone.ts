import { config as dotenvConfig } from "dotenv";
import { startBot } from "./bot/bot";

console.log("Typescript application loaded.");

// Load environment
dotenvConfig({});
type Environment = {
    BOT_SECRET_TOKEN: string,
    FIRESTORE_SECRET: string | null
}
const env: Environment = process.env as unknown as Environment;

// Validate environment
{
    console.log("\nDetected environment:");
    let missing: string = "";
    const logEnvironmentValue = (prop: keyof Environment, defaulted_optional?: boolean) => {
        console.log(`  env.${prop} = ${!defaulted_optional ? (env[prop] == undefined ? "<missing>" : env[prop]) : `${env[prop]} (missing default)`}`);
    }
    const depend = (prop: keyof Environment) => {
        if (env[prop] == undefined) missing += ` - ${prop}\n`;
        logEnvironmentValue(prop);
    }
    const optional = <Key extends keyof Environment>(prop: Key, default_value: Environment[Key]) => {
        if (env[prop] == undefined) {
            env[prop] = default_value;
            logEnvironmentValue(prop, true);
        } else {
            logEnvironmentValue(prop);
        }
    }

    depend("BOT_SECRET_TOKEN");
    optional("FIRESTORE_SECRET", null);

    if (missing.length > 0) {
        throw new Error(`Failed to start standalone bot.\n\nMissing environment variables:\n${missing}`);
    }
}

// Start the bot!
console.log("\nStarting bot...");
startBot({
    bot_token: env.BOT_SECRET_TOKEN
});