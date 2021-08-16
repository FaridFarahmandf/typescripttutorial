//for creating tsconfig.json , write this code in cmd : tsc --init 
let a = 10 ;
let b = 20 ;
let firstName = "Farid" ;

//and at this time whenever you write "tsc" it's run the type script on src folder 

//function 

const greet = () => {
    console.log("i am function")
}
greet();

let sum : Function ;

sum = (a : number,b : number , c : number | string) => {
    console.log(`sum = ${a + b} / and ${c}`);
    
}
sum(10,20,"i am c") ;

// return something 
let mul : Function = (a:number , b: number) : number => {
    return a * b ;
} 
console.log(mul(20 , 30));

//object as parameter 

let getName : (person:{name:string , age:number}) => void 

getName = (person1:{name:string , age:number}) => {
    console.log(person1.name);
    
}
getName({name:"farid" , age : 24})
