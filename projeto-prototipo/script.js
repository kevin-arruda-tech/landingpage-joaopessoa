document.addEventListener('DOMContentLoaded', () => {

    const btnTopo = document.createElement('button');
    btnTopo.id = 'btn-voltar-topo';
    btnTopo.type = 'button';
    btnTopo.setAttribute('aria-label', 'Voltar ao topo da página');
    btnTopo.innerHTML = '&#8593;';

    Object.assign(btnTopo.style, {
        position: 'fixed',
        right: '1.5rem',
        bottom: '1.5rem',
        width: '3rem',
        height: '3rem',
        borderRadius: '50%',
        backgroundColor: '#FCC31E',
        color: '#000000',
        border: '3px solid #000000',
        fontSize: '1.5rem',
        fontWeight: '900',
        cursor: 'pointer',
        zIndex: '1500',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'opacity 0.3s ease, transform 0.3s ease',
        opacity: '0',
        pointerEvents: 'none',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)'
    });

    document.body.appendChild(btnTopo);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btnTopo.style.opacity = '1';
            btnTopo.style.pointerEvents = 'auto';
        } else {
            btnTopo.style.opacity = '0';
            btnTopo.style.pointerEvents = 'none';
        }
    });

    btnTopo.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });


    const destaquesSection = document.getElementById('destaques');

    if (destaquesSection) {
        const cardsDestaques = destaquesSection.querySelectorAll('article');
        const slidesData = Array.from(cardsDestaques).map(article => {
            const titulo = article.querySelector('h3')?.innerText || '';
            const img = article.querySelector('img');
            const desc = article.querySelector('p')?.innerText || '';
            return {
                titulo: titulo,
                src: img?.getAttribute('src') || '',
                alt: img?.getAttribute('alt') || '',
                descricao: desc
            };
        });

        if (slidesData.length > 0) {
            const carouselContainer = document.createElement('div');
            carouselContainer.className = 'carousel';
            carouselContainer.style.position = 'relative';
            carouselContainer.style.gridColumn = '1 / -1';
            carouselContainer.style.marginBottom = '2rem';
            carouselContainer.style.overflow = 'hidden';

            const carouselInner = document.createElement('div');
            carouselInner.className = 'carousel-inner';

            slidesData.forEach((slide, index) => {
                const item = document.createElement('div');
                item.className = 'carousel-item';
                item.style.display = index === 0 ? 'block' : 'none';

                item.innerHTML = `
          <div class="slide">
            <img src="${slide.src}" alt="${slide.alt}">
          </div>
          <div class="carousel-caption">
            <h3>${slide.titulo}</h3>
            <p>${slide.descricao}</p>
          </div>
        `;
                carouselInner.appendChild(item);
            });

            const btnPrev = document.createElement('button');
            btnPrev.type = 'button';
            btnPrev.innerHTML = '&#10094;';
            btnPrev.setAttribute('aria-label', 'Slide anterior');

            const btnNext = document.createElement('button');
            btnNext.type = 'button';
            btnNext.innerHTML = '&#10095;';
            btnNext.setAttribute('aria-label', 'Próximo slide');

            const estiloBotaoNavegacao = {
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                color: '#FCC31E',
                border: '2px solid #FCC31E',
                fontSize: '1.25rem',
                fontWeight: 'bold',
                padding: '0.6rem 1rem',
                cursor: 'pointer',
                zIndex: '10'
            };

            Object.assign(btnPrev.style, estiloBotaoNavegacao, { left: '10px' });
            Object.assign(btnNext.style, estiloBotaoNavegacao, { right: '10px' });

            carouselContainer.appendChild(carouselInner);
            carouselContainer.appendChild(btnPrev);
            carouselContainer.appendChild(btnNext);

            const pIntro = destaquesSection.querySelector('p');
            if (pIntro) {
                pIntro.after(carouselContainer);
            }

            const items = carouselInner.querySelectorAll('.carousel-item');
            let currentIndex = 0;
            let autoPlayInterval = null;

            const showSlide = (index) => {
                items[currentIndex].style.display = 'none';
                currentIndex = (index + items.length) % items.length;
                items[currentIndex].style.display = 'block';
            };

            const nextSlide = () => showSlide(currentIndex + 1);
            const prevSlide = () => showSlide(currentIndex - 1);

            btnNext.addEventListener('click', nextSlide);
            btnPrev.addEventListener('click', prevSlide);

            const startAutoplay = () => {
                autoPlayInterval = setInterval(nextSlide, 5000);
            };

            const stopAutoplay = () => {
                clearInterval(autoPlayInterval);
            };

            carouselContainer.addEventListener('mouseenter', stopAutoplay);
            carouselContainer.addEventListener('mouseleave', startAutoplay);

            startAutoplay();
        }
    }


    const formContato = document.querySelector('form[name="contato"]');

    if (formContato) {
        const inputNome = formContato.querySelector('#nome');
        const inputEmail = formContato.querySelector('#email');
        const inputTelefone = formContato.querySelector('#telefone');
        const inputMensagem = formContato.querySelector('#mensagem');
        const checkLgpd = formContato.querySelector('#lgpd');

        const statusMsg = document.createElement('div');
        statusMsg.style.display = 'none';
        statusMsg.style.padding = '0.75rem';
        statusMsg.style.marginBottom = '1rem';
        statusMsg.style.fontWeight = '700';
        statusMsg.style.border = '2px solid transparent';
        formContato.prepend(statusMsg);

        inputTelefone.addEventListener('input', (e) => {
            let digits = e.target.value.replace(/\D/g, '');

            if (digits.length > 11) {
                digits = digits.slice(0, 11);
            }

            if (digits.length > 6) {
                const corte = digits.length === 11 ? 7 : 6;
                e.target.value = `(${digits.slice(0, 2)}) ${digits.slice(2, corte)}-${digits.slice(corte)}`;
            } else if (digits.length > 2) {
                e.target.value = `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
            } else if (digits.length > 0) {
                e.target.value = `(${digits}`;
            } else {
                e.target.value = '';
            }
        });

        const setCampoStatus = (input, isValid) => {
            input.style.borderColor = isValid ? '#259645' : '#E23A2E';
        };

        const isEmailValido = (email) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email.trim());
        };

        formContato.addEventListener('submit', (e) => {
            e.preventDefault();

            let erros = [];

            if (inputNome.value.trim().length < 3) {
                setCampoStatus(inputNome, false);
                erros.push('O nome deve conter pelo menos 3 caracteres.');
            } else {
                setCampoStatus(inputNome, true);
            }

            if (!isEmailValido(inputEmail.value)) {
                setCampoStatus(inputEmail, false);
                erros.push('Informe um endereço de e-mail válido.');
            } else {
                setCampoStatus(inputEmail, true);
            }

            const digitosTelefone = inputTelefone.value.replace(/\D/g, '');
            if (digitosTelefone.length < 10 || digitosTelefone.length > 11) {
                setCampoStatus(inputTelefone, false);
                erros.push('Informe um telefone válido com DDD (10 ou 11 dígitos).');
            } else {
                setCampoStatus(inputTelefone, true);
            }

            if (inputMensagem.value.trim().length < 10) {
                setCampoStatus(inputMensagem, false);
                erros.push('A mensagem deve ter pelo menos 10 caracteres.');
            } else {
                setCampoStatus(inputMensagem, true);
            }

            if (!checkLgpd.checked) {
                erros.push('Você deve aceitar os termos da LGPD para continuar.');
            }

            if (erros.length > 0) {
                statusMsg.style.display = 'block';
                statusMsg.style.backgroundColor = '#ffebe9';
                statusMsg.style.borderColor = '#E23A2E';
                statusMsg.style.color = '#E23A2E';
                statusMsg.innerHTML = erros.join('<br>');
            } else {
                statusMsg.style.display = 'block';
                statusMsg.style.backgroundColor = '#e6f7ec';
                statusMsg.style.borderColor = '#259645';
                statusMsg.style.color = '#259645';
                statusMsg.innerHTML = 'Mensagem enviada com sucesso! Retornaremos o contato em breve.';

                formContato.reset();

                [inputNome, inputEmail, inputTelefone, inputMensagem].forEach(campo => {
                    campo.style.borderColor = '#333333';
                });

                setTimeout(() => {
                    statusMsg.style.display = 'none';
                }, 6000);
            }
        });
    }

});
