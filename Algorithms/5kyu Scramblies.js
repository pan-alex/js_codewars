// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

//     Only lower case letters will be used (a-z). No punctuation or digits will be included.
//     Performance needs to be considered.


// P:
    // str1: string containing lowercase a-z
    // str2: string containing lowercase a-z

// R:
    // Return true if the letters in str1 can be rearranged to include all of the characers in str2
    // False otherwise

// E: 

// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False


// P:
    // From discussion: solution needs to be O(n)
    // Can't just check if each letter in str2 is in str1 because repeated letters aren't considered. Although this could be a performant initial test.
    // Possible approaches below...


// For each unique string in str2: replace it (globally) in str1 and str2. Compare change in length
// (Solution that passed)
function scramble(str1, str2) {
    let unique = [...new Set(str2)];
    for (i in unique) {
        let pattern = RegExp(unique[i], 'g')
        n1 = str1.length - str1.replace(pattern, '').length
        n2 = str2.length - str2.replace(pattern, '').length
        if (n1 < n2) return false;
    }
    return true;
}


// Other solutions that timed out


// Check if each letter in str1 is in str2. If yes, remove that element from str2.
function scramble(str1, str2) {
    str1 = str1.split('').filter(a => str2.includes(a)).join('')
    for (char in str2) {
        if (str1.includes(str2[char])) {
            str1 = str1.replace(str2[char], '')
        } else {
            return false;
        }
    }
    return true;
}


// For each unique character in str2, count number of occurences in str1 and str2. If less continue, if more return false.
function scramble(str1, str2) {
    str1 = str1.split('').filter(a => str2.includes(a)).join('')
    let str2Unique = new Set(str2);
    str2Unique = [...str2Unique]
    for (char in str2Unique) {
        n2 = (str2.match(RegExp(str2Unique[char], 'g')) || []).length
        n1 = (str1.match(RegExp(str2Unique[char], 'g')) || []).length
        if (n1 < n2) return false;
    }
    return true;
}
