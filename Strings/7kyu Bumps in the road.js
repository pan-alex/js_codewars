// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead
// Fundamentals
// Strings

// p: string containing either _ or n
// r: String of "Woohoo!" if the total number of bumps is less than 15, otherwise "Car Dead".

// e:
bump("__nn_nnnn__n_n___n____nn__nnn") // "Woohoo!"
bump("nnn_n__n_n___nnnnn___n__nnn__") // "Woohoo!"
bump("_nnnnnnn_n__n______nn__nn_nnn") // "Car Dead"


// p:
// Count number of n's.
// One approach: compare length of string without n's to the original string.
// Another approach: split on n and get length.

function bump(x) {
    nBumps = x.length - x.replace(/n/g, '').length
    return nBumps <= 15 ? "Woohoo!" : "Car Dead"
}


function bump(x) {
    nBumps = x.split('n').length - 1
    return nBumps <= 15 ? "Woohoo!" : "Car Dead"
}