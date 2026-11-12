# Portal Institucional & Turismo — João Pessoa (PB)

> **Onde o sol nasce primeiro nas Américas.**  
> Aplicação web front-end desenvolvida para a disciplina de **Desenvolvimento Front-End para Web** (UNIPÊ), sob orientação da Prof.ª **Karine Heloise**[cite: 1, 2].

[![Status](https://img.shields.io/badge/Status-Concluído-259645?style=flat-square)](#)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](#)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=flat-square&logo=bootstrap&logoColor=white)](#)
[![Deploy](https://img.shields.io/badge/Deploy-Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white)](#)

---

## Visão Geral

Desenvolvido pela **Portal Software House**, este projeto apresenta uma solução digital responsiva para modernizar a presença web turística e institucional da Prefeitura de João Pessoa[cite: 3, 4]. 

Projetada para atender turistas e potenciais novos moradores[cite: 5], a plataforma consolida informações estratégicas em uma interface de navegação intuitiva e alto desempenho[cite: 4, 6]:

* **Contextualização Histórica:** Linha do tempo detalhando os marcos da terceira capital mais antiga do Brasil.
* **Guia de Pontos Turísticos:** Curadoria visual dos 12 principais atrativos locais com integração direta para rotas.
* **Indicadores Socioeconômicos:** Dados comparativos de custo de vida, sustentabilidade e qualidade de vida ("Por que morar aqui")[cite: 5, 7].
* **Geolocalização e Atendimento:** Mapa interativo da cidade e canal de contato com validação em tempo real e conformidade com a LGPD[cite: 6, 7].

---

## Arquitetura do Sistema

O sistema adota uma **arquitetura monolítica front-end (Client-Side)**, na qual toda a estrutura semântica, estilização visual e lógica de interatividade residem em uma base de código unificada e coesa, executada diretamente no navegador do usuário[cite: 12].

* **Separação de Responsabilidades (SoC):** O projeto divide claramente a camada de estruturação de conteúdo (HTML), a camada de apresentação e layout (CSS/Bootstrap) e a camada comportamental (JavaScript)[cite: 1, 12].
* **Abordagem Mobile-First & Responsiva:** O layout foi projetado para se adaptar fluidamente a diferentes resoluções de tela — desde smartphones (375px–425px) e tablets (768px) até monitores desktop (1366px–1920px) — utilizando sistemas de grades flexíveis.
* **Integração de Serviços Externos:** Incorporação assíncrona de mapas interativos (Google Maps Embed) e links diretos de geolocalização sem comprometer o tempo de carregamento inicial da página[cite: 6, 7].
* **Entrega Contínua (CI/CD):** Versionamento distribuído via Git/GitHub integrado à plataforma **Netlify**, automatizando a publicação e disponibilização estática da aplicação em nuvem[cite: 1, 12].

---

## Linguagens e Tecnologias Utilizadas

* **HTML5 (HyperText Markup Language):** Responsável pela estruturação semântica da página (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`), otimização para mecanismos de busca (SEO), acessibilidade para leitores de tela e validação nativa de formulários[cite: 1].
* **CSS3 (Cascading Style Sheets):** Aplicado na criação da identidade visual inspirada no letreiro oficial de João Pessoa (`#1A73E8`, `#E23A2E`, `#FCC31E`, `#259645`), utilizando variáveis nativas (`:root`), Flexbox, CSS Grid Layout, transições suaves e media queries para responsividade[cite: 1, 6].
* **JavaScript (ES6+):** Responsável pelo dinamismo e manipulação do DOM no lado do cliente, implementando o controle de carrossel de imagens, validação avançada de dados no formulário de contato, máscaras de entrada e o botão flutuante de navegação (*Voltar ao Topo*)[cite: 1, 7].
* **Bootstrap 5:** Framework CSS utilizado para acelerar a construção de componentes padronizados e responsivos, incluindo barra de navegação (`Navbar`), sistema de grades (`Grid System`), cartões informativos (`Cards`) e estilização de formulários e botões[cite: 1, 7].
* **Git & GitHub:** Ferramentas de controle de versão utilizadas para gerenciar o histórico de commits individuais, revisões de código e colaboração entre os integrantes da equipe[cite: 1, 12].
* **Netlify:** Plataforma de hospedagem utilizada para realizar o *deploy* contínuo e disponibilizar a aplicação web online[cite: 12].

---

## Ambiente de Execução Local

1. Clone o repositório:
   ```bash
   git clone [https://github.com/seu-usuario/projeto-integrador.git](https://github.com/seu-usuario/projeto-integrador.git)
