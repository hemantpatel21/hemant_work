// print a array till element value not grater then 100

let arr1 = [1,2,3,4,5,100,7,8,9];

let match = arr1.filter((e, i) => {
    
    return e < 100 ;
});
console.log("arr1=>", match);
