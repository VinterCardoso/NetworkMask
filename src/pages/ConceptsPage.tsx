import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages.css';
import NextButton from '../components/NextButton';

const ConceptsPage: React.FC = () => {
  return (
    <div className="concepts-page">
      <h2>Apresentação do Projeto</h2>

      <p>
        Este projeto é um objeto de aprendizagem focado em máscara de rede: o que é, como funciona e por que é importante
        para segmentação e roteamento em redes IPv4. A ideia é combinar explicações teóricas com um simulador interativo
        que permite experimentar prefixos/CIDR e ver imediatamente máscara decimal, ID de rede, broadcast e número de hosts.
      </p>

      <p>
        Para começar a entender máscaras de rede é necessário conhecer conceitos básicos de endereçamento IP — como um
        endereço é representado, o papel dos octetos e a relação entre máscara e identificação de rede/host.
      </p>

      <p className="small-help">
        A partir daqui você pode seguir para a explicação sobre Endereçamento IP, que prepara o terreno para os temas
        seguintes (Classfull, Classless/CIDR e cálculo de máscara).
      </p>

      <p style={{ marginTop: 18 }} className="small-help">
        Ao final do conteúdo há um quiz para verificar a assimilação dos conceitos.
      </p>

      <p className="small-help" style={{ marginTop: 8 }}>
        Você também pode navegar diretamente para o simulador ou para o quiz através dos links no topo da página.
      </p>

      <div className="page-nav-sides">
        <div></div>
        <NextButton to="/concepts/addressing" label="Começar: Endereçamento IP" ariaLabel="Ir para Endereçamento IP" />
      </div>
      
    </div>
  );
};

export default ConceptsPage;