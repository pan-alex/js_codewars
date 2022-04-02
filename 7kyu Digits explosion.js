// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.
// Examples

// explode("312")

// should return :

// "333122"

// explode("102269")

// should return :

// "12222666666999999999"

// P: string of numbers
// R: each digit is repeated n times where n is its numeric value (i.e., repeat 3, 3 times)
// E: 
console.log(explode('123')) // '122333'
console.log(explode('910')) // '9999999991'
// P:
    // for each element in the string:
        // repeat it n times, where n is the digits numeric value
        // join to a new string `exploded`
    // return `exploded`


function explode(s) {
    let exploded = ''
    for (i=0; i < s.length; i++) {
        exploded += s[i].repeat(+s[i])
    }
    return exploded;
  }

  
function explode(s) {
    return s => s.replace(/\d/g, d => d.repeat(d));
}
