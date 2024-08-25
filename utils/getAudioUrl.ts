export const getAudioUrl = (audioUrl?: string) => {
  if (!audioUrl) {
    return undefined;
  }

  return `/assets/audio/${audioUrl}`;
};
