//interface

import { Basket } from "./classes/basket.js";
import { OnlineShop } from "./classes/online.js";
import { PriceOfProducts } from "./interface/GroceriesPrice.js";

interface Person {
  firstName:string ,
  lastName:string ,
  yearOfBirth : number ,
  gender?:string ,
  information() :string ,
  age(year:number) : number ,
}

const person1 : Person = {
  firstName:"Farid" ,
  lastName : "Farahmand" ,
  yearOfBirth: 1997 ,
  information:() => {
    return `he/she is ${person1.firstName} ${person1.lastName}`
  },
  age:(year:number) => {
    const thisYear:number = new Date().getFullYear() ;
    return (thisYear - year)
  }
}
const person2 : Person = {
  firstName:"Farnoosh" ,
  lastName : "Farahmand" ,
  yearOfBirth: 1992 ,
  information:() => {
    return `he/she is ${person1.firstName} ${person1.lastName}`
  },
  age:(year:number) => {
    const thisYear:number = new Date().getFullYear() ;
    return (thisYear - year)
  }
}

console.log(person1.firstName+" "+person1.age(person1.yearOfBirth));
console.log(person2.firstName+" "+person2.age(person2.yearOfBirth));

const greetPerson = (person: Person): void => {
  console.log("HELLO "+person.firstName+" "+person.lastName);
 
}
greetPerson(person1) ;
greetPerson(person2) ;

export interface Grorceries {
  productName:string , 
  priceTag:number ,
  expired(month:number):number
}
const firstGrocery:Grorceries = {
  productName:"Mahdoos Milk" ,
  priceTag:15000,
  expired:(date)=>{
    return (new Date().getMonth() - date)
  }
}
console.log(firstGrocery.expired(3));
console.log(new Date())

//*************************************
let firstProduct : PriceOfProducts;
let secondProduct : PriceOfProducts;
firstProduct = new Basket("Kale Susage",40000,100);
secondProduct = new OnlineShop("Mihan Cream",16000,101);
console.log(firstProduct.finalPrice());
console.log(secondProduct.finalPrice());

