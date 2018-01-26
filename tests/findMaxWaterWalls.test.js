const { waterWalls } = require('../waterWalls.js');

describe('waterWalls', () => {
  it('returns an array', () => {
    expect.assertions(1);
    expect(waterWalls([1, 2])).toBeInstanceOf(Array);
  });

  it('returns empty if walls are a downward slope', () => {
    expect.assertions(1);
    expect(waterWalls([6, 4, 3, 2, 1])).toEqual([]);
  });

  it('returns empty if walls are an upward slope', () => {
    expect.assertions(1);
    expect(waterWalls([1, 2, 3, 5, 9])).toEqual([]);
  });

  it('returns empty if walls are a peak', () => {
    expect.assertions(1);
    expect(waterWalls([1, 2, 9, 5, 4])).toEqual([]);
  });

  it('returns empty if walls are a plain', () => {
    expect.assertions(1);
    expect(waterWalls([5, 5, 5, 5])).toEqual([]);
  });

  it('returns a largest cavity if walls are a valley', () => {
    expect.assertions(1);
    expect(waterWalls([5, 2, 1, 2, 5])).toEqual([1, 5, 10]);
  });

  it('returns a largest cavity if a plateau dips ', () => {
    expect.assertions(1);
    expect(waterWalls([1, 2, 3, 6, 5, 5, 6, 1])).toEqual([4, 7, 2]);
  });

  it('returns a largest cavity if downward slope ramps', () => {
    expect.assertions(1);
    expect(waterWalls([9, 8, 7, 6, 3, 5, 1])).toEqual([4, 6, 2]);
  });

  it('returns a largest cavity if valley ascends', () => {
    expect.assertions(1);
    expect(waterWalls([1, 4, 2, 3, 4, 5, 6])).toEqual([2, 5, 3]);
  });

  it('returns a largest cavity if a peak rests between two valleys', () => {
    expect.assertions(1);
    expect(waterWalls([1, 4, 2, 3, 4, 5, 6, 0, 1, 4])).toEqual([7, 10, 7]);
  });

})