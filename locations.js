/* GET 'home' page */
module.exports.homelist = function(req, res) {
    res.render('locations-list', {
        title: 'The Best Slice of Amarillo',
        pageHeader: {
            title: 'The Best Slice of Amarillo',
            strapline: 'Giving Amarilloans the best pizza advice since 2017.'
        },
        sidebar: "Looking for pizza with a kick? 'The Best Slice in Amarillo' helps you find places to indulge in the very best pies Amarillo has to offer. 'The Best Slice' knows circular food, so no longer run in circles deciding.",
        locations: [{
            name: 'Palio\'s Pizza',
            address: '3562 S Soncy Rd, Amarillo, TX 79119',
            rating: 4.6,
            facilities: ['Alcoholic Drinks', 'Expanded Menu', 'Open Sunday'],
            distance: '100m'
        }, {
            name: '575 Pizzeria',
            address: '2803 Civic Cir, Amarillo, TX 79109',
            rating: 4.7,
            facilities: ['Pizza Dominant Menu', 'Alcoholic Drinks', 'Closed Sunday'],
            distance: '200m'
        }, {
            name: 'Fire Slice Pizzeria',
            address: '7306 SW 34th (space 10), Summit Shopping Center, Amarillo, TX 79121',
            rating: 4.3,
            facilities: ['Expanded Menu', 'Alcoholic Drinks', 'Close Early Sunday'],
            distance: '250m'
        }]
    });
};

/* GET 'Location info' page */
module.exports.locationInfo = function(req, res) {
    res.render('location-info', {
        title: 'Palio\'s Pizza',
        pageHeader: {
            title: 'Palio\'s Pizza'
        },
        sidebar: {
            context: 'Palio\'s Pizza is on "The Best Slice" due to its expanded menu featuring multiple pizzas, pastas, and its rich wine list.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
            name: 'Palio\'s Pizza',
            address: '3562 S Soncy Rd, Amarillo, TX 79119',
            rating: 4.6,
            facilities: ['Alcoholic Drinks', 'Expanded Menu', 'Open Sunday'],
            coords: {
                lat: 51.455041,
                lng: -0.9690884
            },
            openingTimes: [{
                days: 'Sunday - Thursday',
                opening: '11:00am',
                closing: '9:00pm',
                closed: false
            }, {
                days: 'Friday & Saturday',
                opening: '11:00am',
                closing: '10:00pm',
                closed: false
            },],
            reviews: [{
                author: 'Marcos Bryan',
                rating: 5,
                timestamp: 'July 2017',
                reviewText: 'Everything was awesome, food was so delicious and the service is excellent.  Ask for Ashley, she is an awesome server!  We can\'t wait to return.'
            }, {
                author: 'Jarrod Clark',
                rating: 4,
                timestamp: 'September 2016',
                reviewText: 'Good gourmet pizza. My kids really like the pasta too.'
            }]
        }
    });
};

/* GET 'Add review' page */
module.exports.addReview = function(req, res) {
    res.render('location-review-form', {
        title: 'Review Palio\'s on \'Best Slice\'',
        pageHeader: {
            title: 'Review Palio\'s Pizza'
        }
    });
};