function main_6() {
    // Note: command to compile ts to js & open the html file in browser

    // tsc index.ts --outFile index.pack.js
    // open index.html

    // Combined command: tsc index.ts --outFile index.pack.js && open index.html


    // Array Types
    // Can you add a stayedAt property to the you Object, that contains places you 
    // have stayed as strings, then add the correct key with assigned type to the 
    // existing Object Type?

    type userData = {
        image: string;
        title: string;
        couchSurfPricePerNight: number;
        address: {
            firstLineAddress: string;
            town: string;
            zipCode: string;
            country: string;
        };
        contactDetails: string;
        availableToRent: boolean;
    };

    const users: userData[] = [
        {
            image: "https://images.unsplash.com/photo-15075018152-c5 fade out.jpg",
            title: "Couchsurfing in Paris",
            couchSurfPricePerNight: 30,
            address: {
                firstLineAddress: "Rue du Faubourg Saint-Honoré, 7500 Paris, France",
                town: "Paris",
                zipCode: "75001",
                country: "France",
            },
            contactDetails: "+49 123 456 789",
            availableToRent: true
        },
        {
            image: "https://images.unsplash.com/photo-15075018152-c5 fade out.jpg",
            title: "Couchsurfing in Berlin",
            couchSurfPricePerNight: 40,
            address:
            {
                firstLineAddress: "Rue du Faubourg Saint-Honoré, 7500 Paris, France",
                town: "Berlin",
                zipCode: "12345",
                country: "Germany",
            },
            contactDetails: "+49 123 456 789",
            availableToRent: false
        }
    ];

    
}

main_6();