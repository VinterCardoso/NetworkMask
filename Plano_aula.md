# Plano de Aula — Máscara de Rede (Subnetting)

Público: Alunos iniciais de cursos de TI (redes, infraestrutura)

## Objetivos de aprendizagem

- Compreender conceitos de endereçamento IP: Classful vs Classless (CIDR).
- Calcular máscara de rede (decimal e binário), network ID, broadcast e número de hosts válidos.
- Utilizar o Simulador de Sub-redes para explorar cenários práticos.
- Avaliar conhecimentos com exercícios práticos e quiz.

## Pré-requisitos

- Conhecimentos básicos de conversão binária.

## Materiais / Recursos

- Repositório Network-Mask-Simulator (src/): contém simulador, calculadora e quizzes.
- Navegador web para executar a aplicação local.
- Slides

## Estrutura da aula (15-30 min)

1. Introdução rápida (3-5 min)

   - Apresentar objetivos.
   - Apresentar o projeto.

2. Conceitos teóricos condensados (5-15 min)

   - IPv4, octetos e binário.
   - Classful vs CIDR e prefixos /N.

3. Demonstração do simulador (2-5 min)

   - Navegar na aplicação em execução: Simulator e MaskCalc.
   - Mostrar interações principais do simulador e como interpretar resultados (máscara, network ID, broadcast, hosts).

4. Exemplo guiado (5-15 min)

   - Exemplo: 192.168.1.0 /26 — calcular máscara, network ID, broadcast, hosts; validar no simulador.

5. Avaliação (2–8 min)

- Aplicar o quiz integrado (módulo Quizzes) — perguntas de múltipla escolha e práticas.

6. Encerramento e referências (1-2 min)

   - Indicar leitura complementar (README, mapa conceitual).

   ## Adaptações pedagógicas

- Para turmas com dificuldade em binário: aumentar tempo de prática com conversões binário/decimal.
- Para turmas avançadas: propor desafios com VLSM (Variable Length Subnet Masking) e roteamento entre sub-redes.
