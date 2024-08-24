export type AlbumDetails = {
  title: string;
  year: number;
};

export type SongFileDetails = {
  coverArt: string;
  poster: string;
  audio: string;
};

export type SongDetails = {
  album: AlbumDetails;
  artist: string;
  title: string;
  files: SongFileDetails;
};

export type Song = {
  id: number;
  song: SongDetails;
  related?: number[];
};
