const productosContainer = document.querySelector ('#contenedor-productos')


fetch('../stock.json')
    .then((resp) => resp.json())
    .then((data) => {
        data.forEach ((item) => {
            const div = document.createElement ('div')
            div.classList.add ('producto')
        
            div.innerHTML = `
                            <img src = ${item.img}>
                            <h3>${item.nombre}</h3>
                            <p>Talle: ${item.talle}</p>
                            <p class = 'precioProducto'>Precio: $${item.precio}</p>
                            <button class = 'boton-agregar'>Agregar <i class= 'fas fa-shopping-cart'></i></button>
                            `
        
            productosContainer.append(div)
    })

})