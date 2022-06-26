// F O R M U L A R I O

const inputNombre = document.querySelector ("#inputNombre")
const inputCelular = document.querySelector ("#inputCelular")
const inputEmail = document.querySelector ("#inputEmail")
const inputMensaje = document.querySelector ("#inputMensaje")
const botonEnviar = document.querySelector ("#botonEnviar")



botonEnviar.addEventListener ("click" , () => {
    console.log (inputNombre.value)
    console.log (inputCelular.value)
    console.log (inputEmail.value)
    console.log (inputMensaje.value)
})