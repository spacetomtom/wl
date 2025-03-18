import React from 'react';
import { Palette } from 'lucide-react';
import styles from './Header.module.scss';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <a href="/" className={styles.logo}>
          <Palette size={24} />
          <span>Rijks Explorer</span>
        </a>
      </div>
    </header>
  );
};