const formularioRegistrarse = document.querySelector ("#formularioRegistrarse")
const inputRegistrarNombre = document.querySelector ("#inputRegistrarNombre")
const inputRegistrarTipo = document.querySelector ("#inputRegistrarTipo")
const inputRegistrarDeporte = document.querySelector ("#inputRegistrarDeporte")
const inputRegistrarEmail = document.querySelector ("#inputRegistrarEmail")
const inputRegistrarContraseña = document.querySelector ("#inputRegistrarContraseña")
const botonGuardarRegistro = document.querySelector ("#botonGuardarRegistro")

formularioRegistrarse.addEventListener ("submit" , (event) => {
    event.preventDefault ()

    const nuevoRegistro = {
        nombre: inputRegistrarNombre.value,
        tipo: inputRegistrarTipo.value,
        deporte: inputRegistrarDeporte.value,
        email: inputRegistrarEmail.value,
        contraseña: inputRegistrarContraseña.value
    }

    console.log (nuevoRegistro)

    localStorage.setItem ("nuevoSocio" , nuevoRegistro)


    const bienvenidoNuevo = document.querySelector ("#bienvenidoNuevo")
    bienvenidoNuevo.innerText = "Bienvenido: ${inputRegistrarNombre}"
})

