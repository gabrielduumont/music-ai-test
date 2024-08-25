import type { NextApiRequest, NextApiResponse } from 'next';
import payload from '@app/server-payload.json';
import { Song } from '@app/data-types/song';

type ResponseData = {
  songs: Song[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ songs: payload.songs });
}
