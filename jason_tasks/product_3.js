// top 5 porduct rating wise

const Data = require("../jason_tasks/product.json");

//console.log("Jason Data=>", Data);

function getProductRatingWise() {
    let SortData = Data.sort((a,b) => {
        if(parseFloat(a.rating) > parseFloat(b.rating)){
            return -1
        }
    });
    return SortData;
  }

  let product = getProductRatingWise();
 
  for(i=0;i<=4;i++){
    console.log(product[i]);
  }