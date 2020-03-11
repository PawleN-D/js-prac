'Use strict'

// Functions Practise


// function sayHello() {
//    return 'Hello';
// }

// Storing the function in a variable
// let result = sayHello();
// console.log(result);
// sayHello();

// Function Task 

function sayHello(name, surname) {
    name = prompt("Enter Name");
    surname = prompt("Enter Surname");
    let message = "Hello, "
    return message + name + " " + surname + "!";
}

console.log(sayHello(name,surname)); 