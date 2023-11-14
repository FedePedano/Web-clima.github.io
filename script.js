const api_key="c67ba7a7ca548621a61486a32777010b";
const urlBase='https://api.openweathermap.org/data/2.5/weather';
const gradosKelvin=273.15;

let boton=document.getElementById('botonBusqueda');
//Evento click para el boton de buscar
boton.addEventListener('click',()=>{
    const ciudad=document.getElementById('ciudadEntrada').value
    if(ciudad){
        obtenerApi(ciudad)
    }
});

//funcion para el evento click
function obtenerApi(ciudad){
fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
    .then(data=>data.json())
    .then(data=>mostrarResultado(data))
}

//funcion para mostrar el resultado en la web (en el div)
function mostrarResultado(data){
    const divClima=document.getElementById('datosClima')
    divClima.innerHTML=''

    const locacion=data.name
    const temp=data.main.temp
    const descrip=data.weather[0].description

    //creando los elementos donde van a contener la informacion de la API
    const ciudadTitulo=document.createElement('h2')
    ciudadTitulo.textContent=locacion
    const tempInfo= document.createElement('p')
    tempInfo.textContent=`La temperatura es ${Math.floor(temp-gradosKelvin)} Centigrados `
    const descripElem=document.createElement('p')
    descripElem.textContent=descrip

    //agregando estos elementos creados al div con appendchild
    divClima.appendChild(ciudadTitulo)
    divClima.appendChild(tempInfo)
    divClima.appendChild(descripElem)
}