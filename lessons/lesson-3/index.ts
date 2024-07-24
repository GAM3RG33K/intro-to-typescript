// // Benefits of TypeScript
// // challenges:
// // - give the screens innerHTML a string
// // - change the two input values to numbers


// // Original code 

// const button = document.querySelector('.button')
// const firstInput = document.querySelector('#first-input')
// const secondInput = document.querySelector('#second-input')
// const screen = document.querySelector('.screen')

// function addNumbers(a,b) {
//      screen.innerHTML = a + b     
// }

// button.addEventListener('click', () => addNumbers(firstInput.value, secondInput.value))


// // Fixed code 
const button = document.querySelector('.button')
const firstInput = (<HTMLInputElement>document.querySelector('#first-input'))
const secondInput = (<HTMLInputElement>document.querySelector('#second-input'))
export const screen = document.querySelector('.screen')

function addNumbers(a: number, b: number) {
    if (screen) {
        screen!.innerHTML = (a + b).toString()
    }
}

button?.addEventListener('click', () => {
    if (firstInput && secondInput) addNumbers(parseInt(firstInput!.value), parseInt(secondInput!.value))
})
