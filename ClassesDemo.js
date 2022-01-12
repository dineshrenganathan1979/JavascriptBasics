class Student 

{
    setDetails(sid, sname, grade){ // argurment variables 
        this.sid = sid;
        this.sName = sname;
        this.grade = grade;
    }

    //this.sid => class varible
    //sid => argument variable

    display(){
        console.log(this.sid, this.sName, this.grade)
    }
    
}

let stu = new Student();
stu.setDetails(101,"John","A");
stu.display();