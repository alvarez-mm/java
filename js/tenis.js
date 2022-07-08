const abrirHorariosTenis = document.querySelector ("#abrirHorariosTenis")

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