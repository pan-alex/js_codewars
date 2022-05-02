// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

//     Find the unique number (this kata)
//     Find the unique string https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3
//     Find The Unique https://www.codewars.com/kata/5862e0db4f7ab47bed0000e5


function findUniq(arr) {
    elements = {}
    arr.forEach( (item) => {
        !elements[item] ? elements[item] = 1 : elements[item] += 1
    })
    for (item in elements) {
        if (elements[item] === 1) return Number(item)
    }
}


function findUniq(arr) {
    return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
  }