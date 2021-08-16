//class 
class Person {
    // firstName : string ; 
    // lastName : string ;
    // age : number ;
    constructor(private fn:string , public ln:string , readonly age:number) {}
    private information = () => {
        return `this person is ${this.fn} ${this.ln} , he/she is ${this.age} years old `
    }
}
const person1 = new Person("Farid" , "Farahmand" , 24) ;
const person2 = new Person("Rouzbeh" , "Latifi" , 24) ;

// const listOfPerson : Person[] = [] ;
// listOfPerson.push(person1,person2) ;
// console.log(listOfPerson);
// console.log('hi');
// const showPerson = () => {
//     console.log(person1.information()) ;
// }
// showPerson(); 
const showPersonInformation = () => {
    console.log(`${person1.ln} is ${person1.age} years old`)
    // return person1.information()
}  
console.log(showPersonInformation());
