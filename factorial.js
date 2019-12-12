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