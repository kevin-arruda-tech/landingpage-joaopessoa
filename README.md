# Portal Institucional & Turismo — João Pessoa (PB)

> **Onde o sol nasce primeiro nas Américas.**  
> Aplicação web front-end desenvolvida para a disciplina de **Desenvolvimento Front-End para Web** (UNIPÊ), sob orientação da Prof.ª **Karine Heloise**[cite: 1, 2].

[![Status](https://img.shields.io/badge/Status-Concluído-259645?style=flat-square)](#)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-1A73E8?style=flat-square&logo=bootstrap&logoColor=white)](#)
[![Deploy](https://img.shields.io/badge/Deploy-Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white)](#)

---

## Visão Geral

Desenvolvido pela **Portal Software House**, este projeto apresenta uma solução digital responsiva para modernizar a presença web turística e institucional da Prefeitura de João Pessoa[cite: 3, 4]. 

Projetada para atender turistas e potenciais novos moradores[cite: 5], a plataforma consolida informações estratégicas em uma interface de navegação intuitiva e alto desempenho[cite: 4, 6]:

* **Contextualização Histórica:** Linha do tempo detalhando os marcos da terceira capital mais antiga do Brasil[cite: 7].
* **Guia de Pontos Turísticos:** Curadoria visual dos 12 principais atrativos locais com integração direta para rotas[cite: 7].
* **Indicadores Socioeconômicos:** Dados comparativos de custo de vida, sustentabilidade e qualidade de vida ("Por que morar aqui")[cite: 5, 7].
* **Geolocalização e Atendimento:** Mapa interativo da cidade e canal de contato com validação em tempo real e conformidade com a LGPD[cite: 6, 7].

---

## Arquitetura e Requisitos Técnicos

* **Design Responsivo (Mobile-First):** Compatibilidade garantida para resoluções de smartphones (375px–425px), tablets (768px) e desktops (1366px–1920px).
* **Identidade Visual:** Paleta cromática baseada no monumento turístico oficial (`#1A73E8`, `#E23A2E`, `#FCC31E`, `#259645`) associada à tipografia **Inter**[cite: 6].
* **Camada de Interatividade (JavaScript):**
  * Carrossel dinâmico de destaques turísticos[cite: 7];
  * Validação client-side e feedback visual no formulário de contato[cite: 1, 7];
  * Controle flutuante de navegação rápida (*Voltar ao Topo*)[cite: 7].
* **Semântica e Acessibilidade:** Estruturação em HTML5 semântico (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`), hierarquia de títulos e padrões de contraste adequados[cite: 1, 6].

---

## Stack Tecnológica

| Categoria | Tecnologias |
| :--- | :--- |
| **Marcação & Estilo** | HTML5 Semântico, CSS3 (Flexbox, Grid Layout, Variáveis CSS)[cite: 1] |
| **Framework UI** | Bootstrap 5 (Navbar, Grid System, Cards, Formulários)[cite: 1, 7] |
| **Interatividade** | JavaScript (ES6+)[cite: 1] |
| **Versionamento & Deploy** | Git, GitHub, Netlify[cite: 1, 12] |

---

## Ambiente de Execução Local

1. Clone o repositório:
   ```bash
   git clone [https://github.com/seu-usuario/projeto-integrador.git](https://github.com/seu-usuario/projeto-integrador.git)
