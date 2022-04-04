// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:

// 2332
// 110011
// 54322345

// You'll be given 2 numbers as arguments: (num,s). Write a function which returns an array of s number of numerical palindromes that come after num. If num is a palindrome itself, it should be included in the count.

// Return "Not valid" instead if any one of the inputs is not an integer or is less than 0.

// For this kata, single digit numbers will NOT be considered numerical palindromes.


// P: 2 numbers. The first number `num` is the starting number and the 2nd is the number `s` of numerical palindromes to return following the starting number

// R: `s` number of numerical palindromes, starting from `num`. If `num` is a palindrome itself then include it.

// E:
palindrome(6,4) // [11,22,33,44]
palindrome(59,3)  // [66,77,88]
palindrome(101,2) // [101,111]
palindrome("15651",5) // "Not valid" 
palindrome(1221,"8") // "Not valid" 
palindrome(493,0) // []

// P:
    // Validate inputs: Both must be numbers and > 0
    // Start a counter for number of palindromes.
    // While counter is less than s, count upward starting from `num` and check if each is a pallindrome.


function palindrome(num,s) { 
    if (!isValid(num) || !isValid(s)) return 'Not valid'

    palindromes = [];
    while (palindromes.length < s) {
        if (isPalindrome(num)) palindromes.push(num);
        num++
    }
    return palindromes    
}


  function isValid(num) {
    return typeof(num) === 'number' && num >= 0
}


function isPalindrome(num) { 
    str = String(num)
    return str.length > 1 && str === str.split('').reverse().join('')
  } 
