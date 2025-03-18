import React from 'react';
import { Rocket } from 'lucide-react';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <a href="/" className={styles.logo}>
          <Rocket size={24} />
          <span>Mon App</span>
        </a>
      </div>
    </header>
  );
};