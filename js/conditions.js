// Writing a program to determine clothes to wear according to weather conditions using if statements
let weather = prompt("Enter Weather Condition");

if (weather === "sunny") {
    console.log("Please wear vest and shorts, as it sunny today");
} else if (weather === "rainy") {
    console.log("Please wear boots and take a raincoat"); 
} else if (weather === "snowy") {
    console.log("Please wear boots and heavy clothing to minimize catching a cold");
} else if(weather === "windy") {
    console.log("Please stay indoors as its too windy outside");
} else {
    console.log("Please enter coorect weather conditions");
}

// let weather = prompt("Enter Weather Condition");

switch (weather) {
    case "sunny":
        alert("Please wear vest and shorts, as it sunny today");
        break;
    case "rainy":
        alert("Please wear boots and take a raincoat");
        break;
    case "snowy":
       alert("Please wear boots and heavy clothing to minimize catching a cold");
        break;
    case "windy":
        alert("Please stay indoors as its too windy outside");
        break;
    
    default:
        alert("Please enter coorect weather conditions");
        break;
}