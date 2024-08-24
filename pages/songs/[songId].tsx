import Layout from '@app/components/Layout';
import { useRouter } from 'next/router';
import { Song } from '@app/data-types/song';
import { getAllSongs } from '@app/services/songs/getAllSongs';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { getSearchOptionsFromSongs } from '@app/utils/getSearchOptionsFromSongs';
import { getSongById } from '@app/services/songs/getSongById';
import { useEffect } from 'react';
import PageContent from '@app/components/PageContent';
import SongPlayer from '@app/components/SongPlayer';

export const getServerSideProps = (async (context) => {
  try {
    const { songId } = context.params as { songId: string };
    const songs = await getAllSongs();
    const song = await getSongById(songId);

    if (!song) {
      return {
        notFound: true,
      };
    }

    return { props: { songs, song } };
  } catch (error) {
    return { props: { songs: [], song: null } };
  }
}) satisfies GetServerSideProps<{ songs: Song[]; song: Song | null }>;

export default function SongDetailsPage({
  songs,
  song,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();

  useEffect(() => {
    if (!song) {
      router.replace('/404');
    }
  }, [song, router]);

  if (!song) {
    return null;
  }

  return (
    <Layout
      pageTitle={`${song.song.title} - ${song.song.artist}`}
      showHeaderSearch
      searchOptions={getSearchOptionsFromSongs(songs)}
    >
      <PageContent backgroundImgUrl={song.song.files.poster}>
        <SongPlayer song={song} songs={songs} />
      </PageContent>
    </Layout>
  );
}
