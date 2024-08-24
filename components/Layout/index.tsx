import Header from '@app/components/Header';
import PageHead from '@app/components/PageHead';
import SongsContextContainer from '@app/contexts/SongsContext';
import styles from './styles.module.scss';

type LayoutProps = {
  children: React.ReactElement | React.ReactElement[];
  showHeaderSearch?: boolean;
  pageTitle?: string;
};

export default function Layout({
  children,
  showHeaderSearch,
  pageTitle,
}: LayoutProps) {
  return (
    <SongsContextContainer>
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
    </SongsContextContainer>
  );
}
