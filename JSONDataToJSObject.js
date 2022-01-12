
//Declaraing a JSON Array

let text = '{ "employees" : [' +
            '{ "firstName" : "John", "lastName" : "Doe"},'+
            '{ "firstName" : "Anna", "lastName" : "Smith"}, '+
            '{ "firstName" : "Peter", "lastName" : "Jones"} ]}' ;

 let jsObj = JSON.parse(text);
 
 console.log(jsObj.employees[1].firstName + "  "+ jsObj.employees[1].lastName); // Anna  Smith


 //Complex Nested JSON

 let data = '{"name" : "mykong", "age" : 30, "address" : '+
 '{"streetAddress" : "88 8th Street" ,"city" : "New York"},'+
'"phoneNumber" : [{"type" : "home", "number" :"111 111-1111"}, {"type" : "fax", "number" :"222 222-2222"}] }';

 let jsObj2 = JSON.parse(data);

 console.log(jsObj2.name) // mykong
 console.log(jsObj2["name"]) // mykong
 console.log(jsObj2.address.city) // New York
 console.log(jsObj2["address"].streetAddress) // 88 8th Street
 console.log(jsObj2.phoneNumber[0].type +"  "+jsObj2.phoneNumber[0].number) // home  111 111-1111
 console.log(jsObj2.phoneNumber[1].type +"  "+jsObj2.phoneNumber[1].number) // fax  222 222-2222




