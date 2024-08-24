type StorageItemKeys = 'favorite-song-ids';

export const getStorageItem = <T>(
  key: StorageItemKeys,
  validator: (value: unknown) => value is T
) => {
  if (!window || !window.localStorage) {
    return null;
  }

  try {
    const item = window.localStorage.getItem(key);
    if (!item) {
      return null;
    }

    const parsedItem = JSON.parse(item);
    if (!validator(parsedItem)) {
      return null;
    }

    return parsedItem;
  } catch (error: unknown) {
    console.error('Unknown error', { error });
    return null;
  }
};

export const saveStorageItem = <T>(item: T, key: StorageItemKeys) => {
  if (!window || !window.localStorage) {
    return false;
  }

  window.localStorage.setItem(key, JSON.stringify(item));
  return true;
};
