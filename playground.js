var { Emitter } = require("./emitter");

var myEmitter = new Emitter();

myEmitter.on("data", () => console.log("data received"));
myEmitter.emit("data");
