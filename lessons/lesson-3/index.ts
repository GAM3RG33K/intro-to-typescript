// Benefits of TypeScript
// challenges:
// - give the screens innerHTML a string
// - change the two input values to numbers

const button = document.querySelector('.button')
const firstInput = document.querySelector('#first-input')
const secondInput = document.querySelector('#second-input')
const screen = document.querySelector('.screen')
 
function addNumbers(a,b) {
     screen.innerHTML = a + b     
}
 
button.addEventListener('click', () => addNumbers(firstInput.value, secondInput.value))
