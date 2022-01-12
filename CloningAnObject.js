const circle = {

radius : 1,
draw() {
    console.log("Drawing a Cirlce")
}

}

//const another = {};
// for(let key in circle)
// another[key] = circle[key]

// console.log(another)
//const another = Object.assign({}, circle);
//const another = Object.assign({color: "green"}, circle);
//console.log(another)

const another = {...circle };
console.log(another)
