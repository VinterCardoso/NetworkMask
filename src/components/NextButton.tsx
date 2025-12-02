import React from 'react';
import { Link } from 'react-router-dom';

interface NextButtonProps {
  to: string;
  label?: string;
  ariaLabel?: string;
  direction?: 'left' | 'right';
  variant?: 'primary' | 'secondary';
}

const NextButton: React.FC<NextButtonProps> = ({ to, label, ariaLabel, direction = 'right', variant = 'primary' }) => {
  const isLeft = direction === 'left';
  const arrowGlyph = '➜'; // use same glyph for both sides, rotate for left for visual parity
  const baseClass = isLeft ? 'prev-btn' : 'next-btn';
  const styleClass = variant === 'secondary' ? 'btn-secondary' : 'btn-primary';
  const defaultLabel = label ?? (isLeft ? 'Voltar' : 'Próximo');
  const defaultAria = ariaLabel ?? (isLeft ? 'Voltar' : 'Próximo');

  return (
    <Link to={to} className={`${baseClass} ${styleClass}`} aria-label={defaultAria}>
      {isLeft && <span className={`next-arrow ${isLeft ? 'arrow-rotated' : ''}`} aria-hidden style={{ marginRight: 8 }}>{arrowGlyph}</span>}
      <span className="next-label">{defaultLabel}</span>
      {!isLeft && <span className="next-arrow" aria-hidden style={{ marginLeft: 8 }}>{arrowGlyph}</span>}
    </Link>
  );
};

export default NextButton;