import React from 'react';
import SubnetCalculator from '../components/SubnetCalculator';
import NextButton from '../components/NextButton';

const SimulatorPage = () => {
  return (
    <div className="simulator-page">
      <h2>Simulador de Sub-redes</h2>
      <p>Insira um endereço IP e selecione o prefixo CIDR interativamente para ver as informações da rede.</p>
      <SubnetCalculator />

      <div className="page-nav-sides" style={{ marginTop: 18 }}>
        <NextButton
          to="/concepts/mask-calc"
          direction="left"
          label="Cálculo de Máscara"
          variant="secondary"
          ariaLabel="Voltar para Cálculo de Máscara"
        />
        <NextButton
          to="/quiz"
          direction="right"
          label="Quiz"
          variant="primary"
          ariaLabel="Ir para Quiz"
        />
      </div>
    </div>
  );
};

export default SimulatorPage;