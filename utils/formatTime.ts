export const formatTime = (time: number) => {
  if (!time || isNaN(parseFloat(`${time}`))) {
    return '0:00';
  }

  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};
