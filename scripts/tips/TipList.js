import { getTips } from "./TipData.js";
import { Tips } from './Tip.js';

export const TipList = () => {

    const contentElement = document.querySelector(".tipList");
    const tipz = getTips()  //gets the list of tip objects.

    let tipHTMLRepresentation = "";

    for (const individualTip of tipz) {
        tipHTMLRepresentation += Tips(individualTip);
    }

    // Add to the existing HTML in the content element
    contentElement.innerHTML += 
    `${tipHTMLRepresentation}`
}