//class
export class Person {
    constructor(fn, ln, age) {
        this.fn = fn;
        this.ln = ln;
        this.age = age;
        this.information = () => {
            return `this person is ${this.fn} ${this.ln} , he/she is ${this.age} years old `;
        };
    }
}
