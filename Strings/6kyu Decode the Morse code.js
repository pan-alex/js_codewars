// Part of Series 1/3
// This kata is part of a series on the Morse code. After you solve this kata, you may move to the next one.

// In this kata you have to write a simple Morse code decoder. While the Morse code is now mostly superseded by voice and digital data communication channels, it still has its use in some applications around the world.

// The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code is ···· · −·−−   ·−−− ··− −·· ·.

// NOTE: Extra spaces before or after the code have no meaning and should be ignored.

// In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal SOS (that was first issued by Titanic), that is coded as ···−−−···. These special codes are treated as single special characters, and usually are transmitted as separate words.

// Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.

// For example:

// decodeMorse('.... . -.--   .--- ..- -.. .')
// //should return "HEY JUDE"

// NOTE: For coding purposes you have to use ASCII characters . and -, not Unicode characters.

// The Morse code table is preloaded for you as a dictionary, feel free to use it:

//     Coffeescript/C++/Go/JavaScript/Julia/PHP/Python/Ruby/TypeScript: MORSE_CODE['.--']


// All the test strings would contain valid Morse code, so you may skip checking for errors and exceptions. In C#, tests will fail if the solution code throws an exception, please keep that in mind. This is mostly because otherwise the engine would simply ignore the tests, resulting in a "valid" solution.

// Good luck!

// After you complete this kata, you may try yourself at Decode the Morse code, advanced.

MORSE_CODE = { 
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '···−−−···': 'sos',
  };


decodeMorse = function(morseCode){
    // Rules:
        // Words are separated by 3 spaces
        // Letters are separated by 1 space
        // Spaces before and after the string are meaningless
        // Some special strings (e.g., SOS) exist where the letters are not separated but they are transmitted as separate words. These should already be in the morse code library and should not require extra coding.

    // Remove whitespaces at the beginning and ends of string.
    morseCode = morseCode.trim()

    // Split message into array of distinct words (split on 3 whitespaces) & again into subarrays for letters? (split on 1 whitespace)
    let arr = morseCode.split('   ').map( (word) => word.split(' '))

    // For each word, match each letter to the corresponding alphanumeric character
    let alphanumeric = arr.map( (word) => 
        word.map( (letter) => MORSE_CODE[letter])
        )

    // join words. make uppercase.
    return alphanumeric.map( (word) => word.join('')).join(' ').toUpperCase()
  }


// Alternate solution, slightly more readable maybe.
decodeMorse = function(morseCode){
    // For each word: 
        // Split into array of letters
        // map each letter to morse code library and make uppercase
        // Rejoin letters
    function decodeWord(word) {
        return word.split(' ').map( (letter) => MORSE_CODE[letter]).join('').toUpperCase()
    }
    // Run decodeWord on each word
    alphanumeric = morseCode.trim().split('   ').map( (word) => decodeWord(word))
    // Join words into a string
    return alphanumeric.join(' ')
}