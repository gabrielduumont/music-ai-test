import SongsList from '@app/components/SongsList';
import UserLibraryInfo from '@app/components/UserLibraryInfo';
import { Song } from '@app/data-types/song';
import lodash from 'lodash';
import { useState } from 'react';
import { useSongsContext } from '@app/contexts/SongsContext';
import { getSearchOptionsFromSongs } from '@app/utils/getSearchOptionsFromSongs';

type UserLibraryProps = {
  originalSongs: Song[];
};

const getValidSongsArray = (songs: Song[]) => {
  if (!songs || !songs.length) {
    return [];
  }

  return songs;
};

export default function UserLibrary({ originalSongs }: UserLibraryProps) {
  const [songs, setSongs] = useState<Song[]>(getValidSongsArray(originalSongs));
  const [{ favoriteSongIds }] = useSongsContext();

  const onSortSong = (shouldSortAlphabetically: boolean) => {
    if (shouldSortAlphabetically) {
      const sortedSongs = lodash.orderBy(
        songs,
        (song) => song.song.title.toLowerCase(),
        ['asc']
      );
      setSongs(sortedSongs);
    } else {
      setSongs(originalSongs);
    }
  };

  const onToggleFavoriteFilter = (shouldFilter: boolean) => {
    if (shouldFilter) {
      const filteredSongs = originalSongs.filter((song) =>
        favoriteSongIds.includes(`${song.id}`)
      );
      setSongs(filteredSongs);
      return;
    }

    setSongs(originalSongs);
  };

  return (
    <>
      <UserLibraryInfo
        totalSongs={songs.length}
        searchOptions={getSearchOptionsFromSongs(songs)}
        onToggleAlphabeticalSort={onSortSong}
        onToggleFavoriteFilter={onToggleFavoriteFilter}
      />
      <div style={{ height: '40px' }} />
      <SongsList songs={songs} />
    </>
  );
}
