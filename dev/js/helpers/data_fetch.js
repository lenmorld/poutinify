/*
	hack to know if we're running on server/cloud
	or local
	1. if cloud - use serverless functions
		e.g. website.com/.netlify/functions/server/items
	2. if local - use
		e.g. website.com/items

	This hack is used because I didn't find a simple way to:
	1. read .env from frontend
	2. automatically redirect requests from .netlify/functions/server/ to /
			based on environment
*/
function get(endpoint) {
	const server_base = window.location.hostname === "poutinify.netlify.app" ? '/.netlify/functions/server' : ''
	const data_endpoint = [server_base, endpoint].join('')

	console.log(`Sending request to ${data_endpoint}`)

	return fetch(data_endpoint)
		.then(res => res.json());
}


export default {
	get
}


