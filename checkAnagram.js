



let actualvalue = "153";
let calculatedvalue = checkAragram(actualvalue)

//console.log(actualvalue===calculatedvalue) // false -> comparing the type and value

//console.log(actualvalue == calculatedvalue) //true -> comparing only the value
 
if(actualvalue == calculatedvalue){
    console.log("The Given Number: "+actualvalue+" is an Anagaram");
}

function checkAragram(value){


    let arrvalue = value.split('');

    let val=0;
    for(let i=0; i<=arrvalue.length-1; i++){

        val += Number.parseInt(arrvalue[i])**3;
        //console.log(val);

    }
   //console.log(val)
    return val;

}