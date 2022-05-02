// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

function persistence(num) {
    //Loop
        //Split number into array
        //Get product of multiplying each element in array
        //Update counter
    let counter = 0;
    while (String(num).length > 1) {
        let product = 1;
        String(num).split('').forEach(digit => { product *= digit});
        counter += 1
        num = product
    }
    return counter
 }

 
 function persistence(num) {
    let counter = 0;
    
    num = String(string);
    
    while (num.length > 1) {
      counter++;
      num = num.split('').map(Number).reduce((a, b) => a * b).toString();
    }
    
    return counter;
 }