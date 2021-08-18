export class Lesson {
    constructor(lID, lessonName, lessonHours) {
        this.lID = lID;
        this.lessonName = lessonName;
        this.lessonHours = lessonHours;
        this.lessonInformation = () => {
            return `the id of lesson is :${this.lID} and lesson name is ${this.lessonName} and hours ${this.lessonHours}`;
        };
    }
}
