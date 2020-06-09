// init. environment variables
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
	node_env: process.env.NODE_ENV,
	port: process.env.PORT,
	yelp_api_key: process.env.YELP_API_KEY
};