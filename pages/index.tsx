import Layout from '@app/components/Layout';
import UserLibraryInfo from '@app/components/UserLibraryInfo';

export default function HomePage() {
  return (
    <Layout>
      <div style={{ padding: '50px 145px' }}>
        <UserLibraryInfo />
      </div>
    </Layout>
  );
}
