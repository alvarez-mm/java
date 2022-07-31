const modalContenedor = document.getElementsByClassName ("modalContenedor") [0]
const botonAbrirCarrito = document.getElementById ("botonCarrito")
const botonCerrarCarrito =document.getElementById ("cerrarCarrito")
const modalCarrito = document.getElementsByClassName ("modalCarrito") [0]

botonAbrirCarrito.addEventListener ("click", () => {
    modalContenedor.classList.toggle ("modalActivo")
})

botonCerrarCarrito.addEventListener ("click", () => {
    modalContenedor.classList.toggle ("modalActivo")
})

modalContenedor.addEventListener ("click", () => {
    botonCerrarCarrito.click()
})

modalCarrito.addEventListener ("click", (event) => {
    event.stopPropagation()
})