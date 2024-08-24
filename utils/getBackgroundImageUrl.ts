export const getBackgroundImageUrl = (backgroundImgUrl?: string) => {
  if (!backgroundImgUrl) {
    return undefined;
  }

  return `url(/assets/images/${backgroundImgUrl})`;
};
