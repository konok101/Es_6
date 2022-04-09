function add(num1, num2){
    return  num1 + num2;
}

const add2= function add22(num1, num2){
    return  num1+  num2;
}

//anonymous function
const add3 = function (num1, num2){
    return num1 + num2;
}

const add4= (num1, num2) => num1+ num2;


const  sum1= add(2,3);
const  sum2= add2(2,3);
const sum3=add3(3,2);
const sum4=add4(2,3);


console.log( sum1);
console.log( sum2);
console.log( sum3);
console.log(sum4);