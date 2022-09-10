// In this kata, your task is to implement what I call Iterative Rotation Cipher (IRC). To complete the task, you will create an object with two methods, encode and decode. (For non-JavaScript versions, you only need to write the two functions without the enclosing dict)
// Input

// The encode method will receive two arguments — a positive integer n and a string value.

// The decode method will receive one argument — a string value.
// Output

// Each method will return a string value.
// How It Works

// Encoding and decoding are done by performing a series of character and substring rotations on a string input.

// Encoding: The number of rotations is determined by the value of n. The sequence of rotations is applied in the following order:
//  Step 1: remove all spaces in the string (but remember their positions)
//  Step 2: shift the order of characters in the new string to the right by n characters
//  Step 3: put the spaces back in their original positions
//  Step 4: shift the characters of each substring (separated by one or more consecutive spaces) to the right by n

// Repeat this process until it has been completed n times in total.
// The value n is then prepended to the resulting string with a space.

// Decoding: Decoding simply reverses the encoding process.
// Test Example

let quote = `If you wish to make an apple pie from scratch, you must first invent the universe.`;
let solution = `10 hu fmo a,ys vi utie mr snehn rni tvte .ysushou teI fwea pmapi apfrok rei tnocsclet`;
IterativeRotationCipher.encode(10,quote) === solution; //true


// /* Step-by-step breakdown:
// Step 1 — remove all spaces:
// `Ifyouwishtomakeanapplepiefromscratch,youmustfirstinventtheuniverse.`

// Step 2 — shift the order of string characters to the right by 10:
// `euniverse.Ifyouwishtomakeanapplepiefromscratch,youmustfirstinventth`

// Step 3 — place the spaces back in their original positions:
// `eu niv erse .I fyou wi shtom ake anap plepiefr oms crat ch,yo umustf irs tinventth`

// Step 4 — shift the order of characters for each space-separated substring to the right by 10:
// `eu vni seer .I oufy wi shtom eak apan frplepie som atcr ch,yo ustfum sir htinventt`

// Repeat the steps 9 more times before returning the string with `10 ` prepended.
// */

// Technical Details

//     Input will always be valid.
//     The characters used in the strings include any combination of alphanumeric characters, the space character, the newline character, and any of the following: _!@#$%^&()[]{}+-*/="'<>,.?:;.

// If you enjoyed this kata, be sure to check out my other katas.

const IterativeRotationCipher = {};

function shiftN(str, N) {
    let arr = str.split('');
    let l = str.length
    arr = arr.map( (_, i) => arr[( (i+l - N%l) % l)])
    return arr.join('')
}

function getSpaces(str) {
    return str.split('').map( (x, i) => {if(x===' ') return i}).filter(x=>x);
}

function splitOnSpaces(spaces, str) {
    arr = str.split('');
    for (let j of spaces) {
        arr.splice(j, 0, ' ')
    }
    return arr.join('').split(' ')
}

IterativeRotationCipher.encode = function(n,str){
    const spaces = getSpaces(str)

    for(let i=0; i < n; i++) {
        str = shiftN(str.replace(/ /g, ''), n)
        arr = splitOnSpaces(spaces, str)
        str = arr.map( word => shiftN(word, n)).join(' ')
    }
    return `${n} ${str}`
};

IterativeRotationCipher.decode = function(str){
    let [n, ...arr] = str.split(' ');
    n = Number(n);
    const spaces = getSpaces(arr.join(' '))

    for (let i=0; i < n; i++) {
        str = arr.map( word => shiftN(word, -n)).join(' ')
        str = shiftN(str.replace(/ /g, ''), -n)
        arr = splitOnSpaces(spaces, str)
    }
    return arr.join(' ')
};



// Ways to add spaces:

// Add slices based on index position of spaces
// arr = [str.slice(0, spaces[0])]
// for (let i=0;i<spaces.length; i++) {
//     arr = arr.concat(str.slice(spaces[i]-i, spaces[i+1]-(i+1)))
//     }


// Go through shell and replace any non-spaces with shifted letters
    // const shell = str.replace(/[^ ]/gi, '|')


// let shifted = shell.slice()
// for (j in str) {
//     shifted = shifted.replace('|', str[j])
// }