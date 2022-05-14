// No one enjoys carrying around spare change. And to avoid all that jingling it's absolutely necessary to have an efficient algorithm to calculate the minimum number of coins needed to pay for something. So given a set of coin denominations determine the fewest number of coins required to add up to a given amount.

// For example: US Currency includes the penny, nickel, dime and quarter or the coins with denominations: [1, 5, 10, 25] If I were to ask you to make 75 cents you would return 3 since 75 cents can be made with 3 quarters.

// NOTES:

//     The coin denominations will contain at least one coin and will be greater than zero. [3] or [1, 100, 19] are both valid.
//     All amounts given will be solvable.
//     Be greedy...

//P amount of money to match, array of available coin denominations
//R Minimum number of coins needed to pay the amount
//E
const coins1= [1,5,10,25];
const coins2= [1,2,5,10,20,50];
coinsNeeded(123,coins1) // 9
coinsNeeded(75,coins2) //3;
//P
    // Sort coins by largest to smallest
    // Loop through coins. Divide amount by the # of coins that will fit in the remaining amount
        // Increment counter
        // then advance to next coin


        function coinsNeeded(amount, coinDenominations) {
            coinDenominations.sort( (a, b) => b - a)
            return coinDenominations.reduce( (nCoins, coin) => {
                n = Math.floor(amount / coin)
                amount -= n * coin
                return nCoins + n
            }, 0)
        }