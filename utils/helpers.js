export const toCap = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const formatNumber = (number) => {
  return number.slice(0, 3) + "-" + number.slice(3, 6) + "-" + number.slice(6);
};

export const join = (...classes) => classes.join(" ").trim();
