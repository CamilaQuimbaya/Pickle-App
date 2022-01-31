const URL_API = "https://rickandmortyapi.com/api";
const HTMLResponse = document.querySelector("#containerOfEpisodios");
const containerO = document.createDocumentFragment();

fetch(`${URL_API}/episode`)
    .then((resolve) => resolve.json())
    .then((episode) => {
        console.log(episode)
        let results = episode.results;
        console.log(results)
        results.forEach(result => {
            let elemt = document.createElement("div")
            elemt.className = "containerEpisode";
            let containerTitle = document.createElement("div")
            containerTitle.className = "containerTitle";
            let containerCreate = document.createElement("div")
            containerCreate.className = "dateCreation";
            console.log(result.name)         
            let createId= document.createElement("h4")
            createId.appendChild(document.createTextNode(`Episode:${result.id}`));
            let created= document.createElement("h4")
            created.appendChild(document.createTextNode(`Episode:${result.name}`));
            let create = document.createElement("h4")
            create.appendChild(document.createTextNode(`Air date: ${result.air_date}`));            
            containerTitle.appendChild(createId)
            containerTitle.appendChild(created)
            elemt.appendChild(containerTitle);
            elemt.appendChild(containerCreate);
            containerCreate.appendChild(create)
            HTMLResponse.appendChild(elemt);
        });
    

    });
    