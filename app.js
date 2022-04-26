//variables
const postAPI = "https://jsonplaceholder.typicode.com/posts";
const caja = document.querySelector("#caja");
//eventos
document.addEventListener("DOMContentLoaded", mostrarContenido);



//funciones
async function mostrarContenido( ){
    //llamando mediante FETCH
    const respuesta = await fetch(postAPI);
    const data = await respuesta.json();
    mostrarHTML(data)
}



function mostrarHTML(data){
    
    data.forEach(item => {
        const { title, body, id } = item
        //creamos el script
        const entrada = document.createElement("div");
        entrada.className = "col-4";
        entrada.innerHTML = `
        <div class="border shadow-sm p-3 my-3">
         <h2 class="fs-6 text-uppercase">${title.slice(0,20)}...</h2>
         <p>${body.slice(0,30)}...</p>
          <a href="singlePost.html?id=${id}" class="btn btn-sm btn-primary text-white">
             Ver más
          </a>
             <hr>
          <a href="https://jsonplaceholder.typicode.com/posts/${id}/comments" class="btn btn-sm btn-white">
             Ver comentarios <span class="badge bg-danger">4</span>
          </a>
          </div>  
        `

        //mostramos en el HTML
        caja.appendChild(entrada)
    });


}