// Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour. Young B knows she runs faster than A, and furthermore has not finished her cabbage.

// When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850 feet per hour. How long will it take B to catch A?

// More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?

// The result will be an array [hour, min, sec] which is the time needed in hours, minutes and seconds (round down to the nearest second) or a string in some languages.

// If v1 >= v2 then return nil, nothing, null, None or {-1, -1, -1} for C++, C, Go, Nim, Pascal, COBOL, Erlang, [-1, -1, -1] for Perl,[] for Kotlin or "-1 -1 -1".
// Examples:

// (form of the result depends on the language)

// Note:

//     See other examples in "Your test cases".

//     In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.

// ** Hints for people who don't know how to convert to hours, minutes, seconds:

//     Tortoises don't care about fractions of seconds
//     Think of calculation by hand using only integers (in your code use or simulate integer division)
//     or Google: "convert decimal time to hours minutes seconds"

// Fundamentals
// Mathematics
// Algorithms


// P:
    // v1: Number. Integer > 0. representing A's speed in feet per hour
    // v2: Number. Integer > 0. representing B's speed in feet per hour
    // g: Number. Integer > 0. representing A's lead at the start (in feet)
// R:
    // Array in the form [hours, min, sec] representing the time needed for B to catch up to A
    // Ignore fractional seconds
// E:
race(720, 850, 70)// => [0, 32, 18]
race(80, 91, 37)//   => [3, 21, 49]
// P:
    // If v1 > v2, return null
    // Get difference between v2 - v1 = d = speed difference per hour
    // Get g / d = t = time (in hours) needed for B to catch up to A.
    // Convert time in hours to hours, min, sec, and populate array.


function race(v1, v2, g) {
    console.log(`${v1}, ${v2}, ${g}`)
    let d = v2 - v1;
    if (d <= 0) return null
    t = g / d
    return decimalTimeToHours(t + 0.001)
}

function decimalTimeToHours(t) {
    let min = (t * 60) % 60
    let sec = (min * 3600) % 3600
    return [Math.floor(t), Math.floor(min), Math.floor(sec)]
}