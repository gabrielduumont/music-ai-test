import { Song } from '@app/data-types/song';

type SongPlayerProps = {
  song: Song;
  songs: Song[];
};

export default function SongPlayer({ songs, song }: SongPlayerProps) {
  return <p>SongId: {song.id}</p>;
}
