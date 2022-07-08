const abrirHorariosNatacion = document.querySelector ("#abrirHorariosNatacion")

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