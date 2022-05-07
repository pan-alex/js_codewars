

    // "7777...8?!??!", exclaimed Bob, "I missed it again! Argh!" Every time there's an interesting number coming up, he notices and then promptly forgets. Who doesn't like catching those one-off interesting mileage numbers?

    // Let's make it so Bob never misses another interesting number. We've hacked into his car's computer, and we have a box hooked up that reads mileage numbers. We've got a box glued to his dash that lights up yellow or green depending on whether it receives a 1 or a 2 (respectively).

    // It's up to you, intrepid warrior, to glue the parts together. Write the function that parses the mileage number input, and returns a 2 if the number is "interesting" (see below), a 1 if an interesting number occurs within the next two miles, or a 0 if the number is not interesting.

    // Note: In Haskell, we use No, Almost and Yes instead of 0, 1 and 2.
    // "Interesting" Numbers

    // Interesting numbers are 3-or-more digit numbers that meet one or more of the following criteria:

    //     Any digit followed by all zeros: 100, 90000
    //     Every digit is the same number: 1111
    //     The digits are sequential, incementing†: 1234
    //     The digits are sequential, decrementing‡: 4321
    //     The digits are a palindrome: 1221 or 73837
    //     The digits match one of the values in the awesomePhrases array

    //     † For incrementing sequences, 0 should come after 9, and not before 1, as in 7890.
    //     ‡ For decrementing sequences, 0 should come after 1, and not before 9, as in 3210.

    // Error Checking

    // A number is only interesting if it is greater than 99!
    // Input will always be an integer greater than 0, and less than 1,000,000,000.
    // The awesomePhrases array will always be provided, and will always be an array, but may be empty. (Not everyone thinks numbers spell funny words...)
    // You should only ever output 0, 1, or 2.

// P: a number and a array of nummbers
// R: 0 (if not interesting), 1 (if within 2 miles of interesting ), or 2 (if interesting)
// E:
// "boring" numbers
isInteresting(3, [1337, 256]);    // 0
isInteresting(3236, [1337, 256]); // 0

// progress as we near an "interesting" number
isInteresting(11207, []); // 0
isInteresting(11208, []); // 0
isInteresting(11209, []); // 1
isInteresting(11210, []); // 1
isInteresting(11211, []); // 2

// nearing a provided "awesome phrase"
isInteresting(1335, [1337, 256]); // 1
isInteresting(1336, [1337, 256]); // 1
isInteresting(1337, [1337, 256]); // 2

//P:
    // Start with error checking:
        // Number is an int greater than 99
    // function to check for each interesting condition
        // Each function also checks if its within some tolerance (i.e., 2 miles) of an interesting number
    // Do logic to return 0, 1, or 2

function isInteresting(number, awesomePhrases) {
    if(number > 99) {
        if(checkIfInteresting(number, awesomePhrases)) return 2
    }
    if (number > 99 - 2) {
        if(checkIfInteresting(number+1, awesomePhrases) || checkIfInteresting(number+2, awesomePhrases)) return 1
    }
    return 0
}

function checkIfInteresting(number, awesomePhrases) {
    if(hasTrailingZeros(number) ||
       isEveryDigitSame(number) ||
       isSequentialDigits(number, 'increasing') ||
       isSequentialDigits(number, 'decreasing') ||
       isPalindrome(number) ||
       isAwesomePhrase(number, awesomePhrases)
       ) {
        return true
    }
}


function hasTrailingZeros(number) {
    const getTrailingDigits = number => +String(number).split('').slice(1).join('')
    if(getTrailingDigits(number) === 0) return true
}

function isEveryDigitSame(number) {
    str = String(number)
    if(str === str[0].repeat(str.length)) return true
}

function isSequentialDigits(number, direction='increasing') {
    let order
    if (direction === 'increasing') {
        order = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    } else {
        order = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0"]
    }
    str = String(number)
    for (i=0; i < str.length - 1; i++) {
        if (order.indexOf(str[i]) !== order.indexOf(str[i+1]) -1) return false
    }
    return true
}

function isPalindrome(number) {
    str = String(number)
    return str === str.split('').reverse().join('')
}

function isAwesomePhrase(number, awesomePhrases) {
    return awesomePhrases.includes(number)
}