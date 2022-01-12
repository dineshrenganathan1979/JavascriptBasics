class Student{


    constructor(){
        let name, marks;
    }

    setName(name){
        this.name= name;
    }

    getName(){
        return this.name;
    }

    setMarks(marks){
        this.marks = marks;
    }

    getMarks(){
        return this.marks;
    }

}

let stu = new Student();
stu.setName('John')
stu.setMarks(90)
console.log(stu.getName(), stu.getMarks()) // John 90