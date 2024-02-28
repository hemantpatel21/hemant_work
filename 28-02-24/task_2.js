let arr1=[1,2,3,6,7,9,3,56,8];
//console.log("arr1=",arr1);
/*
//give all value which can devided by 2 - not use filter
for(i=0;i<arr1.length;i++)
{
    let no = arr1[i]%2;
    if( no == 0)
    {
        console.log(arr1[i])
    }
}

//give all value above 3 by use of filter
let above_3 = arr1.filter((e, i) => {
    
    return e > 3 ;
});
console.log("above_3=>", above_3);


console.log("index of 56 is ", arr1.indexOf(56));

// give true/false result when check given value is exists in array or not


console.log("value is available =  ", arr1.includes(100));

console.log("value is available =  ", arr1.includes(7));

//['i','am', 'urvish'] ==> want ['urvish','am','i'] by use of loop
let str1 = ['i','am','urvish'];
let revercestr1=[];
for(i=str1.length-1,j=0;i>=0;i--,j++)
{
    revercestr1[j] = str1[i]; 
}
console.log("revercestr1 =", revercestr1);


//['i','am', 'urvish'] ==> want ['urvish','am','i'] by use of map
let str1 = ['i','am','urvish'];
let revercestr1=[];
let str1_length = str1.length;
const arr1_element = str1.map(string_rev);
function string_rev(str){
  
    str1_length = str1_length-1;
    revercestr1[str1_length] = str;
}
console.log("revercestr1 =", revercestr1);

let str1 = ['i','am','urvish'];
let joinstr1='';

for(i=0;i<str1.length;i++)
{
    joinstr1 = joinstr1.concat(" ",str1[i]);
}
console.log("joinstr1 =", joinstr1);

// ['i','am', 'urvish'] ==> want ['hsivru','ma','i'] by use of loop

let str1 = ['i','am','urvish'];
for(i=0;i<str1.length;i++)
{
    let temp_str = str1[i].split("").reverse().toString();
    str1[i] = temp_str.replace(/,/g,"");
    
}

console.log("str1 =", str1.reverse());
*/