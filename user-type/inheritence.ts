class user {
    //properties, methods, constructor
    userName: string;
    age: number;

    constructor(userName: string, age: number) {
        this.userName = userName;
        this.age = age;
    }

    display(): void {
        console.log(`userName:${this.userName},age: ${this.age}`)
    }
}

class Student extends user {
    studentId: number;

    constructor(userName: string, age: number, studentId: number) {
        super(userName, age);
        this.studentId = studentId;
    }
    display(): void {
        console.log(`userName:${this.userName},age: ${this.age}, id: ${this.studentId}`);
    }
}

let student1 = new Student("Ibrahim",12,3434343);
student1.display();


// let user1 = new user("Ibrahim Hossain",24);
// user1.display();

// let user2 = new user("Homyra",23);
// user2.display();