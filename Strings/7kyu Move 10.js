// Move every letter in the provided string forward 10 letters through the alphabet.

// If it goes past 'z', start again at 'a'.

// Input will be a string with length > 0.
// Fundamentals
// Strings
// Arrays



function moveTen(s){
    const abc = 'abcdefghijklmnopqrstuvwxyz'
    return s.split('').map( x => abc[(abc.indexOf(x)+10) % abc.length]).join('')
  }