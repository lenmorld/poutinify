const app = require('./serverless/server');

let server_port = process.env.PORT || 4000;

app.listen(server_port, function () {
	console.log("Node-express server is running at ", server_port);
});