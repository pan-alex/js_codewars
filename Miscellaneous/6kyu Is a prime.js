// Is a Prime?

// Just your usual prime kata.. with some unknown restrictions.. Good luck!

// This kata requires a lot of guess work so try and try again. :)
// Note: You may not have any loops
function isPrime(str) {
    if (str.toLowerCase().includes('prime')) return true
    let nums = str.split(/[a-z]/gi)
    for (i in nums) {
        if(ElemIsPrime(Number(nums[i]))) return true
    }
    return false
}

function ElemIsPrime(num) { // Reused from previous kata (Is a prime number?)
    if (!num || num <= 1 ) return false
    if (num == 2) return true
    if (num % 2 == 0) return false
    let i=3
    while (i**2 <= num) {
      if (num % i == 0) return false
      i += 2
    }
    return true
}