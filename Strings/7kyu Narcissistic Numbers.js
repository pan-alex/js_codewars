// A Narcissistic Number is a number of length n in which the sum of its digits to the power of n is equal to the original number. If this seems confusing, refer to the example below.

// Ex: 153, where n = 3 (number of digits in 153)
// 1**3 + 5**3 + 3**3 = 153

// Write a method is_narcissistic(i) (in Haskell: isNarcissistic :: Integer -> Bool) which returns whether or not i is a Narcissistic Number.
// Fundamentals


function isNarcissistic(n){
    sum = String(n).split('').reduce( (sum, item, i, arr) => sum += Number(item)**arr.length, 0)
    return sum === n
  }