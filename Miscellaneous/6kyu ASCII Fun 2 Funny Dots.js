//https://www.codewars.com/kata/59098c39d8d24d12b6000020/train/javascript
// Funny Dots

// You will get two integers n (width) and m (height) and your task is to draw the following pattern. Each line is seperated with a newline (\n)

// Both integers are equal or greater than 1; no need to check for invalid parameters.
// Examples


//                                             +---+---+---+
//              +---+                          | o | o | o |
// dot(1, 1) => | o |            dot(3, 2) =>  +---+---+---+
//              +---+                          | o | o | o |
//                                             +---+---+---+


// Base shape is
//    `+---+` +
// \n `| o |` +
// \n `+---+`

// Each n adds:
//    `---+` +
//    ` o |` +
//    `---+`

// Each m adds:
//
// \n `| o |` +
// \n `+---+`

// Represent each row of boxes as an array, and each row within the boxes (i.e., newline) as a subarray
// First row where n = 2:
// The first term is the string for the base shape.
// The second term is: `---+`.repeat(n-1)
// [
//  [`+---+` + `---+`],
//  [`| o |` + ` o |`],
//  [`+---+` + `---+`],
// ]
// Join each subarray with \n


// All subsequent rows are only 2 rows high:
// Each string within the subarrays is represented by: `| o |`.repeat(n)
// [
//  [`| o |` + ` o |`],
//  [`+---+` + `---+`],
// ]
// Join each subarray with \n.
// Join multiple arrays together when m > 2

// Could be done with strings only instead of arrays but I kind of prefer the organization of arrays
function dot(n,m){
  const topRow = [
    [`+---+` + `---+`.repeat(n-1) + `\n`],
    [`| o |` + ` o |`.repeat(n-1) + `\n`],
    [`+---+` + `---+`.repeat(n-1) + `\n`],
  ].join('')

  let bottomRows = ''
  if (m > 1) {
    bottomRows = [
      [`| o |` + ` o |`.repeat(n-1) + `\n`],
      [`+---+` + `---+`.repeat(n-1) + `\n`],
    ].join('')
  }

  return (topRow + bottomRows.repeat(m-1)).slice(0, -1)
}