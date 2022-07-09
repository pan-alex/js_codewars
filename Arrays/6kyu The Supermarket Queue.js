// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!
// input

//     customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
//     n: a positive integer, the number of checkout tills.

// output

// The function should return an integer, the total time required.
// Important

// Please look at the examples and clarifications below, to ensure you understand the task correctly :)
// Examples

// queueTime([5,3,4], 1)
// // should return 12
// // because when there is 1 till, the total time is just the sum of the times

// queueTime([10,2,3,3], 2)
// // should return 10
// // because here n=2 and the 2nd, 3rd, and 4th people in the
// // queue finish before the 1st person has finished.

// queueTime([2,3,10], 2)
// // should return 12

// Clarifications

//     There is only ONE queue serving many tills, and
//     The order of the queue NEVER changes, and
//     The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.

// N.B. You should assume that all the test input will be valid, as specified above.

// P.S. The situation in this kata can be likened to the more-computer-science-related idea of a thread pool, with relation to running multiple processes at the same time: https://en.wikipedia.org/wiki/Thread_pool



// P:
// Crude approach:
    // Amount of time required at each till is captured in an array. Eg., For 4 customers [1, 2, 3, 4]; 3 tills would be represented by [1, 2, 3].
    // Loop counts total time and decrements value in the till array by 1 per step. E.g., at step 1 the 3 tills would be [0, 1, 2].
    // If a till value reaches 0, fill the next available customer. E.g., [4, 1, 2]
    // Continue until all tills reach 0.

    customers = [1, 2, 3, 4]
    n = 1

function queueTime(customers, n) {
    tills = customers.slice(0, n)
    customers = customers.slice(n)
    time = 0
    while ((tills.sort( (a,b) => b-a)[0] > 0) || customers.length > 0) { // While tills are occupied (maximum value is > 0) and customers in queue
        time += 1
        tills = tills.map( a => {
            return (a === 0) ? customers.shift() - 1 || 0 : a - 1
        })
    }
    return time
}


// More elegant approach:
    // Don't need a while loop to count down to 0. Just knowing the min value in tills is enough.

function queueTime(customers, n) {
    tills = Array(n).fill(0)
    for (i in customers) {
        tills.sort( (a, b) => a-b)
        tills[0] += customers[i]
    }
    return tills.sort( (a, b) => b-a)[0]
}
