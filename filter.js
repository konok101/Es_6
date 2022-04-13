const numbers= [2,3,6,3,4,5,666,7,6,44];
const bigNum= numbers.filter(number => number>40);
console.log(bigNum);


const products=[
    {name:'pen', price:241, id:214},
    {name:'book new', price:421, id:421},
    {name:'Thirt', price:214, id:214}
];

//protita value bah paramter er sarto fill up kore filterrrr
const expensive = products.filter(product => product.price>250);
const match= products.filter(product => product.price == 214);

//shadu akta eleemnt detect korba and outside array te rakba
const matchsFind= products.find(product => product.price == 214);
console.log( matchsFind);