# Notes

To convert TS to JS : tsc file.ts file.js
Or where the filename is the same: tsc file.ts

To watch for changes: tsc file.ts -w

Variable types cannot be changed e.g. let character = 'Kay, character = 1 will produce an error. Character will always be a string.

Define type by adding :type e.g.
const circ = (diameter:number) => {
return diameter \* Math.PI;
};

e.g. :string, :boolean

# Arrays:

let names = ["Kay", "Steve"];
names.push("Peter");
console.log(names);

Array types cannot be changed.

Mixed arrays are possible but must be declared when the array is instantiated.:

let mixed = ["Kay", 3, "Toby", 6]

## Objects:

Object variables cannot be changed.

let ninja = {
name: "Kay", (always a string)
age: 37 (always a number)
}

Additional variables cannot be added, leading to cleaner code.

# Explicit types:

let character: string (var character is of type string)
let age: number

## Arrays:

let ninjas: string[] (array ninjas is of type string)

This array is not initialised yet, to do so:
```
let ninjas: string[] = []
```
or ninjas = []

then you can push into it.

# Union types:

normal variables dont need brackets e.g.
```
let id: string|number


let mixed: (string | number | boolean)[] = [] 
```
(mixed can contain string/number/boolean)

## Objects
```
let ninja1: object
ninja1 = {name: "Kay", age: 30}

let ninja2: object
ninja2 = {name: string, age: number}
```
# Any types (Reduce advantages of using TS)

let age: any = 25 (age is a variable with any time, then instatiate with number)
age = true (variable can now be changed)

# Managing folders

Public folder for .js /css etc

Src folder for .ts
```
tsc --init
```

change rootDir to './src'
change outDir to "./public"
```
tsc -w
```

Add this to config file to prevent root files being compiled:
```
"include": ["src"]
```

## Functions
```
let greet: Function (greet is of type Function)

const add = (a: number, b: number) =>{ (a/b are parameters which are numbers)
return a + b
}
```

Union types can also be used e.g.
```
a: number | string
```

Params can be optional e.g.
```
c?: number
```

And have default values
```
c: number = 10
```