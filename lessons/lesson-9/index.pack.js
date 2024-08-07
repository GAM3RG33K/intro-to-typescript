define("enums", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LoyaltyUser = exports.Permissions = void 0;
    var Permissions;
    (function (Permissions) {
        Permissions["ADMIN"] = "ADMIN";
        Permissions["READ_ONLY"] = "READ_ONLY";
    })(Permissions || (exports.Permissions = Permissions = {}));
    var LoyaltyUser;
    (function (LoyaltyUser) {
        LoyaltyUser["GOLD_USER"] = "GOLD_USER";
        LoyaltyUser["SILVER_USER"] = "SILVER_USER";
        LoyaltyUser["BRONZE_USER"] = "BRONZE_USER";
    })(LoyaltyUser || (exports.LoyaltyUser = LoyaltyUser = {}));
});
define("utils", ["require", "exports", "enums"], function (require, exports, enums_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.showReviewTotal = showReviewTotal;
    exports.populateUser = populateUser;
    var reviewTotalDisplay = document.querySelector('#reviews');
    var returningUserDisplay = document.querySelector('#returning-user');
    var userNameDisplay = document.querySelector('#user');
    function showReviewTotal(value, reviewer, isLoyalty) {
        var iconDisplay = enums_1.LoyaltyUser.GOLD_USER ? '⭐' : '';
        reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + '| last reviewed by ' + reviewer + ' ' + iconDisplay;
    }
    function populateUser(isReturning, userName) {
        if (isReturning == true) {
            returningUserDisplay.innerHTML = 'back';
        }
        userNameDisplay.innerHTML = userName;
    }
});
// Union Types Challenge
// 1. Fix the function to show the price per night for each property card only
// if isLoggedIn is true, or the you object has Permissions. (all permissions should work)
// 2. See what happens when a null object to be passed to the you objects permissions.
define("index", ["require", "exports", "utils", "enums"], function (require, exports, utils_1, enums_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var propertyContainer = document.querySelector('.properties');
    var footer = document.querySelector('.footer');
    var isLoggedIn;
    // Reviews
    var reviews = [
        {
            name: 'Sheia',
            stars: 5,
            loyaltyUser: enums_2.LoyaltyUser.GOLD_USER,
            date: '01-04-2021'
        },
        {
            name: 'Andrzej',
            stars: 3,
            loyaltyUser: enums_2.LoyaltyUser.BRONZE_USER,
            date: '28-03-2021'
        },
        {
            name: 'Omar',
            stars: 4,
            loyaltyUser: enums_2.LoyaltyUser.SILVER_USER,
            date: '27-03-2021',
            description: 'Great hosts, location was a bit further than said.'
        },
    ];
    var you = {
        firstName: 'Bobby',
        lastName: 'Brown',
        permissions: enums_2.Permissions.ADMIN,
        isReturning: true,
        age: 35,
        stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
    };
    // Array of Properties
    var properties = [
        {
            image: 'images/colombia-property.jpg',
            title: 'Colombian Shack',
            price: 45,
            location: {
                firstLine: 'shack 37',
                city: 'Bogota',
                code: 45632,
                country: 'Colombia'
            },
            contact: [+112343823978921, 'marywinkle@gmail.com'],
            isAvailable: true
        },
        {
            image: 'images/poland-property.jpg',
            title: 'Polish Cottage',
            price: 34,
            location: {
                firstLine: 'no 23',
                city: 'Gdansk',
                code: 343903,
                country: 'Poland'
            },
            contact: [+1298239028490830, 'garydavis@hotmail.com'],
            isAvailable: false
        },
        {
            image: 'images/london-property.jpg',
            title: 'London Flat',
            price: 23,
            location: {
                firstLine: 'flat 15',
                city: 'London',
                code: 35433,
                country: 'United Kingdom',
            },
            contact: [+34829374892553, 'andyluger@aol.com'],
            isAvailable: true
        }
    ];
    // Functions
    (0, utils_1.showReviewTotal)(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
    (0, utils_1.populateUser)(you.isReturning, you.firstName);
    var authorityStatus;
    isLoggedIn = false;
    function showDetails(authorityStatus, element, price) {
        if (authorityStatus) {
            var priceDisplay = document.createElement('div');
            priceDisplay.innerHTML = price.toString() + '/night';
            element.appendChild(priceDisplay);
        }
    }
    // Add the properties
    for (var i = 0; i < properties.length; i++) {
        var card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = properties[i].title;
        var image = document.createElement('img');
        image.setAttribute('src', properties[i].image);
        card.appendChild(image);
        propertyContainer.appendChild(card);
        showDetails(you.permissions, card, properties[i].price);
    }
    var currentLocation = ['London', '11.03', 17];
    footer.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2] + '°';
});
