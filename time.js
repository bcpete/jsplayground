const moment = require('moment');
// Jan 1st 1970 00:00:00 am

// var date = new Date();
// console.log(date.getMonth());

// var date = moment();
// console.log(date.format('MMM Do, YYYY'));

// date.add(1, 'year');
// console.log(date.format('MMM Do, YYYY'));

// date.subtract(2, 'years').add(9, 'months');
// console.log(date.format('MMM Do, YYYY'));

var date = moment();
console.log(date.format('LT'));