export class Lesson {
    constructor(private lID:number ,public lessonName:string , public lessonHours:number ){}

    public lessonInformation = () => {
        return `the id of lesson is :${this.lID} and lesson name is ${this.lessonName} and hours ${this.lessonHours}`  
    }
} 