// Description:

// Prerequirements

// This kata is the second part of the Barista Problem. I strongly encourage you to solve that one first.

// Context

// You got your RAISE!! YAY!!
// But now, time has passed, and a position has opened up for Barista Manager.

// Description

// In order to be promoted to the rank of manager, you must prove that you have the skills required, such as managing more than one coffee machine. So your boss gives you access to a number of coffee machines that all require the same amount of time to clean. Like before, ignore the time taken to write down the orders and focus only on the time needed to clean the machines and the time needed to brew each coffee.

// Task

// Given a list of orders and a number of coffee machines, you must return the minimum time needed for all of the customers to wait for their coffee, so the sum of all the waiting times.

// Note that

//     Some customers may ask you for just a glass of water, so that means that the time you would need to "brew" their "coffee" is 0. Also, you do not need to clean anything in this case. The time you need to fill up the glass of water is also insignificant in comparison to brewing a coffee. Water is free in this cafetaria. :)
//     The cleaning time for all coffee machines is 2 minutes.
//     These coffee machines include a self-cleaning system, so they can all begin cleaning themselves immediately after a coffee is made.
//     The time you need to walk from a coffee machine to another one, or with the coffee cup to a customer, is insignificant.
//     You only have access to these machines, so you can brew up to second parameter coffees at the same time.
//     If you receive the following orders [2,3,4] and you have 2 coffee machines, you could choose to brew the third and the second coffee first, so the third customer has to wait 4 minutes, and the second one has to wait 3 minutes. After that you clean the first (or the second) coffee machine, which that takes 2 minutes. Let's say that you choose to clean the first coffee machine so that means that the first customer has to wait 3 minutes for the second customer's coffee + 2 minutes for the cleaning + 2 minutes for his coffee to finish brewing. In total that would add up to 14 minutes. This is not necessarily the minimum time needed.
//     There may be no orders, which means that you will have to repeat the contest another day.
//     The number of coffee machines will always be smaller than or equal to the number of all of the orders you receive (water glasses included) (your boss won't give you more than you can actually use, nor read the orders themselves, just count them :) ).
//     There is also a person hired to clean all the coffee machines after you go home, so they are all clean the next day.
//     You choose in what order you brew the coffees.

// Examples

// [0,0,1] , 1 => 1
// [2,3,4] , 1 => 22
// [2,3,4] , 2 => 13
// [2,3,4] , 3 => 9

// Limits

// 0 <= number of orders <= 30
// 0 <= size of orders <= 40
// 0 <= coffee machines <= number of orders


// P:
    // Param 1: Array containing positive integers. // Number represent time required to complete an order
        // All orders > 0 represent coffee orders and require 2 minutes of cleaning time
        // Orders = 0 represent water orders and do not require cleaning (aka they can be ignored)
    // Param 2: Positive Integer. Indicates the number of coffee machines available to you.
// R:
    // integer. Return the minimum number of time that it will take for all customers to get their coffee (aka, do not include the last cleaning time after each customer has received their drink)
// E:
barista([0,0,1] , 1) //=> 1; 0 + 0 + 1
barista([2,3,4] , 1)
    // 2 = 2
    // 2 + 3+2 = 7
    // 7 + 4+2 = 13
    // 2 + 7 + 13 = 22
barista([2,3,4] , 2) //=> 13
    // Machine 1:
        // 2 = 2
        // 2 + 3+2 = 7
    // Machine 2:
        // 4 = 4
    // 2 + 7 + 4 = 13
barista([2,3,4] , 3) //=> 9
    // Machine 1: 2
    // Machine 2: 3
    // Machine 3: 4
    // 2 + 3 + 4 = 9
barista([1, 2, 3, 4, 8], 4) // 21
barista([1, 2, 3, 4, 8], 2) // 34

const cumWaitTime = (coffees) => coffees.reduce((acc, x, i) => acc + x * (coffees.length-i) + 2*i, 0)

const sum = (arr) => arr.reduce( (sum, x) => sum + x, 0)

function barista(coffees, cMachines) {
    machines = Array(cMachines).fill([])
    coffees = coffees.filter(x=>x!=0).sort( (a,b) => a - b)
    for (i in coffees) {
        machines[i % (cMachines)] = machines[i % (cMachines)].concat(coffees[i])
    }
    waitTimesPerMachine = machines.map(coffees=>cumWaitTime(coffees))
    return sum(waitTimesPerMachine)
}
