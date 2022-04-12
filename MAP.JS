const numbers= [2, 3,4,42,22];
 

const doubleNUm= number=> number*2;

/* for(const number of numbers){
    const result=doubleNUm(number);
    output.push(result);
} */

const output= numbers.map(doubleNUm);
//map er por ja likbo  oitai function er parameter hisaba kaj korba
const output2 = numbers.map(x=>x-2);
 
console.log( output);
console.log(output2);