import { partyWriter } from "./partyFormat.js";
import { getParty } from "./partyInfo.js";

export const partyLister = () => {
  
    // Get a reference to the location on the DOM you want to display the list of fish
    const contentElement = document.querySelector(".parties")
    // Get the fish array
    const partyInfo = getParty()
    // Declare a variable to hold on to the fish HTML representation
    let partyHTMLRepresentation = "";
    // Loop over the array of fish
    for (const aParty of partyInfo ) {
        partyHTMLRepresentation += partyWriter(aParty);
    }
    // Set the dom equal to the variable containing the fish html representations
    contentElement.innerHTML += `
        ${partyHTMLRepresentation}
    `
}