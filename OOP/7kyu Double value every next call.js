// This kata is about static method that should return different values.

// On the first call it must be 1, on the second and others - it must be a double from previous value.

// Look tests for more examples, good luck :)
// Object-oriented Programming

class Class {
    static val = 1
    static getNumber() {
       this.val *= 2
       return this.val/2;
    }
  }