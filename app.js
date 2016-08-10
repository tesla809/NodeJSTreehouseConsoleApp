// get profile
var profile = require("./profile.js");

// get users as arguments inside console.
var users = process.argv.slice(2);

// allows you to pass any number of user
// usually forEach is not supported in all browsers
// however, since node is based on Chrome's V8 engine, no need to worry
// works since users.forEach passes 1 parameter and the get method takes in 1 paramenter
users.forEach(profile.get);


/*
you could also do.
users.forEach(function(username){
  profile.get(username);
});
*/