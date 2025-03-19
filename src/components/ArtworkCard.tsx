import React from 'react';
import { ImageOff } from 'lucide-react';
import styles from './ArtworkCard.module.scss';

interface ArtworkCardProps {
  artwork: {
    id: string;
    title: string;
    webImage?: {
      url: string;
      guid?: string;
    };
  };
}

export const ArtworkCard: React.FC<ArtworkCardProps> = ({ artwork }) => {
  return (
    <div className={styles.artworkCard}>
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
  );
};