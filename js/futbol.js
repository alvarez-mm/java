const abrirHorariosFutbol = document.querySelector ("#abrirHorariosFutbol")
const abrirCategoriasFutbol = document.querySelector ("#abrirCategoriasFutbol")

abrirHorariosFutbol.addEventListener ('click' , () => {
    Swal.fire({
        title: 'Horarios de entrenamientos',
        text: 'Futbol masculino',
        imageUrl: '../imagenes/horarioscategorias.jpeg',
        imageWidth: 600,
        imageHeight: 400,
        imageAlt: 'Custom image',
    })
})


abrirCategoriasFutbol.addEventListener ('click' , () => {
    Swal.fire({
        title: 'Categorías',
        text: 'Futbol masculino',
        imageUrl: '../imagenes/categorias.jpeg',
        imageWidth: 600,
        imageHeight: 600,
        imageAlt: 'Custom image',
    })
})