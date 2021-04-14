export const convertToGB = (value: number) => {
  return Number((value / 1024).toFixed(2)) || 0;
};

export const formatMBShortNumber = (value: number = 0) => {
  const UNITS = ['bytes', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const MB = 1024 * 1024;
  let byteValue = value * MB;
  let i = 0;

  while (byteValue >= 1024 && ++i) {
    byteValue = byteValue / 1024;
  }
  return byteValue > 0 ? byteValue.toFixed(1) + ' ' + UNITS[i] : '0';
};
