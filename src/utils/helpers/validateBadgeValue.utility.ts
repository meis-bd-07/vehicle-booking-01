export const validateBadgeValue = (value: string) => {
  try{
    if (value === '9+') return value;
    const strValue: number = Number(value);
    if (strValue > 9) return '9+';
    if (strValue <= 9) return `${strValue}`;
    return value
  }
  catch { return "" }
};