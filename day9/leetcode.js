// Q1
var createHelloWorld = function() {
    
    return function(...args) {
            return "Hello World";
    }
};

// Q2
var createCounter = function(n) {
    return () => n++;
  };