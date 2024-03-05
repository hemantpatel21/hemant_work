const Data = require("../jason_tasks/data.json");

function getCityBymorepopulation(population) {
    let filterData = Data.filter((e) => {
        if(parseInt(e.population) < population)
        {
            return e.city;
        }
      
    });
  
    let city = filterData.map((e) => {
      return e.city;
    });
    return city;
  }
  let city = getCityBymorepopulation(6538000);
  //let cityD = getCityByState("Mahārāshtra");
  //console.log("-----------  cityD----------->", cityD)
  console.log("-----------  city----------->", city);