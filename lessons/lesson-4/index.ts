// Note: command to compile ts to js & open the html file in browser

// tsc index.ts --outFile index.pack.js
// open index.html

// Combined command: tsc index.ts --outFile index.pack.js && open index.html


// Number Types mini-challenge
// Write a function that will only accept numbers and attend to 
// all 'any' TypeScript weakness flags.

// Object Types
// In this scrim, based on what we just learnt, can you change userName to firstName, then
// add an age and lastName to the 'you' Object, making sure to account for it in the Specialised
// Object for defining its structure.

const returningUserDisplay2 = document.querySelector('#returning-user')
const userNameDisplay2 = document.querySelector('#user')
const reviewTotalDisplay2 = document.querySelector('#reviews')
let isOpen: boolean

const reviews2 = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
]


function showReviewTotal2(value: number, reviewer: string, isLoyalty: boolean) {
    const iconDisplay = isLoyalty ? '⭐' : ''
    reviewTotalDisplay2!.innerHTML = 'review total ' + value.toString() + '| last reviewed by ' + reviewer + ' ' + iconDisplay
}

showReviewTotal2(reviews2.length, reviews2[0].name, reviews2[0].loyaltyUser)


const you2: {
    firstName : string;
    lastName: string;
    age: number;
    isReturning: boolean;
} = {
   firstName: 'Bobby',
   lastName: 'Johnson',
   age: 28,
   isReturning: true,
}

console.log(you2.firstName)

function populateUser2(isReturning : boolean, userName: string ) {
    if (isReturning){
        returningUserDisplay2!.innerHTML = 'back'
    }
    userNameDisplay2!.innerHTML = userName
}

populateUser2(you2.isReturning, you2.firstName)
