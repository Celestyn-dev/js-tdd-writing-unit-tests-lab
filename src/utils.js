function isPalindrome(word) {
    if (typeof word !== 'string') {
      throw new Error("Input must be a string.");
    }
  
    // ✅ Check for empty string first
    if (word.length === 0) {
      return false;
    }
  
    // Then check for alphabetic characters
    if (!/^[A-Za-z]+$/.test(word)) {
      throw new Error("Input must contain only alphabetic characters.");
    }
  
    const cleanWord = word.toLowerCase();
    const reversed = cleanWord.split('').reverse().join('');
    return cleanWord === reversed;
  }
  
  module.exports = {
    isPalindrome,
  };
  