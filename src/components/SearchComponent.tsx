import React, { useState } from 'react';
import styles from './SearchComponent.module.css';

interface SearchComponentProps {
  onSearch: (searchTerm: string) => void;
}

export const SearchComponent: React.FC<SearchComponentProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchContainer}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Rechercher..."
        className={styles.searchInput}
      />
      <button type="submit" className={styles.submitButton}>
        Rechercher
      </button>
    </form>
  );
};