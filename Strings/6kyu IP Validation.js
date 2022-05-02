// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.
// Valid inputs examples:

// Examples of valid inputs:
// 1.2.3.4
// 123.45.67.89

// Invalid input examples:

// 1.2.3
// 1.2.3.4.5
// 123.456.78.90
// 123.045.067.089

// Notes:

//     Leading zeros (e.g. 01.02.03.04) are considered invalid
//     Inputs are guaranteed to be a single string


// Tests:
    // Includes 3 periods
    // each number ranges from 0-255
    // There are no padded 0s


function isValidIP(str) {
    const octets = str.split('.')
    if (/[^\d\.]/.test(str) ) return false // String contains only numbers and periods
    if (octets.length !== 4) return false // String contains only 3 periods
    return octets.every( octet => {
        return (octet.length >= 1) // Length of each octet is at least 1
            && (+octet >= 0 && +octet <= 255) // Value is between 0 and 255
            && (octet[0] != 0 || octet === '0') // the first element is not 0 unless the value is 0. I.e., no zero-padding
    })
}


const net = require('net');
const isValidIP = (s) => net.isIP(s);