import ToggleButton from '@app/components/Buttons/ToggleButton';
import LibraryDescription from './LibraryDescription';
import styles from './styles.module.scss';
import SearchInput from '@app/components/SearchInput';

type UserLibraryInfoProps = {
  totalSongs?: number;
};

export default function UserLibraryInfo({ totalSongs }: UserLibraryInfoProps) {
  return (
    <div className={styles.container}>
      <LibraryDescription totalSongs={totalSongs} />
      <ToggleButton label="Sort from A-Z" />
      <SearchInput
        showIcon
        label="Search in your library"
        options={[
          { id: '1', value: 'option 1' },
          { id: '2', value: 'option 2' },
          { id: '3', value: 'option 3' },
        ]}
      />
    </div>
  );
}
