let fruits = ["apple", "banana", "orange", "grapes"];
console.log(fruits) //[ 'apple', 'banana', 'orange', 'grapes' ]
//toString() & Join

let flowers = ["sunflower", "rose", "jasmine"]
//console.log(fruits.toString()) // apple,banana,orange,grapes
//console.log (fruits.join("*")) // apple*banana*orange*grapes

//pop()  -> Removes the Last Element from the Array.


console.log(fruits.pop()); //grapes
console.log(fruits) // [ 'apple', 'banana', 'orange' ]

// push() -> To Elements to the Last of the Array

console.log(fruits.push("pineapple")) // 4
console.log(fruits) // [ 'apple', 'banana', 'orange', 'pineapple' ]

//shift() -> It Removes the first Element from the Array

console.log(fruits.shift()) // apple
console.log(fruits) //[ 'banana', 'orange', 'pineapple' ]


//unshift() -> It Adds the element at the First location of the Array

console.log(fruits.unshift("Lemon")) // 4
console.log(fruits) //[ 'Lemon', 'banana', 'orange', 'pineapple' ]

//Deleting an Element from the Array

console.log(delete fruits[1]) // true

console.log(fruits) //[ 'Lemon', <1 empty item>, 'orange', 'pineapple' ]

//Merging Arrays using concat function

console.log(fruits.concat(flowers)) // [ 'Lemon', <1 empty item>, 'orange', 'pineapple', 'sunflower', 'rose', 'jasmine' ]

//slice(index) -> will remove the element at the given index.
fruits = ["apple", "banana", "orange", "grapes"];

console.log(fruits.slice(1)) //[ 'banana', 'orange', 'grapes' ]
console.log(fruits.slice(2)) //[ 'orange', 'grapes' ]

//sort()
fruits = ["apple", "banana", "orange", "grapes"];

console.log(fruits.sort()) //[ 'apple', 'banana', 'grapes', 'orange' ]

let nums = [100,500,200,800,300]

console.log(nums.sort()) //[ 100, 200, 300, 500, 800 ]

//reverse()

console.log(nums.reverse()) //[ 800, 500, 300, 200, 100 ]
