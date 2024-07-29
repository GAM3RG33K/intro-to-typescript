function main_51() {
    // Note: command to compile ts to js & open the html file in browser

    // tsc index.ts --outFile index.pack.js
    // open index.html

    // Combined command: tsc index.ts --outFile index.pack.js && open index.html


    // Array Types
    // Can you add a stayedAt property to the you Object, that contains places you 
    // have stayed as strings, then add the correct key with assigned type to the 
    // existing Object Type?

    // Array Types mini-challenge
    // Can you assign the correct Type to the reviews const? Please bear in mind everything
    // we have learnt about String, Boolean, Number, Object and Array Types for this.


    const returningUserDisplay = document.querySelector('#returning-user')
    const userNameDisplay = document.querySelector('#user')
    const reviewTotalDisplay = document.querySelector('#reviews')
    let isOpen: boolean

    type review = {
        name: string;
        stars: number;
        loyaltyUser: boolean;
        date: string;
    };
    const reviews: review[] = [
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


    function showReviewTotal(value: number, reviewer: string, isLoyalty: boolean) {
        const iconDisplay = isLoyalty ? '⭐' : ''
        reviewTotalDisplay!.innerHTML = 'review total ' + value.toString() + '| last reviewed by ' + reviewer + ' ' + iconDisplay
    }

    showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)


    const you: {
        firstName: string;
        lastName: string;
        age: number;
        isReturning: boolean;
        stayedAt: string[];
    } = {
        firstName: 'Bobby',
        lastName: 'Johnson',
        age: 28,
        isReturning: true,
        stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
    }

    console.log(you.firstName)

    function populateUser(isReturning: boolean, userName: string) {
        if (isReturning) {
            returningUserDisplay!.innerHTML = 'back'
        }
        userNameDisplay!.innerHTML = userName
    }

    populateUser(you.isReturning, you.firstName)

}

main_51();