// Description:
// Mirror - Mirror

// Can you mirror the properties on an object?

// Given an object with properties with no value

// abc: -
// arara: -
// xyz: -

// Return a new object that have the properties with its mirrored key!

// abc: cba
// arara: arara
// xyz: zyx

// "You cannot change the original object, because if you did that the reflection would change."
// Arrays
// Strings
// Algorithms

const mirror = obj => {
    const obj2 = {}
    for (prop in obj) {
        obj2[prop] = prop.toString().split('').reverse().join('')
    }
    return obj2
};