let stockProductos = [
    {id: 1, nombre: "camisetaS", precio: 2000, talle: "S", img: "../imagenes/camiseta.jpg"},
    {id: 2, nombre: "camisetaM", precio: 2000, talle: "M", img: "../imagenes/camiseta.jpg"},
    {id: 3, nombre: "camisetaL", precio: 2000, talle: "L", img: "../imagenes/camiseta.jpg"},
    {id: 4, nombre: "camperaS", precio: 10000, talle: "S", img: "../imagenes/campera.jpg"},
    {id: 5, nombre: "camperaM", precio: 10000, talle: "M", img: "../imagenes/campera.jpg"},
    {id: 6, nombre: "camperaL", precio: 10000, talle: "L", img: "../imagenes/campera.jpg"},
    {id: 7, nombre: "pantalonS", precio: 1500, talle: "S", img: "../imagenes/pantalon.jpg"},
    {id: 8, nombre: "pantalonM", precio: 1500, talle: "M", img: "../imagenes/pantalon.jpg"},
    {id: 9, nombre: "pantalonL", precio: 1500, talle: "L", img: "../imagenes/pantalon.jpg"},

]

const productosContainer = document.querySelector ("#contenedor-productos")

stockProductos.forEach ((item)=>{
    const div = document.createElement ("div")
    div.classList.add ("producto")

    div.innerHTML = '
                    <img src = ${item.img}>
                    <h3>${item.nombre}</h3>
                    <p>Talle: ${item.talle}</p>
                    <p class = "precioProducto">Precio: $${item.precio}</p>
                    <button class = "boton-agregar">Agregar <i class= "fas fa-shopping-cart"></i></button>
                    '

    productosContainer.append(div)
})