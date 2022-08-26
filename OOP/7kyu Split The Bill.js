
// Function that takes in an array of expenses and returns how to split.

// P:
    // Object where each property represents a person and its value represents their amount contributed to group
// R:
    // Object where each property represents a person and its value represents their owed to group. Negative means owing. Positive means owed.
// E:
splitTheBill({A: 20, B: 15, C: 10}) // {A: 5, B: 0, C: -5}
splitTheBill({A: 40, B: 25, X: 10}) // {A: 15, B: 0, X: -15}
// P:


function splitTheBill(x) {
    let y = Object.assign({}, x);
    let sum = Object.values(x).reduce( (sum, x) => sum + x, 0);
    for (i in y) {
        y[i] -= sum / Object.keys(x).length
        y[i] = +y[i].toFixed(2)
    }
    return y
}