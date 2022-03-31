// Given a string, swap the case for each of the letters.
// Examples

// ""           -->   ""
// "CodeWars"   -->   "cODEwARS"
// "abc"        -->   "ABC"
// "ABC"        -->   "abc"
// "123235"     -->   "123235"

// P: takes a string. Could consist of an empty string or a numeric & potentially symbols.
// R: Returns a string with the opposite case. Empty strings and numbers / symbols should be returned as-is.
// E: 
console.log(swap('ABCdef'))
console.log(swap('aBcDEf12'))
console.log(swap(''))

// P:
    // Split string into array
    // For each element check if the character == its .toUpperCase() value
        // If so, apply .toLowerCase()
        // If not, apply .toUpperCase()
        // These methods do nothing to empty strings and numbers so that case should be fine.

function swap(sTrInG){
    let StRiNG = sTrInG.split('').map( char => {
        return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
        }).join('')
    return StRiNG
  }