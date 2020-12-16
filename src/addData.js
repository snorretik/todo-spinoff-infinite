function addData(verzameling, proName) {
    if (!(proName in verzameling)) {
        verzameling[proName] = [];
        makeProjectSelector(proName);
    } else {
        // console.log(`${proName}`);
    }
}

function makeProjectSelector(proName) {
    let proSelectEl = document.querySelector('#proSelect');

    let elToAdd = document.createElement('option');
    elToAdd.setAttribute("id", `selector${proName}`);
    elToAdd.setAttribute("value", `${proName}`);
    elToAdd.textContent = `${proName}`;

    proSelectEl.appendChild(elToAdd);
}

export { addData }