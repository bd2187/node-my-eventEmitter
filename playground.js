var { Emitter } = require("./emitter");

// var myEmitter = new Emitter();

// myEmitter.on("data", () => console.log("data received"));
// myEmitter.emit("data");

class MyEmitter extends Emitter {
  storeEvent(type, listener) {
    this.on(type, listener);
  }
  emitEvent(type) {
    this.emit(type);
  }
}

var emitter = new MyEmitter();

emitter.storeEvent("data", () => console.log("data received"));
emitter.emitEvent("data");
