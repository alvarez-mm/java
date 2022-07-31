const abrirHorariosVoley = document.querySelector ("#abrirHorariosVoley")
const abrirCategoriasVoley = document.querySelector ("#abrirCategoriasVoley")

abrirHorariosVoley.addEventListener ('click' , () => {
    Swal.fire({
        title: 'Horarios de entrenamientos',
        text: 'Voley femenino',
        imageUrl: '../imagenes/horarioscategorias.jpeg',
        imageWidth: 600,
        imageHeight: 400,
        imageAlt: 'Custom image',
    })
})

abrirCategoriasVoley.addEventListener ('click' , () => {
    Swal.fire({
        title: 'Categorías',
        text: 'femenino',
        imageUrl: '../imagenes/categorias.jpeg',
        imageWidth: 600,
        imageHeight: 600,
        imageAlt: 'Custom image',
    })
})