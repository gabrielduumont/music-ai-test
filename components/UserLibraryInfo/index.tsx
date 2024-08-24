import ToggleButton from '@app/components/Buttons/ToggleButton';
import LibraryDescription from './LibraryDescription';
import styles from './styles.module.scss';
import SearchInput from '@app/components/SearchInput';
import { SearchOption } from '@app/utils/types';

type UserLibraryInfoProps = {
  totalSongs?: number;
  searchOptions?: SearchOption[];
  onToggleAlphabeticalSort?: (shouldSort: boolean) => void;
  onToggleFavoriteFilter?: (shouldFilter: boolean) => void;
};

export default function UserLibraryInfo({
  totalSongs,
  searchOptions,
  onToggleAlphabeticalSort,
  onToggleFavoriteFilter,
}: UserLibraryInfoProps) {
  const options = searchOptions && searchOptions.length ? searchOptions : [];
  return (
    <div className={styles.container}>
      <LibraryDescription
        totalSongs={totalSongs}
        onToggleFavoriteButton={onToggleFavoriteFilter}
      />
      <div className={styles['sort-and-search']}>
        <ToggleButton
          label="Sort from A-Z"
          onClick={onToggleAlphabeticalSort}
        />
        <SearchInput
          showIcon
          label="Search in your library"
          options={options}
        />
      </div>
    </div>
  );
}
