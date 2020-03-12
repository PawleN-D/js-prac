// Creating Prototypes

// Example

// let Obj = {
//     name: "Bubu"
// }

// let Obj1 = Object.create(Obj);

// console.log(Obj1.name);
// console.log(Obj1.surname);

// // Create Pastry Object

// let Pastry = {
//     type: "",
//     flavour:"",
//     layers: 0,
//     price: "",
//     occasion: "",

//     // Describe the Pastry
//     describe: function() {
//         let description = "He got a " + this.layers + " layered " + this.flavour + " " + this.type + " for his " + this.occasion + ". It is said to be priced at " + this.price + ".";
//         return description;
//     }
// }

// // Create Muffin Object

// let muffin = Object.create(Pastry);
// muffin.type = "muffin";
// muffin.flavour = "chocolate-chip";
// muffin.layers = 1;
// muffin.price = "R25";
// muffin.occasion = "breakfast";

// // Create Cake Object

// let cake = Object.create(Pastry);
// cake.type = "cake";
// cake.flavour = "Red Velvet";
// cake.layers = 3;
// cake.price = "R350";
// cake.occasion = "Anniversary";

// console.log(muffin.describe());
// console.log(cake.describe());


// Better Method To Create a Prototype

let Pastry = {
 

    // initialize
    init: function(type, flavour, layers, price, occasion, time){
        this.type = prompt("Enter Type of Pastry.");
        this.flavour = prompt("Enter prefered flavour.");
        this.layers =  Number(prompt("Enter Layers."));
        this.price = prompt("Enter Price Bought.");
        this.occasion = prompt("Enter Ocaasion Need For");
        this.time = Number(prompt("Enter time to back."));
    },

    // Describe the pastry
    describe: function() {
        let description = "You have order a " + this.layers + " layered " + this.flavour + " " + this.type + " for his " + this.occasion + ". It will be priced at " + this.price + ".";
        return description;
    },
    
    // Bake Process

    bake: function () {
        let baked = "The " + this.type + " takes exactly " + this.time + " minutes to get ready";
        return baked;
    }

};

let muffin = Object.create(Pastry);
muffin.init("", "", "" ,"", "", "");
console.log(muffin.describe());
console.log(muffin.bake());