function factorial(num) {
  let factorial = 1
  for (let i = 0; i < num; i++) {
    factorial = factorial * (i + 1)
  }
  return factorial
}

// Would this work?
function factorial(num) {
  let factorial = num
  for (let i = 0; i < num; i--) {
    factorial = factorial * (i -1)
  }
  return factorial
}

// Time complexity: Logarithmic time, takes longer with larger input, but cuts problem size
// in half with each iteration