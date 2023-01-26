To convert TS to JS : tsc file.ts file.js
Or where the filename is the same: tsc file.ts

To watch for changes: tsc file.ts -w

Variable types cannot be changed e.g. let character = 'Kay, character = 1 will produce an error. Character will always be a string.

Define type by adding :type e.g.
const circ = (diameter:number) => {
  return diameter * Math.PI;
};

e.g. :string, :boolean

Arrays:

let names = ["Kay", "Steve"];
names.push("Peter");
console.log(names);

Array types cannot be changed.

Mixed arrays are possible but must be declared when the array is instantiated.:

let mixed = ["Kay", 3, "Toby", 6]

Objects:
Object variables cannot be changed.

let ninja = {
  name: "Kay",  (always a string)
  age: 37       (always a number)
} 

Additional variables cannot be added, leading to cleaner code.
