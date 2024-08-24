import PageHead from '@app/components/PageHead';
import { useRouter } from 'next/router';

export default function SongDetailsPage() {
  const router = useRouter();
  return (
    <>
      <PageHead title="__SONGNAME__ - __SONGARTIST_" />
      <p>SongId: {router.query.songId}</p>
    </>
  );
}
