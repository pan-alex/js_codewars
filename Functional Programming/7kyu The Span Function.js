// The span function is a good one to know. It accepts an array and a predicate function and returns two arrays. The first array contains all the elements of the argument array up to the item that caused the first failure of the predicate. The second returned array contains the rest of the original array. The original array is not modified.

// Your task is to...wait for it... write your own span function!!!

// Hint/Challenge: If you have completed the takeWhile function and the dropWhile function, then you can solve this problem in one line!


//P: An array and a predicate function. The predicate function will return true or false
//R: An array containing 2 arrays. The first array includes all of the `trues` and the second includes all of the `falses`. The original array is not modified
//E:
function isEven (x) {
  return Math.abs(x) % 2 === 0;
}

var arr = [2,4,6,1,8,10];

// This is true
span(arr, isEven) === [[2,4,6],[1,8,10]]

//P:
    // 1st impression:
    // Prepare a placeholder array [[], []]
    // Do a foreach loop. Check if predicate returned false on a previous iteration; if yes, default push to second array.
    // If not, check if predicate returned false for this iteration. If yes, update failed and push to second array. Otherwise push to first array

    // More elegant?:
    // Loop over arr with predicate(arr[i]); once it returns false, record i and break loop.
    // Return slice from (0,i) and (i, -1)


function span(arr, predicate) {
    const i = breakpoint(arr, predicate)
    return [arr.slice(0, i), arr.slice(i)]
}

function breakpoint(arr, pred) {
    for (i=0; i < arr.length; i++) {
        if(!pred(arr[i])) break;
    }
    return i
}