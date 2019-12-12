function powerCalculator(base, exp) {
  let num
  if (exp <= 0) {
    return console.log('Exponent should be greater than or equal to 0')
  }
  for (let i = 0; i < exp; i++) {
    num *= num
  }
  return num
}