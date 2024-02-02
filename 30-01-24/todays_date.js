//console.log("hello Java Script");

let today = new Date();
let date = today.getDate();
let month = today.getMonth();
let year = today.getFullYear();
let day = today.getDay();

let monthname =  ["january","february","march","april","may","june","july","august","september","october","november","december"];
let dayname = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
//console.log("date =>",date);
//console.log("month =>",monthname[month]);
//console.log("year =>",year);
//console.log("day =>",dayname[day]);

if(day == 5 || day == 6)
{
    console.log("Today is " + date + "," + monthname[month] + " " + year + "- " + dayname[day] +" so today is weekend day.");
}
else
{
    console.log("Today is " + date + "," + monthname[month] + " " + year + "- " + dayname[day] +" so today is working day.");
}