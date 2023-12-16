function deepCopyWithCircularHandling(value) {
  const seen = new WeakMap();

  function customReplacer(key, val) {
    if (typeof val === 'object' && val !== null) {
      if (seen.has(val)) {
        return '[Circular Reference]';
      }
      seen.set(val, true);
    }
    return val;
  }

  const jsonString = JSON.stringify(value, customReplacer);
  const deepCopy = JSON.parse(jsonString);

  return deepCopy;
}

// Example usage:
const obj = {
  prop1: 'value1',
  prop2: {
    prop3: 'value3',
    prop4: null,
  },
};

// Introduce circular reference
obj.prop2.prop4 = obj;

const deepCopy = deepCopyWithCircularHandling(obj);

console.log(deepCopy);
