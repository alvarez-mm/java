




// Para consultar los precios de los tipos de socios

//const tipoSocio = prompt ("Ingrese el tipo de socio para consultar el valor de la cuota mensual")

//switch (tipoSocio) {
//    case "deportivo":
//        alert ("La cuota tiene un valor mensual de $1.500 por persona")
//        break
//    case "activo":
//        alert ("La cuota tiene un valor mensual de $3.000 por persona")
//        break
//    case "familiar":
//        alert ("La cuota tiene un valor mensual de $1.200 por persona")
//        break
//}



// Para saber informacion del socio

function infoSocio () {
    
    let nombre = prompt ("Ingrese su nombre completo")
    let numero = prompt ("Ingrese numero de socio")
    let tipo = prompt ("Ingrese que tipo de socio es")
    let deporte = prompt ("Ingrese el deporte que realiza")

    console.log ("Nombre y apellido: " + nombre)
    console.log ("Numero de socio: " + numero)
    console.log ("Tipo de socio: " + tipo)
    console.log ("Deporte que realiza: " + deporte)
}

infoSocio ()



// Para buscar por numero de socio

const numeroSocio = prompt ("Ingrese el numero de socio que desea buscar")

for (let i = 0; i < 10; i++) {

    if (i == numeroSocio ) {
        console.log (i + "SOCIO BUSCADO")
        break
    }

}






// FILTERconst voley = socios.filter ( (el) => {return el.deporte === "voley"}) console.log (voley)


// EVENTOS

const btnperfil = document.querySelector("#botonperfil")

const clickear =  () => {
    console.log ("boton clickeado")
}

btnperfil.addEventListener ("click" , clickear )


// MOUSE

const mouse = document.createElement ("img")
mouse.src ="clickmouse.png"
mouse.className = "mouse"
document.body.appendChild (mouse)


window.addEventListener ("mousemove" , ({x , y})=>{
    console.log (x ,y )
    moverMouse (x , y)
})


function moverMouse (newX , newY) {

    const {x , y} = mouse.getBoundingClientRect ()

    let rotate = 0

    if (newY >= y) {
        if (newX >= x) {
            rotate = 90
        } else {
            rotate = 180
        }
    } else if (newX <=x) {
        rotate = 270
    }

    mouse.style.transform = 'rotate(${rotate}deg)'
    mouse.style.top = (newY) + 'px'
    mouse.style.left = (newX) + 'px'
}

