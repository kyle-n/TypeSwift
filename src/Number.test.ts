import './index';

test('Number.prototype.quotientAndRemainder()', () => {
  const n = 42;
  expect(n.quotientAndRemainderOf(10)).toEqual([4, 2]);
});

test('Number.prototype.isMultipleOf()', () => {
  const n = 10;
  expect(n.isMultipleOf(2)).toBe(true);
  expect(n.isMultipleOf(3)).toBe(false);
});

test('Number.prototype.isZero', () => {
  const one = 1;
  const zero = 0;
  expect(one.isZero).toBe(false);
  expect(zero.isZero).toBe(true);
});

test('Number.zero', () => {
  expect(Number.zero).toBe(0);
});
