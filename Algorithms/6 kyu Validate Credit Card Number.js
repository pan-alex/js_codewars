// In this Kata, you will implement the Luhn Algorithm, which is used to help validate credit card numbers.

// Given a positive integer of up to 16 digits, return true if it is a valid credit card number, and false if it is not.

// Here is the algorithm:

//     Double every other digit, scanning from right to left, starting from the second digit (from the right).

//     Another way to think about it is: if there are an even number of digits, double every other digit starting with the first; if there are an odd number of digits, double every other digit starting with the second:

//     1714 ==> [1*, 7, 1*, 4] ==> [2, 7, 2, 4]

//     12345 ==> [1, 2*, 3, 4*, 5] ==> [1, 4, 3, 8, 5]

//     891 ==> [8, 9*, 1] ==> [8, 18, 1]

//     If a resulting number is greater than 9, replace it with the sum of its own digits (which is the same as subtracting 9 from it):

// [8, 18*, 1] ==> [8, (1+8), 1] ==> [8, 9, 1]

// or:

// [8, 18*, 1] ==> [8, (18-9), 1] ==> [8, 9, 1]

//     Sum all of the final digits:

//     [8, 9, 1] ==> 8 + 9 + 1 = 18

//     Finally, take that sum and divide it by 10. If the remainder equals zero, the original credit card number is valid.

//     18 (modulus) 10 ==> 8 , which is not equal to 0, so this is not a valid credit card number

// Algorithms

https://www.codewars.com/kata/5418a1dd6d8216e18a0012b2/train/javascript



// P: Integer of up to 16 digits

// R: Bool. True if valid credit card, false if not.
    // A credit card is valid if:
        // Double every 2nd digit, beginning from the 2nd last position and moving left.
            // If a number becomes greater than 9, subtract 9.
        // Sum all of the remaining digits
        // If the remainder is 0, it is valid, else it is invalid.

// E:
    // 13579 ==> [1, 3*, 5, 7*, 9] ==> [1, 6, 5, 14->5, 9] ==> 26 % 10 = 16 ==> false
    // 2121 ==> [2*, 1, 2*, 1] ==> [4, 1, 4, 1] ==> 10 % 10 = 0 ==> true

function validate(n){
    let cc = n.toString().split('').reverse()
    cc = cc.map( (x, i) => {
        if (i % 2 != 0) {
            x *= 2
            if (x > 9) x -= 9
        }
        return x*1
    })
    let sum = cc.reduce( (x, a) => x + a, 0)
    return sum % 10 == 0
}