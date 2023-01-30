"use strict";
// classes
class Invoice {
    constructor(c, d, a) {
        this.client = c,
            this.details = d,
            this.amount = a;
    }
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
const invoiceOne = new Invoice("Kay", "Typing", 40);
const invoiceTwo = new Invoice("Peach", "Driving", 350);
console.log(invoiceOne, invoiceTwo);
const form = document.querySelector(".new-item-form");
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.value);
});
