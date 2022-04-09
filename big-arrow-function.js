const multiply= (num1, num2, num3)=> num1* num2* num3;
const result=multiply(2,4,3);
console.log(result);

const tenTimes=(num)=> num *10;
 const output= tenTimes(3);

const fiveTimes=  num  => num *5;
 const  value= fiveTimes(3);

 const getString= () =>'konok majamder';
 const name= getString();
 console.log(name);


 //This function use many lines uses arrow function
 const doMath= (x,y) => {
     const sum=x+y;
     const diff=x-y;
     return sum*diff;
 }

 const math= doMath(3,3);

 console.log( math);