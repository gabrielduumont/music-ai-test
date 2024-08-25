import type { NextApiRequest, NextApiResponse } from 'next';
import payload from '@app/server-payload.json';
import { Song } from '@app/data-types/song';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Song>
) {
  const { id } = req.query;
  if (!id) {
    res.status(404);
    return;
  }

  const song = payload.songs.find((song) => `${song.id}` === `${id}`);
  if (!song) {
    res.status(404);
    return;
  }

  res.status(200).json({ ...song });
}
