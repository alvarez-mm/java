const abrirHorariosFutbol = document.querySelector ("#abrirHorariosFutbol")

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