
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.
// Strings
// Fundamentals


// P:
    // Store counts of each letter in an object
    // Loop through length of string:
        // Check if letter is in object.
            // If yes: increment value +1
            // If no: add with value = 1


function count (string) {
    let vals = {};
    for (let i=0; i < string.length; i++) {
        if (string[i] in vals) {
            vals[string[i]] += 1
        } else {
            vals[string[i]] = 1
        }
    }
     return vals;
}


function count (string) {
    let vals = {};
    for (let x of string) {
        if (vals[x]) {
            vals[x] += 1
        } else {
            vals[x] = 1
        }
    }
     return vals;
}