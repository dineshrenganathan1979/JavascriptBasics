class Test{


    static a = 10; //static variable

    b =20; //non static variable

    static m1()   //static method
     {
         console.log("This is a Static Method M1.")
     }

     m2() //Non static method
     {
         console.log("This is Non-Static Method M2.")
     }
}
//Accessing Static Varibles and Methods using Class Name
console.log(Test.a) //10 
// console.log(Test.b) // undefined
Test.m1(); //This is a Static Method M1.
//Test.m2(); // This will Throw Error -> TypeError: Test.m2 is not a function

let t = new Test();
//Accessing Non Static Varibles and Methods using Object
console.log(t.b) //20
t.m2(); //This is Non-Static Method M2.
