let express = require('express');
let path = require("path");
let app = express();
let bodyParser = require('body-parser');
let cors = require('cors');

// let DIST_DIR = path.join(__dirname, "src");
let DIST_DIR = "public";

// serverless config
const serverless = require('serverless-http');
const router = express.Router();

// let server_port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// serve React app on dist
app.use(express.static(DIST_DIR));

app.use('/favicon.ico', express.static('./favicon.ico'));

app.get("/", function (req, res) {
    res.sendFile(path.join(DIST_DIR, "index.html"));
});

app.get("/test", function (req, res) {
    res.json({
        message: "OK"
    });
});

// put Yelp API here, etc

app.use('/yelp', require('../api/yelp'));

// app.listen(server_port, function () {
//     console.log("Node-express server is running at ", server_port);
// });


// SERVERLESS
app.use('/.netlify/functions/server', router);  // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);
