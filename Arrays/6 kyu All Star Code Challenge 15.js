// This Kata is intended as a small challenge for my students

// Your family runs a shop and have just brought a Scrolling Text Machine (http://3.imimg.com/data3/RP/IP/MY-2369478/l-e-d-multicolour-text-board-250x250.jpg) to help get some more business.

// The scroller works by replacing the current text string with a similar text string, but with the first letter shifted to the end; this simulates movement.

// Your father is far too busy with the business to worry about such details, so, naturally, he's making you come up with the text strings.

// Create a function named rotate() that accepts a string argument and returns an array of strings with each letter from the input string being rotated to the end.

// rotate("Hello") // => ["elloH", "lloHe", "loHel", "oHell", "Hello"]

// Note: The original string should be included in the output array. The order matters. Each element of the output array should be the rotated version of the previous element. The output array SHOULD be the same length as the input string. The function should return an emptry array with a 0 length string, '', as input.


// P: string.

// R: Array.
    // Each element is the original string with the position of each character shifted one position to the left (i.e., `current index - 1`, with index=0 moving to the last position).
    // The first element in the array is the original string shifted once. The last element is the original string.

// E:
rotate("Hello") // => ["elloH", "lloHe", "loHel", "oHell", "Hello"]


// P:
    // loop / map:
        // Create empty array
        // For i in str length-1:
            // Rotate word:
                // slice(i-1) + slice(0, i)
                // Push rotated word to array.

    // repeat function call:
        // While array length is less than str length:
            // Call rotate_once():
                // slice(1) + slice(0, 1)
                // Return rotated word
            // While the array length is less than str length, keep calling rotate_once()



// loop
function rotate(str) {
    res = []
    for (let i=0; i < str.length; i++) {
        res.push(str.slice(i+1) + str.slice(0, i+1))
    }
    return res
}

// map
function rotate(str) {
    return str.split('').map( (_, i) => str.slice(i+1) + str.slice(0, i+1))
}


function rotate_once(str) {
    return (str.slice(1) + str.slice(0, 1))
}

function rotate(str) {
    res = []
    while (res.length < str.length) {
        str = rotate_once(str)
        res.push(str)
    }
    return res
}