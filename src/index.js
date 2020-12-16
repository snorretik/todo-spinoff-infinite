// import files from filename
import { gettingValues } from './gettingValues'
import { addData } from './addData'
import { showListOne } from './showListOne'

let verzameling = { main: [], };

// var database = firebase.database();


function Todo({title, dueDate, description, proName, priority, checked }) {
    this.title = title;
    this.dueDate = dueDate;
    this.description = description;
    this.proName = proName;
    this.priority = priority;
    this.checked = checked;
    this.expanded = false;
    this.edit = false;
}

Todo.prototype.prioritySwitch = function () {
        switch (this.priority) {
            case "yellow":
                this.priority = "orange";
                break;
            case "orange":
                this.priority = "red";
                break;
            case "red":
                this.priority = "yellow";
                break;
            default:
                console.log(this.priority);
                break;
        }
    }

Todo.prototype.expandedSwitch = function () {
        this.expanded ? this.expanded = false : this.expanded = true;
}

Todo.prototype.checkedSwitch = function () {
        this.checked ? this.checked = false : this.checked = true;
}

Todo.prototype.editSwitch = function () {
        this.edit ? this.edit = false : this.edit = true;
}

function rebuildingFunc(verzamelingTemp) {
    for (let key in verzamelingTemp) {
        if (verzamelingTemp[key].length != 0) {
            for (let i = 0; i < verzamelingTemp[key].length; i++) {
                // addData

                let title = verzamelingTemp[key][i].title;
                let dueDate = verzamelingTemp[key][i].dueDate;
                let description = verzamelingTemp[key][i].description;
                let proName = verzamelingTemp[key][i].proName;
                let priority = verzamelingTemp[key][i].priority;
                let checked = verzamelingTemp[key][i].checked;
                

                // console.log(checked);

                const addingVar = new Todo({ title, dueDate, description, proName, priority, checked });

                addData(verzameling, proName);

                verzameling[key].push(addingVar);
            }
        }
    }
}

function initializeFunc() {
    let makeEl = document.querySelector("#makeButton");
    // console.log(`${myStorage}, dit is myStorage`);

    makeEl.addEventListener('click', (e) => {

        let values = gettingValues();
        
        let title = values[0];
        let dueDate = values[1];
        let description = values[2];
        let proName = values[3];
        let priority = values[4];
        let checked = false;

        const toAddToDo = new Todo({ title, dueDate, description, proName, priority, checked });

        // console.log(toAddToDo);

        addData(verzameling, values[3]);

        verzameling[values[3]].push(toAddToDo);

        // addData(verzameling, values[3]);

        // databaseStoring();

        // 1
        // for (let key in verzameling) {
            
        // }

        window.localStorage.clear()
        window.localStorage.setItem('save', JSON.stringify(verzameling));

        showListOne(verzameling);
        addAllButtonEvents();
    });

    let proEl = document.querySelector("#proSelect");
    proEl.addEventListener('click', (e) => {
        showListOne(verzameling);
        addAllButtonEvents();
    });

    // local storage get, moet als eerste, als er iets in zit ten minste.
    let sync = document.querySelector("#sync");
    sync.addEventListener('click', (e) => {
        // window.localStorage.clear();

        if (window.localStorage.getItem('save')) {
            let objectVar = window.localStorage.getItem('save');
    
            // zo denk ik dat ik het wil hieronder
            let verzamelingTemp = JSON.parse(objectVar);
    
            rebuildingFunc(verzamelingTemp);
            // zo dus --^
    
            showListOne(verzameling);
            addAllButtonEvents();
        }
    })

    // let databaseButtonSet = document.querySelector("#databaseButtonSet");
    // databaseButtonSet.addEventListener('click', (e) => {
    //     databaseStoring();
    // })

    // let databaseButtonGet = document.querySelector("#databaseButtonGet");
    // databaseButtonGet.addEventListener('click', (e) => {
    //     databaseFetching();
    //     showListOne(verzameling);
    //     addAllButtonEvents();
    // })

    // let showButton = document.querySelector("#show");
    // showButton.addEventListener('click', (e) => {
    //     showListOne(verzameling);
    //     addAllButtonEvents();
    // })

    // function databaseStoring() {
    //     firebase.database().ref('todos').set(verzameling);
    // }

    // function databaseFetching() {
    //     firebase.database().ref('todos').on('value', (snap) => {
    //         console.log(snap.val());

    //         verzameling = snap.val();

    //         console.log(verzameling["main"][0].title);
    //     })
    // }

    function addAllButtonEvents() {
        // kan hier nog proNameEl en proNameVal in zetten en dan in de volgende events meegeven, want die zijn herhaald
        addButton1Events();
        addButton2Events();
        addButton3Events();
        addButton4Events();
        addButton5Events();
        addButton6Events();
        // addButton7Events();
    }

    function addButton1Events() {
        // expand knop
        // let buttons = Array.from(document.querySelectorAll(".expandDis"))

        let proNameEl = document.querySelector("#proSelect");
        let proNameVal = proNameEl.value;

        let numberExpIndex = 0;

        for (let i = 0; i < verzameling[proNameVal].length; i++) {
            if (verzameling[proNameVal][i].edit == false) {
                // console.log(`${i + 1 + numberExpIndex}, bij addbutton1events`);
                let button = document.querySelector(`#expandNo${i + 1 + numberExpIndex}`);

                button.addEventListener('click', (e) => {
                    verzameling[proNameVal][i].expandedSwitch();
                    showListOne(verzameling);
                    addAllButtonEvents();
                });

            } else if (verzameling[proNameVal][i].edit == true) {
                // numberExpIndex += 1;
                console.log("edit is true expand");
            }
            if (verzameling[proNameVal][i].expanded == true) {
                numberExpIndex += 1;
            }
        }
    }
    
    function addButton2Events() {
        // priority knop
        // let buttons = Array.from(document.querySelectorAll(".priorityDis"));
        
        let proNameEl = document.querySelector("#proSelect");
        let proNameVal = proNameEl.value;

        let numberExpIndex = 0;

        for (let i = 0; i < verzameling[proNameVal].length; i++) {
            if (verzameling[proNameVal][i].edit == false) {
                let button = document.querySelector(`#priorityNo${i + 1 + numberExpIndex}`);
                
                button.addEventListener('click', (e) => {
                    verzameling[proNameVal][i].prioritySwitch();

                    window.localStorage.clear()
                    window.localStorage.setItem('save', JSON.stringify(verzameling));

                    showListOne(verzameling);
                    addAllButtonEvents();
                });

            } else if (verzameling[proNameVal][i].edit == true) {
                // numberExpIndex += 1;
                console.log("edit is true priorityNormal");
            }
            if (verzameling[proNameVal][i].expanded == true) {
                numberExpIndex += 1;
            } 
        }
    }

    function addButton3Events() {
        // check toggle
        // let buttons = Array.from(document.querySelectorAll(".checkDis"));

        let proNameEl = document.querySelector("#proSelect");
        let proNameVal = proNameEl.value;

        let numberExpIndex = 0;

        for (let i = 0; i < verzameling[proNameVal].length; i++) {
            if (verzameling[proNameVal][i].edit == false) {
                let button = document.querySelector(`#checkNo${i + 1 + numberExpIndex}`);
                
                button.addEventListener('click', (e) => {
                    verzameling[proNameVal][i].checkedSwitch();
    
                    // let groep1 = document.querySelectorAll(`.textualGroup${i + 1 + numberExpIndex}`);
                    // let groep2 = document.querySelectorAll(`.textualGroup${i + 2 + numberExpIndex}`);

                    // checkedVal nog
                    // if (verzameling[proNameVal][i].checkedVal) {
                    //     groep1.forEach((textEl) => {
                    //         textEl.style.textDecoration = "line-through";
                    //     });
                    //     groep2.forEach((textEl) => {
                    //         textEl.style.textDecoration = "line-through";
                    //     });
                    // } else {
                    //     groep1.forEach((textEl) => {
                    //         textEl.style.textDecoration = "none";
                    //     });
                    //     groep2.forEach((textEl) => {
                    //         textEl.style.textDecoration = "none";
                    //     });
                    // }

                    window.localStorage.clear()
                    window.localStorage.setItem('save', JSON.stringify(verzameling));

                    showListOne(verzameling);
                    addAllButtonEvents();
                });
            } else if (verzameling[proNameVal][i].edit == true) {
                // numberExpIndex += 1;
                console.log("edit is true toggle");
            }
            if (verzameling[proNameVal][i].expanded == true) {
                numberExpIndex += 1;
            }
        }
    }

    function addButton4Events() {
        // delete knop
        // let buttons = Array.from(document.querySelectorAll(".deleteDis"));

        let proNameEl = document.querySelector("#proSelect");
        let proNameVal = proNameEl.value;

        let numberExpIndex = 0;

        for (let i = 0; i < verzameling[proNameVal].length; i++) {
            if (verzameling[proNameVal][i].edit == false) {
                let button = document.querySelector(`#deleteNo${i + 1 + numberExpIndex}`);

                button.addEventListener('click', (e) => {
                    deleteFunction(proNameVal, i);
                });
            } else if (verzameling[proNameVal][i].edit == true) {
                // numberExpIndex += 1;
                console.log("edit is true delete");
            }
            if (verzameling[proNameVal][i].expanded == true) {
                numberExpIndex += 1;
            }
        }
    }

    // function addButton7Events() {
    //     let proNameEl = document.querySelector("#proSelect");
    //     let proNameVal = proNameEl.value;

    //     let numberExpIndex = 0;

    //     for (let i = 0; i < verzameling[proNameVal].length; i++) {
    //         if (verzameling[proNameVal][i].edit == false) {
    //             let button = document.querySelector(`#editButtonNo${i + 2 + numberExpIndex}`);

    //             button.addEventListener('click', (e) => {
    //                 verzameling[proNameVal][i]
    //             })
    //         }
    //     }
    // }

    function addButton5Events() {
        // edit knop
        // moet + 2
        // let buttons = Array.from(document.querySelectorAll(".editPriorityDis"));
        
        let proNameEl = document.querySelector("#proSelect");
        let proNameVal = proNameEl.value;

        let numberExpIndex = 0;

        for (let i = 0; i < verzameling[proNameVal].length; i++) {
            if ((verzameling[proNameVal][i].edit == false) && (verzameling[proNameVal][i].expanded == true)) {
                let button = document.querySelector(`#editButtonNo${i + 2 + numberExpIndex}`);

                // console.log(`${button} is button`);

                button.addEventListener('click', (e) => {
                    verzameling[proNameVal][i].editSwitch();

                    // console.log(`${verzameling[proNameVal][i].edit} is edit`)

                    // window.localStorage.clear()
                    // window.localStorage.setItem('save', JSON.stringify(verzameling));

                    window.localStorage.clear()
                    window.localStorage.setItem('save', JSON.stringify(verzameling));

                    showListOne(verzameling);
                    addAllButtonEvents();
                });

                numberExpIndex += 1;

            } else if ((verzameling[proNameVal][i].edit == true) && (verzameling[proNameVal][i].expanded == true)) {
                numberExpIndex += 1;
            }
            // expandedVal nog en editVal
            // if ((verzameling[proNameVal][i].expandedVal == true) && (verzameling[proNameVal][i].editVal == false)) {
            //     numberExpIndex += 1;
            // } else if ((verzameling[proNameVal][i].expandedVal == true) && (verzameling[proNameVal][i].editVal == true)) {
            //     console.log("dit was het probleem");
            // } else {
            //     console.log("dit zou niet moeten");
            // }
        }
    }

    // function priorityEdit switch

    function addButton6Events() {
        // save knop
        // moet + 2
        // let buttons = Array.from(document.querySelectorAll(".saveButtonDis"))
        let proNameEl = document.querySelector("#proSelect");
        let proNameVal = proNameEl.value;
        let numberExpIndex = 0;
        
        let extraBool = false;
        let arrayRemove = [];

        for (let i = 0; i < verzameling[proNameVal].length; i++) {
            if (verzameling[proNameVal][i].edit == true) {
                
                let button = document.querySelector(`#saveButtonNo${i + 2 + numberExpIndex}`);

                let inputTitleEl = document.querySelector(`#input1No${i + 1 + numberExpIndex}`);
                let inputDueEl = document.querySelector(`#input2No${i + 1 + numberExpIndex}`);
                let inputDescripEl = document.querySelector(`#input3No${i + 2 + numberExpIndex}`);
                let inputProNameEl = document.querySelector(`#input4No${i + 2 + numberExpIndex}`);

                button.addEventListener('click', (e) => {
                    // console.log(`${i + 1 + numberExpIndex} index`);

                    // let dueDateAr = inputDueEl.value; 

                    verzameling[proNameVal][i].title = inputTitleEl.value;
                    verzameling[proNameVal][i].dueDate = inputDueEl.value;
                    verzameling[proNameVal][i].description = inputDescripEl.value;
                    // verzameling[proNameVal][i].proNameChange = inputProNameEl.value;

                    if (verzameling[proNameVal][i].proNameVal != inputProNameEl.value) {
                        verzameling[proNameVal][i].proName = inputProNameEl.value;

                        verzameling[proNameVal][i].editSwitch();
                        verzameling[proNameVal][i].expandedSwitch();

                        addData(verzameling, inputProNameEl.value);

                        verzameling[inputProNameEl.value].push(verzameling[proNameVal][i]);

                        arrayRemove.push(i);

                        if (extraBool == true) {
                            removePesty(arrayRemove);
                        }

                        extraBool = false;

                    } else {
                        verzameling[proNameVal][i].editSwitch();
                        // verzameling[proNameVal][i].expandedSwitch();

                        window.localStorage.clear()
                        window.localStorage.setItem('save', JSON.stringify(verzameling));

                        showListOne(verzameling);
                        addAllButtonEvents();
                    }

                    // showListOne(verzameling);
                    // addAllButtonEvents();
                })

                numberExpIndex += 1;
                
            } else if (verzameling[proNameVal][i].expanded == true) {
                numberExpIndex += 1;
                // console.log("test")
            }

            // console.log(`${verzameling[proNameVal].length} is length`);
            // console.log(`${i + 1} is i`);
            
            if ((i + 1) == (verzameling[proNameVal].length)) {
                extraBool = true;
            }
        }

        function removePesty(arrayRemove) {
            for (let x = 0; x < arrayRemove.length; x++) {
                console.log("dubbeltest");
                
                deleteFunction(proNameVal, arrayRemove[x]);

                console.log(verzameling);
            }
        }

        // if (arrayRemove.length != 0) {
        //     for (let i = 0; i < arrayRemove.length; i++) {
        //         verzameling[proNameVal].splice(arrayRemove[i], 1);

        //         deleteFunction(proNameVal, arrayRemove[i]);
        //     }
        // }

        // function convertDueDate(dueDateString) {
        //     let arrayDate = dueDateString.split("-");
        
        //     return arrayDate;
        // }
    }

    function deleteFunction(proNameVal, i) {
        verzameling[proNameVal].splice(i, 1);
    
        if ((verzameling[proNameVal].length == 0) && (proNameVal != "main")) {
            let parent = document.querySelector("#proSelect");
            let child = document.querySelector(`#selector${proNameVal}`);

            parent.removeChild(child);

            delete verzameling[proNameVal];

        }

        window.localStorage.clear()
        window.localStorage.setItem('save', JSON.stringify(verzameling));

        showListOne(verzameling);
        addAllButtonEvents();
    }
}

initializeFunc();