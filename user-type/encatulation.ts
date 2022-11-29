abstract class user {
    //properties, methods, constructor
    userName: string;
    age: number;

    constructor(userName: string, age: number) {
        this.userName = userName;
        this.age = age;
    }

   abstract display(): void;
}

class Student extends user {
    studentId: number;

    constructor(userName: string, age: number, studentId: number) {
        super(userName, age);
        this.studentId = studentId;
    }
    display(): void {
        console.log('hi');
    }
}

let student1 = new Student("Ibrahim",12,3434343);
student1.display();