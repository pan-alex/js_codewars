// Write a function that accepts fight string consists of only small letters and * which means a bomb drop place. Return who wins the fight after bombs are exploded. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:

//  w - 4
//  p - 3
//  b - 2
//  s - 1

// The right side letters and their power:

//  m - 4
//  q - 3
//  d - 2
//  z - 1

// The other letters don't have power and are only victims.
// The * bombs kill the adjacent letters ( i.e. aa*aa => a___a, **aa** => ______ );
// Example

// alphabetWar("s*zz");           //=> Right side wins!
// alphabetWar("*zd*qm*wp*bs*"); //=> Let's fight again!
// alphabetWar("zzzz*s*");       //=> Right side wins!
// alphabetWar("www*www****z");  //=> Left side wins!



// P: A string containing lower case letters "wpbs" and "mqdz" as well as "*"
    // "wpbs" denote fighters on the "left side"
    // "mqdz" denote fighters on the "right side"
    // * represent bombs
// R:
    // Return a string: A message showing which side won, or a tie.
    // Once the bombs "drop" the surrounding letters are deleted.
    // The leftover letters are each worth certain point values. Whichever "side" has the most remaining points wins.

// E:
alphabetWar("s*zz");           //=> Right side wins!
alphabetWar("*zd*qm*wp*bs*"); //=> Let's fight again!
alphabetWar("zzzz*s*");       //=> Right side wins!
alphabetWar("www*www****z");  //=> Left side wins!

alphabetWar("z")
alphabetWar("****")
alphabetWar("z*dq*mw*pb*s")
alphabetWar("zdqmwpbs")
alphabetWar("zz*zzs")
alphabetWar("sz**z**zs")
alphabetWar("z*z*z*zs")
alphabetWar("*wwwwww*z*")
// P:
    // Drop bombs:
        // Replace each element adjacent to a * with a _.
        // Filter all _
    // Tally up the value of letters from each side





const table = {
    'w': 4,
    'p': 3,
    'b': 2,
    's': 1,
    'm': -4,
    'q': -3,
    'd': -2,
    'z': -1,
}


function dropBombs(str) {
    let arr = str.split('');
    arr.forEach( (_, i, arr) => {
        if (arr[i] === '*') {
            arr[i-1] = arr[i-1] === '*' ? '*' : '_';
            arr[i+1] = arr[i+1] === '*' ? '*' : '_';
        }
    })
    return arr.filter( x => (x in table) )
}


function alphabetWar(fight) {
    let arr = dropBombs(fight)
    let points = arr.reduce( (points, x) => points + table[x], 0)
    if (points < 0) return "Right side wins!"
    if (points > 0) return "Left side wins!"
    return "Let's fight again!"
}

