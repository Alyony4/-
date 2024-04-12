function sum(a, b) {
  return a + b
}
function subtraction(a, b) {
  return a - b
}
function multiplication(a, b) {
  return a * b
}
function division(a, b) {
  return a / b
}
function remains(a, b) {
  return a % b
}

const OPERATIONS = {
  sum: '+',
  subtraction: '-',
  multiplication: '*',
  division: '/',
  remains: '%'
}

function calc(a, b, operation) {
  let result
  switch (operation) {
    case OPERATIONS.sum:
      result = sum(a, b)
      break
    case OPERATIONS.subtraction:
      result = subtraction(a, b)
      break
    case OPERATIONS.multiplication:
      result = multiplication(a, b)
      break
    case OPERATIONS.division:
      result = division(a, b)
      break
    case OPERATIONS.remains:
      result = remains(a, b)
      break
    default:
      alert('Operation Error!')
  }
  return result
}

export { calc }
