function stringSplitter(str) {
  let splitString = []
  for (let i = 0; i < str.length; i++) {
    splitString.push(str.charAt(i))
  }
  return splitString
}

// Time complexity: Linear time, running time directly proportional to size of input