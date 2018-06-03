export interface IConvert {
  red: number;
  green: number;
  blue: number;
}

/**
 * Convert a string to an RGB CSS value
 * @param {String} str - Given string to be converted
 * @param {Number} salt - A number that affects the range of colors output
 * @return {string} rgb string css e.g. `rgb(255, 100, 50)`
 */
export default function main(str: string, salt?: number): string {
  const rgb = convert(str, salt);
  return rgbToCSS(rgb.red, rgb.green, rgb.blue);
}

/**
 * Convert a string into RGB values
 * @param {String|Number|Boolean} str - An input string
 * @param {Number} salt - Random variation of color
 * @returns {Object} rgbObject - A color object
 */
export function convert(str: string | number | boolean, salt: number = -5): IConvert {
  let output = '';
  str = str.toString();

  for (let i = str.length - 1; i >= 0; i--) {
    const charAt = str.charCodeAt(i).toString().split('');

    for (let x = charAt.length - 1; x >= 0; x--) {
      let y = +charAt[x] - salt;
      if (y < 4) {
        y += 4;
      }
      output = output + Math.pow(y * Math.round(y / 2), 8).toString(10);
    }
  }

  if (output.length % 3 === 0) {
    output = output.split('').reverse().join('');
  }

  const redOffset = Math.floor(output.length / 3);
  const greenOffset = redOffset * 2;
  const blueOffset = output.length - 3;

  const red = toVal(+output[redOffset], +output[redOffset + 1], +output[redOffset + 2]);
  const green = toVal(+output[greenOffset], +output[greenOffset + 1], +output[greenOffset + 2]);
  const blue = toVal(+output[blueOffset], +output[blueOffset + 1], +output[blueOffset + 2]);

  return {red, green, blue};
}

/**
 * Generate a number between 0-255 with the given 3 numbers.
 * @param {number} a - first part
 * @param {number} b - second part
 * @param {number} c - third part
 * @return {number} Number between 0-255
 */
export function toVal(a: number, b: number, c: number): number {
  let num = +('' + a + b + c);
  while (num > 255) {
    num = Math.round(num / 5);
  }
  return num;
}

/**
 * This method returns a css value
 * @param {number} red - value between 0-255
 * @param {number} green - value between 0-255
 * @param {number} blue - value between 0-255
 * @return {string} Returns a valid css color value `rgb(50, 50, 50)`
 */
export function rgbToCSS(red: number, green: number, blue: number) {
  return `rgb(${ red }, ${ green }, ${ blue })`;
}
