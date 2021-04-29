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
```

```typescript
```

```typescript
```

```typescript
```

```typescript
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
