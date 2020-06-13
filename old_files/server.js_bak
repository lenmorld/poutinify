let express = require('express');
let path = require("path");
let app = express();
let bodyParser = require('body-parser');
let cors = require('cors');
// let DIST_DIR = path.join(__dirname, "dist");

let DIST_DIR = path.join(__dirname, "src");

let port = 8081;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// serve React app on dist
app.use(express.static(DIST_DIR));

app.get("/", function (req, res) {
    res.sendFile(path.join(DIST_DIR, "index.html"));
});

// put Yelp API here, etc
// app.use('/spotify', require('./app/api/spotify'));

app.use('/yelp', require('./api/yelp'));

app.listen(port, function () {
    console.log("Node-express server is running at ", port);
});
