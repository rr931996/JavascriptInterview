function findMaxElement(arr) {
  if (arr.length === 0) {
    // Handle empty array case
    return undefined;
  }

  let maxElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
}

// Example usage:
const numbers = [5, 2, 9, 1, 7];
const maxNumber = findMaxElement(numbers);
console.log("The maximum element is:", maxNumber);
