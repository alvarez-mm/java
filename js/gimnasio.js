const abrirHorariosGimnasio = document.querySelector ("#abrirHorariosGimnasio")

abrirHorariosGimnasio.addEventListener ('click' , () => {
    Swal.fire({
        title: 'Clases especiales',
        text: 'Reserva tu lugar al 2616826723',
        imageUrl: '../imagenes/horariosclasesgimnasio.jpeg',
        imageWidth: 600,
        imageHeight: 400,
        imageAlt: 'Custom image',
    })
})