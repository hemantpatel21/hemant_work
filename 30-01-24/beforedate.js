let today = new Date();
let date = today.getDate();
let month = today.getMonth();
let year = today.getFullYear();
let day = today.getDay();

let twodaybefore = date - 2;

let monthname =  ["january","february","march","april","may","june","july","august","september","october","november","december"];
let dayname = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

console.log("Today is " + date + "," + monthname[month] + " " + year + "- " + dayname[day] + ".");
console.log("Tow days before date is " + twodaybefore + "," + monthname[month] + " " + year + "- " + dayname[day - 2] + ".");