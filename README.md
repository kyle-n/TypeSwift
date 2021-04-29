# TypeSwift

Swift offers a number of convenience variables and functions across its core types. When I went back to TypeScript after
a summer of Swift projects, I missed a lot of these conveniences. So I've added them to TypeScript and JavaScript.

## Installation

`npm install typeswift`

`yarn add typeswift`

## Usage

For Node and single-page applications, import TypeSwift at the start of your index file.

```js
// index.js
const TypeSwift = require('typeswift');

// rest of program...
```

```typescript
// index.ts
import 'typeswift';

// rest of program...
```

TypeSwift also comes bundled as minified and non-minified scripts. Add one of these in HTML to use them in subsequent
`<script>` tags.

```html
<body>
...
</body>
<script src="/path/to/TypeSwift/_bundles/typeswift.min.js"></script>
<script>
var numbers = ['one', 'two', 'three'];
console.log(numbers.first) // 'one'
console.log(numbers.endIndex) // 2
</script>
```

Once TypeSwift is loaded, you can begin using its extensions to JS's base classes: 

```typescript
const nums = ['one', 'two', 'three'];
console.log(nums.first);          // 'one'
console.log(nums[0]);             // 'one'
console.log(nums.last)            // 'three'
console.log(nums.randomElement()) // 'two'

const objectsMayHaveId = [{id: 1}, {}, {id: 3}];
const ids = objectsMayHaveId.compactMap(object => object.id);
console.log(ids);                 // [1, 3]

const objectA = {one: 1, two: 2};
const objectB = {two: 'two', three: 'three'};
const merged = objectA.merging(objectB, (objA, objB) => objB);
console.log(merged);              // {one: 1, two: 'two', three: 'three'}

const letters = 'abc';
console.log(letters.reversed())   // 'cba'
console.log(letters.shuffled())   // 'cab'
console.log(letters.endIndex)     // 2
```

## Features

TypeSwift includes a number of convenience methods based on their Swift counterparts. It does not include:

- Functionality around managing memory
- Functions that mutate primitive types, since [JS primitives are immutable][1] (e.x. you can't `.toggle()` booleans)
- Functions with an extremely close equivalent in JavaScript (e.x. `first(where: )` is just `find()`)

[1]: https://developer.mozilla.org/en-US/docs/Glossary/Primitive

### API

```typescript
type UniquingKeysCallback = (valueOne: any, valueTwo: any) => any;
type KeyedObject = {[key: string]: any};
type KeyValueAssertionCallback = <E>(key: string | number, value: E) => boolean;

declare global {
  interface Object {
    readonly isEmpty: boolean;
    readonly count: number;
    readonly first: any;
    readonly randomElement: () => any;
    readonly merge: (objectToMerge: KeyedObject, uniquingKeysWith: UniquingKeysCallback) => void;
    readonly merging: (objectToMerge: KeyedObject, uniquingKeysWith: UniquingKeysCallback) => KeyedObject;
    readonly removeValue: (forKey: string | number) => void;
    readonly removeAll: () => void;
    readonly contains: (where: KeyValueAssertionCallback) => boolean;
    readonly allSatisfy: (callback: KeyValueAssertionCallback) => boolean;
  }
}
```

```typescript
declare global {
  interface Array<T> {
    readonly first: T | undefined;
    readonly last: T | undefined;
    readonly isEmpty: boolean;
    readonly randomElement: () => T | undefined;
    readonly insert: (element: T, at: number) => void;
    readonly remove: (at: number) => T | undefined;
    readonly compactMap: (callback: (element: T, index?: number, parent?: Array<T>) => any | undefined) => Array<any>;
    readonly shuffle: () => void;
    readonly shuffled: () => Array<T>;
    readonly swapAt: (indexA: number, indexB: number) => void;
    readonly startIndex: number | undefined;
    readonly endIndex: number | undefined;
  }
}
```

```typescript
declare global {
  interface String {
    readonly isEmpty: boolean;
    readonly inserted: (substring: string, at: number) => string;
    readonly first: string | undefined;
    readonly last: string | undefined;
    readonly randomElement: () => string | undefined;
    readonly map: (callback: (char: string, index?: number, parent?: string) => string) => string;
    readonly compactMap: (callback: (char: string, index?: number, parent?: string) => string | undefined) => string;
    readonly forEach: (callback: (char: string, index?: number, parent?: string) => void) => void;
    readonly reduce: <R>(callback: (result: R, char: string, index?: number) => R, initialValue: R) => R;
    readonly sorted: () => string;
    readonly reversed: () => string;
    readonly shuffled: () => string;
    readonly startIndex: number | undefined;
    readonly endIndex: number | undefined;
    readonly prefix: (callback: (char: string, index?: number, parent?: string) => boolean) => string;
  }
}
```

```typescript
declare global {
  interface Number {
    readonly quotientAndRemainderOf: (dividingBy: number) => [number, number];
    readonly isMultipleOf: (number: number) => boolean;
    readonly isZero: boolean;
  }

  // static properties (e.x. Number.zero)
  interface NumberConstructor {
    readonly zero: 0;
  }
}
```

```typescript
declare global {
  // static properties (e.x. Boolean.random())
  interface BooleanConstructor {
    readonly random: () => boolean;
  }
}
```

## Q&A

**Can I still use `arr[0]`? Do I have to use `arr.first`?**

TypeSwift doesn't break any existing JS functionality, it just extends it. All existing JS methods and variables will
still work.

**Why should I install a whole package just to write `arr.last`?**

If you don't think TypeSwift's extensions would help you, that's cool. I prefer writing
`arr.last` instead of `arr[arr.length - 1]`, but it's all personal preference. 

**I would like X feature from Swift added.**

Help with features would be greatly appreciated. Please check out existing code to see the style and [open a PR][2].

[2]: https://github.com/kyle-n/TypeSwift/pulls

## Building

- Clone the repository
- `cd TypeSwift && npm install`
- Install GNU `sed` ([macOS instructions](https://gist.github.com/andre3k1/e3a1a7133fded5de5a9ee99c87c6fa0d#gistcomment-3082272))
- When saving a new version, run `build/set-version.sh x.x.x`
