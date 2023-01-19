import { describe, expect, test } from 'vitest';
import { generateMatrix } from '../src/utils';

describe('generateMatrix()', () => {
  test('should generate', () => {
    const grid = generateMatrix(5, 5, 'f');
    expect(grid.length).toBe(5);
    expect(grid[0].length).toBe(5);
    expect(grid[0][0]).toBe('f');
  });
});