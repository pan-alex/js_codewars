// Complete the function piecesValue/pieces_value that accepts two arguments, an 8x8 array (arr),representing a chess board and a string (s). Depending on the value of the string s (which can be either "white" or "black") calculate the value of the pieces on the table for the corresponding player(white or black).
// Empty fields will be marked as a space " " while the fields with pieces look like this:

// "w-king"   //meaning white king
// "b-bishop" //a black bishop
// "w-pawn"   //white pawn

// ...and so on. Preloaded for you there is an object called hash (values in python):

// const hash = Object.freeze({
//   queen: 9, rook: 5, bishop: 3, knight: 3, pawn: 1
// });

// Having the estimated value of each piece. This is a rough estimation and the real piece value depends on other factors in game as well ,such as the game being a closed or open one, which can favor either knights or bishops. (If you are interested more about that here: open vs closed game.) But for our purposes we will use the mentioned values.
// Note: the value of a king cannot be estimated because without it the game would be over, so DO NOT take into consideration the value of the king.You will not be tested for invalid input.
// Example case:

// piecesValue([[' ',' ',' ',' ',' ',' ',' ',' '],
//              [' ',' ','b-queen',' ',' ',' ',' ','w-queen'],
//              [' ','b-king',' ',' ','w-rook',' ',' ',' '],
//              [' ',' ',' ',' ',' ',' ',' ',' '],
//              [' ',' ',' ',' ',' ',' ',' ',' '],
//              ['w-king',' ',' ',' ',' ',' ',' ',' '],
//              [' ',' ',' ',' ',' ',' ',' ',' '],
//              [' ',' ',' ',' ',' ',' ',' ',' ']],
//              'white');
// //should be 14 since white has a queen and a rook
// //while the same table would return 9 for 'black'

// piecesValue([[' ',' ',' ',' ',' ',' ',' ',' '],
//              [' ',' ','b-queen',' ',' ',' ',' ','w-queen'],
//              [' ','b-king',' ','b-pawn','w-rook',' ',' ',' '],
//              [' ',' ',' ',' ','w-pawn',' ',' ',' '],
//              [' ',' ',' ',' ',' ','w-bishop',' ',' '],
//              ['w-king',' ',' ',' ',' ',' ',' ',' '],
//              [' ',' ',' ','b-pawn',' ',' ',' ',' '],
//              [' ',' ',' ',' ',' ',' ',' ',' ']],
//              'white');
// //should return 18 for 'white' (queen, rook, pawn, bishop)
// //and 11 in case s is 'black'(queen, pawn, pawn)


// P: An array containing 8 arrays (each sub-array representing a rank on an 8x8 chess board), and 'white' or 'black'

// R: The value of all pieces for the given side using the hash provided below (ignore kings)

// E:
var r1 = [['b-bishop',' ',' ',' ',' ',' ',' ',' '],
        [' ',' ','b-queen',' ',' ',' ',' ','w-queen'],
        [' ','b-king',' ','b-pawn','w-rook',' ',' ',' '],
        [' ',' ',' ',' ','w-pawn',' ',' ',' '],
        [' ',' ',' ',' ',' ','w-bishop',' ',' '],
        ['w-king',' ',' ',' ',' ',' ',' ',' '],
        [' ',' ','b-pawn','b-pawn',' ',' ',' ',' '],
        [' ',' ',' ',' ',' ',' ',' ',' ']]; // w: 18; b: 15
piecesValue(r1,'white')
piecesValue(r1,'black')

var r2 = [[' ',' ',' ',' ',' ',' ',' ',' '],
        [' ',' ',' ',' ',' ','b-king',' ',' '],
        [' ','b-knight',' ',' ','w-pawn',' ',' ',' '],
        [' ',' ','w-bishop',' ',' ',' ',' ',' '],
        [' ',' ',' ',' ',' ',' ',' ',' '],
        [' ','w-pawn',' ',' ',' ','w-pawn',' ',' '],
        [' ',' ',' ',' ','b-pawn',' ',' ',' '],
        [' ','w-rook',' ',' ',' ','w-king',' ',' ']]; // w: 11; b: 4
piecesValue(r2,'white')
piecesValue(r2,'black')

// P:
    // Loop through each array. Match the starting string "b-" or "w-".
        // If match, look up the piece value in the hash & add to the total.



const hash = Object.freeze({
    queen: 9, rook: 5, bishop: 3, knight: 3, pawn: 1,
  });

  function piecesValue(arr, s) {
    return arr.reduce( (sumTotal, subArr) => sumTotal + rowSum(subArr, s), 0)
  }


function rowSum(subArr, s) {
    return subArr.reduce( (rankTotal, x) => {
        const piece = x.split('-')
        if ( !(s[0] === piece[0]) || piece[1] === 'king' ) return rankTotal
        return rankTotal + hash[piece[1]]
    }, 0)
}

