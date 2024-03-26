const cardtasklist = [
    "Create new project",
    "Working call",
    "Meet with the doctor",
    "Go to the shop",
    "Take the kids to the school",
    "Walk with the dog",
    "Go to the gym",
    "Study JavaScript",
    "Go to classes",
    "Visit my parents"
]

const cardchecklist = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
]

const formSection = document.getElementById("form");

for (let index = 0; index < 10; index+=1) {
    if(index==9) {
        formSection.innerHTML +=
        `<fieldset class="container__section__card container__section__card--end" data-id="${index}" id="card-${index}"><p  class="card__text">${cardtasklist[index]}</p><input type="checkbox" class="card__input"></fieldset>`;
    }
    else {
        formSection.innerHTML +=
        `<fieldset class="container__section__card" data-id="${index}" id="card-${index}"><p  class="card__text">${cardtasklist[index]}</p><input type="checkbox" class="card__input"></fieldset>`;
    }

}

function changeColor(element) {
    const target = element.target
    const input = target.querySelector("input")
    let checked = input.checked;
    console.log(target.dataset.id)
    if (checked == false) {
        cardchecklist [target.dataset.id] = true;
        input.checked = true
        target.style.backgroundColor = "#C1D6F8";
    }
    else {
        input.checked = false
        cardchecklist [target.dataset.id] = false;
        target.style.backgroundColor = "#ffffff";
    }
    console.log(cardchecklist)

    const counter = document.getElementById("counter");
    counter.innerHTML = "Tengo " + obtainTrueValue(cardchecklist) + " completadas" 

}

for (let index = 0; index < 10; index++) {
    const card = document.getElementById(`card-${index}`);
    card.addEventListener("click", changeColor);
}


function obtainTrueValue(arreglo) {
    let valueintrue = 0;
    for (let index = 0; index < arreglo.length; index++) {
        if (arreglo[index]==true) {
            valueintrue++
        }
    }
    return valueintrue
}






