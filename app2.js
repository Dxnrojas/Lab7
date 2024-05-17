const todo_form = document.querySelector(".todo-form");
const todoInput = document.querySelector("#todo")
let todo = "" // variable para guardar el texto del input
const todoList = [] // arreglo para guardar los todos

//Evento del input
todoInput.addEventListener("change", (e)=>{

    todo = e.target.value
})

//Evento del form
todo_form.addEventListener("submit", (event)=>{
    event.preventDefault()
    //pusheando la informacion puesta en el input dentro del arrgelo
    todoList.push({
        name: todo,
        state: false
    })
    //estoy mandando la informacion al localstorage y la estoy convirtiendo a un json para que no se vaya solamente como cadena de texto
    window.localStorage.setItem("todos", JSON.stringify(todoList))
    alert("Tu tarea fue agregada exitosamente")
    console.log("Post submit", window.localStorage.getItem("todos"));
})


