// Yet another staple for the functional programmer. You have a sequence of values and some predicate for those values. You want to remove the longest prefix of elements such that the predicate is true for each element. We'll call this the dropWhile function. It accepts two arguments. The first is the sequence of values, and the second is the predicate function. The function does not change the value of the original sequence.


// Your task is to implement the dropWhile function. If you've got a span function lying around, this is a one-liner! Alternatively, if you have a takeWhile function on your hands, then combined with the dropWhile function, you can implement the span function in one line. This is the beauty of functional programming: there are a whole host of useful functions, many of which can be implemented in terms of each other.


//P: An array of numbers & a function that returns true or false
//R: An array of the numbers that come *after* the predicate returns false for the first time.
//E:

function isEven(num) {
    return num % 2 === 0;
  }
  var seq = [2,4,6,8,1,2,5,4,3,2];

  dropWhile(seq, isEven) // -> [1,2,5,4,3,2]

//P:
  // Loop over sequence and do predicate(seq[i])
  // Once the predicate returns false, record i and break loop
  // Return slice(i, -1)

function dropWhile(arr, pred) {
    return arr.slice(breakpoint(arr, pred))
  }


function breakpoint(arr, pred) {
    for (i=0; i < arr.length; i++) {
        if(!pred(arr[i])) break;
    }
    return i
}