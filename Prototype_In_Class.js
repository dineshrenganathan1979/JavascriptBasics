class Employee {


    constructor(eid, ename){
        this.eid =eid;
        this.ename = ename;
    }

}

Employee.prototype.salary = 50000; //Adding variables to a Class using Prototype

Employee.prototype.display = function(){ //Adding function or method to a Class using Prototype
                                
                                        console.log(this.eid, this.ename, this.salary)

                                        }

let emp1 = new Employee(101, 'John')
console.log(emp1.eid, emp1.ename, emp1.salary) // 101 John 50000

let emp2 = new Employee(102, 'David')
console.log(emp2.eid, emp2.ename, emp2.salary) // 102 David 50000

emp1.display() // 101 John 50000
emp2.display() // 102 David 50000