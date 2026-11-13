// Script para botão voltar ao topo
const btnTopo = document.getElementById('topo');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    btnTopo.classList.add('show');
  } else {
    btnTopo.classList.remove('show');
  }
});
btnTopo.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Script para atualizar o mapa dinamicamente fixado na região de João Pessoa
const botoesMapa = document.querySelectorAll('.btn-mapa');
const mapaIframe = document.getElementById('mapaIframe');

botoesMapa.forEach(botao => {
  botao.addEventListener('click', () => {
    const query = botao.getAttribute('data-query');
    mapaIframe.src = `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
  });
});

// Máscara e limite de caracteres para o campo de telefone com espaço após o primeiro 9
const inputTelefone = document.getElementById('telefone');
if (inputTelefone) {
  inputTelefone.addEventListener('input', (e) => {
    let valor = e.target.value.replace(/\D/g, ''); // Remove tudo que não for dígito
    if (valor.length > 11) valor = valor.slice(0, 11); // Limita a 11 dígitos numéricos

    // Aplica a formatação (83) 9 8888-8888
    if (valor.length > 7) {
      valor = `(${valor.slice(0, 2)}) ${valor.slice(2, 3)} ${valor.slice(3, 7)}-${valor.slice(7)}`;
    } else if (valor.length > 3) {
      valor = `(${valor.slice(0, 2)}) ${valor.slice(2, 3)} ${valor.slice(3)}`;
    } else if (valor.length > 2) {
      valor = `(${valor.slice(0, 2)}) ${valor.slice(2)}`;
    } else if (valor.length > 0) {
      valor = `(${valor}`;
    }

    e.target.value = valor;
  });
}
