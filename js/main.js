
// Para ingresar a la pagina como administrativo

//let password = prompt ("Ingrese la contraseña")

//while (password !== "claveadmin") {

  //  alert ("Contraseña incorrecta")

   // password = prompt ("Ingrese la contraseña")

//}

//alert ("Usted ha ingresado como administrativo")



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


// OBJETOS Socios

const socio1 = {
    nombre: "Rocio Bonetto",
    numero: 1,
    tipo: "deportivo",
    deporte: "voley" 
}

console.log (socio1)


const socio2 = {
    nombre: "Karim Fares",
    numero: 2,
    tipo: "deportivo",
    deporte: "futbol" 
}

console.log (socio2)


const socio3 = {
    nombre: "Emiliano Mera",
    numero: 3,
    tipo: "familiar",
    deporte: "basquet" 
}

console.log (socio3)


const socio4 = {
    nombre: "Luciana Mera",
    numero: 4,
    tipo: "familiar",
    deporte: "jockey" 
}

console.log (socio4)


const socio5 = {
    nombre: "Ignacio Mera",
    numero: 5,
    tipo: "familiar",
    deporte: "natacion" 
}

console.log (socio5)


const socio6 = {
    nombre: "Nuri Alvarez",
    numero: 6,
    tipo: "activo",
    deporte: "gimnasio" 
}

console.log (socio6)


// ARRAYS

const socios = [socio1 , socio2 , socio3 , socio4 , socio5 , socio6]


const socio7 = {
    nombre: "Carolina Muñoz",
    numero: 7,
    tipo: "activo",
    deporte: "tenis" 
}


socios.push (socio7)

console.log (socios)



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

