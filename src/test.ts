import {Person} from './app.js'
import {Lesson} from './classes/lesson.js'

const person1 = new Person("Farnoosh" , "Farahmand" , 24) ;
console.log(person1);


const lesson1 = new Lesson(1 , "React" , 40) ;
const lesson2 = new Lesson(2,"TypeScript" , 8) ; 

const lessons:Lesson[] = [] ;
lessons.push(lesson1)
lessons.push(lesson2)

console.log(lessons);
console.log(lesson1.lessonInformation());

