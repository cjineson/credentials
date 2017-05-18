'use strict';
//
// Get Username/Password credential pairs from nconf store
//
const CONFIG_FILE = 'credentials.json';
const fs = require('fs');
const nconf = require('nconf');
const aescrypto = require('../aescrypto');

// Setup nconf to use Env vars & config file in order
nconf.env().file({ file: CONFIG_FILE });

// Get username for given key
function getUserName(key) {
	//console.log ('credentials.getUserName:',key);
	return(nconf.get(`${key}:username`));
}

// Get password for given key
// If password value starts with enc: decrypt it first
function getPassword(key) {
	//console.log ('credentials.getPassword:',key);
	let password = nconf.get(`${key}:password`);
	// Encrypted password
	if (password.startsWith('enc:')) {
		let encpwd = password.substr(4);
		return(aescrypto.decrypt(encpwd))
	}
	//Clear-text password
	return(password);
}

function getPair(key) {
	//console.log ('credentials.getPair:',key);
	//return(nconf.get(key));
	var pair = {
		username: `${getUserName(key)}`,
		password: `${getPassword(key)}`
	}
	return(pair)
}

module.exports = { getUserName, getPassword, getPair };