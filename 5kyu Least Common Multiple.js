// Write a function that calculates the least common multiple of its arguments; each argument is assumed to be a non-negative integer. In the case that there are no arguments (or the provided array in compiled languages is empty), return 1.

lcm(2,5) // 10
lcm(2, 3, 4) // 12
lcm(9) // 9
lcm(4, 6, 8) // 24
lcm(6, 9) // 18


let lcm = function(...nums) {
    let myLcm = 1
    for (i=0; i < nums.length; i += 1) {
        myLcm = findLcmTwoNums(nums[i], myLcm)
    }
    return myLcm
}


let findLcmTwoNums = function(a, b) {
    return a * b / findGcd(a, b)
}


let findGcd = function(a, b) {
    while (b) {
        [a, b] = [b, a % b]
    }
    return a
}
