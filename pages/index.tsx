import Layout from '@app/components/Layout';
import PageContent from '@app/components/PageContent';
import UserLibrary from '@app/components/UserLibrary';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { Song } from '@app/data-types/song';
import { getAllSongs } from '@app/services/songs/getAllSongs';

export const getServerSideProps = (async () => {
  try {
    const songs = await getAllSongs();
    return { props: { songs } };
  } catch (error) {
    return { props: { songs: [] } };
  }
}) satisfies GetServerSideProps<{ songs: Song[] }>;

export default function HomePage({
  songs,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Layout>
      <PageContent>
        <UserLibrary originalSongs={songs} />
      </PageContent>
    </Layout>
  );
}
