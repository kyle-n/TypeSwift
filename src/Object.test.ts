import './index';

const getEmpty = () => ({});
const getObject = () => ({one: 1, two: 2});

test('Object.isEmpty', () => {
  expect(getEmpty().isEmpty).toBe(true);
  expect(getObject().isEmpty).toBe(false);
});

test('Object.count', () => {
  expect(getEmpty().count).toBe(0);
  expect(getObject().count).toBe(2);
});

test('Object.first', () => {
  expect(getEmpty().first).toBe(undefined);
  expect(getObject().first).toBe(1);
});

test('Object.randomElement()', () => {
  expect(getEmpty().randomElement()).toBe(undefined);
  expect(typeof getObject().randomElement()).toBe('number');
});

test('Object.merge()', () => {
  const obj = getObject();
  obj.merge({two: 'two', three: 'three'}, (objA, objB) => objB);
  expect(obj).toEqual({one: 1, two: 'two', three: 'three'});
});

test('Object.merged()', () => {
  const obj = getObject();
  const merged = obj.merging({two: 'two', three: 'three'}, (objA, objB) => objB);
  expect(merged).toEqual({one: 1, two: 'two', three: 'three'});
  expect(obj).not.toBe(merged);
});

test('Object.removeValue', () => {
  const obj = getObject();
  obj.removeValue('one');
  expect(obj).toEqual({two: 2});
});

test('Object.removeAll()', () => {
  const obj = getObject();
  obj.removeAll();
  expect(obj).toEqual({});
});

test('Object.contains()', () => {
  const obj: any = getObject();
  const hasOne = obj.contains((key: string, val: number) => {
    return key === 'one' && val === 1;
  });
  const hasFive = obj.contains((key: string, val: number) => {
    return key === 'five' && val === 5;
  });
  expect(hasOne).toBe(true);
  expect(hasFive).toBe(false);
});

test('Object.allSatisfy()', () => {
  const obj = getObject();
  const allNumbers = obj.allSatisfy((key, val) => {
    return typeof val === 'number';
  });
  const allBooleans = obj.allSatisfy((key, val) => {
    return typeof val === 'boolean';
  });
  expect(allNumbers).toBe(true);
  expect(allBooleans).toBe(false);
});
