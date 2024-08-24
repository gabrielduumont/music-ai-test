import Layout from '@app/components/Layout';
import { useRouter } from 'next/router';

export default function SongDetailsPage() {
  const router = useRouter();
  return (
    <Layout pageTitle="__SONGNAME__ - __SONGARTIST_" showHeaderSearch>
      <p>SongId: {router.query.songId}</p>
    </Layout>
  );
}
