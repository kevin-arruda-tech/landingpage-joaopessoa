document.addEventListener('DOMContentloaded')

/* Botão de voltar ao inicio */
const btnTopo = document.cteElement('button');
btnTopo.id = 'bnt-voltar-topo';
btnTopo.type = 'button';
btnTopo.setAttribute('arial-label', 'Voltar ao topo da página');

Object.assign(btnTopo.style,
    {
        position: 'fixed',
        rigth: '1.5rem',
        bottom: '1.5rem',
        width: '3rem',
        height: '3rem',
        borderRadius: '50%',
        backgroundColor: '#FCC31E',
        color: '#000000',
        boder: '3px solid #000000',
        fontSize: '1.5rem',
        fontWeigth: '900',
        cursor: 'pointer',
        zIndex: '1500',
        display: 'flex',
        alignItens: 'center',
        justifyContent: 'center',
        transition: 'opacity 0.3s ease, transform 0.3s ease',
        opacity: '0',
        pointerEventes: 'none',
        boxShadow: '0 4px 10px  rgba(0,0,0,0, 0.3)'
    });

document.body.appendChild(btnTopo);

// monitora a rolagem para exibir ou ocultar
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        btnTopo.style.opacity = '1';
        btnTopo.style.pointerEventes = 'auto';
    } else {
        btnTopo.style.opacity = '0';
        btnTopo.style.pointerEventes = 'none';
    }
});

// acção de rolagem suave

btnTopo.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

/*Carrosel interativo de ponto turisticos */

const destaqueSelection = document.getElementById('destaque');
if ('');

