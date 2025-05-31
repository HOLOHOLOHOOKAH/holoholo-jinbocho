import React from 'react';
import styles from './separator.module.css';

interface SeparatorProps {
  position?: 'left' | 'center' | 'right';
  color?: string;
  thickness?: number;
  spacing?: number;
  className?: string;
}

const Separator: React.FC<SeparatorProps> = ({
  position = 'center',
  color = 'var(--nav-hover-color)',
  thickness = 2,
  spacing = 2,
  className = '',
}) => {
  const getFlex = () => {
    switch (position) {
      case 'left':
        return ['0.25', '0.75'];
      case 'right':
        return ['0.75', '0.25'];
      default:
        return ['1', '1'];
    }
  };

  const [leftFlex, rightFlex] = getFlex();

  return (
    <div className={`${styles.separator} ${className}`}>
      <div
        className={styles.line}
        style={{
          flex: leftFlex,
          height: `${thickness}px`,
          background: `linear-gradient(to right, transparent, ${color})`,
        }}
      />
      <div
        className={styles.dot}
        style={{
          width: `${thickness * 2}px`,
          height: `${thickness * 2}px`,
          backgroundColor: color,
          margin: `0 ${spacing}rem`,
        }}
      />
      <div
        className={styles.line}
        style={{
          flex: rightFlex,
          height: `${thickness}px`,
          background: `linear-gradient(to right, ${color}, transparent)`,
        }}
      />
    </div>
  );
};

export default Separator; 