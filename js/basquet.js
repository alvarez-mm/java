const abrirHorariosBasquet = document.querySelector ("#abrirHorariosBasquet")

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



















