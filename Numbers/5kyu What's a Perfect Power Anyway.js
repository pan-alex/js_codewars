// A perfect power is a classification of positive integers:

//     In mathematics, a perfect power is a positive integer that can be expressed as an integer power of another positive integer. More formally, n is a perfect power if there exist natural numbers m > 1, and k > 1 such that m^k = n.

// Your task is to check wheter a given integer is a perfect power. If it is a perfect power, return a pair m and k with mk = n as a proof. Otherwise return Nothing, Nil, null, NULL, None or your language's equivalent.

// Note: For a perfect power, there might be several pairs. For example 81 = 3^4 = 9^2, so (3,4) and (9,2) are valid solutions. However, the tests take care of this, so if a number is a perfect power, return any pair that proves it.
// Examples

// Test.describe("perfect powers", function(){
//   Test.it("should work for some examples",function(){
//     Test.assertSimilar(isPP(4), [2,2], "4 = 2^2");
//     Test.assertSimilar(isPP(9), [3,2], "9 = 3^2");
//     Test.assertEquals( isPP(5), null, "5 isn't a perfect number");
//   });
// });


// P: an integer to be checked for whether it is a perfect power

// R:
    // If the number is a perfect power: an array with the pair that make up the perfect power
    // If not: return null

// P:
    // In-efficient non-math solution:
        // For m: Loop over every integer between 1 and sqrt(n)
            // For k: Loop over every integer between 1 and sqrt(n)
                // Check if m^k == n. If yes, return m and k. If less, keep looping, if more, stop incrementing.
        // If no solution found return null


var isPP = function(n){ // hehe PP
    for (let m=2; m <= Math.sqrt(n); m++) {
        for (let k=2; k < n; k++) {
            if (m**k === n) return [m, k]
            if (m**k > n) break;
        }
    }
    return null
}


// E
isPP(4) // [2,2]
isPP(9) // [3,2]
isPP(5) // null
isPP(27) // [3^3]