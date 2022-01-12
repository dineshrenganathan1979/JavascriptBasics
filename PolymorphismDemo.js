
//Polymorphism means Many Forms

// Method Overriding

class Shape {

    draw(){
        return "I am a Generic Shape";
    }
}

class Square extends Shape {

    draw(){
        return "I am a Square";
    }

}

class Circle extends Shape {

    draw(){
        return "I am a Circle";
    }

}

let s = new Shape();
console.log(s.draw()); // I am a Generic Shape

s = new Circle()
console.log(s.draw()); // I am a Circle

s = new Square();
console.log(s.draw()); // I am a Square

