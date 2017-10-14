/*
  Sample Node Event Emitter
*/

// Require builtin EventEmitter module
const EventEmitter = require('events');

var sampleEmitter = new EventEmitter();

// Add Event Listener
sampleEmitter.on('event', name => console.log(`Hello, ${name}`));

// Trigger Event
sampleEmitter.emit('event', 'Brandon');

/*
  How it works...
*/

var MyEventEmitter = {
  on: function(eventName, callback) {
    // Check if eventName already exists
    if (this.eventName) {
      // If it exists, push callback into the array
      this[eventName].push(callback);
    } else {
      /*
        If eventName doesn't exists, create the property on the object
        and give it an array. Push the callback into the array
      */
      this[eventName] = [];
      this[eventName].push(callback);
    }
  },
  emit: function(eventName, ...args) {
    /*
      Iterate over each callback in the array and invoke them with passed
      arguments
    */
    this[eventName].forEach(callback => {
      callback(...args);
    });
  }
};

var anotherEmitter = Object.create(MyEventEmitter);
anotherEmitter.on('greet', (greeting, person) =>
  console.log(`${greeting}, ${person}`)
);
anotherEmitter.emit('greet', 'Greetings', 'Human');

anotherEmitter.on('leave', () => {
  console.log('Goodbye!');
});
anotherEmitter.emit('leave');
