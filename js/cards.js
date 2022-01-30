let i = Math.floor(Math.random() * (42 - 2) ) + 2;
let cardContainer = document.getElementById("card-container")

fetch(`https://rickandmortyapi.com/api/character/?page=${i}`)
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data.results[2].image)
    
    data.results.forEach(element => {  
        j = 0     
        while(j <= 0){
            const myNode1 = document.createElement("div")
        myNode1.classList.add("col-4", "p-3")

        const myNode2 = document.createElement("div")
        myNode2.classList.add("card", "card-radiu")

        const myNode3 = document.createElement("img")
        myNode3.classList.add("card-img-top", "card-radiu")
        myNode3.setAttribute("src", element.image)

        const myNode4 = document.createElement("div")
        myNode4.classList.add("card-body")

        const myNode5 = document.createElement("h5")
        myNode5.classList.add("card-title", "text-center")
        myNode5.textContent = element.name

        const myNode6 = document.createElement("p")
        myNode6.classList.add("card-text", "text-center")
        myNode6.textContent = element.species

        const myNode7 = document.createElement("p")
        myNode7.classList.add("card-text", "text-center")
        myNode7.textContent = element.status
        

        cardContainer.appendChild(myNode1)
        myNode1.appendChild(myNode2)
        myNode2.appendChild(myNode3)
        myNode2.appendChild(myNode4)
        myNode4.appendChild(myNode5)
        myNode4.appendChild(myNode6)
        myNode4.appendChild(myNode7)
        j++
        }
    });
    
  })
  .catch((err) => {
    console.log(err)
  })
  