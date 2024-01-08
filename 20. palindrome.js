function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Compare the original string with its reverse
  const reversedStr = cleanStr.split('').reverse().join('');
  return cleanStr === reversedStr;
}

// Example usage:
const testString1 = "racecar";
console.log(`${testString1} is a palindrome: ${isPalindrome(testString1)}`); // true

const testString2 = "Hello, World!";
console.log(`${testString2} is a palindrome: ${isPalindrome(testString2)}`); // false
