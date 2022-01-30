let img1 = document.getElementById("img1")
let img2 = document.getElementById("img2")
let img3 = document.getElementById("img3")


fetch('https://rickandmortyapi.com/api/character')
  .then( (response) =>{
    return response.json()
  })
  .then((data)=>{
    console.log(data.results[0])
    const carrouData = (ima) => {
      let min = 0
      let max = 20
      let i = Math.floor(Math.random() * (max - min) ) + min;
      console.log(i)
      let rutImag = data.results[i].image
      let nameIm = data.results[i].name
      let specieInfo = data.results[i].species
      let statusInfo = data.results[i].status
      ima.innerHTML = `<img src="${rutImag}" class="d-block w-100 img-carrou" alt="..." >
                      <div class="carousel-caption d-none d-md-block">
                      <h2 class="text-carousel">${nameIm}</h2>
                      <p class="text-carousel">Especie: ${specieInfo}</p>
                      <p class="text-carousel">Estado: ${statusInfo}</p>
                      </div>                      
      `
    }
    carrouData(img1)
    carrouData(img2)
    carrouData(img3)
  })
  .catch((error)=>{
    console.log(error)
  })
