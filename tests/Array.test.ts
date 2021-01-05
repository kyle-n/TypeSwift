import '../src';

const getExample = () => [1, 2, undefined, 4];

test('Array.first', () => {
  expect(getExample().first).toBe(1);
  expect([].first).toBe(undefined);
});

test('Array.last', () => {
  expect(getExample().last).toBe(4);
  expect([].last).toBe(undefined);
});

test('Array.isEmpty', () => {
  expect(getExample().isEmpty).toBe(false);
  expect([].isEmpty).toBe(true);
});

test('Array.randomElement()', () => {
  const num = [1];
  expect(num.randomElement()).toBe(1);
  expect([].randomElement()).toBe(undefined);
});

test('Array.insert()', () => {
  const example = getExample();
  example.insert(99, 0);
  expect(example).toEqual([99, 1, 2, undefined, 4]);
});

test('Array.remove()', () => {
  const example = getExample();
  example.remove(0);
  expect(example).toEqual([2, undefined, 4]);
});

test('Array.compactMap()', () => {
  const nonNullOrUndefinedElements = getExample().compactMap(elem => elem && elem * 2);
  expect(nonNullOrUndefinedElements).toEqual([2, 4, 8]);
});

test('Array.shuffled()', () => {
  const example = getExample();
  const cloned = example.shuffled();
  expect(example).not.toBe(cloned);
});

test('Array.swapAt()', () => {
  const example = getExample();
  example.swapAt(0, 1);
  expect(example).toEqual([2, 1, undefined, 4]);
});

test('Array.startIndex', () => {
  expect(getExample().startIndex).toBe(0);
  expect([].startIndex).toBe(undefined);
});

test('Array.endIndex', () => {
  expect(getExample().endIndex).toBe(3);
  expect([].endIndex).toBe(undefined);
});
