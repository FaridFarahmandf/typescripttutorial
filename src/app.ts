//class
export class Person {
  constructor(private fn: string, public ln: string, readonly age: number) {}
  public information = () => {
    return `this person is ${this.fn} ${this.ln} , he/she is ${this.age} years old `;
  };
}
