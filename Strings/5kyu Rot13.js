// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

//P: A string. May contain non-alphabetical characters
//R:
    // Return a string where:
    // All alphabetical characters in `message` are shifted by 13 spots. After z comes a again.
    // All special/numeric characters are returned as is
    // Uppercase letters remain uppercase & are shifted accordingly
//E:
rot13('grfg') //'test'
rot13('Grfg') //'Test'
rot13('abcdefghijklmnopqrstuvwxyz')
// nopqrstuvwxyzabcdefghijklm
// nopqrstuvwxyzabcdefghijkl

//P:
    // Split string into an array
    // Run each character through a function that:
        // Checks if alphabetical.
            // If not, returns the character back.
            // If yes, shifts by 13 spots and returns that character
                // Get charcode of character and add 13.
    // Concatenate result


function rot13(message){
    const characters = message.split('')
    const shiftedCharacters = characters.map(x => {
        const num = x.charCodeAt()
        if (num >= 65 && num <= 90 || num >= 97 && num <= 122) return shiftLetter(num)
        return x
    })
    return shiftedCharacters.join('')
}

function shiftLetter(num) {
    let shifted = num + 13;
    if (num >= 97 && num <= 122) { // Lowercase: 97 - 122;
        if (shifted > 122) shifted -= 26
    } else { // uppercase: 65 - 90
        if (shifted > 90) shifted -= 26
    }
    console.log(shifted)
    return String.fromCharCode(shifted)
}



// Some better solutions than mine:

function rot13(message) {
    var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
    return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
  }


const rot13 = str => str.replace(/[a-z]/gi, letter => {
    let code = letter.charCodeAt(0) + (letter.toLowerCase() <= 'm' ? 13: -13)
    return String.fromCharCode(code)
});


function rot13(message){
    return message.split('').map(l => {
      let charCode = l.charCodeAt(0);
      if(charCode >= 97 && charCode <= 122){
        charCode = (charCode - 97 + 13) % 26 + 97;
      }
      else if(charCode >= 65 && charCode <= 90){
        charCode = (charCode - 65 + 13) % 26 + 65;
      }
      return String.fromCharCode(charCode);
    }).join('');
  }