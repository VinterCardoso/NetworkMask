import React from 'react';
import '../styles/pages.css';
import NextButton from '../components/NextButton';
import classfulImg from '../assets/classful.webp';

const ClassfulPage: React.FC = () => {
  return (
    <div className="concepts-page">
      <h2>Classful</h2>

      <p>
        Classful foi o modelo histórico de endereçamento IPv4 que dividia o espaço de endereços em classes fixas,
        cada qual com máscara padrão associada. Essas classes foram definidas para simplificar roteamento e alocação
        nos primórdios da Internet, mas acabaram se tornando pouco eficientes em termos de uso de espaço.
      </p>

      <h3>Classes principais</h3>

      <figure className="concept-figure">
        <img
          src={classfulImg}
          alt="Tabela classful de endereços IPv4"
          className="classful-image"
        />
        <figcaption>Tabela classful: Classes A, B, C, D (multicast) e E (reservado)</figcaption>
      </figure>

      <ul>
        <li><strong>Classe A</strong> — 0.0.0.0 a 126.255.255.255 — máscara padrão 255.0.0.0 (/8). Projetada para redes muito grandes.</li>
        <li><strong>Classe B</strong> — 128.0.0.0 a 191.255.255.255 — máscara padrão 255.255.0.0 (/16). Para redes de porte médio.</li>
        <li><strong>Classe C</strong> — 192.0.0.0 a 223.255.255.255 — máscara padrão 255.255.255.0 (/24). Para pequenas redes locais.</li>
        <li><strong>Classe D</strong> — 224.0.0.0 a 239.255.255.255 — usada para multicast: endereços destinados a entregar pacotes a múltiplos destinatários simultaneamente (ex.: streaming, conferências); não são atribuídos a hosts individuais.</li>
        <li><strong>Classe E</strong> — 240.0.0.0 a 255.255.255.255 — reservada para uso experimental e pesquisa; não deve ser usada em redes de produção.</li>
      </ul>

      <h3>Exemplos e limitações</h3>
      <p>
        Ex.: o IP 10.12.5.4 pertence à Classe A (máscara /8) enquanto 192.168.1.10 pertence à Classe C (máscara /24).
        O problema do modelo classful é o desperdício: organizações que precisavam de blocos entre /8 e /16 tinham que
        escolher um bloco maior, desperdiçando endereços.
      </p>

      <div className="page-nav-sides" style={{ marginTop: 18 }}>
        <NextButton
          to="/concepts/addressing"
          direction="left"
          label="Endereçamento IP"
          variant="secondary"
          ariaLabel="Ir para Endereçamento IP"
        />
        <NextButton
          to="/concepts/classless"
          direction="right"
          label="Classless e Máscara de rede"
          variant="primary"
          ariaLabel="Ir para Classless"
        />
      </div>
    </div>
  );
};

export default ClassfulPage;