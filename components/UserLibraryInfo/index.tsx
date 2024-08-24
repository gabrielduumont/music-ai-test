import LibraryDescription from './LibraryDescription';
import styles from './styles.module.scss';

type UserLibraryInfoProps = {
  totalSongs?: number;
};

export default function UserLibraryInfo({ totalSongs }: UserLibraryInfoProps) {
  return (
    <div className={styles.container}>
      <LibraryDescription totalSongs={totalSongs} />
      <div>ALPHA_SORT</div>
      <div>SEARCH</div>
    </div>
  );
}
