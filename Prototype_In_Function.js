function student(){
    this.name = 'john';
    this.gender ='male';
    
}

stu1 = new student();
//stu1.age=35;
student.prototype.age = 35; //Adding variables to a Function using Prototype

console.log(stu1.name, stu1.gender, stu1.age) // john male 35

stu2 = new student();
//console.log(stu2.name, stu2.gender, stu2.age) // john male undefined

console.log(stu2.name, stu2.gender, stu2.age) // john male 35