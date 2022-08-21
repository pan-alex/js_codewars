// Write a function called sumIntervals/sum_intervals() that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.
// Intervals

// Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.
// Overlapping Intervals

// List containing overlapping intervals:

// [
//    [1,4],
//    [7, 10],
//    [3, 5]
// ]

// The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.
// Examples:

// sumIntervals( [
//    [1,2],
//    [6, 10],
//    [11, 15]
// ] ); // => 9

// sumIntervals( [
//    [1,4],
//    [7, 10],
//    [3, 5]
// ] ); // => 7

// sumIntervals( [
//    [1,5],
//    [10, 20],
//    [1, 6],
//    [16, 19],
//    [5, 11]
// ] ); // => 19

// Random Tests

//     100 tests with 1 - 10 intervals from the range [-20, 20]
//     100 tests with 20000 - 50000 intervals from the range [-10^9, 10^9]


// P: Array containing subarrays. Each subarray contains 2 numbers that represent an interval.
    // E.g., [ [4,6] ] gives 4, 5, 6.
    // Length of interval is range - 1. (i.e., length of the interval above is 2)
// R: The sum of all intervals. Overlapping intervals should only be counted once.

// E:
    sumIntervals([[1,5],[1,5]]) // 4; [1,5]: 1, 2, 3, 4, 5 -> 4; [1,5]: not counted.
    sumIntervals([[1,4],[7, 10],[3, 5]]) // 7;
                                            // [1,4] & [3,5]: 1, 2, 3, 4, 5 = 4
                                            // [7, 10]: 7, 8, 9, 10 = 3
    sumIntervals( [
        [1, 5],
        [1, 6],
        [5, 11],
        [16, 19],
        [10, 20]
        ] ); // => 19

    sumIntervals( [
        [1, 3],
        [5, 6],
        [8, 11],
        [9, 19],
        [10, 20],
        [22, 23]
        ] ); // => 16

// P:
    // Length of an interval:
        // Difference between the highest number and the lowest number.

    // Find overlapping ranges:
        // If the lowest number is smaller than the highest number in another subarray
        // If this occurs: Take the lowest number and the highest number and create a new range.

        // How to do this without comparing every subarray?
            // 1 way?
                // Get the range with the highest max value
                //


        // Approach that is not focused on performance:
            // Convert all intervals into numbers and then filter duplicates.

            // Solution time grows with length of array & size of interval ( O(n*m) )


let toNumbers = (interval) => {
    start = interval[0]
    end = interval.slice(-1)
    return Array.from({length: end-start}, (_,i) => i+start)
}

let filterDuplicates = (arr) => new Set(arr.flat());


function sumIntervals(intervals) {
    arr = intervals.map( x => toNumbers(x))
    set = filterDuplicates(arr)
    console.log(set)
    return set.size
  }


// Improved performance:
    // Sort array ascending by left interval value
    // Iterate through arr and  check if there is another interval that has <= LEFT number than the current interval's RIGHT number
    // If yes, replace the RIGHT value in the current interval with the larger RIGHT value of the two intervals.
    // If no, add that interval as a new element and continue search using the new interval.

    // Solution time grows with length of array ( O(n)? ) but not size of interval

function flattenOverlapping(arrs) {
    // Sort array ascending by left interval value
    arrs.sort( (a, b) => a[0] - b[0])
    f = [arrs.shift()]
    for (let i=0; i < arrs.length; i++) {
        // check if there is another interval that has <= LEFT number than the current interval's RIGHT number AKA overlapping
        if (arrs[i][0] <= f[f.length-1][1]) {
            f[f.length-1][1] = Math.max(f[f.length-1][1], arrs[i][1])
        } else {
            f.push(arrs[i])
        }
    }
    return f
}


function sumIntervals(intervals) {
    flat = flattenOverlapping(intervals)
    return flat.reduce( (sum, x) => sum + x[1] - x[0], 0)
}