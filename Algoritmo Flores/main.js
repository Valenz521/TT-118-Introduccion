let entradaUsuarioMultiplo = document.getElementById("entradaUsuarioMultiplo")
let btnMultiplo = document.getElementById("btnMultiplo")
let salidaMultiplo = document.getElementById("salidaMultiplo")
let numeroEjercicioEsMultiplo = 0

entradaUsuarioMultiplo.addEventListener("input", (evento) => {
    numeroEjercicioEsMultiplo = evento.target.value
    console.log(numeroEjercicioEsMultiplo)
})
function esMultiplo(numero) {
    if((numero%3==0 && numero%5==0)&&(numero%6==0 && numero%7==0)){
        return "Violeta"
    }
    else if(numero %3==0 && numero%5==0){
        return "Margarita"
    }
    else if(numero %6==0 && numero%7==0){
        return "Rosa"
    }
    else {
        return"Ninguna flor"
    }
}
btnMultiplo.addEventListener("click", () => {
    let resultado = esMultiplo(numeroEjercicioEsMultiplo)
    let hijo = document.createElement("h4")
    hijo.innerHTML = numeroEjercicioEsMultiplo +" "+resultado
    salidaMultiplo.appendChild(hijo)
})

let Tres = document.getElementById("Tres")
let numeroTres = 0
Tres.addEventListener("input", (evento) => {
    numeroTres = evento.target.value
    console.log(numeroTres)
})
function esMultiplo(numero){
    if((numero%3==0 && numero%5==0)&&(numero%6==0 && numero%7==0)){
        return "Violeta"
    }
}