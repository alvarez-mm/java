const formularioRegistrarse = document.querySelector ("#formularioRegistrarse")
const inputRegistrarNombre = document.querySelector ("#inputRegistrarNombre")
const inputRegistrarEmail = document.querySelector ("#inputRegistrarEmail")
const inputRegistrarContraseña = document.querySelector ("#inputRegistrarContraseña")
const botonGuardarRegistro = document.querySelector ("#botonGuardarRegistro")

formularioRegistrarse.addEventListener ("submit" , (event) => {
    event.preventDefault ()
    
    const nuevoRegistro = {
        nombre: inputRegistrarNombre.value,
        email: inputRegistrarEmail.value,
        contraseña: inputRegistrarContraseña.value
    }

    console.log (nuevoRegistro)

})