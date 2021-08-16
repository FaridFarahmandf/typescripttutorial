var x = 10 ; 
/*when you declare a variable , you can not change the data type when you asign it again*/ 
//  x = "Farid"

/*use this code in cmd for 
compiling everytime you changed sth :
tsc yourTSfilename.ts -w*/ 

//1.Array
//1.1 - when you declare the array all your inputs takes the first data type of declaration
const list1 = [1,2,3,4] ;
list1.push(5,6,7/*,"a"*/);

//1.2 - just data type that used in first declaration 
const list2 = [1,2,"a","b"] ;
list2.push(3,4,'c','d'/*,true*/);

//2.Object
//2.1 - this way you can not control on the properties and methods
let person : object = {
    name:'Farid',
    age:24
}
// person.firstName = "Rouzbeh" ** don't let you use other properties and show your mistakes ;

let vehicle : {car : string , motorCycle : string} ;
// vehicle.car = "BMW" ;
// vehicle.motorCycle = "YAMAHA" ;
vehicle = {car : "BMW" , motorCycle : "YAMAHA"}
console.log(vehicle)