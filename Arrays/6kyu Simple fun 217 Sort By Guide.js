// You're given an array of positive integers arr, and an array guide of the same length. Sort array arr using array guide by the following rules:

// if guide[i] = -1, arr[i] shouldn't be sorted;
// if guide[i] ≠ -1, arr[i] should be sorted,
//      and among all elements that should be sorted,
//      arr[i] should be the guide[i]th one (1-based).

// Input/Output

//     [input] integer array arr

// Array of positive integers.

// 1 ≤ a.length ≤ 100

// 1 ≤ A[i] ≤ 10^4

//     [input] integer array guide

// It is guaranteed that guide.length = a.length.

//     [output] an integer array

// Array sorted as described above.
// Example

// For

// arr = [56, 78, 3, 45, 4, 66, 2, 2, 4]

// guide = [3, 1, -1, -1, 2, -1, 4, -1, 5]

// the output should be [78,4,3,45,56,66,2,2,4]

// Here's how arr was sorted:

// Elements 3, 45, 66 and 2 don't need to be sorted,
// so we can put them in the resulting array right away:
// [?, ?, 3, 45, ?, 66, ?, 2, ?].
// Now we need to sort the remaining elements.
// According to the guide,
// they should be sorted in the following order:
// [78, 4, 56, 2, 4]
// Thus, the final answer is:
// [78, 4, 3, 45, 56, 66, 2, 2, 4].


sortByGuide([45, 56, 78], [-1, 2, 1])

// Sort according to guide, but any -1s are ignored and stored in their original place.

// One idea:
    // Loop over guide. Any time there is a -1, replace its value with its index + 1, add +1 to any values that are greater than that element's index + 1 (for 0 indexing)

    // Create a new empty array to store the . Loop through arr and guide together.

function sortByGuide(arr, guide) {

    let sort = arr
        .map((a, i) => ({ value: a, weight: guide[i] }))
        .filter(a => a.weight !== -1)
        .sort((a, b) => b.weight - a.weight)
        .map(a => a.value);

    return arr.map((a, i) => guide[i] === -1 ? a : sort.pop());

    }