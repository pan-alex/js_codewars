// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

function switcheroo(x){
    x = x.replace(/a/g, '_')
    x = x.replace(/b/g, 'a')
    x = x.replace(/_/g, 'b')
    return x
}


function switcheroo(x){
    return x.replace(/[ab]/g, char => char === 'a' ? 'b' : 'a')
}

