import React from 'react';
import styles from './SimpleComponent.module.css';

interface SimpleComponentProps {
  message: string;
}

export const SimpleComponent: React.FC<SimpleComponentProps> = ({ message }) => {
  return (
    <div className={styles.component}>
      <p>{message}</p>
    </div>
  );
};