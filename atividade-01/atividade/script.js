const miniaturas = document.querySelectorAll('.miniatura')
const imgAmpliada = document.querySelector('#imgAmpliada')

miniaturas.forEach(miniatura => {
    miniatura.addEventListener('click', () => {
        miniatura.style.opacity = '1';
        imgAmpliada.src = miniatura.src;
        imgAmpliada.style.display = 'block';
    })
})

