import React from 'react';
import { useSearchStore } from '../store/searchStore';
import styles from './SearchResults.module.scss';
import { ArtworkCard } from './ArtworkCard';

export const SearchResults: React.FC = () => {
  const { 
    results, 
    isLoading, 
    error,
    totalCount,
    loadMore,
    hasSearched
  } = useSearchStore();

  if (isLoading && !results?.length) {
    return <div>Loading results...</div>;
  }

  if (error) {
    return <div>Error loading results</div>;
  }

  if (!hasSearched) {
    return null;
  }

  if (!results || results.length === 0) {
    return <div>No results found</div>;
  }

  const hasMore = results.length < totalCount;

  return (
    <div>
      <div className={styles.resultsGrid}>
        {results.map((artwork) => (
          <ArtworkCard key={artwork.id} artwork={artwork} />
        ))}
      </div>
      {hasMore && (
        <div className={styles.loadMoreContainer}>
          <button
            onClick={loadMore}
            className={styles.loadMoreButton}
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : 'Load more'}
          </button>
        </div>
      )}
    </div>
  );
};