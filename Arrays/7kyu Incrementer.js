// Given an input of an array of digits, return the array with each digit incremented by its position in the array: the first digit will be incremented by 1, the second digit by 2, etc. Make sure to start counting your positions from 1 ( and not 0 ).

// Your result can only contain single digit numbers, so if adding a digit with its position gives you a multiple-digit number, only the last digit of the number should be returned.
// Notes:

//     return an empty array if your array is empty
//     arrays will only contain numbers so don't worry about checking that

// Examples:



// P: Array of numbers

// R: An array of numbers, where each number is the original number + its index (1-indexed); if the original number is greater than 10 then return the difference (i.e., single digit numbers only)

// P:
   // Do a map of the array
      //Each element has its index position+1 added to it. Do % 10 on the value


function incrementer(nums) {
   return nums.map( (num, i) => (num + 1 + i) % 10)
 }


 // E:
incrementer([1, 2, 3]) //  -->  [2, 4, 6]   #  [1+1, 2+2, 3+3]
incrementer([4, 6, 9, 1, 3]) //  -->  [5, 8, 2, 5, 8]  #  [4+1, 6+2, 9+3, 1+4, 3+5] # 9+3 = 12  -->  2