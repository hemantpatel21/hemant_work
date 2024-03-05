const Data = require("../jason_tasks/data.json");

function PopulationByState(stateName) {
    let filterData = Data.filter((e) => {
      return e.state_name === stateName;
    });
    
    let total_population = 0;

    filterData.map((e) => {
      return total_population += parseInt(e.population);
    });
    return total_population;
  }
  let populationOfState = PopulationByState("Tamil Nādu");
  
  console.log("total_population of Tamil Nādu ", populationOfState);