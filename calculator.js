import{calc} from './logic.js'

let inputField1 = document.querySelector('.input_field1');
let inputField2 = document.querySelector('.input_field2');
let inputField3 = document.querySelector('.input_field3');
const btnResult = document.querySelector('.result');

document.querySelectorAll('.button_numder').forEach(button => {
  button.addEventListener('click', () => {
    const value = button.value;
    const inputField1 = document.querySelector('.input_field1');
    inputField1.value += value;
  });
});

document.querySelectorAll('.button_numder_e').forEach(button => {
  button.addEventListener('click', () => {
    const value = button.value;
    const inputField2 = document.querySelector('.input_field2');
    inputField2.value += value;
  });
});

document.querySelectorAll('.button_numder').forEach(button => {
  button.addEventListener('click', () => {
    const value = button.value;
    const inputField3 = document.querySelector('.input_field3');
    inputField3.value += value;
  });
});


btnResult.addEventListener('click', function(){
  const a = Number(inputField1.value);
  const b = Number(inputField3.value);
  const operation = inputField2.value;
  
  const result = calc({
    a, b, operation
  })
  console.log(result);
});
