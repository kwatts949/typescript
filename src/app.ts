// classes
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

const invoiceOne = new Invoice("Kay", "Typing", 40)
const invoiceTwo = new Invoice("Peach", "Driving", 350)

console.log(invoiceOne, invoiceTwo)

const form = document.querySelector(".new-item-form") as HTMLFormElement;

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLSelectElement;
const details = document.querySelector("#details") as HTMLSelectElement;
const amount = document.querySelector("#amount") as HTMLSelectElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  console.log(type.value, tofrom.value, details.value, amount.value);
});
