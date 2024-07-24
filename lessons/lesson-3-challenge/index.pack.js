// Note: command to compile ts to js & open the html file in browser
// tsc index.ts --outFile index.pack.js
// open index.html
// Combined command: tsc index.ts --outFile index.pack.js && open index.html
// Number Types mini-challenge
// Write a function that will only accept numbers and attend to 
// all 'any' TypeScript weakness flags.
var returningUserDisplay = document.querySelector('#returning-user');
var userNameDisplay = document.querySelector('#user');
var reviewTotalDisplay = document.querySelector('#reviews');
var reviews = [
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
];
// Solution 
function showReviewTotal(value, name, isLoyaltyUser) {
    if (isLoyaltyUser === void 0) { isLoyaltyUser = false; }
    if (reviewTotalDisplay) {
        var valueString = "";
        if (value) {
            valueString = "Total Reviews: ".concat(value);
        }
        if (name) {
            if (valueString) {
                valueString = "".concat(valueString, " | ");
            }
            valueString = "".concat(valueString, "Last reviewed By - ").concat(name, " ").concat(isLoyaltyUser ? '⭐' : '');
        }
        reviewTotalDisplay.innerHTML = valueString;
    }
}
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
var you = {
    userName: 'Bobby',
    isReturning: true,
};
function populateUser(isReturning, userName) {
    if (isReturning) {
        returningUserDisplay.innerHTML = 'back';
    }
    userNameDisplay.innerHTML = userName;
}
populateUser(you.isReturning, you.userName);
