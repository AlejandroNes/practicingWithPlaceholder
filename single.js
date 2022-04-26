//variables
const url = "https://jsonplaceholder.typicode.com/posts";
const titulo = document.querySelector("#titulo");
const parrafo = document.querySelector("#parrafo");
//eventos
document.addEventListener('DOMContentLoaded', mostrarPost);



//funciones
function mostrarPost(){

    const postID = new URLSearchParams(window.location.search);
    const id = parseInt(postID.get("id"));

    //fetch
    mostrarAPI(id);

}


async function mostrarAPI(id){
    const respuesta = await fetch(`${url}/${id}`);
    const data = await respuesta.json();
    const {title, body} = data;
    let t = title.toUpperCase();

    titulo.classList.add("text-info")
    titulo.textContent = t
    parrafo.textContent = body
}