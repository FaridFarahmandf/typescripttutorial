//class 
class Person {
    firstName : string ; 
    lastName : string ;
    age : number ;
    constructor(fn:string , ln:string , age:number) {
        this.firstName = fn ;
        this.lastName = ln ;
        this.age = age ;
    }
    information = () => {
        return `this person is ${this.firstName} ${this.lastName} , he/she is ${this.age} years old `
    }
}
const person1 = new Person("Farid" , "Farahmand" , 24) ;
const person2 = new Person("Rouzbeh" , "Latifi" , 24) ;

const listOfPerson : Person[] = [] ;
listOfPerson.push(person1,person2) ;
console.log(listOfPerson);
console.log('hi');
const showPerson = () => {
    console.log(person1.information()) ;
}
showPerson();   
