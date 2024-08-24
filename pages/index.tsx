import Layout from '@app/components/Layout';
import PageContent from '@app/components/PageContent';
import UserLibraryInfo from '@app/components/UserLibraryInfo';

export default function HomePage() {
  return (
    <Layout>
      <PageContent>
        <UserLibraryInfo />
      </PageContent>
    </Layout>
  );
}
