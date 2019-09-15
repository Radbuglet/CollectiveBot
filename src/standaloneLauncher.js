console.log("Registering TypeScript transformer...");
require('ts-node').register({});

console.log("Booting TypeScript application...");
require('./standalone');