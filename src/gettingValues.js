function gettingValues() {
    let values = [];
    
    let titleEl = document.querySelector("#titleInput");
    values.push(titleEl.value);

    let dueDateEl = document.querySelector("#dueInput");
    values.push(dueDateEl.value);

    let descriptionEl = document.querySelector("#descrInput");
    values.push(descriptionEl.value);

    let proNameEl = document.querySelector("#proNameInput");
    values.push(proNameEl.value);

    let priorityEl = document.querySelector("#priorityInput");
    values.push(priorityEl.value);

    return values
}

// function convertDueDate(dueDateString) {
//     let arrayDate = dueDateString.split("-");

//     return arrayDate;
// }

export { gettingValues }