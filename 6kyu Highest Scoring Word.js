// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x){
    // For string in array:
        // split string into array, parseInt on each value, and sum.
        // Compare to current highest value. If higher, replace the value and store index
        // Retrieve word with highest value
    let highscore = 0;
    let highscoreIndex = 0;
    const arr = x.split(' ')

    arr.forEach( (item, index) => {
        score = getScore(item)
        if(score > highscore) {
            highscore = score;
            highscoreIndex = index;
        }
    })
    return arr[highscoreIndex]
}

function getScore(str) {
    score = str.split('').reduce( (sum, item) => sum += parseInt(item, 36) - 9, 0)
    return score
}

