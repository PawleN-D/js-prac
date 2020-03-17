// Create Constructor functions

// function Pastry(type, flavor, layers, price, occasion, time) {
//     this.type = prompt("Enter Type of Pastry.");
//     this.flavor = prompt("Enter prefered flavor.");
//     this.layers = prompt("Enter required layers.");
//     this.price = prompt("Amount Paid.");
//     this.occasion = prompt("Enter Occasion Intended.");
//     this.time = prompt("Enter time Expected.");
    
// };

// Pastry.prototype.describe = function () {
//     let description = "You have order a " + this.layers + " layered " + this.flavor + " " + this.type + " for his " + this.occasion + ". It will be priced at " + this.price + ".";
//     return description;
    
// }

// let cake = new Pastry("", "", "", "", "", "");
// // let fudge = new Pastry("", "", "", "", "", "");
// // let muffin = new Pastry("", "", "", "", "", "");

// console.log(cake.describe());
// // console.log(fudge.describe());
// // console.log(muffin.describe());

function shopProduct(type, cover, material, name, price, use, image) {
    this.type = type;
    this.cover = cover;
    this.material = material;
    this.name = name;
    this.price = price;
    this.use = use;
    this.image =image;
    
}

shopProduct.prototype.describe = function () {
    let description = "You have order a "+ this.name + " " + this.type + " product that comes with a " + this.cover + " cover and is of " + this.material + "material at the cost of " + this.price + ". It is normally used for " + this.use + "." + this.image;
    return description;
    
}

let vanish = new shopProduct("vanish", "tin", "glass", "Brutus", "R46", "polishing", "https://myself.com");
let grill = new  shopProduct("gril","fibre", "metal", "Sparta", "R240", "grilling", "https://myself.com");
let stand = new  shopProduct("stand","glass", "wood", "Fushi's", "R1500", "TV Stand", "https://myself.com");
let basket = new shopProduct("basket","plastic", "plastic", "Addis", "R260", "laundry", "https://myself.com");
let stove = new  shopProduct("stove","brass", "aluminium", "SMEG", "R1750", "cooking", "https://myself.com" );

console.log(vanish.describe());
console.log(" ");
console.log(grill.describe());
console.log(" ");
console.log(stand.describe());
console.log(" ");
console.log(basket.describe());
console.log(" ");
console.log(stove.describe());