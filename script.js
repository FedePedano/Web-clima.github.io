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
    console.log(data)
    const divClima=document.getElementById('datosClima')
    divClima.innerHTML=''

    const locacion=data.name
    const paisNombre=data.sys.country
    const temp=data.main.temp
    const humedad=data.main.humidity

    //creando los elementos donde van a contener la informacion de la API
    const ciudadTitulo=document.createElement('h2')
    ciudadTitulo.textContent=`${locacion}, ${paisNombre}`
    const tempInfo= document.createElement('p')
    tempInfo.textContent=`La temperatura es ${Math.floor(temp-gradosKelvin)} Centigrados `
    const humedadInfo=document.createElement('p')
    humedadInfo.textContent=`La humedad es de ${humedad}%`
    
    //agregando estos elementos creados al div con appendchild
    divClima.appendChild(ciudadTitulo)
    divClima.appendChild(tempInfo)
    divClima.appendChild(humedadInfo)
}