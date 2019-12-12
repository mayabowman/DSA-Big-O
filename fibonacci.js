function fibonacci(num) {
  if (num <= 2) {
    return 1
  }

  let num1 = 1
  let num2 = 1
  let currentNum

  for (let i = 3; i <= num; i++) {
    currentNum = num1 + num2
    num1 = num2
    num2 = currentNum
  }

  return currentNum
}

// Time complexity: Exponential time, running times grow rapidly with any increase in input size