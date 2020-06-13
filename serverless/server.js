const express = require('express');
const path = require("path");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// let DIST_DIR = path.join(__dirname, "public");
const DIST_DIR = "public";

// serverless config
const serverless = require('serverless-http');
const router = express.Router();

// let server_port = process.env.PORT || 4000;

// serve React app on dist
router.use(express.static(DIST_DIR));

router.get("/", function (req, res) {
    res.sendFile(path.join(DIST_DIR, "index.html"));
});

router.get("/test", function (req, res) {
    res.json({
        message: "OK"
    });
});

// put Yelp API here, etc
router.use('/yelp', require('../api/yelp'));

// app.listen(server_port, function () {
//     console.log("Node-express server is running at ", server_port);
// });

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


// SERVERLESS
router.use('/favicon.ico', express.static('./favicon.ico'));
app.use('/.netlify/functions/server', router);  // path must route to lambda

// local
app.use('/favicon.ico', express.static('./favicon.ico'));
app.use('/', router);  // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);
