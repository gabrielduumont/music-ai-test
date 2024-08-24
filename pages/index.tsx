import Layout from '@app/components/Layout';
import UserLibrary from '@app/components/UserLibrary';

export default function HomePage() {
  return (
    <Layout>
      <div style={{ padding: '50px 145px' }}>
        <UserLibrary />
      </div>
    </Layout>
  );
}
