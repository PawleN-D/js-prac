// Object Oriented Programming

// let car = {
//     model: "2017",
//     brand: "BMW",
//     color: "black"
// }

// console.log(car.model);
// console.log(car.brand);
// console.log(car.color);
// console.log("He was driving a " + car.color + " " +car.brand + " when i saw him.");
// const cake = {
//     flavour: "Red Velvet",
//     layers: "3",
//     price: "R250",
//     occasion: "farewell"
// }

// console.log(cake.flavour);
// console.log(cake.layers);
// console.log(cake.occasion);
// console.log(cake.price);
// // console.log("He got a " + cake.layers + " layered " + cake.flavour + " cake for his " + cake.occasion + ". It is said to be priced at " + cake.price);
// function describe(cake) {
//     let description = "He got a " + cake.layers + " layered " + cake.flavour + " cake for his " + cake.occasion + ". It is said to be priced at " + cake.price + ".";
//     return description;
// }

// console.log(describe(cake));

// // New Values
// console.log(" ")
// cake.occasion = "anniversary";
// cake.layers = 3 + 3;
// cake.price = "R550";

// console.log(cake.flavour);
// console.log(cake.layers);
// console.log(cake.occasion);
// console.log(cake.price);

// console.log("He got a " + cake.layers + " layered " + cake.flavour + " cake for his " + cake.occasion + ". It is said to be priced at " + cake.price);

// Object Method First Approach

// function describe(cake) {
//     let description = "He got a " + cake.layers + " layered " + cake.flavour + " cake for his " + cake.occasion + ". It is said to be priced at " + cake.price + ".";
//     return description;
// }

// console.log(describe(cake));

// Object Method Second Approach (recommended)
const cake = {
    flavour: "Red Velvet",
    layers: "3",
    price: "R250",
    occasion: "farewell",
    describe: function() {
        let description = "He got a " + cake.layers + " layered " + cake.flavour + " cake for his " + cake.occasion + ". It is said to be priced at " + cake.price + ".";
        return description;
    }
}

console.log(cake.describe());

console.log(" ");

// New Object Method Example


// Object Methods Example

let student = {
    name: prompt("Enter name"),
    faculty: prompt("Enter Faculty"),
    year: prompt("Enter year of study"),
    campus: prompt("Enter campus"),
    organisation: prompt("Enter Organisation registered"),
    status: function(){
        let description = this.name + " is enrolled in the " + this.faculty + " faculty, doing his " + this.year + " year at the " + this.campus + " campus. They are part of " + this.organisation + " organisation.";
        return description;
    }

};

console.log(student.name);
console.log(student.faculty);
console.log(student.year);
console.log(student.campus);
console.log(student.organisation);
console.log(" ");







// We are using an array of objetcs to look up the different likes of characters from the harry potter movies.

// Challenge 1
// - HTML file to receive input and display output
// - HTML must have input for characters name and dropdown menu for their likes and dislikes
// - User will type in characters name and select likes dislikes from the dropdown menu
// - Have a button that once pressed will calculate the correct response and display it in the HTML
// -Have a lookup function that takes firstname and property(prop) as arguments and function should check if firstname is actually chararcters first name and check if prop is a property of the character, if both are true then return value of property(same with props), if firstname does not correspond return no such value
