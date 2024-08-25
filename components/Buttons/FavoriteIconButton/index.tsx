import styles from './styles.module.scss';
import Heart from '@app/components/Icons/Heart';
import { useSongsContext } from '@app/contexts/SongsContext';
import { useEffect, useState } from 'react';

type FavoriteIconButtonProps = {
  songId: string;
};

export default function FavoriteIconButton({
  songId,
}: FavoriteIconButtonProps) {
  const [{ favoriteSongIds }, { toggleFavorite, isSongFavorite }] =
    useSongsContext();

  const [isThisSongFavorite, setIsThisSongFavorite] = useState(
    isSongFavorite(songId)
  );

  useEffect(() => {
    setIsThisSongFavorite(isSongFavorite(songId));
  }, [favoriteSongIds, isSongFavorite, songId]);

  return (
    <div
      className={styles['song-favorite']}
      onClick={() => toggleFavorite(songId)}
    >
      <Heart isFilled={isThisSongFavorite} />
    </div>
  );
}
