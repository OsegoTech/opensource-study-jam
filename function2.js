// generate for me a function that takes in a string and returns the string in reverse
// Example: reverseString('hello') => 'olleh'

function reverseString(str) {
    return str.split('').reverse().join('');

}

module.exports = reverseString;