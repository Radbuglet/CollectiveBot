**This document aims to describe the expectations of a model interface**

- All model methods should return a promise.
- All model methods that return data about discord.js should strive to return the Discord.JS hook for that information (eg. give a `GuildUser` instead of a user id)
- All model methods that return discord.js objects should take in a discord.js client.
- It may be beneficial to also provide variants of the methods which provide the raw data for each discord.js object.
- For all methods that set data, it can be useful to create variants of the methods that save multiple pieces of data at the same time to lower overhead for each save operation.
- TODO: Do we really need to save in between every operation? Should we add variants of setters that don't save each time?
