let arr1 = [1,2,3,4,5,6,7,8,9];
/*
// print array element
console.log("arr1[9] =>",arr1[9]); //out put = arr1[9] => undefined
console.log("arr1[10] =>",arr1[10]); //out put = arr1[10] => undefined

//print array using map
const arr1_element = arr1.map(element);
function element(num){
console.log("arr1_elements =>",num);
}
// print array using for
for(i=0; i< arr1.length; i++)
{
    console.log("arr1_elements =>",arr1[i]);
}

// changing array value at specific index

arr1[5] = 100;
console.log("arr1=>", arr1);

//
let match = arr1.filter((e, i) => {
    
    return e < 100 ;
});
console.log("arr1=>", match);


let mapArr = arr1.map((e) => {
    return e + 1;
});
console.log("mapArr=>", mapArr);

arr1.unshift(0);
console.log("arr1=>", arr1);

arr1.push(99);
console.log("arr1=>", arr1);

arr1.shift();
console.log("arr1=>", arr1);

arr1.pop();
console.log("arr1=>", arr1);


console.log("arr1=>", arr1);
//do sum of all value of an array with use of map
let SumOfArr1Map = 0;
const arr1_element = arr1.map(element);
function element(num){
    SumOfArr1Map = SumOfArr1Map + num;
}
console.log("SumOfArr1Map = ", SumOfArr1Map)
// do sum of all value of an array with use of for-loop
let SumOfArr1For = 0;
for(i=0; i< arr1.length; i++)
{
    SumOfArr1For = SumOfArr1For + arr1[i];
}
console.log("SumOfArr1For = ", SumOfArr1For)
//do sum of all value of an array with use of reduce
let SumOfArr1reduce = arr1.reduce((LRV, e) => {
    return LRV + e;
});
console.log("SumOfArr1reduce", SumOfArr1reduce);


// sort a array in acending 
let arr2 = [1,12,3,40,5,26,7,18,9];
arr2.sort(function(a, b){return a-b});
console.log("arr2=>", arr2);
// sort a array in decending
let arr3 = [1,12,3,40,5,26,7,18,9];
arr3.sort(function(a, b){return b-a});
console.log("arr3=>", arr3);

//reverce an array with use of method
arr1.reverse();
console.log("arr1=>", arr1);

//reverce an array with use of for-loop
let ReverceArr1=[];
for(i=arr1.length-1; i>=0 ; i--)
{
    ReverceArr1.push(arr1[i]);
    //console.log(arr1[i]);
}
console.log("ReverceArr1=>", ReverceArr1);

*/
