import './index';

test('Number.quotientAndRemainder()', () => {
  const n = 42;
  expect(n.quotientAndRemainderOf(10)).toEqual([4, 2]);
});

test('Number.isMultipleOf()', () => {
  const n = 10;
  expect(n.isMultipleOf(2)).toBe(true);
  expect(n.isMultipleOf(3)).toBe(false);
});

test('Number.isZero', () => {
  const one = 1;
  const zero = 0;
  expect(one.isZero).toBe(false);
  expect(zero.isZero).toBe(true);
});
