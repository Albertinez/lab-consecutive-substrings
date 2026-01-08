/**
 * Returns all consecutive substrings of a given string
 * Time Complexity: O(n²) where n is the length of the string
 * Space Complexity: O(n²) for storing all substrings
 * 
 * @param {string} str - The input string
 * @returns {string[]} - Array of all consecutive substrings in order
 */
function consecutiveSubstrings(str) {
  // Initialize empty array to store all substrings
  const result = [];
  
  // Edge case: empty string returns empty array
  if (str.length === 0) {
    return result;
  }
  
  // Outer loop: iterate through each starting position (i = 0 to n-1)
  for (let i = 0; i < str.length; i++) {
    // Inner loop: iterate through each ending position (j = i+1 to n)
    for (let j = i + 1; j <= str.length; j++) {
      // Extract substring from index i (inclusive) to j (exclusive)
      // This creates all substrings starting at position i
      result.push(str.slice(i, j));
    }
  }
  
  // Return array containing all consecutive substrings
  return result;
}

// Export the function for testing
module.exports = consecutiveSubstrings;


