// Creating Prototypes

let Obj = {
    name: "Bubu"
}

let Obj1 = Object.create(Obj);

console.log(Obj1.name);
console.log(Obj1.surname);