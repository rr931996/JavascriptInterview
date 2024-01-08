function convertToJson(value) {
  try {
    // Use JSON.stringify to convert the value to a JSON string
    const jsonString = JSON.stringify(value);
    return jsonString;
  } catch (error) {
    // Handle any errors that may occur during the conversion
    console.error("Error converting to JSON:", error.message);
    return null;
  }
}

// Example usage:
const obj = { key: "value", number: 42, nested: { foo: "bar" } };
const jsonString = convertToJson(obj);
console.log(jsonString);
