import React from 'react';
import styles from './Title.module.scss';

export const Title: React.FC = () => {
  return (
    <div className={styles.titleContainer}>
      <h1 className={styles.mainTitle}>Discover the Rijksmuseum</h1>
      <p className={styles.subtitle}>
        Explore thousands of masterpieces from the Dutch Golden Age to modern times
      </p>
    </div>
  );
};