const itensMenu = [
    { nome: 'Inicio', url: 'index.html' },
    { nome: 'Sobre', url: 'sobre.html'},
    { nome: 'Contato', url: 'contato.html'}
];


function criarMenu() {
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    const body = document.querySelector('body');
    nav.appendChild(ul);
    header.appendChild(nav);
    body.prepend(header);
}

function adicionarLi() {
    const ul = document.querySelector('ul');
    itensMenu.forEach(item => {
       const li = document.createElement('li');
       const a = document.createElement('a');
       a.setAttribute('href', item.url);
       a.textContent = item.nome;
       li.appendChild(a);
       ul.append(li);
       a.style.textDecoration = 'none';
       a.style.color = '#white';
       body.style.backgorundColor = '#071d41';
    });
}



criarMenu()
adicionarLi()
