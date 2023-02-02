# typescript notes

<div>
<h3 align='center'>
<a href='https://github.com/kwatts949/typescript/blob/master/README.md#setup'>Setup </a> <span> · </span>
<a href='https://github.com/kwatts949/typescript/blob/main/README.md#managing-folders'> Managing Folders</a>
<span> · </span>
<a href='https://github.com/kwatts949/typescript/blob/main/README.md#arrays'>Arrays </a> <span> · </span>
<a href='https://github.com/kwatts949/typescript/blob/main/README.md#objects'>Objects </a> <span> · </span>
<a href='https://github.com/kwatts949/typescript/blob/main/README.md#explicit-types'>Explicit Types </a> <span> · </span>
<a href='https://github.com/kwatts949/typescript/blob/main/README.md#union-types'>Union Types</a> <span> · </span>
<a href='https://github.com/kwatts949/typescript/blob/main/README.md#any-types-reduce-advantages-of-using-ts'> Any Types</a>
<span> · </span>
<a href='https://github.com/kwatts949/typescript/blob/main/README.md#functions'>Functions</a> <span> · </span>
<a href='https://github.com/kwatts949/typescript/blob/main/README.md#type-aliases'> Type Aliases</a> <span> · </span>
<a href='https://github.com/kwatts949/typescript/blob/main/README.md#type-signatures'> Type Signatures</a> <span> · </span>
<a href='https://github.com/kwatts949/typescript/blob/main/README.md#the-DOM'> The DOM</a> <span> · </span>
<a href='https://github.com/kwatts949/typescript/blob/main/README.md#typecasting'> Typecasting</a> <span> · </span>
<a href='https://github.com/kwatts949/typescript/blob/main/README.md#classes'> Classes</a> <span> · </span>

<h3>
</div>

## Setup

To convert TS to JS :

```
tsc file.ts file.js

```

Or where the filename is the same:

```
tsc file.ts

```

To watch for changes:

```
tsc file.ts -w

```

Variable types cannot be changed e.g. let character = 'Kay, character = 1 will produce an error. Character will always be a string.

Define type by adding :type e.g.
const circ = (diameter:number) => {
return diameter \* Math.PI;
};

e.g. :string, :boolean

# Arrays:

```

let names = ["Kay", "Steve"];
names.push("Peter");
console.log(names);

```

Array types cannot be changed.

```

Mixed arrays are possible but must be declared when the array is instantiated.:

let mixed = ["Kay", 3, "Toby", 6]
```

# Objects:

Object variables cannot be changed.

let ninja = {
name: "Kay", (always a string)
age: 37 (always a number)
}

Additional variables cannot be added, leading to cleaner code.

# Explicit types:

(var character is of type string)

```
let character: string
let age: number
```

## Arrays:

```
let ninjas: string[]
```

(array ninjas is of type string)

This array is not initialised yet, to do so:

```
let ninjas: string[] = []
```

or

```
ninjas = []
```

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

(age is a variable with any time, then instatiate with number)

```
let age: any = 25
```

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

# Functions

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

# Type aliases

Code can get repetitive :

```
const greet = (user: {id: string | number name: string, age: number} => {
  console.log(`${user.name} says hello!`)
})
```

This can be reduced by defining types and using them to avoid repetition:

```
type StringOrNum = string | number

const greet = (user: {id: StringOrNum name: string} => {
  console.log(`${user.name} says hello!`)
})

```

```
type ObjWithName = {name: string, id: StringOrNum}

const greet = (user: objWithName => {
  console.log(`${user.name} says hello!`)
})
```

# Type signatures

greet is defined as a function accepting two params which are strings

The function greet (below) follows the expected pattern so raises no errors.

Void = no data

```
let greet: (a: string, b: string) => void;

greet = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
};
```

# The DOM

Mostly identical to JS.

Trying to access properties such as anchor tag below, will raise an error as TS cant access the html file. It warns us that the property may not exist.

```
const anchor = document.querySelector("a");

console.log(anchor.href)
```

Fix using:

```
if (anchor) {
  console.log(anchor.href);
}
```

or if you are certain it exists

```
const anchor = document.querySelector("a")!;
```

# Typecasting

Selection via class

```
const form = document.querySelector(".new-item-form") as HTMLFormElement;
```

Using id to grab element

```
const type = document.querySelector("#type") as HTMLSelectElement
```

# Classes

Similar to JS
All class properties are public by default

```
class Invoice {
  client: string;
  details: string;
  amount: number

  constructor(c: string, d: string, a: number) {
    this.client = c,
    this.details = d,
    this.amount = a
  }

  format() {
    return `${this.client} owes £${this.amount} for ${this.details}`
  }
}
```

To instantiate an instance:

```
const invoiceOne = new Invoice("Kay", "Typing", 40)
```

Create an array that takes only invoices:

```
let invoices: Invoice[] = []
```

Class instance properties can be accessed via:

```
invoiceOne.client = 100
```

## Access Modifiers

Add private to enable it to be read/changed from inside class only.

```
class Invoice {
  private client: string;
  private details: string;
  private amount: number
}
```

Readonly can be added to read from inside and outside of class but NOT change it.

```
class Invoice {
  readonly client: string;
  details: string;
  amount: number
}
```

This can also be set in the constructor to automatically give the read/write status
```
class Invoice {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.client} owes £${this.amount} for ${this.details}`;
  }
}
```
## Modules
tsconfig.json, change

```
"module": "commonjs"
```
to
```
"module": "ES2015",
"target": "ES6"
```
then index.html
```
<script src='app.js'></script>
```
to
```
<script type="'module" src='app.js'></script>
```
Create a new folder in src file, create a new file inside it.
```
// classes
export class Invoice {
  // readonly client: string;
  // private details: string;
  // public amount: number;

  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.client} owes £${this.amount} for ${this.details}`;
  }
}
```
in app.ts n.b when importing always use .js file
```
import { Invoice } from "./classes/Invoice.js";
```
There are downsides as only works for modern browsers and makes multiple requests to load screen. Webpack can be used to bundle.

