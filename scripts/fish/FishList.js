import { getFish } from "./FishData.js"
import { Fish } from './Fish.js';

export const FishList = () => {

    // Get a reference to the `<section class="fishList">` element
    const contentElement = document.querySelector(".fishList");
    const fishes = getFish()  //gets the list of fish objects.

    let fishHTMLRepresentation = "";

    for (const oneThingFromTheSea of fishes) {
        fishHTMLRepresentation += Fish(oneThingFromTheSea);
    }

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        ${fishHTMLRepresentation}
    `
}

