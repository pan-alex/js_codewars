// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

// 'abba' & 'baab' == true

// 'abba' & 'bbaa' == true

// 'abba' & 'abbba' == false

// 'abba' & 'abca' == false

// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

function anagrams(word, words) {
    // Sort the word alphabetically.
    // For each word in words (word2), sort alphabetically and check for a match with word. If match, store in a new array.
   
    word = word.split('').sort().join('')
    let anagrams = []
    words.forEach(word2 => word2.split('').sort().join('') === word && anagrams.push(word2))
    return anagrams
}

function anagrams(word, words) {
    word = word.split('').sort().join('')
    return words.filter(word2 => word2.split('').sort().join('') === word)
}