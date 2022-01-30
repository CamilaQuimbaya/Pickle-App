let img1 = document.getElementById("img1")
let img2 = document.getElementById("img2")
let img3 = document.getElementById("img3")



fetch('https://rickandmortyapi.com/api/character/')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data)
        const carrouData = (ima) => {
            let min = 1
            let max = 800
            let i = Math.floor(Math.random() * (max - min)) + min;
            ima.innerHTML = `<img src="https://rickandmortyapi.com/api/character/avatar/${i}.jpeg" class="d-block w-100 img-carrou" alt="..." >`
        }
        const incremento = 0;
        incremento++;
        incremento != 10 ?
        carrouData(img2):
        console.log("hola");
    })
    .catch((error) => {
        console.log(error)
    })
