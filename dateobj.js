var date5 = new Date();
console.log("Date = " + date5);
var date1 = new Date(500000000000);
console.log("Date = " + date1);
var date2 = new Date("2019-01-16");
console.log("Date = " + date2);
var date4 = new Date(2018, 5, 5, 17, 23, 42, 11);
console.log("Date = " + date4);
var date = new Date(2017, 4, 4, 17, 23, 42, 11);
date.setDate(13);
date.setMonth(13);
date.setFullYear(2013);
date.setHours(13);
date.setMinutes(13);
date.setSeconds(13);
console.log("Year = " + date.getFullYear());
console.log("Date = " + date.getDate());
console.log("Month = " + date.getMonth());
console.log("Day = " + date.getDay());
console.log("Hours = " + date.getHours());
console.log("Minutes = " + date.getMinutes());
console.log("Seconds = " + date.getSeconds());
