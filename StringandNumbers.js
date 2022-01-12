let s ="Welcome";
//s = new String("Welcome");

//Sting Methods..
//chartAt() 
console.log(s.charAt(3)); //c

//concat()
console.log(s.concat(" To JavaScript").concat(" Programming")); // Welcome To JavaScript Programming

//replace()

s = "Welcome to JavaScript Programming"
console.log(s.replace("JavaScript", "Java")); //Welcome To Java Programming

//substring()

console.log(s.substring(0,3)) //Wel -> Stating index =0 -> End Index = End Index +1;
console.log(s.substring(3,7)) //come -> Stating index =0 -> End Index = End Index +1;

//toLowerCase() & toUpperCase();
console.log(s.toLowerCase()) //welcome to javascript programming
console.log(s.toUpperCase()) //WELCOME TO JAVASCRIPT PROGRAMMING


//split()

let arr = s.split(" "); 
console.log(arr) //[ 'Welcome', 'to', 'JavaScript', 'Programming' ]
for(let c of arr){
    console.log(c)
}

//Numbers
//let x= 10
//let x = new Number(100)

let x =10; //Integer Value
let y = 102.7; // Decimal Value
let z = 10e2; // Exponential Value

console.log(x,y,z); //10 102.7 1000

//isInteger()

x=10;
y=1.8;
z="X";

console.log(Number.isInteger(x)); // true
console.log(Number.isInteger(y)); //false
console.log(Number.isInteger(z)); //false

//Number.parseInt() -> converts a String into Number

let n="12340";

console.log(typeof(n)) //string
console.log(typeof(Number.parseInt(n))) // number

//Number.partFloat()

n = "123.457"

console.log(typeof(Number.parseFloat(n))) //number

//Number.toString() -> Converts a Number into a String Format

n=123

console.log(typeof(n)) // number
console.log(typeof(Number.toString(n))) //String

n = 12.3478

console.log(typeof(Number.toString(n))) //String
