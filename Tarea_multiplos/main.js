let Entrada0 = document.getElementById("Entrada0")
let btnCalcular = document.getElementById("btnCalcular")
let salidaMultiplo = document.getElementById("salidaMultiplo")
let numero = 0 

Entrada0.addEventListener("input", (evento) => {
    numero = evento.target.value
    console.log(numero)
})


if(numero %3==0 && numero%5==0){
    console.log("FizzBuzz")
}


if(numero%3==0){
    console.log("Fizz")
}else if(numero %3==0){
    console.log("Buzz")
}


if(numero%5==0){
    console.log("Buzz")
}else if(numero %5==0){
    console.log("Fizz")
}

function funcionFizzBuzz(n){
    for (let numero= 1; numero<=n; numero++){
    if(numero% 3 == 0 && numero% 5 == 0){
        console.log("funcionFizzBuzz")
        let hijo = document.createElement("li")
    hijo.innerHTML = "funcionFizzBuzz" 
    salidaMultiplo.appendChild(hijo)

    }else if (numero% 3== 0){
        console.log("Fizz")
        let hijo = document.createElement("li")
    hijo.innerHTML = "Fizz" 
    salidaMultiplo.appendChild(hijo)

    }else if (numero%5 ==0){
        console.log("Buzz")
        let hijo = document.createElement("li")
    hijo.innerHTML = "Buzz" 
    salidaMultiplo.appendChild(hijo)
    }else{
        console.log(numero)
        let hijo = document.createElement("li")
    hijo.innerHTML = numero 
    salidaMultiplo.appendChild(hijo)
    }
    }
}

btnCalcular.addEventListener("click", () => {
    
    let resultado = funcionFizzBuzz(numero)
    
})