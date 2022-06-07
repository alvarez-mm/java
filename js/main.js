
// Para ingresar a la pagina como administrativo

let password = prompt ("Ingrese la contraseña")

while (password !== "claveadmin") {

    alert ("Contraseña incorrecta")

    password = prompt ("Ingrese la contraseña")

}

alert ("Usted ha ingresado como administrativo")



// Para consultar los precios de los tipos de socios

const tipoSocio = prompt ("Ingrese el tipo de socio para consultar el valor de la cuota mensual")

switch (tipoSocio) {
    case "deportivo":
        alert ("La cuota tiene un valor mensual de $1.500 por persona")
        break
    case "activo":
        alert ("La cuota tiene un valor mensual de $3.000 por persona")
        break
    case "familiar":
        alert ("La cuota tiene un valor mensual de $1.200 por persona")
        break
}



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




