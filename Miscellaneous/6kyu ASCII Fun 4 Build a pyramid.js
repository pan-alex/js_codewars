// Description:
// Build a pyramid

// You will get a string s with an even length, and an integer n which represents the height of the pyramid and your task is to draw the following pattern. Each line is seperated with "\n".

//     n will always be greater than 3. No need to check for invalid parameters
//     There are no whitespaces at the end of the lines

// Example

// build_pyramid("00-00..00-00", 7) should return:

//                                     00-00..00-00
//                               0000--0000....0000--0000
//                         000000---000000......000000---000000
//                    00000000----00000000........00000000----00000000
//             0000000000-----0000000000..........0000000000-----0000000000
//       000000000000------000000000000............000000000000------000000000000
// 00000000000000-------00000000000000..............00000000000000-------00000000000000


// build_pyramid("..", 3)
//  ..
// ....
//......




// Looks like:
    // Add 1 repetition of each item in the original string for each new row
    // Add whitespace equal to string.length / 2 at the beginning of each row above.


// with i = 1 to n; For each row:
    // Amount of whitespace is equal to (n - i) * str.length/2
    // Pattern to repeat is:
        // str.split('').map( x => x.repeat(i)).join('')
    // Join whitespace and bricks to make a row.


function buildPyramid(str,n){
    let pyramid = ''
    for(let i=1; i <= n; i++) {
        let space = ' '.repeat((n-i) * str.length/2)
        let row = str.split('').map( x => x.repeat(i)).join('')
        pyramid += space + row + '\n'
    }
    return pyramid.slice(0, -1)
}





// Result of buildPyramid('!@#$%^&*()', 10):
//                                              !@#$%^&*()
//                                         !!@@##$$%%^^&&**(())
//                                    !!!@@@###$$$%%%^^^&&&***((()))
//                               !!!!@@@@####$$$$%%%%^^^^&&&&****(((())))
//                          !!!!!@@@@@#####$$$$$%%%%%^^^^^&&&&&*****((((()))))
//                     !!!!!!@@@@@@######$$$$$$%%%%%%^^^^^^&&&&&&******(((((())))))
//                !!!!!!!@@@@@@@#######$$$$$$$%%%%%%%^^^^^^^&&&&&&&*******((((((()))))))
//           !!!!!!!!@@@@@@@@########$$$$$$$$%%%%%%%%^^^^^^^^&&&&&&&&********(((((((())))))))
//      !!!!!!!!!@@@@@@@@@#########$$$$$$$$$%%%%%%%%%^^^^^^^^^&&&&&&&&&*********((((((((()))))))))
// !!!!!!!!!!@@@@@@@@@@##########$$$$$$$$$$%%%%%%%%%%^^^^^^^^^^&&&&&&&&&&**********(((((((((())))))))))