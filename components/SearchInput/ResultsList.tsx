import { GenericTypeWithId } from '@app/utils/types';
import styles from './styles.module.scss';
import Link from 'next/link';
import { routes } from '@app/utils/constants/routes';

type ResultsListProps<GenericTypeWithId> = {
  searchResults: GenericTypeWithId[];
  renderResultOption: (result: GenericTypeWithId) => React.ReactElement;
};

export default function ResultsList<T>({
  searchResults,
  renderResultOption,
}: ResultsListProps<GenericTypeWithId<T>>) {
  if (!searchResults) {
    return null;
  }
  if (!searchResults.length) {
    return <div className={styles['dropdown-empty']}>No results found.</div>;
  }

  return searchResults.map((result) => (
    <Link
      key={result.id}
      href={routes.songDetails(result.id)}
      className={styles['dropdown-item']}
    >
      <div>{renderResultOption(result)}</div>
    </Link>
  ));
}
