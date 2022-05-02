// Every book has n pages with page numbers 1 to n. The summary is made by adding up the number of digits of all page numbers.

// Task: Given the summary, find the number of pages n the book has.
// Example

// If the input is summary=25, then the output must be n=17: The numbers 1 to 17 have 25 digits in total: 1234567891011121314151617.

// Be aware that you'll get enormous books having up to 100.000 pages.

// All inputs will be valid.

// Here's the opposite kata, which is more complex (Paginating a huge book) https://www.codewars.com/kata/55905b7597175ffc1a00005a/javascript


// P: A number corresponding to the length of the string containing all digits from 1:n 

// R: n; which is the number where the length of a string concatenating all numbers from 1:n equals the input `summary`

// E:
amountOfPages(2) // == 2; 1-2
amountOfPages(10) // == 11; 1-2-3-4-5-6-7-8-9-10

// P:
    //Approach 1: While string.length is less than `summary` continue counting up & concatenating the result.
        // This approach is simple but could cause performance issues.
    //Approach 2: 


function amountOfPages(summary){
  let str = '';
  let counter = 0;
  while (str.length < summary) {
    counter++
    str += counter
  }
  return counter
}
