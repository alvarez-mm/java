const abrirHorariosTenis = document.querySelector ("#abrirHorariosTenis")
const abrirCategoriasTenis = document.querySelector ("#abrirCategoriasTenis")

abrirHorariosTenis.addEventListener ('click' , () => {
    Swal.fire({
        title: 'Horarios de entrenamientos',
        text: 'Tenis mixto',
        imageUrl: '../imagenes/horarioscategorias.jpeg',
        imageWidth: 600,
        imageHeight: 400,
        imageAlt: 'Custom image',
    })
})

abrirCategoriasTenis.addEventListener ('click' , () => {
    Swal.fire({
        title: 'Categorías',
        text: 'mixto',
        imageUrl: '../imagenes/categorias.jpeg',
        imageWidth: 600,
        imageHeight: 600,
        imageAlt: 'Custom image',
    })
})