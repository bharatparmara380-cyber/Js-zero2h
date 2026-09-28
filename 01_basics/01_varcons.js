const USN = "1RF24CS037"
let email= "lumsum@gmail.com"
var phoneNumber= "1234567890"
IDlocation= "Hyderabad"
 let IDstate
//USN ="1RF24CS029"  as we earlieer declared this as a constant we cannot change it later in the code.
/*/always use let when we declare a variable dont just declare it without let however there is also 
such possibility that it can be declared without let but it is not a good practice to do so.
also variable can just be declared without assigning any value to it but the output remains undefined
*/
email="lumpsump@gmail.com"
phoneNumber= "0987654321"
IDlocation= "Bangalore"

console.table([USN, email, phoneNumber, IDlocation,IDstate])

/*
prefer not to use var because of issue in block scope and functional scope. Use let and const instead.
*/