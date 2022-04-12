// Your goal is to write an Event constructor function, which can be used to make event objects.

// An event object should work like this:

//     it has a .subscribe() method, which takes a function and stores it as its handler
//     it has an .unsubscribe() method, which takes a function and removes it from its handlers
//     it has an .emit() method, which takes an arbitrary number of arguments and calls all the stored functions with these arguments

// As this is an elementary example of events, there are some simplifications:

//     all functions are called with correct arguments (e.g. only functions will be passed to unsubscribe)
//     you should not worry about the order of handlers' execution
//     the handlers will not attempt to modify an event object (e.g. add or remove handlers)
//     the context of handlers' execution is not important
//     each handler will be subscribed at most once at any given moment of time. It can still be unsubscribed and then subscribed again

// Also see an example test fixture for suggested usage


function Event() {
    this.handlers = [];
  }
  
  Event.prototype.subscribe = function(handler) {
    this.handlers.push(handler);
  };
  
  Event.prototype.unsubscribe = function(handler) {
    var index = this.handlers.indexOf(handler);
    
    if (-1 !== handler) {
      this.handlers.splice(index, 1);
    }
  };
  
  Event.prototype.emit = function () {
    var args = arguments;
    this.handlers.forEach(function(handler) {
      handler.apply(null, args);
    });
  };

  
// function Event() {
//     this.handlers = []

//     this.subscribe = function(f){
//         this.handlers.push(f)
//     }

//     this.unsubscribe = function(f) {
//         this.handlers = this.handlers.filter( item => item !== f)
//     }

//     this.emit = function(...args) {
//         for (i=0; i < args.length; i++) {
//             this.handlers.forEach( f => f(args[i]))
//         }
//     }
// }