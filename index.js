const classCont = document.querySelector('.calculator');
const classText = document.querySelector('.text');
const inputNumber = document.querySelector('.input_number');
const btnResult = document.querySelector('.result');
const calssContBtn = document.querySelector('.container_button');
const classBtn = document.querySelector('.button');
const classBtnNum = document.querySelector('.button_number');
const classElements = document.querySelector('.elements');
const classBtnNumE = document.querySelector('.button_number_e');

btnResult.addEventListener('click', function(){
const a = Number(inputNumber.value);
const b = Number(inputNumber.value);
const operation = classElements.value;

const result = calc({
  a, b, operation
})
alert(result)
})