// give a products which have available size which give user

const Data = require("../jason_tasks/product.json");

//console.log("Jason Data=>", Data);
function getProductBySize(p_size) {
    let filterData = Data.filter((e) => {
        if(e.size.includes(p_size)){
            return e.size
        }
      
    });
  
    
    return filterData;
  }

  let product = getProductBySize("500");
  console.log("product => ", product);


  