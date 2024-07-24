// Number Types mini-challenge
// Write a function that will only accept numbers and attend to 
// all 'any' TypeScript weakness flags.

const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')
const reviewTotalDisplay = document.querySelector('#reviews')

const reviews = [
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

// Solution 

function showReviewTotal(value: number, name: string, isLoyaltyUser: boolean = false) {
    if (reviewTotalDisplay) {
        let valueString = ""
        if (value) {
            valueString = `Total Reviews: ${value}`
        }
        if (name) {
            if (valueString) {
                valueString = `${valueString} | `
            }
            valueString = `Last reviewed By - ${name} ${isLoyaltyUser ? '⭐' : ''}`
        }
        reviewTotalDisplay!.innerHTML = valueString
    }
}


showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)


const you = {
    userName: 'Bobby',
    isReturning: true,
}

function populateUser(isReturning: boolean, userName: string) {
    if (isReturning) {
        returningUserDisplay!.innerHTML = 'back'
    }
    userNameDisplay!.innerHTML = userName
}

populateUser(you.isReturning, you.userName.firstName)