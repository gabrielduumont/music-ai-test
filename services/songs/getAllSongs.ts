import { Song } from '@app/data-types/song';
import { BASE_API_URL, SONGS_API_PATH } from './constants';

export const getAllSongs = async (): Promise<Song[]> => {
  try {
    const res = await fetch(`${BASE_API_URL}${SONGS_API_PATH}`);
    const songData = await res.json();
    const songs =
      songData && songData.songs && songData.songs.length ? songData.songs : [];
    return songs;
  } catch (error) {
    return [];
  }
};
