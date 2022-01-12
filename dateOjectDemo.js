let d = new Date();
console.log(d); //2022-01-12T01:46:36.844Z

console.log(d.getDate()); // 12

console.log(d.getDay()) // 3

console.log(d.getMonth()); // 0 to 11

console.log(d.getFullYear()) //2022

console.log(d.getHours()) //7  //0 -23

console.log(d.getMinutes()) //18 //0-59

console.log(d.getSeconds()) //47 //0-59

console.log(d.getMilliseconds()) //885

console.log('******** UTC FORMAT****************')

console.log(d.getUTCDate()) //12
console.log(d.getUTCDay()) //3
console.log(d.getUTCMonth()) //0 -> January // 0 to 11
console.log(d.getFullYear()) //2022
console.log(d.getUTCHours()) //1  // 0 to 23
console.log(d.getUTCMinutes()) //51  // 0 to 59
console.log(d.getUTCSeconds()) //14  // 0 to 59
console.log(d.getUTCMilliseconds()) //414

