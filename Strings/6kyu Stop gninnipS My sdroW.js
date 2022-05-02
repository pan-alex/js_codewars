// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(string){
    //Convert input to string.
    string = String(string);

    // Split string into array of words
    const words = string.split(' ')
    let spunWords = ''
    let spunWord
    // Check if each element is 5 or more letters
    for(i=0; i < words.length; i++) {
        spunWord = ''

        if (words[i].length < 5) {
            spunWord = words[i]
        } else {       
            // If the element is 5 letters or more print it backward
            for (j=words[i].length - 1; j >= 0; j--) {
                spunWord += words[i][j];
            }
        }
        spunWords += ' ' + spunWord
        // console.log(spunWords);
    }
    spunWords = spunWords.slice(1) // Remove the space that is added to the first word
    return spunWords

  }

// Better solution
function spinWords(string){
    words = string.split(' ');
    newWords = words.map( function (word) {
        if (word.length >= 5) {
            return word.split('').reverse().join('');
        } else {
            return word
        }
    }).join(' ')

    return newWords
  }
