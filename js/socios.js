// MODALES

const modalsociodeportivo = document.querySelector ("#modalsociodeportivo")
const abrirSociodeportivo = document.querySelector ("#abrirSociodeportivo")
const cerrarSociodeportivo = document.querySelector ("#cerrarSociodeportivo")

abrirSociodeportivo.addEventListener ('click', () => {
    modalsociodeportivo.classList.add ("sociodeportivo-visible")
})

cerrarSociodeportivo.addEventListener ('click', () => {
    modalsociodeportivo.classList.remove ("sociodeportivo-visible")
})


const modalsocioactivo = document.querySelector ("#modalsocioactivo")
const abrirSocioactivo = document.querySelector ("#abrirSocioactivo")
const cerrarSocioactivo = document.querySelector ("#cerrarSocioactivo")

abrirSocioactivo.addEventListener ('click', () => {
    modalsocioactivo.classList.add ("socioactivo-visible")
})

cerrarSocioactivo.addEventListener ('click', () => {
    modalsocioactivo.classList.remove ("socioactivo-visible")
})


const modalsociofamiliar = document.querySelector ("#modalsociofamiliar")
const abrirSociofamiliar = document.querySelector ("#abrirSociofamiliar")
const cerrarSociofamiliar = document.querySelector ("#cerrarSociofamiliar")

abrirSociofamiliar.addEventListener ('click', () => {
    modalsociofamiliar.classList.add ("sociofamiliar-visible")
})

cerrarSociofamiliar.addEventListener ('click', () => {
    modalsociofamiliar.classList.remove ("sociofamiliar-visible")
})





// OBJETOS Socios

const socio0 = {
    nombre: "Administrativo",
    numero: 0,
    tipo: "adminitrativo",
    deporte: "administrativo",
    email: "admin@gmail.com",
    contraseña: "claveadmin"
}

const socio1 = {
    nombre: "Rocio Bonetto",
    numero: 1,
    tipo: "deportivo",
    deporte: "voley",
    email: "tuti@gmail.com",
    contraseña: "pipa"
}

console.log (socio1)


const socio2 = {
    nombre: "Karim Fares",
    numero: 2,
    tipo: "deportivo",
    deporte: "futbol",
    email: "kf@gmail.com",
    contraseña: "reino" 
}

console.log (socio2)


const socio3 = {
    nombre: "Emiliano Mera",
    numero: 3,
    tipo: "familiar",
    deporte: "basquet",
    email: "emimera@gmail.com",
    contraseña: "pelota"
}

console.log (socio3)


const socio4 = {
    nombre: "Luciana Mera",
    numero: 4,
    tipo: "familiar",
    deporte: "jockey",
    email: "lume@gmail.com",
    contraseña: "frutilla"
}

console.log (socio4)


const socio5 = {
    nombre: "Ignacio Mera",
    numero: 5,
    tipo: "familiar",
    deporte: "natacion",
    email: "nacho@gmail.com",
    contraseña: "araña"
}

console.log (socio5)


const socio6 = {
    nombre: "Nuri Alvarez",
    numero: 6,
    tipo: "activo",
    deporte: "gimnasio",
    email: "nur@gmail.com",
    contraseña: "doc" 
}

console.log (socio6)


// ARRAYS

const socios = [socio1 , socio2 , socio3 , socio4 , socio5 , socio6]


const socio7 = {
    nombre: "Carolina Muñoz",
    numero: 7,
    tipo: "activo",
    deporte: "tenis",
    email: "caromu@gmail.com",
    contraseña: "amarillo" 
}


socios.push (socio7)

console.log (socios)


// STORAGE

const socio8 = localStorage.getItem ("nuevoSocio")

console.log (socio8)