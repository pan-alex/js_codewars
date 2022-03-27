// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
// Examples

// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

// Constraints

// 0 <= input.length <= 100


function validParentheses(parens) {
    arr = parens.split('')
    // Walk left-right. For each '(' add 1 and for each ')' subtract 1.
    // If the counter goes below 0 the parens are invalid.
    // Should end in 0.
    let count = 0;
    for (i in parens) {
        parens[i] == '(' ? count += 1 : count -= 1
        if (count < 0) break;
    }
    return count === 0
}
