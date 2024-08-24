import { APP_TITLE } from '@app/utils/constants/general';
import styles from './styles.module.scss';
import Link from 'next/link';
import { routes } from '@app/utils/constants/routes';
import SearchInput from '@app/components/SearchInput';
import { SearchOption } from '@app/utils/types';

type HeaderProps = {
  showSearch?: boolean;
  searchOptions?: SearchOption[];
};

export default function Header({ showSearch, searchOptions }: HeaderProps) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>
        <Link href={routes.home}>{APP_TITLE}</Link>
      </p>
      {showSearch && (
        <SearchInput
          showIcon
          label="Search in your library"
          options={searchOptions ?? []}
        />
      )}
    </div>
  );
}
