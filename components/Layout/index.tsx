import Header from '@app/components/Header';
import PageHead from '@app/components/PageHead';
import styles from './styles.module.scss';

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
      <Header showSearch={showHeaderSearch} />

      <div className={styles['padded-container']}>
        <div className={styles['scrollable-container']}>
          <div className={styles.container}>
            <>{children}</>
          </div>
        </div>
      </div>
    </>
  );
}
