import { Invoice } from "./classes/Invoice.js";
import { Payments } from "./classes/Payments.js";
import { ListTemplate } from "./classes/ListTemplate.js";
let docOne;
let docTwo;
docOne = new Invoice("yoshi", "web work", 250);
docTwo = new Payments("mario", "plumbing", 200);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
const me = {
    name: "shuan",
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log(`I spent , amount`);
        return amount;
    },
};
// const greetPerson = (person: IsPerson) => {
//   console.log("hello ", person.name);
// };
// classes
const invOne = new Invoice("mario", "work on the  mario website", 250);
const invTwo = new Invoice("luigi", "work on the  luigi website", 250);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
// console.log(invoices);
// console.log(invOne, invTwo);
// const anchor = document.querySelector("a");
//     console.log(anchor?.href);
// const form = document.querySelector("form");
const form = document.querySelector(".new-item-form");
// console.log(form.children);
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// console.log(details);
// list template Instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payments(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "end");
});
