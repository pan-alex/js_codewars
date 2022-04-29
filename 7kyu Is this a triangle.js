// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).


function isTriangle(a,b,c) {
   if (
       (a > 0 && b > 0 && c > 0) && // all sides must be greater than zero [in hindsight this test is redundant to the 2nd since zero-values will fail the 2nd test]
       (a + b > c && a + c > b && b + c > a) // sum of any 2 lengths must be greater than the third
       ){
         return true
     }
     return false
}