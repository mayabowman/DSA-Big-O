function reverseString(string) {
  const arr = string.split('')
  let reverseOrder = []

  for (let i=(arr.length - 1); i>= 0; i--) {
    reverseOrder.push(arr[i])
  }
  reverseOrder.join('')
  return reverseOrder
}

// Time complexity: Linear time, running time directly proportional to size of input