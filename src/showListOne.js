// Ik heb in het object edit toegevoegd.

// probeer eens zonder verzameling door te geven, kijken of ie 'm toch pakt
function showListOne(verzameling) {
    let selListEl = document.querySelector("#proSelect");
    let selListVal = selListEl.value;

    let listDisplay = document.querySelector("#listDisplay");

    let numberExp = 0;

    // console.log(`${verzameling}, ziet er zo uit`);

    // let boolEdit = false;

    while (listDisplay.firstChild) {
        listDisplay.removeChild(listDisplay.firstChild);
    }
    
    for (let i = 0; i < verzameling[selListVal].length; i++) {
        // listDisplay.style.cssText = `grid-template-rows: repeat(${i + 1 + numberExp}, 22px)`;
        
        if (verzameling[selListVal][i].edit == false) {
            // edit false
            showListBasics(i);

            if (verzameling[selListVal][i].expanded == true) {
                showListExpanded(i);
                numberExp += 1;
            } else {
                // console.log("expanded is false... dus...");
                // zou false moeten zijn
            }
        } else {
            // edit true
            showListEdit(i);
            numberExp += 1;
        }
    }

    function showListBasics(i) {

        // console.log(`${i + 1 + numberExp}, bij showlistbasics`);

        listDisplay.style.cssText = `grid-template-rows: repeat(${i + 1 + numberExp}, 22px)`;
        
        let label1 = document.createElement('label');
        label1.setAttribute("id", `titleNo${i + 1 + numberExp}`);
        label1.setAttribute("class", `titleDis`);
        label1.textContent = verzameling[selListVal][i].title;
        verzameling[selListVal][i].checked ? label1.style.textDecoration = "line-through" : label1.style.textDecoration = "none";
        label1.style.gridArea = `${i + 1 + numberExp}/1/${i + 1 + numberExp}/2`;
        

        let label2 = document.createElement('label');
        label2.setAttribute("id", `dueDateNo${i + 1 + numberExp}`);
        label2.setAttribute("class", `dateDis`);
        label2.textContent = verzameling[selListVal][i].dueDate;
        verzameling[selListVal][i].checked ? label2.style.textDecoration = "line-through" : label2.style.textDecoration = "none";
        label2.style.gridArea = `${i + 1 + numberExp}/2/${i + 1 + numberExp}/3`;

        let button1 = document.createElement('button');
        button1.setAttribute("id", `expandNo${i + 1 + numberExp}`);
        button1.setAttribute("class", "expandDis");
        verzameling[selListVal][i].expandedVal ? button1.textContent = "/\\" : button1.textContent = "\\/";
        button1.style.gridArea = `${i + 1 + numberExp}/3/${i + 1 + numberExp}/4`;

        let button2 = document.createElement('button');
        button2.setAttribute("id", `deleteNo${i + 1 + numberExp}`)
        button2.setAttribute("class", "deleteDis");
        button2.textContent = "Del";
        button2.style.gridArea = `${i + 1 + numberExp}/4/${i + 1 + numberExp}/5`;

        let button3 = document.createElement('button');
        button3.setAttribute("id", `priorityNo${i + 1 + numberExp}`);
        button3.setAttribute("class", "priorityDis");
        button3.style.gridArea = `${i + 1 + numberExp}/5/${i + 1 + numberExp}/6`;
        button3.style.backgroundColor = `${verzameling[selListVal][i].priority}`

        let check = document.createElement('input');
        check.setAttribute("type", "checkbox");
        check.setAttribute("id", `checkNo${i + 1 + numberExp}`);
        check.setAttribute("class", "checkDis");
        verzameling[selListVal][i].checked ? check.checked = true : check.checked = false;
        check.style.gridArea = `${i + 1 + numberExp}/6/${i + 1 + numberExp}/7`;

        listDisplay.appendChild(label1);
        listDisplay.appendChild(label2);
        listDisplay.appendChild(button1);
        listDisplay.appendChild(button2);
        listDisplay.appendChild(button3);
        listDisplay.appendChild(check);
    }

    function showListExpanded(i) {
        // volledig opnieuw, dus basic... plus expanded ook, alles dus
        let descripLabel = document.createElement('label');
        descripLabel.setAttribute("id", `descripLabelNo${i + 2 + numberExp}`);
        descripLabel.setAttribute("class", `descripLabel`);
        descripLabel.textContent = verzameling[selListVal][i].description;
        verzameling[selListVal][i].checked ? descripLabel.style.textDecoration = "line-through" : descripLabel.style.textDecoration = "none";
        descripLabel.style.gridArea = `${i + 2 + numberExp}/1/${i + 2 + numberExp}/2`;

        let proNameLabel = document.createElement('label');
        proNameLabel.setAttribute("id", `proNameLabelNo${i + 2 + numberExp}`);
        proNameLabel.setAttribute("class", `proNameLabel`);
        proNameLabel.textContent = verzameling[selListVal][i].proName;
        verzameling[selListVal][i].checked ? proNameLabel.style.textDecoration = "line-through" : proNameLabel.style.textDecoration = "none";
        proNameLabel.style.gridArea = `${i + 2 + numberExp}/2/${i + 2 + numberExp}/3`;

        let editButton = document.createElement('button');
        editButton.setAttribute("id", `editButtonNo${i + 2 + numberExp}`);
        editButton.setAttribute("class", "editButton");
        editButton.textContent = "Edit";
        editButton.style.gridArea = `${i + 2 + numberExp}/4/${i + 2 + numberExp}/5`;

        listDisplay.appendChild(descripLabel);
        listDisplay.appendChild(proNameLabel);
        listDisplay.appendChild(editButton);
    }

    function showListEdit(i) {
        // deze is misschien niet nodig als ik het al eerder doe in de "for", aan het begin ervan
        listDisplay.style.cssText = `grid-template-rows: repeat(${i + 1 + numberExp}, 22px)`;

        // console.log(`${i + 1 + numberExp} list`);
        
        let input1 = document.createElement('input');
        input1.setAttribute("id", `input1No${i + 1 + numberExp}`);
        input1.setAttribute("class", "editInputTitle");
        input1.value = verzameling[selListVal][i].title;
        input1.style.gridArea = `${i + 1 + numberExp}/1/${i + 1 + numberExp}/2`;

        let input2 = document.createElement('input');
        input2.setAttribute("id", `input2No${i + 1 + numberExp}`);
        input2.setAttribute("class", "editInputDue");
        input2.value = verzameling[selListVal][i].dueDate;
        input2.style.gridArea = `${i + 1 + numberExp}/2/${i + 1 + numberExp}/3`;

        let button1 = document.createElement('button');
        button1.setAttribute("id", `editPriorityNo${i + 1 + numberExp}`);
        button1.setAttribute("class", "editPriorityDis");
        button1.style.gridArea = `${i + 1 + numberExp}/5/${i + 1 + numberExp}/6`;
        button1.style.backgroundColor = `${verzameling[selListVal][i].priority}`;

        let input3 = document.createElement('input');
        input3.setAttribute("id", `input3No${i + 2 + numberExp}`);
        input3.setAttribute("class", "editInputDescrip");
        input3.value = verzameling[selListVal][i].description;
        input3.style.gridArea = `${i + 2 + numberExp}/1/${i + 2 + numberExp}/2`;

        let input4 = document.createElement('input');
        input4.setAttribute("id", `input4No${i + 2 + numberExp}`);
        input4.setAttribute("class", "editInputProName");
        input4.value = verzameling[selListVal][i].proName;
        input4.style.gridArea = `${i + 2 + numberExp}/2/${i + 2 + numberExp}/3`;

        let button2 = document.createElement('button');
        button2.setAttribute("id", `saveButtonNo${i + 2 + numberExp}`);
        button2.setAttribute("class", "saveButtonDis");
        button2.textContent = "Save";
        button2.style.gridArea = `${i + 2 + numberExp}/4/${i + 2 + numberExp}/5`;

        listDisplay.appendChild(input1);
        listDisplay.appendChild(input2);
        listDisplay.appendChild(button1);
        listDisplay.appendChild(input3);
        listDisplay.appendChild(input4);
        listDisplay.appendChild(button2);

        // button2.addEventListener('click', (e) => {
        //     let titleWork = input1.value;
        //     let dueWork = input2.value;
        //     let descripWork = input3.value;
        //     let proNameWork = input4.value;

        //     verzameling[selListVal][i].titleChange(titleWork);
        //     verzameling[selListVal][i].dueDateChange(convertDueDate(dueWork));
        //     verzameling[selListVal][i].descripChange(descripWork);
        //     verzameling[selListVal][i].proNameChange(proNameWork);

        //     addData(verzameling, selListVal);

        //     verzameling[selListVal][i].editSwitch();

        //     boolEdit = true;
        //     showListOne(verzameling);
        // })
    }

    // function convertDueDate(dueDateString) {
    //     let arrayDate = dueDateString.split("-");
        
    //     return arrayDate;
    // }
}

export { showListOne }