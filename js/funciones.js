const input = document.getElementById("tareaInput");
const btn = document.getElementById("agregarBtn");
const list = document.getElementById("listaTareas");


//Cargar las tareas al iniciar

document.addEventListener("DOMContentLoaded", cargarTareas);

//Agregar nuevas tareas
btn.addEventListener("click",agregarTarea);

//funcion agregar tarea
function agregarTarea(){
    const tarea = input.value.trim();

    if(tarea === "")
        return alert("Escribe una tarea primero")

    const tareas = obtenerTareas();
    tareas.push(tarea);
    localStorage.setItem("tareas", JSON.stringify(tareas));
    mostrarTareas();
    input.value = "";
}

function obtenerTareas(){
    return JSON.parse(localStorage.getItem("tareas")) || [];
}

function mostrarTareas(){
    list.innerHTML = "";
    const tareas = obtenerTareas();
    
    for (let i = 0; i < tareas.length; i++) {
        list.innerHTML += "<li>" + tareas[i] + " <button>XX</button></li>";
    }
}

function cargarTareas(){
    mostrarTareas();
}