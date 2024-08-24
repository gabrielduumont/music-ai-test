import {
  getStorageItem,
  saveStorageItem,
} from '@app/utils/localStorageAdapter';
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

type SongsContextStates = {
  favoriteSongIds: string[];
};
type SongsContextModifiers = {
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
  isSongFavorite: (id: string) => boolean;
  toggleFavorite: (id: string) => void;
};

type SongsContextType = {
  states: SongsContextStates;
  modifiers: SongsContextModifiers;
};

const isValidArrayOfStrings = (value: unknown): value is string[] => {
  if (
    value &&
    Array.isArray(value) &&
    value.length &&
    value.every((item) => item && typeof item === 'string')
  ) {
    return true;
  }

  return false;
};

export const SongsContext = createContext<SongsContextType>({
  states: {
    favoriteSongIds: [],
  },
  modifiers: {
    addFavorite: () => {},
    removeFavorite: () => {},
    isSongFavorite: () => false,
    toggleFavorite: () => {},
  },
});

export const useSongsContext = () => {
  const { states, modifiers } = useContext(SongsContext);

  return [states, modifiers] as const;
};

const SongsContextContainer = ({
  children,
  testRun,
}: {
  children: ReactNode;
  testRun?: boolean;
}) => {
  const [favoriteSongIds, setFavoriteSongIds] = useState<string[]>([]);
  const [started, setStarted] = useState<boolean>(testRun ?? false);

  const updateStorage = (updatedIds: string[]) => {
    saveStorageItem(updatedIds, 'favorite-song-ids');
  };

  const addFavorite = useCallback(
    (songId: string) => {
      const updatedIds = [...favoriteSongIds];
      if (favoriteSongIds.includes(songId)) {
        return;
      }
      updatedIds.push(songId);
      setFavoriteSongIds(updatedIds);
      updateStorage(updatedIds);
    },
    [favoriteSongIds]
  );

  const removeFavorite = useCallback(
    (songId: string) => {
      if (!favoriteSongIds.includes(songId)) {
        return;
      }
      const updatedIds = [...favoriteSongIds].filter((id) => id !== songId);
      setFavoriteSongIds(updatedIds);
      updateStorage(updatedIds);
    },
    [favoriteSongIds]
  );

  const isSongFavorite = useCallback(
    (songId: string) => {
      if (!favoriteSongIds.includes(songId)) {
        return false;
      }

      return true;
    },
    [favoriteSongIds]
  );

  const toggleFavorite = useCallback(
    (songId: string) => {
      if (isSongFavorite(songId)) {
        removeFavorite(songId);
        return;
      }

      addFavorite(songId);
    },
    [favoriteSongIds]
  );

  const states: SongsContextStates = {
    favoriteSongIds,
  };

  const modifiers: SongsContextModifiers = {
    addFavorite,
    removeFavorite,
    isSongFavorite,
    toggleFavorite,
  };

  const contextValue: SongsContextType = {
    states,
    modifiers,
  };

  useEffect(() => {
    const onMountContext = () => {
      const favoriteSongIdsSavedOnStorage = getStorageItem(
        'favorite-song-ids',
        isValidArrayOfStrings
      );
      if (!favoriteSongIdsSavedOnStorage) {
        return;
      }

      setFavoriteSongIds(favoriteSongIdsSavedOnStorage);
    };
    if (!started) {
      onMountContext();
      setStarted(true);
    }
  }, [started]);

  useEffect(() => {
    saveStorageItem(favoriteSongIds, 'favorite-song-ids');
  }, [favoriteSongIds]);

  return (
    <SongsContext.Provider value={contextValue}>
      <>{children}</>
    </SongsContext.Provider>
  );
};

export default SongsContextContainer;
