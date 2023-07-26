export const useBgColors = () => {
  const DEFAULT_BG_COLORS = ['#FFEFD8', '#EDE2FF', '#FFDFE1', '#E7F5D5', '#D8EEFF'];

  let index = 0;

  const getNext = () => {
    return DEFAULT_BG_COLORS[index++ % DEFAULT_BG_COLORS.length];
  };

  return getNext;
};
