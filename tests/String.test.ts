import '../src';

const getEmpty = () => '';
const getABC = () => 'abc';

test('String.isEmpty', () => {
  expect(getEmpty().isEmpty).toBe(true);
  expect(getABC().isEmpty).toBe(false);
});

test('String.inserted()', () => {
  expect(getABC().inserted('x', 0)).toBe('xabc');
});

test('String.first', () => {
  expect(getEmpty().first).toBe(undefined);
  expect(getABC().first).toBe('a');
});

test('String.last', () => {
  expect(getEmpty().last).toBe(undefined);
  expect(getABC().last).toBe('c');
});

test('String.randomElement()', () => {
  expect(getEmpty().randomElement()).toBe(undefined);
  expect(typeof getABC().randomElement()).toBe('string');
});

test('String.map()', () => {
  const mapped = getABC().map(() => 'q');
  expect(mapped).toBe('qqq');
});

test('String.compactMap()', () => {
  const mapped = getABC().compactMap(letter => {
    return letter === 'a' ? 'q' : undefined;
  });
  expect(mapped).toBe('q');
});

test('String.forEach()', () => {
  let i = 0;
  getABC().forEach(() => i++);
  expect(i).toBe(getABC().length);
});

test('String.reduce()', () => {
  const aCount = getABC().reduce((numberOfAs, letter) => {
    return letter === 'a' ? numberOfAs + 1 : numberOfAs;
  }, 0);
  expect(aCount).toBe(1);
});

test('String.sorted()', () => {
  const shuffled = 'cab';
  expect(shuffled.sorted()).toBe('abc');
});

test('String.reversed()', () => {
  expect(getABC().reversed()).toBe('cba');
});

test('String.shuffled() exists', () => {
  expect(getABC().shuffled).not.toBe(undefined);
});

test('String.startIndex', () => {
  expect(getEmpty().startIndex).toBe(undefined);
  expect(getABC().startIndex).toBe(0);
});

test('String.endIndex', () => {
  expect(getEmpty().endIndex).toBe(undefined);
  expect(getABC().endIndex).toBe(2);
});

test('String.prefix', () => {
  const letters = 'aabbcc';
  const leadingAs = letters.prefix(char => char === 'a');
  expect(leadingAs.length).toBe(2);
});
