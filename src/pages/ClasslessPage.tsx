import React from 'react';
import '../styles/pages.css';
import NextButton from '../components/NextButton';
import maskImg from '../assets/mask.webp';

const ClasslessPage: React.FC = () => {
  return (
    <div className="concepts-page">
      <h2>Classless e Máscara de Rede</h2>

      <p>
        O modelo classless (CIDR) substituiu o esquema de classes fixas ao permitir prefixos de tamanho arbitrário (/N).
        Mais importante que a classificação por "classes" é entender a máscara de rede — é ela que determina quais bits do
        endereço pertencem à rede (NetID) e quais pertencem aos hosts (HostID).
      </p>

      <h3>O que é CIDR (Classless)</h3>
      <p>
        CIDR usa a notação endereço/prefixo (ex.: <strong>192.168.1.0/24</strong>). O número após a barra indica quantos
        bits, a partir da esquerda, são considerados parte da rede. CIDR permite alocar blocos exatamente do tamanho necessário,
        reduzindo desperdício.
      </p>

      <h3>O que é máscara de rede?</h3>
      <p>
        Máscara de rede é a representação dos bits que identificam a rede. Em binário são N uns seguidos por (32−N) zeros;
        em decimal pontuado convertemos esses 32 bits em quatro octetos (ex.: /24 → 255.255.255.0).
      </p>

      <figure className="concept-figure">
        <img
          src={maskImg}
          alt="Ilustração de máscara de rede"
          className="classful-image"
          style={{ maxWidth: 420 }}
        />
        <figcaption>Ilustração da máscara separando NetID (bits de rede) e HostID (bits de hosts)</figcaption>
      </figure>

      <p>
        A máscara atua separando claramente duas porções do endereço IP:
      </p>
      <ul>
        <li><strong>NetID (porção de rede):</strong> bits marcados como 1 na máscara — representam o identificador do bloco de rede.</li>
        <li><strong>HostID (porção de host):</strong> bits marcados como 0 na máscara — representam os endereços disponíveis dentro desse bloco.</li>
      </ul>

      <p>
        Essa separação é fundamental: pensar sempre em "quantos bits de rede" e "quantos bits de host" ajuda a escolher o prefixo /N
        adequado para o número de dispositivos que você precisa atender.
      </p>

      <h3>Por que a máscara foi desenvolvida</h3>
      <p>
        A máscara serve para permitir um uso mais eficiente do espaço de endereçamento, facilitar a criação de sub-redes de tamanhos
        variados e reduzir o número de entradas nas tabelas de roteamento. Com máscaras ajustáveis é possível alocar blocos que se
        adequem à necessidade real de hosts e controlar domínios de broadcast.
      </p>

      <div className="page-nav-sides" style={{ marginTop: 18 }}>
        <NextButton
          to="/concepts/classful"
          direction="left"
          label="Classful"
          variant="secondary"
          ariaLabel="Ir para Classful"
        />
        <NextButton
          to="/concepts/mask-calc"
          direction="right"
          label="Cálculo de Máscara"
          variant="primary"
          ariaLabel="Ir para Cálculo de Máscara"
        />
      </div>
    </div>
  );
};

export default ClasslessPage;