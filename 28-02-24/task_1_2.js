//  print every element of array by map and for loop
let arr1 = [1,2,3,4,5,6,7,8,9];
const arr1_element = arr1.map(element);
function element(num){
console.log("arr1_elements =>",num);
}
// print array using for
for(i=0; i< arr1.length; i++)
{
    console.log("arr1_elements =>",arr1[i]);
}