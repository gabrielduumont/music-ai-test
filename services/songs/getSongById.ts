import { Song } from '@app/data-types/song';
import { BASE_API_URL, SONGS_API_PATH } from './constants';

export const getSongById = async (songId: string): Promise<Song | null> => {
  try {
    const res = await fetch(`${BASE_API_URL}${SONGS_API_PATH}/${songId}`);
    const songData = await res.json();
    return songData;
  } catch (error) {
    return null;
  }
};
