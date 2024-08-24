import Search from '@app/components/Icons/Search';
import styles from './styles.module.scss';
import { useEffect, useRef, useState } from 'react';
import lodash from 'lodash';
import ResultsList from './ResultsList';
import { GenericTypeWithId } from '@app/utils/types';

type SearchInputOptionType = { value: string };

type SearchInputProps = {
  showIcon?: boolean;
  disabled?: boolean;
  label?: string;
  options: GenericTypeWithId<SearchInputOptionType>[];
};

const standardizeStringForSearch = (str: string) => {
  if (!str || typeof str !== 'string') {
    return '';
  }

  return str.toLowerCase();
};

export default function SearchInput({
  showIcon,
  label,
  disabled,
  options,
}: SearchInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [searchResults, setSearchResults] = useState<
    GenericTypeWithId<SearchInputOptionType>[]
  >([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const isEmpty = !searchResults.length;

  const focusOnInput = () => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  };

  const resetResults = () => {
    setSearchResults(options && options.length ? options : []);
  };

  const onSearch = (searchValue: string) => {
    if (!searchValue) {
      resetResults();
      return;
    }
    const standardizedSearchValue = standardizeStringForSearch(searchValue);
    const filteredResults = lodash.filter(options ?? [], (item) =>
      standardizeStringForSearch(item.value).includes(standardizedSearchValue)
    );
    const sortedResults = lodash.orderBy(
      filteredResults,
      (item) => item,
      'asc'
    );
    setSearchResults(sortedResults);
  };

  const onInputFocus = () => {
    setIsFocused(true);
    if (inputRef && inputRef.current && inputRef.current.value) {
      onSearch(inputRef.current.value);
      return;
    }
    resetResults();
  };

  useEffect(() => {
    if (
      isFocused &&
      wrapperRef &&
      wrapperRef.current &&
      dropdownRef &&
      dropdownRef.current
    ) {
      const width = wrapperRef.current.clientWidth;
      const height = wrapperRef.current.clientHeight;
      dropdownRef.current.style.width = `${width}px`;
      dropdownRef.current.style.top = `${dropdownRef.current.offsetTop + height + 6}px`;
    }
  }, [isFocused]);

  useEffect(() => {
    const onInputBlur = () => {
      setIsFocused(false);
      if (isEmpty) {
        setSearchResults([]);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        onInputBlur();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef, isEmpty]);

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      <div
        className={styles.container}
        onClick={focusOnInput}
        data-disabled={disabled}
        data-active={isFocused}
      >
        {showIcon && <Search />}
        <input
          ref={inputRef}
          className={styles.input}
          placeholder={label}
          disabled={disabled}
          onFocus={onInputFocus}
          onChange={(evt) => onSearch(evt.target.value)}
        />
      </div>
      {isFocused && (
        <div ref={dropdownRef} className={styles['dropdown-container']}>
          <ResultsList<SearchInputOptionType>
            searchResults={searchResults}
            renderResultOption={(result: SearchInputOptionType) => (
              <>{result.value}</>
            )}
          />
        </div>
      )}
    </div>
  );
}
