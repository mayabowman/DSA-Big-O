function triangularNumber(n) {
  let total = 0
  for (i = 0; i < n; i++) {
    total += i
  }
  return total
}