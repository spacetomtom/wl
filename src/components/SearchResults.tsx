import React from 'react';
import { ImageOff } from 'lucide-react';
import { useSearchStore } from '../store/searchStore';
import styles from './SearchResults.module.scss';

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
    return <div>Chargement des résultats...</div>;
  }

  if (error) {
    return <div>Erreur lors du chargement des résultats</div>;
  }

  if (!hasSearched) {
    return null;
  }

  if (!results || results.length === 0) {
    return <div>Aucun résultat trouvé</div>;
  }

  const hasMore = results.length < totalCount;

  return (
    <div>
      <div className={styles.resultsGrid}>
        {results.map((artwork) => (
          <div key={artwork.id} className={styles.artworkCard}>
            <div className={styles.imageContainer}>
              {artwork.webImage && artwork.webImage.guid ? (
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
            </div>
          </div>
        ))}
      </div>
      {hasMore && (
        <div className={styles.loadMoreContainer}>
          <button
            onClick={loadMore}
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