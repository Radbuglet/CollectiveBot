import { TextChannel, Client, Role } from "discord.js";

export interface IModelCommunityChannel {
    getChannel(client: Client): Promise<TextChannel>;
    getChannelId(): Promise<string>;

    getRole(client: Client): Promise<Role>;
    getRoleId(): Promise<string>;
}