import Layout from '@app/components/Layout';
import PageContent from '@app/components/PageContent';
import JSONgs from '@app/server-payload.json';
import UserLibrary from '@app/components/UserLibrary';

export default function HomePage() {
  return (
    <Layout>
      <PageContent>
        <UserLibrary originalSongs={JSONgs.songs} />
      </PageContent>
    </Layout>
  );
}
