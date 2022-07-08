const abrirHorariosVoley = document.querySelector ("#abrirHorariosVoley")

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