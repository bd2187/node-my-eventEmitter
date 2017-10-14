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
