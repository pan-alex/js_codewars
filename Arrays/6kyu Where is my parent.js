// Mothers arranged a dance party for the children in school. At that party, there are only mothers and their children. All are having great fun on the dance floor when suddenly all the lights went out. It's a dark night and no one can see each other. But you were flying nearby and you can see in the dark and have ability to teleport people anywhere you want.

// Legend:
// -Uppercase letters stands for mothers, lowercase stand for their children, i.e. "A" mother's children are "aaaa".

// -Function input: String contains only letters, uppercase letters are unique.
// Task:
// Place all people in alphabetical order where Mothers are followed by their children, i.e. "aAbaBb" => "AaaBbb".


// P: A string with lowercase letters and uppercase letters
// R: an ordered string with the uppercase as the first letter
// E:
    findChildren("beeeEBb") // "BbbEeee"
    findChildren("uwwWUueEe") // "EeeUuuWww"
    findChildren("abBA") // "AaBb"
    findChildren("AaaaaZazzz") // "AaaaaaZzzz"
    findChildren("CbcBcbaA") // "AaBbbCcc"
    findChildren("xXfuUuuF") // "FfUuuuXx"
// P:
    // Split to array. Sort string:
        // Strings are sorted by lowercase value first,
        // When x.lowercase == y (already lowercase), sort the uppercase value first


function findChildren(dancingBrigade) {
    alphabetical = dancingBrigade.split('').sort( (a, b) => a.localeCompare(b))
    alphabeticalAndUpper = alphabetical.sort( (a, b) => {
    return a.toLowerCase() === b ? -1 :
           b.toLowerCase() === a ? 1 : 0
    })
	return alphabeticalAndUpper.join('');
}

