// ecause my other two parts of the serie were pretty well received I decided to do another part.
// Puzzle Tiles

// You will get two Integer n (width) and m (height) and your task is to draw following pattern. Each line is seperated with '\n'.

//     Both integers are equal or greater than 1. No need to check for invalid parameters.
//     There are no whitespaces at the end of each line.

// e.g.:



//                                        \_( )\_\_ \_( )\_\_ \_( )\_\_ \_( )\_\_
//                                      \_|     \_|     \_|     \_|     \_|
//                                     (\_   \_ (\_   \_ (\_   \_ (\_   \_ (\_
//                                      |\_\_( )\_|\_\_( )\_|\_\_( )\_|\_\_( )\_|
//                                      |\_     |\_     |\_     |\_     |\_
//              puzzleTiles(4,3)=>       \_) \_   \_) \_   \_) \_   \_) \_   \_)
//                                      |\_\_( )\_|\_\_( )\_|\_\_( )\_|\_\_( )\_|
//                                      \_|     \_|     \_|     \_|     \_|
//                                     (\_   \_ (\_   \_ (\_   \_ (\_   \_ (\_
//                                      |\_\_( )\_|\_\_( )\_|\_\_( )\_|\_\_( )\_|


// For more informations take a look in the test cases!


//1x1:
//   _( )__
// _|    _|
//(_   _ (_
// |__( )_|

//'   _( )__\n _|     _|\n(_   _ (_\n |__( )_|'

//2x3:
//   _( )__+ _( )__ _( )__\n
// _|     _|+     _|     _|\n
//(_   _ (_+   _ (_   _ (_\n
// |__( )_|+__( )_|__( )_|\n
// |_     |_+     |_     |_\n
//  _) _   _)+ _   _) _   _)\n
// |__( )_|+__( )_|__( )_|


function puzzleTiles(n, m){
    const topRow = '   _( )__'  + ' _( )__'.repeat(n-1) + `\n`
    let bottomRows = []
    for (let i=0; i < m; i++) {
        if (i % 2 === 0) {
            bottomRows = bottomRows +
            [
            [` _|     _|` + `     _|`.repeat(n-1) + `\n`],
            [`(_   _ (_` + `   _ (_`.repeat(n-1) + `\n`],
            [` |__( )_|` + `__( )_|`.repeat(n-1) + `\n`],
            ].join('')
        } else {
            bottomRows = bottomRows +
            [
            [` |_     |_`  + `     |_`.repeat(n-1) + `\n`],
            [`  _) _   _)` + ` _   _)`.repeat(n-1) + `\n`],
            [` |__( )_|`   + `__( )_|`.repeat(n-1) + `\n`],
            ].join('')
        }
    }
    return (topRow + bottomRows).slice(0, -1)
}
