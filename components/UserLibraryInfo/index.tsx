import ToggleButton from '@app/components/Buttons/ToggleButton';
import LibraryDescription from './LibraryDescription';
import styles from './styles.module.scss';
import SearchInput from '@app/components/SearchInput';
import { GenericTypeWithId } from '@app/utils/types';

type SearchOption = GenericTypeWithId<{
  value: string;
}>;

type UserLibraryInfoProps = {
  totalSongs?: number;
  searchOptions?: SearchOption[];
};

export default function UserLibraryInfo({
  totalSongs,
  searchOptions,
}: UserLibraryInfoProps) {
  const options = searchOptions && searchOptions.length ? searchOptions : [];
  return (
    <div className={styles.container}>
      <LibraryDescription totalSongs={totalSongs} />
      <div className={styles['sort-and-search']}>
        <ToggleButton label="Sort from A-Z" />
        <SearchInput
          showIcon
          label="Search in your library"
          options={options}
        />
      </div>
    </div>
  );
}
