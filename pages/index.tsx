import Layout from '@app/components/Layout';
import PageContent from '@app/components/PageContent';
import SongsList from '@app/components/SongsList';
import UserLibraryInfo from '@app/components/UserLibraryInfo';
import { Song } from '@app/data-types/song';
import lodash from 'lodash';

import JSONgs from '@app/server-payload.json';
import { useEffect, useState } from 'react';

const getSearchOptionsFromSongs = (songs: Song[]) => {
  if (!songs || !songs.length) {
    return [];
  }

  return songs.map((songEntry) => ({
    id: `${songEntry.id}`,
    value: songEntry.song.title,
  }));
};

export default function HomePage() {
  const [songs, setSongs] = useState<Song[]>(JSONgs.songs);
  const [originalSongs] = useState<Song[]>(JSONgs.songs);

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

  return (
    <Layout>
      <PageContent>
        <UserLibraryInfo
          totalSongs={songs.length}
          searchOptions={getSearchOptionsFromSongs(songs)}
          onToggleAlphabeticalSort={onSortSong}
        />
        <div style={{ height: '40px' }} />
        <SongsList songs={songs} />
      </PageContent>
    </Layout>
  );
}
