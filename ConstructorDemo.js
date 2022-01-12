class Student {



    constructor(sid, sName, grade){ //Only used for Initializing variables

        this.sid = sid;
        this.sName = sName;
        this.grade = grade;
    }

    display(){
        console.log(this.sid, this.sName, this.grade)
    }

}

let stu = new Student(103, "Mahesh", "B");
stu.display();
let stu2 = new Student(104, "Mary", "A");
let stu3 = new Student(105, "Smith", "B");
let stu4 = new Student(106, "Jones", "C");
stu2.display();
stu3.display();
stu4.display();