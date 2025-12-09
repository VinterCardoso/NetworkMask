# 🌐 Network-Mask-Simulator

![Badge de Status do Projeto](https://img.shields.io/badge/Status-EM_DESENVOLVIMENTO-yellow)

## 💡 Sobre o Projeto

Este repositório contém um projeto educacional focado no ensino e prática do conceito de **Máscara de Rede (Subnetting)**, essencial em Redes de Computadores.

Ele foi estruturado priorizando a clareza dos conceitos (Classfull vs. Classless) e o aprendizado prático através de uma ferramenta exploratória: um **Simulador de Sub-redes Interativo**.

O objetivo é transformar o procedimento complexo do cálculo de sub-redes em uma experiência de aprendizado dinâmica e intuitiva.

## 🧑‍🤝‍🧑 Público alvo

Este objeto de aprendizagem tem como público alvo alunos nos primeiros períodos de cursos relacionados à tecnologia da informação.

## 📖 Mapa conceitual e Modelo instrucional
🔗 [Mapa conceitual](https://cmapscloud.ihmc.us:443/rid=21XLKBF95-200BC55-B7NJ0B/M%C3%A1scara%20de%20rede.cmap)

### Modelo instrucional
![Modelo instrucional](/Model/IAM-CID.png "Modelo instrucional")


### Plano de aula

[Link para o Plano de Aula](/Plano_aula.md "Link para o Plano de aula")

## ✨ Funcionalidades Principais

O projeto é dividido em três módulos principais, alinhados ao fluxo de aprendizado:

1.  **🎓 Módulo de Conceitos (IP Classfull vs. Classless):**
    * Definições claras e comparações entre as arquiteturas de endereçamento.
    * Foco no conceito **CIDR (Classless Inter-Domain Routing)**.
2.  **💻 Simulador Interativo de Subnetting:**
    * **Funcionalidade Principal:** O usuário insere um **Endereço IP** e o **Prefixo CIDR (/N)**.
    * O simulador calcula e exibe em tempo real:
        * **Máscara de Rede (Decimal e Binário)**
        * **Endereço da Rede (Network ID)**
        * **Endereço de Broadcast**
        * **Número de Hosts Válidos**
    * Permite a exploração de múltiplos cenários para consolidar o entendimento do procedimento.
3.  **📝 Módulo de Avaliação (Quizzes):**
    * Avaliações textuais sobre os conceitos Classfull e Classless.
    * Avaliações práticas utilizando uma ferramenta para testar o conhecimento do cálculo de máscara.

## 🚀 Como Executar o Projeto Localmente

Siga estas instruções para ter uma cópia do projeto rodando na sua máquina local.

### Pré-requisitos

* **Node.js:** Versão 25.1 ou superior (Necessário para o ambiente de execução e o Yarn).
* **Yarn:** Gerenciador de pacotes (`npm install -g yarn` se não estiver instalado).
* **Git:** Para clonar o repositório.

### Instalação e Execução

1.  **Instale as dependências usando Yarn:**
    ```bash
    yarn
    ```
2.  **Execute o projeto em modo de desenvolvimento:**
    ```bash
    yarn dev
    ```

### Referências

[IFRN - Redes](https://docentes.ifrn.edu.br/thiagodutra/disciplinas/materiais/infraestrutura-de-redes-de-computadores-tms/11CamadadeRede.pdf)