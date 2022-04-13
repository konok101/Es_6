class teamMember{
    name;
    designation='as a web developer';
    address='BD';

    constructor(name, address){
        this.name= name;
        this.address=address;
    }

}



class support extends teamMember{
    groupSupportTime;
    constructor(name, address, time){
        super(name, address)
        this.groupSupportTime= time;
    }
 
    startSession(){
        console.log(this.name,"start new session");
    }

}

class studentCare extends teamMember{

    idNum;
    constructor(name, address, id){
        super(name, address);
        this.idNum=id;
    }
   
    buildRoutinr(student){
        console.log(this.name,'Build a rotuine for', student);
    }
}

const amir= new support('Amir khan', 'dhaka',22);
 
const Alia= new studentCare('alia', 'care',333);
console.log( Alia);
 amir.startSession()
// console.log(amir);