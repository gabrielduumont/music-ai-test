import Header from '@app/components/Header';
import PageHead from '@app/components/PageHead';
import SongsContextContainer from '@app/contexts/SongsContext';
import styles from './styles.module.scss';
import { SearchOption } from '@app/utils/types';

type LayoutProps = {
  children: React.ReactElement | React.ReactElement[];
  showHeaderSearch?: boolean;
  pageTitle?: string;
  searchOptions?: SearchOption[];
};

export default function Layout({
  children,
  showHeaderSearch,
  pageTitle,
  searchOptions,
}: LayoutProps) {
  return (
    <SongsContextContainer>
      <>
        <PageHead title={pageTitle} />
        <Header showSearch={showHeaderSearch} searchOptions={searchOptions} />

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
