import ct, { rgbToCSS, convert, toVal, IConvert } from '../index';

describe('color-this', () => {

  it('should export the ct function by default', () => {

    expect(ct).toBeDefined();
  });

  it('should return any 3 three strings as a number less than 256', () => {
    expect(toVal(9, 9, 9)).toBeLessThan(256);
  });

  it('should return a join if give three strings joined < 256', () => {
    expect(toVal(1, 9, 9)).toEqual(199);
  });

  describe('convert()', () => {
    let val: IConvert;

    beforeEach(() => {
      val = convert('test');
    });

    it('should return and object with rgb values', () => {
      const expected = expect.objectContaining({
        red: expect.any(Number),
        green: expect.any(Number),
        blue: expect.any(Number),
      });

      expect(val).toEqual(expected);
    });

    it('should return values less than 256', () => {
      expect(val.red).toBeLessThan(256);
      expect(val.green).toBeLessThan(256);
      expect(val.blue).toBeLessThan(256);
    });
  });

  it('should return a pretty string for rgb values', () => {
    expect(rgbToCSS(255, 255, 255)).toBe('rgb(255, 255, 255)');
  });

});
