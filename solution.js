/**
 * Returns all consecutive substrings of a given string
 * @param {string} str - The input string
 * @returns {string[]} - Array of all consecutive substrings
 */
function getAllSubstrings(str) {
    const result = [];
    
    // Outer loop: iterate through each starting position
    for (let i = 0; i < str.length; i++) {
        // Inner loop: iterate through each ending position
        for (let j = i + 1; j <= str.length; j++) {
            // Extract substring from index i to j
            result.push(str.slice(i, j));
        }
    }
    
    return result;
}

// Test cases
console.log(getAllSubstrings('abc'));  // ['a', 'ab', 'abc', 'b', 'bc', 'c']
console.log(getAllSubstrings('a'));    // ['a']
console.log(getAllSubstrings(''));     // []
console.log(getAllSubstrings('phone')); // All substrings of 'phone'

module.exports = getAllSubstrings;