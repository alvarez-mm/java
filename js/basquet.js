const abrirHorariosBasquet = document.querySelector ("#abrirHorariosBasquet")
const abrirCategoriasBasquet = document.querySelector ("#abrirCategoriasBasquet")

abrirHorariosBasquet.addEventListener ('click' , () => {
    Swal.fire({
        title: 'Horarios de entrenamientos',
        text: 'Basquet masculino',
        imageUrl: '../imagenes/horarioscategorias.jpeg',
        imageWidth: 600,
        imageHeight: 400,
        imageAlt: 'Custom image',
    })
})


abrirCategoriasBasquet.addEventListener ('click' , () => {
    Swal.fire({
        title: 'Categorías',
        text: 'Basquet masculino',
        imageUrl: '../imagenes/categorias.jpeg',
        imageWidth: 600,
        imageHeight: 600,
        imageAlt: 'Custom image',
    })
})

















