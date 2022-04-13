 class support{
    name;
    designation='as a web developer';
    address='BD';

    constructor(name, address){
        this.name= name;
        this.address=address;
    }
    startSession(){
        console.log(this.name,"start new session");
    }

}

const amir= new support('Amir khan', 'dhaka');
const soliman= new support("soliman khan",'india');
const Srk= new support("Srk",'indian');
amir.startSession();
console.log(amir,soliman,Srk);
// console.log(soliman);