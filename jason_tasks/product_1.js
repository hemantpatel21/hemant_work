// product by brand name


const Data = require("../jason_tasks/product.json");

//console.log("Jason Data=>", Data);


function getProductByBrand(BrandName) {
    let filterData = Data.filter((e) => {
      return e.brand === BrandName;
    });
    
    let product = filterData.map((e) => {
      return {BrandName : e.brand , Product_Name : e.title};
    });
    return product;
  }

  let product = getProductByBrand("Oppo");
  console.log("product => ", product);