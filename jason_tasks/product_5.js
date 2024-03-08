// give top 5 chipest product (consider price after discount)

const Data = require("../jason_tasks/product.json");

//console.log("Jason Data=>", Data);

function getTopFiveChipestProduct() {
    let SortData = Data.sort((a,b) => {
        actual_priceof_a = a.price - ((a.price * a.discountPercentage)/100)
        actual_priceof_b = b.price - ((b.price * b.discountPercentage)/100)
        if(actual_priceof_a < actual_priceof_b){
            return -1
        }
    });
    
    return SortData;
  }

  let product = getTopFiveChipestProduct();
  for(i=0;i<=4;i++){
    console.log(product[i]);
  }