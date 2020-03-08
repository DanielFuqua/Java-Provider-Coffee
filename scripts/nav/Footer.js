import { BusinessName } from "./BusinessName.js";
import { YearEstablished } from "./YearEstablished.js";
import { ContactList } from "./contact/ContactList.js";

const contentTarget = document.querySelector(".container__footer") 
export const Footer = () => {
    const businessHTML = BusinessName

    contentTarget.innerHTML = `
    <div>${ContactList()}</div>
    <div>${BusinessName()}</div>
    <div>${YearEstablished()}</div>
    `
}