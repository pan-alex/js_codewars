// Description:

// No time for stories. Reverse an array, return the result. Do whatever you want with the original array. Don't use Array.prototype.reverse.

// You have 30 bytes to spare.

// Example: [1, 2, 3] → [3, 2, 1]

// And this time you won't be able to do the thing from that kata.
    // reverse=a=>a=>a.sort(_=>1) is disabled
// require isn't allowed as well.
// Puzzles
// Arrays

// 30 bytes is this length:
reverse=a=>a.map(x=>'aaaaaaa')

reverse=a=>a.map(_,i=>a[a.length-1-i]) // 38

reverse=a=>{b=[];for(i in [...a])b.push(a.pop());return b} //63

reverse=a=>a.map(a.pop,[...a]) // 30