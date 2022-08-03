// In this kata, you have an input string and you should check whether it is a valid message. To decide that, you need to split the string by the numbers, and then compare the numbers with the number of characters in the following substring.

// For example "3hey5hello2hi" should be split into 3, hey, 5, hello, 2, hi and the function should return true, because "hey" is 3 characters, "hello" is 5, and "hi" is 2; as the numbers and the character counts match, the result is true.

// Notes:

//     Messages are composed of only letters and digits
//     Numbers may have multiple digits: e.g. "4code13hellocodewars" is a valid message
//     Every number must match the number of character in the following substring, otherwise the message is invalid: e.g. "hello5" and "2hi2" are invalid
//     If the message is an empty string, you should return true


// There is probably some regex solution to this but a simple approach would be:
    // Split the message into an array after each number
    // Check if the length of the array is equal to the number
    // If true for all elements, return true


function isAValidMessage(message){
    arr = message.split(/([0-9]+[a-zA-Z]+)/g).filter(x => x);
    return !arr.some(x => {
        if (isNaN(+x[0])) return true
        n = x.match(/[0-9]+/)[0]
        return n != x.length - n.length
    })
  }


// Clever regex solution
  // Capture numbers & letters
  // If adjacent number and length of letters are the same, 0 is given (and replaced with empty string)
  // If they do not match the values are kept and will return a "true" boolean value later
  // Invert boolean value to return true (if there are leftover values) or false (message successfully converted to empty string)
function isAValidMessage(message){
return !message.replace(/(\d+)(\D*)/g, (_, m, n) => m - n.length || '')
}