import React from 'react';

interface NetworkInfoCardProps {
  mask?: string;
  cidr?: number | null;
  networkId: string;
  broadcastAddress: string;
  validHosts: number | string;
}

const NetworkInfoCard: React.FC<NetworkInfoCardProps> = ({ mask, cidr, networkId, broadcastAddress, validHosts }) => {
  return (
    <div className="network-info-card">
      <h2>Informações da Rede</h2>

      <p>
        <strong>Máscara (decimal):</strong>{' '}
        <span style={{ fontFamily: 'monospace' }}>{mask ?? '—'}</span>
      </p>

      <p>
        <strong>CIDR:</strong>{' '}
        <span style={{ fontFamily: 'monospace' }}>{cidr != null ? '/' + cidr : '—'}</span>
      </p>

      <p><strong>ID da rede:</strong> {networkId ?? '—'}</p>
      <p><strong>Endereço de broadcast:</strong> {broadcastAddress ?? '—'}</p>
      <p><strong>Hosts válidos:</strong> {typeof validHosts === 'number' ? validHosts : (validHosts ?? '—')}</p>
    </div>
  );
};
export default NetworkInfoCard;