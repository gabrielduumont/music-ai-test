import { Song } from '@app/data-types/song';

export const getSearchOptionsFromSongs = (songs: Song[]) => {
  if (!songs || !songs.length) {
    return [];
  }

  return songs.map((songEntry) => ({
    id: `${songEntry.id}`,
    value: songEntry.song.title,
  }));
};
