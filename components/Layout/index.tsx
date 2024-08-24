import Header from '@app/components/Header';
import PageHead from '@app/components/PageHead';

type LayoutProps = {
  children: React.ReactElement;
  showHeaderSearch?: boolean;
  pageTitle?: string;
};

export default function Layout({
  children,
  showHeaderSearch,
  pageTitle,
}: LayoutProps) {
  return (
    <>
      <PageHead title={pageTitle} />
      <div>
        <Header showSearch={showHeaderSearch} />
        <div>
          <>{children}</>
        </div>
      </div>
    </>
  );
}
