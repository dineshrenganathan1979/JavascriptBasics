class A {
 
    a=100

    display(){
        console.log(this.a)
    }

}

class B extends A {

    b = 200
    show(){
        console.log(this.b)
    }

}
console.log("---Creating Object for Parent Class---")
let aObj = new A();

console.log(aObj.a) //100
aObj.display(); //100

console.log("---Creating Object for Child Class---")
let bObj = new B();
console.log(bObj.a) //100
console.log(bObj.b) //200
bObj.display(); //100
bObj.show(); //200