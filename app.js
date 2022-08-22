const URLBase="https://rickandmortyapi.com/api/"
const enpointPersonajes="character"
const enpointEpisodios="episode"
const enpointLugares="location"
const enpointHombr="?gender=male"
const enpointDesco="?gender=unknow"
const enpointMuj="?gender=female"

const cartas = document.querySelector('#cartas')


// const obtenerPersonajes = () => {
//     fetch(`${URLBase}${enpointPersonajes}`)
//     .then(respon=>respon.json())
//     // .then(data=>console.log(data.results))
//     .then(data=>creoCards(data.results))
//     .catch(error=>console.log(error))
// }

// obtenerPersonajes()

const obtenerGen = () => {
    if("1" ==slcGenero.value){
    let slcGenero = document.getElementById('slcGenero');
    fetch(`${URLBase}${enpointPersonajes}/${enpointHombr}`)
    .then(respon=>respon.json())
    // .then(data=>console.log(data.results))
    .then(data=>creoCards(data.results))
    .catch(error=>console.log(error))
    }else if("3"==slcGenero.value){
    fetch(`${URLBase}${enpointPersonajes}/${enpointDesco}`)
    .then(respon=>respon.json())
    // .then(data=>console.log(data.results))
    .then(data=>creoCards(data.results))
    .catch(error=>console.log(error))
    }else if("2"==slcGenero.value){
    fetch(`${URLBase}${enpointPersonajes}/${enpointMuj}`)
    .then(respon=>respon.json())
    // .then(data=>console.log(data.results))
    .then(data=>creoCards(data.results))
    .catch(error=>console.log(error))
    }
}



const creoCards=(personajes)=>{
    
    for (const personaje of personajes) {
        // console.log(personaje.name)
        const {gender,name,image,id,species,status}=personaje
        cartas.innerHTML+=`<div class="card m-3"  style="width: 18rem;">
        <img src=${image} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Nombre: <b>${name}</h5>
          <p class="card-text">Id: <b>${id}</p>
          <p class="card-text">Especie: <b>${species}</p>
          <a href="#" class="btn btn-primary">Ver más</a>
        </div>
      </div>`
    }
    
}

