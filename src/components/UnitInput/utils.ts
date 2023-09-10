export const removeDots = (string: string) => string.replace(/\./g, '');

/**
 * Remove all non-numeric characters from string
 * @param string 
 * @param opts 
 * @returns numeric string
 */
export const cleanNumericString = (string: string, opts: {
  integer?: boolean
  isPositive?: boolean
}) => {
  // remove invalid characters
  string = string.replace(/[^\d.-]/g, '');

  // Zeros: remove leading zeros
  string = string.replace(/^-0{1,}/g, '-0').replace(/^0{1,}/g, '0');

  // Dots:
  if (opts.integer) {
    string = removeDots(string);
  } else if (string.includes('.')) {
    // remove all dots except first one
    const index = string.indexOf('.');
    const [integer, decimal] = [string.substring(0, index), string.substring(index + 1)];

    string = integer + '.' + removeDots(decimal);
  }

  // Minuses:
  if (opts.isPositive) {
    // remove all minuses
    string = string.replace(/-/g, '');
  } else {
    // remove all minuses except leading one
    string = string.replace(/(.+)-/, '$1');
  }

  return string;
};
