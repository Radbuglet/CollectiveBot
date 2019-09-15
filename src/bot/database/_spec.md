**This document aims to describe the expectations of a database implementation**

- All database implementations should happen here. These will be used indirectly by the handlers through the model interfaces.
- All database root model implementations should have a constructor which accepts the D.JS client and database credentials.
- All database methods should try to save after each method call as a crash can occur at any moment.
