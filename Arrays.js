let fruits = ["apple", "banana", "orange", "grapes"]
console.log(fruits.length)

//classic for loop

// for(let i=0; i<fruits.length; i++){
//     console.log(fruits[i])
// }

//for of loop

for(ele of fruits){
    console.log(ele)
}

console.log(typeof(fruits))

console.log(Array.isArray(fruits))