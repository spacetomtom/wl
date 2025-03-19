import React from 'react';
import { useSearchStore } from '../store/searchStore';
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
          placeholder="Search..."
          className={styles.searchInput}
        />
        <button 
          type="submit" 
          className={styles.submitButton}
          disabled={isLoading}
        >
          {isLoading ? 'Searching...' : 'Search'}
        </button>
      </form>
      
      {error && (
        <div className={styles.error}>
          An error occurred while searching
        </div>
      )}
    </div>
  );
}