// A format for expressing an ordered list of integers is to use a comma separated list of either
//     individual integers
//     or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"

// Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

// Example:

// solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// // returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"



// For loop solution (easier to debug than map)
    // for each element (curr), compare to the previous element (prev).
        // If curr - 1 == prev, update counter to 1 and move on.
            // if curr - 1 == prev, update counter to 2, etc...
            // if curr - 1 != prev, splice array to remove previous elements and replace with the range.
            // Also special handling for last element in array: If its part of a range then include it in the range as well.

function solution(list){
    let counter = 0;
    rangeList = list;
    for (i=1; i < list.length; i++) {
        let curr = list[i]
        let prev = list[i-1]

        if (i == list.length - 1 && curr - 1 === prev && counter >= 1) { // If last item on list & it is consecutive & counter >=1
            list.splice(i-counter-1, counter+2, `${list[i-counter-1]}-${list[i]}`)
        } else if (curr - 1 === prev) { // If consecutive
            counter++;
        } else if(counter > 1) {  // If there are 3+ consecutive numbers (counter == 2+)
            list.splice(i-counter-1, counter+1, `${list[i-counter-1]}-${list[i-1]}`)
            i -= counter
            counter = 0;
        } else {
            counter = 0;
        }
    }   
    return rangeList.join(',')
}





// Walk across each number in list:
    // Check if each number is 1 greater than previous. If so store in a sub-array.
    // Use an accumulator, ranges, to hold all numbers and subarrays
    // For the first number, add to ranges.
    // Output is a list of all numbers & subarray w/ numbers to be converted to ranges
  
function solution(individualIntegers) {
    return individualIntegers
      .reduce(splitIntoRanges, [])
      .map(convertToRange)
      .join(",");
  }

function splitIntoRanges(ranges, number) {
    if (!ranges.length) {
        ranges.push([number]);
        return ranges;
    }
    
    var lastRange = ranges[ranges.length - 1];
    var lastNumber = lastRange[lastRange.length - 1];
    
    number === lastNumber + 1 ? lastRange.push(number) : ranges.push([number]);
    return ranges;
    }

// Check each element in output above; if it qualifies to be a range (3-consecutive numbers), concatenate the 1st and last.
    // Otherwise just return the numbers in the array.
function convertToRange(range) {
    return range.length < 3 ? range.join(",") : range[0] + "-" + range[range.length - 1];
    }
// Join all numbers & ranges

