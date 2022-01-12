// const circle = {

//     radius : 1,
//     location: {
//         x : 1,
//         y: 1
//     },
//     draw : function() {
//         console.log("Drawing a Cirlce")
//     }
    
// }

//Factory Function
// function createCircle(radius, location){

//     return {

//         radius : radius,
//         location : location,
//         isVisible : true,
//         draw : function (){
//             console.log('draw')
//         }

//     }
// }

//Factory Function
function createCircle(radius){
    return {
        radius,
         draw (){
            console.log('draw')
        }
    };
}
const circle1 = createCircle(1)
console.log(circle1)

const circle2 = createCircle(1)
console.log(circle2)

  
