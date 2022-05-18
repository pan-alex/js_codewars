// Imagine two rings with numbers on them. The inner ring spins clockwise (decreasing by 1 each spin) and the outer ring spins counter clockwise (increasing by 1 each spin). We start with both rings aligned on 0 at the top, and on each move we spin each ring one increment. How many moves will it take before both rings show the same number at the top again?

// The inner ring has integers from 0 to innerMax and the outer ring has integers from 0 to outerMax, where innerMax and outerMax are integers >= 1.

// P: 2 numbers representing number of spins on each ring before they reach their original position.

// R: The number of spins before both rings display the same number

// P:
    // Loop:
        // Do a move and increment each ring the the appropriate direction
        // Check if the rings are in the same position
        // Return # of moves


function spinningRings(innerMax, outerMax) {
    let posInner = 0;
    let posOuter = 0;
    let i = 0;
    while(++i) {
        posInner = posInner > 0 ? posInner - 1 : innerMax
        posOuter =  posOuter < outerMax ? posOuter + 1 : 0
        if (posInner === posOuter) return i
    }
  };


//   posInner = innerMax - ( (i+innerMax) % innerMax+1 )
//   posOuter = (outerMax + i + 1) % outerMax+1

a = (a + m) % (m + 1);
b = (b + 1) % (n + 1);

// E
    // e.g. if innerMax is 2 and outerMax is 3 then after
    // 1 move: inner = 2, outer = 1
    // 2 moves: inner = 1, outer = 2
    // 3 moves: inner = 0, outer = 3
    // 4 moves: inner = 2, outer = 0
    // 5 moves: inner = 1, outer = 1
    // Therefore it takes 5 moves for the two rings to reach the same number
spinningRings(2, 3) // 5

    // e.g. if innerMax is 3 and outerMax is 2 then after
    // 1 move: inner = 3, outer = 1
    // 2 moves: inner = 2, outer = 2
    // Therefore it takes 2 moves for the two rings to reach the same number
spinningRings(3, 2) // 2
