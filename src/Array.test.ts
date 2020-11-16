import './index';

const getExample = () => [1, 2, undefined, 4];

test('Array.first', () => {
  expect(getExample().first).toBe(1);
});
