/**
 * save things temporarily, esp. fetched data from API
 * MVP: localStorage
 * improve: DB, even just a local file like diskdb
 */

function set(key, value) {
	// if Array, Object, etc stringify first
	localStorage.setItem(key, typeof value === 'string' ? value : JSON.stringify(value))
}


function get(key) {
	return JSON.parse(localStorage.getItem(key))
}

export default {
	set,
	get
}