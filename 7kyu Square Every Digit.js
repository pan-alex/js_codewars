// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 9^2 is 81 and 1^2 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num){
    // Split number into array of numbers
    const numAsArray = String(num).split('')
    // Square each number in array
    let numAsArraySquared = numAsArray.map(
        (digit) => digit ** 2
    )
    // Concatenate
    numSquared = +numAsArraySquared.join('')
    return numSquared;
  }