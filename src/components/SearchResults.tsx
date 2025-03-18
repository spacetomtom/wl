import React from 'react';
import { ImageOff } from 'lucide-react';
import { ArtworkResponse } from '../services/api';
import styles from './SearchResults.module.css';

interface SearchResultsProps {
  results: Array<ArtworkResponse['artObjects'][0]>;
  isLoading: boolean;
  error: Error | null;
  onLoadMore: () => void;
  hasMore: boolean;
}

export const SearchResults: React.FC<SearchResultsProps> = ({ 
    results,
    isLoading,
    error,
    onLoadMore,
    hasMore
}) => {
  if (isLoading) {
    return <div>Chargement des résultats...</div>;
  }

  if (error) {
    return <div>Erreur lors du chargement des résultats</div>;
  }

  if (!results || results.length === 0) {
    return <div>Aucun résultat trouvé</div>;
  }

  return (
    <div>
      <div className={styles.resultsGrid}>
        {results.map((artwork) => (
          <div key={artwork.id} className={styles.artworkCard}>
            <div className={styles.imageContainer}>
              {artwork.webImage ? (
                <img
                  src={artwork.webImage.url}
                  alt={artwork.title}
                  className={styles.image}
                  loading="lazy"
                />
              ) : (
                <ImageOff className={styles.noImage} size={32} />
              )}
            </div>
            <div className={styles.info}>
              <h3 className={styles.title}>{artwork.title}</h3>
              <p className={styles.artist}>{artwork.principalOrFirstMaker}</p>
            </div>
          </div>
        ))}
      </div>
      {hasMore && (
        <div className={styles.loadMoreContainer}>
          <button
            onClick={onLoadMore}
            className={styles.loadMoreButton}
            disabled={isLoading}
          >
            {isLoading ? 'Chargement...' : 'Charger plus'}
          </button>
        </div>
      )}
    </div>
  );
};