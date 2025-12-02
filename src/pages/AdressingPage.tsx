import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages.css';
import NextButton from '../components/NextButton';

const AddressingPage: React.FC = () => {
  return (
    <div className="concepts-page">
      <h2>Endereçamento IP — Visão Geral</h2>

      <p>
        Endereço definido na camada de rede da arquitetura TCP/IP para
        identificar, de forma única, cada interface de rede conectada
        (computadores, servidores, roteadores, switches, smartphones). No IPv4 o
        endereço possui 32 bits (4 bytes).
      </p>
      <p>
        Existe também o IPv6 (endereços de 128 bits) que resolve muitas
        limitações do IPv4 — porém não será abordado nesta aplicação.
      </p>

      <p>
        Em vez da notação binária, normalmente usa-se a notação decimal pontuada
        (dot-decimal). Cada byte do endereço é representado por um número
        decimal (0–255) e os quatro octetos são separados por pontos.
      </p>

      <ul>
        <li>Exemplos de endereços: 130.132.9.31, 200.241.16.8, 10.0.0.0</li>
        <li>
          Formato: 4 octetos → <em>xxx.xxx.xxx.xxx</em> (cada octeto 0–255)
        </li>
      </ul>

      <h3>Exemplos — IPs válidos e inválidos</h3>
      <ul>
        <li>
          ✅ Válidos:
          <ul>
            <li>192.168.0.1</li>
            <li>10.0.0.5</li>
            <li>8.8.8.8</li>
          </ul>
        </li>
        <li>
          ❌ Inválidos:
          <ul>
            <li>256.100.50.25 &nbsp;(octeto &gt;255)</li>
            <li>
              192.168.1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(faltam
              octetos)
            </li>
            <li>192.168.1.1.5 &nbsp;&nbsp;(octetos demais)</li>
            <li>abc.def.ghi.jkl &nbsp;&nbsp;(não numérico)</li>
            <li>192.168.-1.5 &nbsp;&nbsp;&nbsp;&nbsp;(valor negativo)</li>
          </ul>
        </li>
      </ul>

      <h3>Subredes</h3>
      <p>
        Para organizar e otimizar o uso de endereços IP, redes podem ser
        subdivididas em redes menores.
      </p>
      <p>
        Para um melhor entendimento são necessários conceitos como máscaras de
        rede, classful, classless e CIDR.
      </p>
      
      <div className="page-nav-sides">
        <NextButton to="/" direction="left" label="Início" variant="secondary" ariaLabel="Voltar para Início" />
        <NextButton to="/concepts/classful" label="Próximo: Classful" variant="primary" ariaLabel="Ir para Classful" />
      </div>
    </div>
  );
};

export default AddressingPage;
