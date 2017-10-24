var Emitter = function() {
  this.events = {};
};

Emitter.prototype.on = function(type, listener) {
  /*
          Check if "type" property exists in "events" object.
          If it doesn't exist, give it a value of an empty array
    */
  this.events[type] = this.events[type] || [];

  // Push listener to "type" properties array
  this.events[type].push(listener);
};

Emitter.prototype.emit = function(type, ...args) {
  if (this.events[type]) {
    this.events[type].forEach(function(listener) {
      listener(...args);
    });
  }
};
