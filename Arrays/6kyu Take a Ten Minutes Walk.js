// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

//     Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).


// P: an array consisting of the strings 'n', 'w', 'e', 's' (representing cardinal directions), "walk"
    // Input will never be empty and will always be valid
// R: True or false.
    // True if:
        // The walk returns you to the starting location
        // Is length 10
    // False otherwise
// E:
isValidWalk(['n','s','n','s','n','s','n','s','n','s']) // True because length is 10 and walk brings you back to where you started
isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']) // False because length is 12, even though it brings you back to the start
isValidWalk(['n','n','n','s','n','s','n','s','n','s']) // False, because you end 2 blocks North, even though length is 10

// P:
    // Length must be 10
    // number of "e" must == number of "w"
    // number of "n" must == number of "s"
    // If all are true, return true, else false


function getCount(arr, value) {
    return arr.filter( x => x === value).length
}

function isValidWalk(walk) {
    if (walk.length !== 10) return false
    if (getCount(walk, 'n') !== getCount(walk, 's')) return false
    if (getCount(walk, 'e') !== getCount(walk, 'w')) return false
    return true
}
