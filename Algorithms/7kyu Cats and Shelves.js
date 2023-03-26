// Description

// An infinite number of shelves are arranged one above the other in a staggered fashion.
// The cat can jump either one or three shelves at a time: from shelf i to shelf i+1 or i+3 (the cat cannot climb on the shelf directly above its head), according to the illustration:

//                  ┌────────┐
//                  │-6------│
//                  └────────┘
// ┌────────┐
// │------5-│
// └────────┘  ┌─────► OK!
//             │    ┌────────┐
//             │    │-4------│
//             │    └────────┘
// ┌────────┐  │
// │------3-│  │
// BANG!────┘  ├─────► OK!
//   ▲  |\_/|  │    ┌────────┐
//   │ ("^-^)  │    │-2------│
//   │ )   (   │    └────────┘
// ┌─┴─┴───┴┬──┘
// │------1-│
// └────────┘

// Input

// Start and finish shelf numbers (always positive integers, finish no smaller than start)
// Task

// Find the minimum number of jumps to go from start to finish
// Example
// Start 1, finish 5, then answer is 2 (1 => 4 => 5 or 1 => 2 => 5)


// Algorithms

// P: start = integer. Starting position. Always positive.
    // finish = integer. Ending position. Always larger than start

// R:
    // integer. The number of moves required to travel from start to finish. Cats can go up by 1 or 3 spaces at a time.

// E
solution(1, 5) // 2
solution(1, 6) // 3

// P
    // From start (current = 0):
        // Check if adding 3 would make current larger than finish:
            // No: Add 3
            // Yes: Add 1
            // Equal: End and return steps



function solution(start, finish) {
    let current = start
    let steps = 0
    while (current < finish) {
        current += (current + 3 <= finish) ? 3 : 1
        steps += 1
    }
    return steps
}