const formularioPerfil = document.querySelector ("#formularioPerfil")
const inputSocio = document.querySelector ("#inputSocio")
const inputContraseña = document.querySelector ("#inputContraseña")
const botonMostrar = document.querySelector ("#botonMostrar")
const botonIngresar = document.querySelector ("#botonIngresar")

formularioPerfil.addEventListener ("submit" , (event) => {
    event.preventDefault ()

    console.log (inputSocio.value)
    console.log (inputContraseña.value)

})


botonMostrar.addEventListener ("click" , (e) => {
    e.preventDefault ()
    if (inputContraseña.type === "password") {
        inputContraseña.type = "text"
    } else {
        inputContraseña.type = "password"
    }
})