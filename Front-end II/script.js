//const titulo = document.querySelector('h1');
//console.log('innerText:', titulo.innerText)
//console.log('innerHTML:', titulo.innerHTML)
//console.log('textContent:', titulo.textContent)

const body = document.querySelector('body');
const ancora = document.createElement('a');
ancora.textContent = 'Meu link'
ancora.setAttribute('href', 'https://www.ifro.edu.br')
ancora.setAttribute('target', '_blank')
ancora.style.fontSize = '30px'
ancora.style.textDecoration = 'none'
ancora.style.color = '#purple'
ancora.style.fontWeight = 'bold'
body.prepend(ancora)

//body.style.backgorundColor = '#000
// const h1 = document .creatElement('h1');
// h1.textContent = 'Meu Título';
// h1.style.color = '#fff';
// h1.style.textAlign = 'center';
// body.pretend(h1)
// h1.remove()
h1.setAttribute('class', 'meuTitulo')