let express = require('express');
let router = express.Router();
const request = require('request');

// import config file
const config = require('../config');

router.get('/test', function (req, res) {
    res.json({
        message: "Yelp OK"
    })
});

router.get('/places', function (req, res, next) {
    // use the token to access the Yelp API
    const options = {
        url: 'https://api.yelp.com/v3/businesses/search?location=Montreal&term=poutine',
        headers: {
            'Authorization': 'Bearer ' + config.yelp_api_key
        },
        json: true
    };

    request.get(options, function (error, response) {
        const body = response.body;
        // console.log(body);

        res.json(body.businesses);
    });
});

router.get('/places/:id', function (req, res, next) {
    // use the token to access the Yelp API
    console.log("fetchings business: ", req.params.id);
    const options = {
        url: `https://api.yelp.com/v3/businesses/${req.params.id}`,
        headers: {
            'Authorization': 'Bearer ' + config.yelp_api_key
        },
        json: true
    };

    request.get(options, function (error, response) {
        const body = response.body;
        res.json(body);
        // callback(response.body);
    });
});


//  GET https://api.yelp.com/v3/businesses/{id}/reviews

router.get('/reviews/:id', function (req, res, next) {
    // use the token to access the Yelp API
    console.log("fetching reviews: ", req.params.id);
    const options = {
        url: `https://api.yelp.com/v3/businesses/${req.params.id}/reviews`,
        headers: {
            'Authorization': 'Bearer ' + config.yelp_api_key
        },
        json: true
    };

    request.get(options, function (error, response) {
        const body = response.body;
        res.json(body.reviews);
        // callback(response.body);
    });
});

module.exports = router;