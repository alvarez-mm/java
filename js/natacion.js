const abrirHorariosNatacion = document.querySelector ("#abrirHorariosNatacion")
const abrirCategoriasNatacion = document.querySelector ("#abrirCategoriasNatacion")


abrirHorariosNatacion.addEventListener ('click' , () => {
    Swal.fire({
        title: 'Horarios de entrenamientos',
        text: 'Natacion mixto',
        imageUrl: '../imagenes/horarioscategorias.jpeg',
        imageWidth: 600,
        imageHeight: 400,
        imageAlt: 'Custom image',
    })
})

abrirCategoriasNatacion.addEventListener ('click' , () => {
    Swal.fire({
        title: 'Categorías',
        text: 'mixto',
        imageUrl: '../imagenes/categorias.jpeg',
        imageWidth: 600,
        imageHeight: 600,
        imageAlt: 'Custom image',
    })
})