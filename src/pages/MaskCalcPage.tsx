import React from 'react';
import '../styles/pages.css';
import NextButton from '../components/NextButton';
import calcImg from '../assets/Calc.png';

const MaskCalculationPage: React.FC = () => {
  return (
    <div className="concepts-page">
      <h2>Cálculo de Máscara, Hosts, Rede e Broadcast</h2>

      <p>
        Nesta seção vamos focar em como derivar a máscara decimal a partir do prefixo, calcular o número de endereços
        disponíveis, identificar o ID da rede e o endereço de broadcast. Esses procedimentos são fundamentais para
        projetar sub-redes que comportem a quantidade de hosts necessária sem desperdício de endereços.
      </p>

      <h3>Principais conceitos</h3>
      <ul>
        <li><strong>Prefixo /N:</strong> número de bits de rede (por exemplo /24).</li>
        <li><strong>Máscara decimal:</strong> conversão dos 32 bits (N uns seguidos por zeros) em quatro octetos.</li>
        <li><strong>Total de endereços:</strong> 2^(32 − N).</li>
        <li><strong>Hosts utilizáveis:</strong> normalmente 2^(32 − N) − 2 (rede e broadcast), salvo /31 e /32.</li>
      </ul>

      <h3>Exemplo</h3>

      <figure className="concept-figure">
        <img src={calcImg} alt="Exemplo de cálculo de máscara" className="classful-image" />
        <figcaption>Exemplo ilustrado: cálculo de máscara e identificadores de rede</figcaption>
      </figure>

      <p>
        No exemplo da imagem temos o IP <strong>10.4.128.116/20</strong>. Usando esse mesmo exemplo:
      </p>
      <ul>
        <li>/20 → 20 bits de rede, 12 bits de host → total de endereços = 2^12 = 4096</li>
        <li>Máscara decimal = 255.255.240.0</li>
        <li>Network ID = 10.4.128.0 (aplicando AND entre IP e máscara)</li>
        <li>Broadcast = 10.4.143.255 (Network ID + 4095)</li>
        <li>Hosts utilizáveis = 4096 − 2 = 4094</li>
      </ul>


      <h3>Erros comuns</h3>
      <ul>
        <li>Contar rede e broadcast como hosts utilizáveis quando não são.</li>
        <li>Usar notação inválida ou octetos fora do intervalo 0–255.</li>
      </ul>

      <div className="page-nav-sides" style={{ marginTop: 18 }}>
        <NextButton
          to="/concepts/classless"
          direction="left"
          label="Classless e Máscara de rede"
          variant="secondary"
          ariaLabel="Voltar para Classless"
        />
        <NextButton
          to="/simulator"
          direction="right"
          label="Simulador"
          variant="primary"
          ariaLabel="Ir para Simulador"
        />
      </div>
    </div>
  );
};

export default MaskCalculationPage;