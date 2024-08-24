import { APP_TITLE } from '@app/utils/constants/general';
import styles from './styles.module.scss';
import Link from 'next/link';
import { routes } from '@app/utils/constants/routes';

type HeaderProps = {
  showSearch?: boolean;
};

export default function Header({ showSearch }: HeaderProps) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <Link href={routes.home}>{APP_TITLE}</Link>
      </h1>
      {showSearch && (
        <div>
          {/* Deal with responsivity once we got the search component ready and the details page ready to work */}
          SEARCH
        </div>
      )}
    </div>
  );
}
