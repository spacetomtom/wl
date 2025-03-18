import React from 'react';
import { useSearchStore } from '../store/searchStore';
import { SearchResults } from './SearchResults';
import styles from './SearchComponent.module.scss';

export const SearchComponent: React.FC = () => {
  const {
    searchTerm,
    isLoading,
    error,
    setSearchTerm,
    search,
  } = useSearchStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await search();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.searchContainer}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Rechercher..."
          className={styles.searchInput}
        />
        <button 
          type="submit" 
          className={styles.submitButton}
          disabled={isLoading}
        >
          {isLoading ? 'Recherche...' : 'Rechercher'}
        </button>
        {error && (
          <div className={styles.error}>
            Une erreur est survenue lors de la recherche
          </div>
        )}
      </form>
      
      <SearchResults />
    </div>
  );
};