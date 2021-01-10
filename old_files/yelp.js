// fetch places with an AJAX call using axios
// ---> CORS
// axios.get(
//     'https://api.yelp.com/v3/businesses/search?location=Montreal&term=poutine',
//     {
//         headers: {'Authorization': "Bearer " + config.yelp_api_key},
//         crossDomain: true
//     })
//     .then(res => {
//        const businesses = res.businesses;
//
//        console.log("businesses", businesses);
//     }, err => {
//         console.log("error", err);
//     });


// router.get('/users', function(req, res, next) {
//
//     res.json([{
//         id: 1,
//         username: "samsepi0l"
//     }, {
//         id: 2,
//         username: "D0loresH4ze"
//     }]);
//
//     // res.render('index', { title: 'Express' });
// });