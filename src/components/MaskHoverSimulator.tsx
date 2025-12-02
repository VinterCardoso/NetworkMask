import React, { useState, useMemo, useEffect } from 'react';

const bitStyle: React.CSSProperties = {
  display: 'inline-block',
  width: 18,
  textAlign: 'center',
  padding: '4px 2px',
  margin: 2,
  borderRadius: 4,
  cursor: 'pointer',
  userSelect: 'none',
  fontFamily: 'monospace',
  fontWeight: 600,
  transition: 'background-color 180ms ease, color 180ms ease, transform 140ms ease, border 180ms ease',
};

const groupStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: 8,
};

const headerStyle: React.CSSProperties = { marginBottom: 12 };

interface MaskHoverSimulatorProps {
  onChangePrefix?: (prefix: number) => void;
  initialLockedPrefix?: number | null;
}

function maskFromOnes(ones: number) {
  if (!Number.isFinite(ones) || ones <= 0) return '0.0.0.0';
  if (ones >= 32) return '255.255.255.255';
  const mask32 = ((0xffffffff << (32 - ones)) >>> 0);
  return [
    (mask32 >>> 24) & 255,
    (mask32 >>> 16) & 255,
    (mask32 >>> 8) & 255,
    mask32 & 255,
  ].join('.');
}

const MaskHoverSimulator: React.FC<MaskHoverSimulatorProps> = ({ onChangePrefix, initialLockedPrefix = null }) => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [lockedIndex, setLockedIndex] = useState<number | null>(initialLockedPrefix !== null ? (initialLockedPrefix - 1) : null);

  const bits = useMemo(() => Array.from({ length: 32 }).map(() => 0), []);

  const activeIndex = lockedIndex !== null ? lockedIndex : hoverIndex;
  const onesCount = activeIndex !== null ? activeIndex + 1 : 0;

  useEffect(() => {
    if (typeof onChangePrefix === 'function') {
      onChangePrefix(onesCount);
    }
  }, [onesCount, onChangePrefix]);

  return (
    <div>

      <div>
        <h4 style={{ margin: '8px 0' }}>Máscara (bits)</h4>

        <p style={{ marginTop: 0, marginBottom: 8, color: '#555', fontSize: 13 }}>
          Instruções: passe o mouse sobre um bit para ativar os 1s à esquerda. Clique para fixar o prefixo; clique novamente para liberar.
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
          {Array.from({ length: 4 }).map((_, octetIdx) => {
            const start = octetIdx * 8;
            return (
              <React.Fragment key={octetIdx}>
                <div style={groupStyle}>
                  {bits.slice(start, start + 8).map((_, i) => {
                    const globalIndex = start + i;
                    const isOne = activeIndex !== null && globalIndex <= activeIndex;
                    return (
                      <span
                        key={globalIndex}
                        style={{
                          ...bitStyle,
                          background: isOne ? '#2d7ff9' : '#f5f5f5',
                          color: isOne ? '#fff' : '#333',
                          border: isOne ? '1px solid rgba(45,127,249,0.9)' : '1px solid #eee',
                          transform: isOne ? 'scale(1.06)' : 'scale(1)',
                        }}
                        onMouseEnter={() => {
                          if (lockedIndex === null) setHoverIndex(globalIndex);
                        }}
                        onMouseLeave={() => {
                          if (lockedIndex === null) setHoverIndex(null);
                        }}
                        onClick={() => {
                          if (lockedIndex === globalIndex) {
                            setLockedIndex(null);
                          } else {
                            setLockedIndex(globalIndex);
                            setHoverIndex(null);
                          }
                        }}
                        aria-label={`bit-${globalIndex}`}
                        role="button"
                      >
                        {isOne ? '1' : '0'}
                      </span>
                    );
                  })}
                </div>

                {octetIdx < 3 && (
                  <div style={{ fontFamily: 'monospace', fontWeight: 700, fontSize: 18, transition: 'color 160ms' }}>.</div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MaskHoverSimulator;