const Data = require("../jason_tasks/data.json");

function getCityBymorecharacter(CityName) {
    let filterData = Data.filter((e) => {
      return e.city.length > CityName.length;
    });
  
    let city = filterData.map((e) => {
      return e.city;
    });
    return city;
  }
  let city = getCityBymorecharacter("Mādnāikanhalli");
  //let cityD = getCityByState("Mahārāshtra");
  //console.log("-----------  cityD----------->", cityD)
  console.log("-----------  city----------->", city);