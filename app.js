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
    "Vist my parents"
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

const formSection = document.getElementById("form")

for (let index = 0; index < 10; index++) {
    if(index==9) {
        formSection.innerHTML +=
        `<fieldset class="container__section__card container__section__card--end"  id="card-${index}"><p  class="card__text">${cardtasklist[index]}</p><input type="checkbox" class="card__input"></fieldset>`;
    }
    else {
        formSection.innerHTML +=
        `<fieldset class="container__section__card" id="card-${index}"><p  class="card__text">${cardtasklist[index]}</p><input type="checkbox" class="card__input"></fieldset>`;
    }

}

function changeColor(elemnent) {
    const target = elemnent.target
    const input = target.querySelector("input")
    let checked = input.checked;
    console.log(checked)
    if (checked == false) {
        input.checked = true
        target.style.backgroundColor = "#C1D6F8";
    }
    else {
        input.checked = false
        target.style.backgroundColor = "#ffffff";
    }
}

for (let index = 0; index < 10; index++) {
    const card = document.getElementById(`card-${index}`);
    card.addEventListener("click", changeColor);
}




