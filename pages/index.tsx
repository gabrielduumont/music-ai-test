import Layout from '@app/components/Layout';
import PageContent from '@app/components/PageContent';
import SongsList from '@app/components/SongsList';
import UserLibraryInfo from '@app/components/UserLibraryInfo';

import JSONgs from '@app/server-payload.json';

export default function HomePage() {
  const songs = JSONgs.songs;
  return (
    <Layout>
      <PageContent>
        <UserLibraryInfo
          totalSongs={songs.length}
          searchOptions={songs.map((songEntry) => ({
            id: `${songEntry.id}`,
            value: songEntry.song.title,
          }))}
        />
        <div style={{ height: '40px' }} />
        <SongsList songs={songs} />
      </PageContent>
    </Layout>
  );
}
