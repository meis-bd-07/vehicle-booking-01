const getHexaOpacityColorCode = (color: string, opacity: number = 1) => {
  let hexa =  Math.round(opacity * 255).toString(16);
  hexa = hexa.length === 2 ? hexa : `0${hexa}`;
  return color + hexa;
};

export default getHexaOpacityColorCode;