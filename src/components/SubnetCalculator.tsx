import React, { useState, useRef } from 'react';
import {
  calculateSubnetMask,
  calculateNetworkID,
  calculateBroadcastAddress,
  calculateValidHosts
} from '../utils/subnet';
import NetworkInfoCard from './NetworkInfoCard';
import MaskHoverSimulator from './MaskHoverSimulator';

const octetStyle: React.CSSProperties = {
  width: 56,
  padding: '6px 8px',
  fontFamily: 'monospace',
  textAlign: 'center',
};

const dotStyle: React.CSSProperties = {
  fontFamily: 'monospace',
  fontWeight: 700,
  margin: '0 6px',
};

const SubnetCalculator: React.FC = () => {
  const [octets, setOctets] = useState<string[]>(['', '', '', '']);
  const [touched, setTouched] = useState<boolean[]>([false, false, false, false]);
  const [selectedPrefix, setSelectedPrefix] = useState<number | null>(null);

  const inputsRef = [useRef<HTMLInputElement | null>(null), useRef<HTMLInputElement | null>(null), useRef<HTMLInputElement | null>(null), useRef<HTMLInputElement | null>(null)];

  const isValidOctet = (v: string) => {
    if (v === '') return false;
    if (!/^\d{1,3}$/.test(v)) return false;
    const n = Number(v);
    return Number.isFinite(n) && n >= 0 && n <= 255;
  };

  const ipValid = octets.every((o) => isValidOctet(o));
  const cidrValid = selectedPrefix !== null && Number.isFinite(selectedPrefix) && selectedPrefix >= 0 && selectedPrefix <= 32;

  const ipString = ipValid ? octets.join('.') : '';

  const maskProp = selectedPrefix !== null ? calculateSubnetMask(selectedPrefix) : undefined;
  const maskDisplay = maskProp ?? '—';
  const networkIdDisplay = ipValid && cidrValid ? calculateNetworkID(ipString, selectedPrefix as number) : '—';
  const broadcastDisplay = ipValid && cidrValid ? calculateBroadcastAddress(ipString, selectedPrefix as number) : '—';
  const validHostsDisplay = cidrValid ? calculateValidHosts(selectedPrefix as number) : '—';

  const handleOctetChange = (idx: number, value: string) => {
    const cleaned = value.replace(/[^\d]/g, '').slice(0, 3);
    const next = [...octets];
    next[idx] = cleaned;
    setOctets(next);

    if (cleaned.length === 3 && idx < 3) {
      inputsRef[idx + 1].current?.focus();
    }
  };

  const handleKeyDown = (idx: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === '.' || e.key === 'ArrowRight') {
      e.preventDefault();
      if (idx < 3) inputsRef[idx + 1].current?.focus();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      if (idx > 0) inputsRef[idx - 1].current?.focus();
    } else if (e.key === 'Backspace') {
      const curr = octets[idx];
      if (!curr && idx > 0) {
        inputsRef[idx - 1].current?.focus();
      }
    }
  };

  return (
    <div>
      <h2>Calculadora de Sub-rede</h2>

      {/* Centralized inputs wrapper */}
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
          {octets.map((val, i) => (
            <React.Fragment key={i}>
              <input
                ref={(el) => (inputsRef[i].current = el)}
                style={octetStyle}
                value={val}
                inputMode="numeric"
                onChange={(e) => handleOctetChange(i, e.target.value)}
                onBlur={() => {
                  const t = [...touched];
                  t[i] = true;
                  setTouched(t);
                }}
                onKeyDown={(e) => handleKeyDown(i, e)}
                aria-label={`Octeto ${i + 1}`}
              />
              {i < 3 && <span style={dotStyle}>.</span>}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 8 }}>
        {octets.map((v, i) => (
          touched[i] && v !== '' && !isValidOctet(v) ? (
            <div key={i} style={{ color: 'crimson', fontSize: 13 }}>Octeto {i + 1} inválido (0–255)</div>
          ) : null
        ))}
      </div>

      <div style={{ marginTop: 12 }}>
        <MaskHoverSimulator onChangePrefix={(p) => setSelectedPrefix(p)} />
      </div>

      <div style={{ marginTop: 12 }}>
        <NetworkInfoCard
          mask={maskProp}
          cidr={selectedPrefix}
          networkId={networkIdDisplay}
          broadcastAddress={broadcastDisplay}
          validHosts={validHostsDisplay}
        />
      </div>
    </div>
  );
};

export default SubnetCalculator;