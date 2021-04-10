export const convertToGB = (value: number) => {
  return Number((value / 1000).toFixed(2)) || 0;
};
