// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.
// Examples

// maskify("4556364607935616") == "############5616"
// maskify(     "64607935616") ==      "#######5616"
// maskify(               "1") ==                "1"
// maskify(                "") ==                 ""

// // "What was the name of your first pet?"
// maskify("Skippy")                                   == "##ippy"
// maskify("Nananananananananananananananana Batman!") == "####################################man!"

// return masked string
function maskify(cc) {
    //Convert string to array
    arr = cc.split('')
    //Store last 4 elements in a separate variable
    lastFour = arr.slice(-4).join('');
    // Get length of array (minus 4), x. Repeat "#" x times. The text.repeat() method is not allowed
    let hashes = new String()
    for (i=0; i < cc.length - 4; i++) {
        hashes += '#'
    }
    // Join "#" and last 4 characters
    return (hashes + lastFour)
}


// Better solution
function maskify(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
  }