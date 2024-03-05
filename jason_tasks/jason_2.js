const Data = require("../jason_tasks/data.json");

function getCityByState(stateName) {
    let filterData = Data.filter((e) => {
      return e.state_name === stateName;
    });
  
    let city = filterData.map((e) => {
      return e.city;
    });
    return city;
  }
  let city = getCityByState("Tamil Nādu");
  let cityD = getCityByState("Mahārāshtra");
  console.log("-----------  cityD----------->", cityD)
  console.log("-----------  city----------->", city);