document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       MÓDULO 1: BOTÃO FLUTUANTE DE VOLTAR AO TOPO
       ========================================================================== */
    const btnTopo = document.createElement('button');
    btnTopo.id = 'btn-voltar-topo';
    btnTopo.type = 'button';
    btnTopo.setAttribute('aria-label', 'Voltar ao topo da página');
    btnTopo.innerHTML = '&#8593;'; // Símbolo da seta para cima (↑)

    // Estilização direta respeitando a identidade visual da página
    Object.assign(btnTopo.style, {
        position: 'fixed',
        right: '1.5rem',
        bottom: '1.5rem',
        width: '3rem',
        height: '3rem',
        borderRadius: '50%',
        backgroundColor: '#FCC31E', // --jp-amarelo
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

    // Monitora a rolagem para exibir ou ocultar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btnTopo.style.opacity = '1';
            btnTopo.style.pointerEvents = 'auto';
        } else {
            btnTopo.style.opacity = '0';
            btnTopo.style.pointerEvents = 'none';
        }
    });

    // Ação de rolagem suave ao clicar
    btnTopo.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });


    /* ==========================================================================
       MÓDULO 2: CARROSSEL INTERATIVO DE PONTOS TURÍSTICOS
       ========================================================================== */
    const destaquesSection = document.getElementById('destaques');

    if (destaquesSection) {
        // 1. Extração dos dados dos articles existentes na seção
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
            // 2. Criação da estrutura do carrossel aproveitando as classes do CSS
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

            // Botões de navegação lateral (Prev / Next)
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

            // Inserção do carrossel logo após o parágrafo introdutório de #destaques
            const pIntro = destaquesSection.querySelector('p');
            if (pIntro) {
                pIntro.after(carouselContainer);
            }

            // 3. Controle dos slides e transição
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

            // Autoplay com intervalo de 5 segundos
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


    /* ==========================================================================
       MÓDULO 3: VALIDAÇÃO DO FORMULÁRIO E MÁSCARA DE TELEFONE
       ========================================================================== */
    const formContato = document.querySelector('form[name="contato"]');

    if (formContato) {
        const inputNome = formContato.querySelector('#nome');
        const inputEmail = formContato.querySelector('#email');
        const inputTelefone = formContato.querySelector('#telefone');
        const inputMensagem = formContato.querySelector('#mensagem');
        const checkLgpd = formContato.querySelector('#lgpd');

        // Elemento para exibir mensagens de feedback dinamicamente
        const statusMsg = document.createElement('div');
        statusMsg.style.display = 'none';
        statusMsg.style.padding = '0.75rem';
        statusMsg.style.marginBottom = '1rem';
        statusMsg.style.fontWeight = '700';
        statusMsg.style.border = '2px solid transparent';
        formContato.prepend(statusMsg);

        // 1. Máscara de Telefone em Tempo Real: (83) 90101-0101 ou (83) 0101-0101
        inputTelefone.addEventListener('input', (e) => {
            let digits = e.target.value.replace(/\D/g, ''); // Remove tudo que não for número

            if (digits.length > 11) {
                digits = digits.slice(0, 11);
            }

            if (digits.length > 6) {
                // Formato para 11 dígitos: (XX) XXXXX-XXXX / 10 dígitos: (XX) XXXX-XXXX
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

        // 2. Função auxiliar para alternar borda de validação nos campos
        const setCampoStatus = (input, isValid) => {
            input.style.borderColor = isValid ? '#259645' : '#E23A2E'; // --jp-verde ou --jp-vermelho
        };

        // Validação de formato de e-mail com regex padrão
        const isEmailValido = (email) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email.trim());
        };

        // 3. Interceptação do envio (Submit)
        formContato.addEventListener('submit', (e) => {
            e.preventDefault(); // Impede o recarregamento da página

            let erros = [];

            // Validação do Nome
            if (inputNome.value.trim().length < 3) {
                setCampoStatus(inputNome, false);
                erros.push('O nome deve conter pelo menos 3 caracteres.');
            } else {
                setCampoStatus(inputNome, true);
            }

            // Validação do E-mail
            if (!isEmailValido(inputEmail.value)) {
                setCampoStatus(inputEmail, false);
                erros.push('Informe um endereço de e-mail válido.');
            } else {
                setCampoStatus(inputEmail, true);
            }

            // Validação do Telefone (mínimo 10 dígitos: DDD + número)
            const digitosTelefone = inputTelefone.value.replace(/\D/g, '');
            if (digitosTelefone.length < 10 || digitosTelefone.length > 11) {
                setCampoStatus(inputTelefone, false);
                erros.push('Informe um telefone válido com DDD (10 ou 11 dígitos).');
            } else {
                setCampoStatus(inputTelefone, true);
            }

            // Validação da Mensagem
            if (inputMensagem.value.trim().length < 10) {
                setCampoStatus(inputMensagem, false);
                erros.push('A mensagem deve ter pelo menos 10 caracteres.');
            } else {
                setCampoStatus(inputMensagem, true);
            }

            // Validação do Consentimento LGPD
            if (!checkLgpd.checked) {
                erros.push('Você deve aceitar os termos da LGPD para continuar.');
            }

            // 4. Exibição do resultado
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

                // Limpa as bordas de feedback após o envio
                [inputNome, inputEmail, inputTelefone, inputMensagem].forEach(campo => {
                    campo.style.borderColor = '#333333';
                });

                // Oculta a mensagem de sucesso após 6 segundos
                setTimeout(() => {
                    statusMsg.style.display = 'none';
                }, 6000);
            }
        });
    }

});