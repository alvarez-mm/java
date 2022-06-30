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
    contraseña: "pipa"
}

console.log (socio1)


const socio2 = {
    nombre: "Karim Fares",
    numero: 2,
    tipo: "deportivo",
    deporte: "futbol",
    contraseña: "reino" 
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


// STORAGE

const socio8 = localStorage.getItem ("nuevoSocio")

console.log (socio8)