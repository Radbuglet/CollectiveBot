import { IModelGuild } from "./guild";

export interface IModelRoot {
    getGuilds(): Promise<IModelGuild[]>;
    getGuild(id: string): Promise<IModelGuild | null>;
    hasGuild(id: string): Promise<boolean>;
    addGuild(id: string): Promise<IModelGuild>;
    removeGuild(id: string): Promise<boolean>;
}