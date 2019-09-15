import { Guild, Client, CategoryChannel } from "discord.js";
import { IModelCommunityChannel } from "./communityChannel";

export interface IModelGuild {
    getGuild(client: Client): Promise<Guild>;
    getGuildId(): Promise<string>;

    getCommunityCategory(client: Client): Promise<CategoryChannel | null>;
    setCommunityCategory(client: Client, channel: CategoryChannel | null): Promise<boolean>;

    getCommunityChannels(): Promise<IModelCommunityChannel>;
}