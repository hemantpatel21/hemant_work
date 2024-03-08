//product by price lover then equel to

const Data = require("../jason_tasks/product.json");

//console.log("Jason Data=>", Data);

function getProductPricelowerandequalto(p_price) {
    let filterData = Data.filter((e) => {
      return e.price <= p_price;
    });
  
    let price = filterData.map((e) => {
      return {Product_Name : e.title, price : e.price};
    });
    return price;
  }

  let price = getProductPricelowerandequalto(40);
  console.log("product => ", price);