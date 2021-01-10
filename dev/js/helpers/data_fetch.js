// fetch helper
// sends requests either to cloud serverless function or local
// based on env
// e.g. if DEPLOYED or NETLIFY(built-in), send to https://poutinify.netlify.app/.netlify/functions/server/<endpoint>
// else http://localhost:4000/<endpoint>"

function get(endpoint) {
	console.log("ENV", typeof process.env.DEPLOYED, process.env.DEPLOYED, process.env.NETLIFY, process.env.YELP_API_KEY)
	const server_base = (process.env.DEPLOYED === "true" || process.env.NETLIFY) ? '/.netlify/functions/server' : ''
	const data_endpoint = [server_base, endpoint].join('')

	console.log(`Sending request to ${data_endpoint}`)

	return fetch(data_endpoint)
		.then(res => res.json());
}


export default {
	get
}


