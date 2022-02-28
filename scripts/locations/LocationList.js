import { Locations } from "./Location.js";
import { getLocations } from "./LocationData.js";

export const LocationList = () => {
    const contentElement = document.querySelector(".locationList");
    const locationz = getLocations(); // locationz equals all objects now. 

    let locationHTMLRepresentation = "";

    locationz.forEach(element => {
        locationHTMLRepresentation += Locations(element)
    });

    contentElement.innerHTML += `
    ${locationHTMLRepresentation}
    `

}
