**This document aims to describe the expectations of a handler implementation**

- A template handler to work with the handlers system in src/bot.ts
- A handler's job is to contribute to Discord.JS handlers.
- If a handler is complex enough, helper files can be created.
- A handler shouldn't "talk" to other handlers directly, although it may use the model. (TODO: Any edge cases?)
- A handler's state should be stored in the model provided to it.
- The code should work properly, even if the bot ever gets turned off in the middle some lengthy operation such as a vote.
