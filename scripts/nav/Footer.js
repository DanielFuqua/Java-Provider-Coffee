import { BusinessName } from "./BusinessName.js";
import { YearEstablished } from "./YearEstablished.js";
import { ContactList } from "./contact/ContactList.js";

const contentTarget = document.querySelector(".container__footer") 
export const Footer = () => {
    const businessHTML = BusinessName

    contentTarget.innerHTML = `
    <section class="contactInfo">
        <div><p>Contact Info</p>
        </div>${ContactList()}</section>
    <section>${BusinessName()}</section>
    <section>${YearEstablished()}</section>
    `
}