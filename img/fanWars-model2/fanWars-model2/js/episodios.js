const URL_API = "https://rickandmortyapi.com/api";
const HTMLResponse = document.querySelector("#containerOfEpisodios");
const contenedor = document.createDocumentFragment();

fetch(`${URL_API}/episode`)
    .then((resolve) => resolve.json())
    .then((episodios) => {
        let results = episodios.results;
        results.forEach(result => {
            let elemt = document.createElement("div")
            elemt.className = "contenedorEpisodio";
            let containerTitle = document.createElement("div")
            containerTitle.className = "containerTitle";
           let containerCreacion = document.createElement("div")
           containerCreacion.className = "dateCreacion";
            console.log(result.name)
            let creacion = document.createElement("h4")
            creacion.appendChild(document.createTextNode(`Name of episodio:${result.name}`));
            let create = document.createElement("h4")
            create.appendChild(document.createTextNode(`Creation date: ${result.created}`));
            containerTitle.appendChild(creacion)
            elemt.appendChild(containerTitle);
            elemt.appendChild(containerCreacion);
            containerCreacion.appendChild(create)
            HTMLResponse.appendChild(elemt);
        });


    });
/* fetch(`${URL_API}/character`)
    .then((resolve) => resolve.json())
    .then((character) => {
        let results = character.results;
        results.forEach(result=>{
        let contenedorimagen = document.createElement("div")
        let images = document.createElement("img")
        images.src =`${result.image}`
        images.alt = "personaje"
        console.log(images)
        contenedorimagen.appendChild(images)
document.querySelector(".contenedorEpisodio").appendChild(contenedorimagen)
        })
    });
 */
