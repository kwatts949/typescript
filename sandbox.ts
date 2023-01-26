// Browsers do not understand TS so .ts files have to be compiled into JS.

let character = "Kay";
let age = 37;
let isBlackbELT = false;

console.log(character);

const circ = (diameter: number) => {
  return diameter * Math.PI;
};

console.log(circ(20));

let names = ["Kay", "Steve"];
names.push("Peter");
console.log(names);
