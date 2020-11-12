# SwiftlyJS

Swift offers a number of convenience variables and functions across its core types. When I went back to TypeScript after
a summer of Swift projects, I missed a lot of these conveniences. So I've added them to TypeScript and JavaScript.

## Installation

`npm install swiftly-js`

`yarn add swiftly-js`

## Usage

For Node and single-page applications, import SwiftlyJS at the start of your index file.

```js
// index.js
const SwiftlyJS = require('swiftly-js');

// rest of program...
```

```typescript
// index.ts
import 'swiftly-js';

// rest of program...
```

SwiftlyJS also comes bundled as minified and non-minified scripts. Add one of these in HTML to use them in subsequent
`<script>` tags.

```html
<body>
...
</body>
<script src="/path/to/SwiftlyJS/_bundles/swiftlyjs.min.js"></script>
<script>
var numbers = ['one', 'two', 'three'];
console.log(numbers.first) // 'one'
console.log(numbers.endIndex) // 2
</script>
```

## Included and Not Included

SwiftlyJS includes a number of convenience methods based on their Swift counterparts. It does not include:

- Functionality around managing memory
- Functions that mutate primitive types, since [JS primitives are immutable][1] (e.x. you can't `.toggle()` booleans)
- Functions with an extremely close equivalent in JavaScript (e.x. `first(where: )` is just `find()`)

[1]: https://developer.mozilla.org/en-US/docs/Glossary/Primitive

### Features

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
    readonly quotientAndRemainder: (dividingBy: number) => [number, number];
    readonly isMultiple: (of: number) => boolean;
    readonly zero: number;
    readonly isZero: boolean;
  }
}
```

```typescript
declare global {
  // static property: Boolean.random()
  interface Boolean {
  }
}
```

## Q&A

**Can I still use `arr[0]`? Do I have to use `arr.first`?**

SwiftlyJS doesn't break any existing JS functionality, it just extends it. All existing JS methods and variables will
still work.

**Why should I install a whole package just to write `arr.last`?**

If you don't think SwiftlyJS's extensions would help you, that's cool. I prefer writing
`arr.last` instead of `arr[arr.length - 1]`, but it's all personal preference. 

**I would like X feature from Swift added.**

Help with features would be greatly appreciated. Please check out existing code to see the style and [open a PR][2].

[2]: https://github.com/kyle-n/SwiftlyJS/pulls
