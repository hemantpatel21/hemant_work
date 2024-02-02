

let today = new Date();
let ms = today.getTime();

let monthname =  ["january","february","march","april","may","june","july","august","september","october","november","december"];
let dayname = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

function getCustomDate(no_of_day){
    let m = 1000 * 60 * 60 * 24 * no_of_day;
    let beforedate = new Date(ms - m)
    let date = beforedate.getDate();
    let month = beforedate.getMonth();
    let year = beforedate.getFullYear();
    let day = beforedate.getDay();
    //console.log("Today is " + date + "," + monthname[month] + " " + year + "- " + dayname[day] + ".");
    console.log("Tow days before date is " + date + "," + monthname[month] + " " + year + "- " + dayname[day] + ".");
}

getCustomDate(1);

