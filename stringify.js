const shop={
    Name: 'Alia store',
    addres: 'Dhanmondi 32',
    products: ['laptop', 'mobile','pepsi'],
    isExclusive: false
}

// converted stringify
const shopStringiFied= JSON.stringify(shop);

//converted stringify to parse
const converted= JSON.parse(shopStringiFied);

console.log(shopStringiFied);
console.log(converted);