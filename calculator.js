import { calc } from './logic.js'

let inputField = document.querySelector('.input_field')
const btnResult = document.getElementById('result')

document.querySelectorAll('.button_number').forEach((button) => {
  button.addEventListener('click', () => {
    const value = button.value
    const inputField = document.querySelector('.input_field')
     inputField.value !== ''
      inputField.value += value
    
  })
})

btnResult.addEventListener('click', function () {
  const a = Number(inputField.value)
  const b = Number(inputField.value)
  const operation = inputField.value

  const result = calc(a, b, operation)
  alert(
    `Ответ: ${result} \nДля продолжения использования программы, пожалуйста, перезагрузите страницу!`
  )
})
