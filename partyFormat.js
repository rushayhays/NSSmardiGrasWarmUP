
export const partyWriter = (partyObj) => {
    return `<section class="party">
                <h3>${partyObj.party}<h3>
                <ul>
                <li><p>${partyObj.when}</p></li>
                <li><p>${partyObj.until}</p></li>
                <li><p>${partyObj.place}</p></li>
                <li><p>${partyObj.where}</p></li>
                </ul>
            </section>`
}