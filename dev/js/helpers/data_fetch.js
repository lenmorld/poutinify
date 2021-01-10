// fetch helper
// sends requests either to cloud serverless function or local
// based on env
// e.g. if !DEPLOYED send request to http://localhost:4000/<endpoint>"
// else, send to https://poutinify.netlify.app/.netlify/functions/server/<endpoint>

function get(endpoint) {
	// TODO: all these env's are undefined when deployed
	console.log("ENV", typeof process.env.DEPLOYED, process.env.DEPLOYED, process.env.NETLIFY, process.env.YELP_API_KEY)
	// const server_base = (process.env.DEPLOYED === "true" || process.env.NETLIFY) ? '/.netlify/functions/server' : ''
	const server_base = process.env.DEPLOYED === "false" ? '' : '/.netlify/functions/server'
	const data_endpoint = [server_base, endpoint].join('')

	console.log(`Sending request to ${data_endpoint}`)

	return fetch(data_endpoint)
		.then(res => res.json());
}


export default {
	get
}


