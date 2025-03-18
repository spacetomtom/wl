import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { searchArtworks } from '../services/api';
import { SearchResults } from './SearchResults';
import styles from './SearchComponent.module.css';

interface SearchComponentProps {
  onSearch: (searchTerm: string) => void;
}

export const SearchComponent: React.FC<SearchComponentProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [allResults, setAllResults] = useState<any[]>([]);

  const searchMutation = useMutation({
    mutationFn: async ({ term, page }: { term: string; page: number }) => {
      const response = await searchArtworks(term, page);
      if (page === 1) {
        setAllResults(response.artObjects);
      } else {
        setAllResults(prev => [...prev, ...response.artObjects]);
      }
      return response;
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
    searchMutation.mutate({ term: searchTerm, page: 1 });
  };

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(1);
    onSearch(searchTerm);
    searchMutation.mutate({ term: searchTerm, page: nextPage });
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
        <button type="submit" className={styles.submitButton}>
            {searchMutation.isPending ? 'Recherche...' : 'Rechercher'}
        </button>
        {searchMutation.isError && (
            <div className={styles.error}>
            Une erreur est survenue lors de la recherche
            </div>
        )}
        </form>
         <SearchResults 
         results={allResults}
         isLoading={searchMutation.isPending}
         error={searchMutation.error as Error}
         onLoadMore={handleLoadMore}
         hasMore={searchMutation.data?.count > allResults.length}
         />
    </div>
  );
};