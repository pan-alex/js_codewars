// Introduction

// Digital Cypher assigns to each letter of the alphabet unique number. For example:

//  a  b  c  d  e  f  g  h  i  j  k  l  m
//  1  2  3  4  5  6  7  8  9 10 11 12 13
//  n  o  p  q  r  s  t  u  v  w  x  y  z
// 14 15 16 17 18 19 20 21 22 23 24 25 26

// Instead of letters in encrypted word we write the corresponding number, eg. The word scout:

//  s  c  o  u  t
// 19  3 15 21 20

// Then we add to each obtained digit consecutive digits from the key. For example. In case of key equal to 1939 :

//    s  c  o  u  t
//   19  3 15 21 20
//  + 1  9  3  9  1
//  ---------------
//   20 12 18 30 21

//    m  a  s  t  e  r  p  i  e  c  e
//   13  1 19 20  5 18 16  9  5  3  5
// +  1  9  3  9  1  9  3  9  1  9  3
//   --------------------------------
//   14 10 22 29  6 27 19 18  6  12 8

// Task

// Write a function that accepts str string and key number and returns an array of integers representing encoded str.
// Input / Output

// The str input string consists of lowercase characters only.
// The key input number is a positive integer.



//P: A string (lowercase only) and a number (positive integer)
//R: Returns an array of numbers
    // Each number represents the character from the input string processed as follows:
        // The letter is converted to the corresponding number
        // Plus the corresponding digit from the input number (ie., matching index position. If the string is longer than the number the number is looped)
//E
encode("scout",1939);  //==>  [ 20, 12, 18, 30, 21]
encode("masterpiece",1939);  //==>  [ 14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8]
//P:
    // Split string into array of letters.
        // Get corresponding number for each letter via letter.charCodeAt()
    // Convert input number to string
    // Loop through lettersAsNumbers array and add appropriate key value

function encode(str,  n) {
    let key = n.toString()
    let lettersAsNums = str.split('').map(letter => letter.charCodeAt(0) - 96)

    return lettersAsNums.map( (x, i) => {
        return x + +key[i % key.length]
    })
}

