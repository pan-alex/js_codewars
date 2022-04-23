// Caesar Ciphers are one of the most basic forms of encryption. It consists of a message and a key, and it shifts the letters of the message for the value of the key.

// Read more about it here: https://en.wikipedia.org/wiki/Caesar_cipher
// Your task

// Your task is to create a function encryptor that takes 2 arguments - key and message - and returns the encrypted message.

// Make sure to only shift letters, and be sure to keep the cases of the letters the same. All punctuation, numbers, spaces, and so on should remain the same.

// Also be aware of keys greater than 26 and less than -26. There's only 26 letters in the alphabet!
// Examples

// A message 'Caesar Cipher' and a key of 1 returns 'Dbftbs Djqifs'.

// A message 'Caesar Cipher' and a key of -1 returns 'Bzdrzq Bhogdq'.


//

function encryptor (key, message) {
    messageAsArray = message.split('')
    for (i in messageAsArray) {
        // Could do this with string methods but want to use charCodes for everything
        const num = message[i].charCodeAt()
        if (num >= 97 && num <= 122) {
            messageAsArray[i] = shiftChar(key, message[i], 97, 122)
        } else if (num >= 65 && num <= 90) {
            messageAsArray[i] = shiftChar(key, message[i], 65, 90)
        }
    }
    return messageAsArray.join('')
}


function shiftChar(key, char, floor, ceiling) {
    const num = char.charCodeAt()
    if ( num >= floor && (num <= ceiling)) { // If a-z
        let finalPosition = num + key
        while (finalPosition < floor || finalPosition > ceiling) {
            if (finalPosition < floor) finalPosition = ceiling - (floor - finalPosition) + 1
            if (finalPosition > ceiling) finalPosition = floor + (finalPosition - ceiling) - 1
        }
        return String.fromCharCode(String(finalPosition));
    }
    return char
}
