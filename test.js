const credentials = require ('./credentials');

console.log('creds-systema:username',credentials.getUserName('creds-systema'));
console.log('creds-systema:password',credentials.getPassword('creds-systema'));
console.log('creds-systemb:username',credentials.getPassword('creds-systemb'));
console.log('creds-systemb:password',credentials.getPassword('creds-systemb'));
console.log('creds-systema',credentials.getPair('creds-systema'))
console.log('creds-systemb',credentials.getPair('creds-systemb'));

