import ToggleButton from '@app/components/Buttons/ToggleButton';
import LibraryDescription from './LibraryDescription';
import styles from './styles.module.scss';

type UserLibraryInfoProps = {
  totalSongs?: number;
};

export default function UserLibraryInfo({ totalSongs }: UserLibraryInfoProps) {
  return (
    <div className={styles.container}>
      <LibraryDescription totalSongs={totalSongs} />
      <ToggleButton label="Sort from A-Z" />
      <div>SEARCH</div>
    </div>
  );
}
