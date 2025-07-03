let menubar = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menubar.onclick = ()=> {
  menubar.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

// Funcionalidades de acessibilidade
let acessibilidadeBtn = document.querySelector('#acessibilidade-btn');
let menuAcessibilidade = document.querySelector('#menu-acessibilidade');

if (acessibilidadeBtn && menuAcessibilidade) {
  acessibilidadeBtn.onclick = () => {
    menuAcessibilidade.classList.toggle('oculto');
  }
}

// Função para aumentar fonte
function aumentarFonte() {
  let elementos = document.querySelectorAll('body, h1, h2, h3, p, a, li, input, textarea');
  elementos.forEach(elemento => {
    let tamanhoAtual = window.getComputedStyle(elemento).fontSize;
    let tamanhoNum = parseFloat(tamanhoAtual);
    elemento.style.fontSize = (tamanhoNum + 2) + 'px';
  });
}

// Função para modo alto contraste
function modoAltoContraste() {
  document.body.classList.toggle('alto-contraste');
}

// Função para resetar acessibilidade
function resetarAcessibilidade() {
  let elementos = document.querySelectorAll('body, h1, h2, h3, p, a, li, input, textarea');
  elementos.forEach(elemento => {
    elemento.style.fontSize = '';
  });
  document.body.classList.remove('alto-contraste');
  if (menuAcessibilidade) {
    menuAcessibilidade.classList.add('oculto');
  }
}

// Fechar menu de acessibilidade ao clicar fora
document.addEventListener('click', (e) => {
  if (acessibilidadeBtn && menuAcessibilidade) {
    if (!acessibilidadeBtn.contains(e.target) && !menuAcessibilidade.contains(e.target)) {
      menuAcessibilidade.classList.add('oculto');
    }
  }
});

// Fechar menu mobile ao clicar em um link
let navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    menubar.classList.remove('fa-times');
    navbar.classList.remove('active');
  });
});

// Scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});