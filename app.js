// Crear una variable donde voy a guardar los todos que estan guardados en el localstorage
const cardtasklist = JSON.parse(window.localStorage.getItem("todos")) || []

const formSection = document.getElementById("form");

//Pintar los todos
cardtasklist.forEach((todo, index) => {
    formSection.innerHTML += `
        <fieldset class="container__section__card" data-id="${index}" id="card-${index}">${todo.name} <input type="checkbox" class="card__input"></fieldset>
    `
});


//cambiar el color cada vez que se le da click
function changeColor(tarjeta) {
    const target = tarjeta.target

    console.log(tarjeta);

    const input = target.querySelector("input")
    let checked = input.checked;

    if (checked == false) {
        //En el arreglo de las tareas cuando esta false, seleccipno la tarjeta con el id presionador y cambio el estado a true
        cardtasklist[target.dataset.id].state = true;
        input.checked = true
        target.style.backgroundColor = "#C1D6F8";
    }

    else {
        //En el arreglo de las tareas cuando esta true, seleccipno la tarjeta con el id presionador y cambio el estado a false
        input.checked = false
        cardtasklist[target.dataset.id].state = false;
        target.style.backgroundColor = "#ffffff";
    }

    //contador
    const counter = document.getElementById("counter");
    counter.innerHTML = "Tengo " + obtainTrueValue(cardtasklist) + " completadas" 

}

//Recorriendo las tareas y ubicando la tarea que tengo el id "index"
cardtasklist.forEach((card, index) => {
    const todoCard = document.getElementById(`card-${index}`);
    todoCard.addEventListener("click", changeColor);  
});


function obtainTrueValue(arreglo) {
    let valueintrue = 0;
    for (let index = 0; index < arreglo.length; index++) {
        if (arreglo[index].state ==true) {
            valueintrue++
        }
    }
    return valueintrue
}


//-------------------------------------------------------------------------

// for (let index = 0; index < 10; index+=1) {
//     if(index==9) {
//         formSection.innerHTML +=
//         `<fieldset class="container__section__card container__section__card--end" data-id="${index}" id="card-${index}"><p  class="card__text">${cardtasklist[index]}</p><input type="checkbox" class="card__input"></fieldset>`;
//     }
//     else {
//         formSection.innerHTML +=
//         `<fieldset class="container__section__card" data-id="${index}" id="card-${index}"><p  class="card__text">${cardtasklist[index]}</p><input type="checkbox" class="card__input"></fieldset>`;
//     }

// }

// for (let index = 0; index < 10; index++) {
//     const card = document.getElementById(`card-${index}`);
//     card.addEventListener("click", changeColor);
// }



