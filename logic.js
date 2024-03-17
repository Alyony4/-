function sum(a, b){
     return a+b
}
function subtraction(a, b){
  return a-b
}
function multiplication(a, b){
  return a*b
}
function division(a, b){
  return a/b
}
function remains(a, b){
  return a%b
}


const OPERATIONS = {
  sum: '+',
  subtraction: '-',
  multiplication: '*',
  division: '/',
  remains: '%'
}

function calc(a, b, operation){
  switch (operation){
    case OPERATIONS.sum:
      result = (a, b);
      break
    
    case OPERATIONS.subtraction:
      result=(a, b)
      break
    case OPERATIONS.multiplication:
      result=(a, b)
      break
    
    case OPERATIONS.division:
      result=(a, b)
      break

    case OPERATIONS.remains:
      result=(a, b)
      break
  }
  return result;
}
export{calc}