const Data = require("../jason_tasks/data.json");

function getCityBymorepopulation() {
    let SortData = Data.sort((a,b) => {
        if(parseInt(a.population) > parseInt(b.population)){
            return -1;
        }
    });
    return SortData;
  }
  let SortData = getCityBymorepopulation();
 
  for(i=0;i<=4;i++){
    console.log("-----------  SortData----------->", SortData[i].city);
  }
  