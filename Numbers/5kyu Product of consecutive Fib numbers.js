// The Fibonacci numbers are the numbers in the following integer sequence (Fn):

//     0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

// such as

//     F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

// Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

//     F(n) * F(n+1) = prod.

// Your function productFib takes an integer (prod) and returns an array:

// [F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)

// depending on the language if F(n) * F(n+1) = prod.

// If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prodyou will return

// [F(n), F(n+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)

// F(n) being the smallest one such as F(n) * F(n+1) > prod.
// Some Examples of Return:

// productFib(714) # should return (21, 34, true), 
//                 # since F(8) = 21, F(9) = 34 and 714 = 21 * 34

// productFib(800) # should return (34, 55, false), 
//                 # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55


// Note:

//     You can see examples for your language in "Sample Tests".


// Inefficient way:
    // Start from 0 and test every combination of values until it exceeds the value of product.
        // Store the last product and current product for the return

function Fibonacci(maxValue) {
    let arr =[0, 1]
    for (i=1; arr[i-1] * arr[i] < maxValue; i++) {
        arr.push(arr[i] + arr[i-1])
    }
    return arr
}

function productFib(prod){
    // Create a sequence of Fibonacci numbers. At each step multiply with the last Fib number until the product >= `prod`
    // If the product === prod add true to the return
    arrayOfFibs = Fibonacci(prod)
    last = arrayOfFibs[arrayOfFibs.length - 1]
    secondLast = arrayOfFibs[arrayOfFibs.length - 2]
    return [secondLast, last, secondLast * last === prod]
  }


  // Much more elegant solution.

  function productFib(prod){
    let [a, b] = [0, 1];
    while(a * b < prod) {
        [a, b] = [b, a + b];
    }
    return [a, b, a * b === prod];
  }