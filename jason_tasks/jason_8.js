const Data = require("../jason_tasks/data.json");

let populationwisebystatearr = [];
function GetAllState() {
    let States = Data.map((e) => {
        return e.state_name;
      });

      let State_arr = States.filter((item,index) => States.indexOf(item) === index)

      for(i=0;i<State_arr.length;i++){

        let statewisepopulation = Data.filter((e) => {
            return e.state_name === State_arr[i];
          });
        
          let State_wise_total_population = 0;
      
          statewisepopulation.map((e) => {
            return State_wise_total_population += parseInt(e.population);
          });

          populationwisebystatearr.push({
          "state_name": State_arr[i],
          "population": State_wise_total_population});
      }


      let SortPopulation = populationwisebystatearr.sort((a,b) => {
        if(parseInt(a.population) > parseInt(b.population)){
            return -1;
        }
    });
    console.log("population wise top 5 state name")
    for(i=0;i<=4;i++){
        console.log( SortPopulation[i].state_name);
      }
    //return SortPopulation;
  }
  //let mydata = GetAllState();
  GetAllState();
  //console.log("total_population_state_wise", mydata);




