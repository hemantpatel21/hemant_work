
function funObj({ name, age }) {
    name = "Hemant";
    age =  "34";
  
    let obj1 = {name, age}
    return obj1;
    //return {name,age};
}
  
let {name,age} =  funObj({ name: "urvish", age: 23 });

console.log("==== name ===>",name);
console.log("==== age ===>",age);