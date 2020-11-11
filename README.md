# SwiftlyJS

Swift offers a number of convenience variables and functions across its core types. When I went back to TypeScript after
a summer of Swift projects, I missed a lot of these conveniences. So I've added them to TypeScript and JavaScript.

## Installation

`npm i SwiftlyJS`

`yarn add SwiftlyJS`

## Usage

For Node and single-page applications, import SwiftlyJS at the start of your index file.

```js
// index.js
const SwiftlyJS = require('SwiftlyJS');

// rest of program...
```

```typescript
// index.ts
import 'SwiftlyJS';

// rest of program...
```

SwiftlyJS also comes bundled as minified and non-minified scripts. Add these in HTML to use them in subsequent
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

SwiftlyJS includes a number of convenience methods based on their Swift counterparts. Excluded methods include:

- Functionality around managing memory
- Functions that mutate primitive types, since [JS primitives are immutable](1) (e.x. `.toggle()` on booleans)
- Functions with an extremely close equivalent in JavaScript (e.x. `first(where: )` is just `find()`)

[1]: https://developer.mozilla.org/en-US/docs/Glossary/Primitive

### Features

## Q&A

**Can I still use `arr[0]`? Do I have to use `arr.first`?**

SwiftlyJS doesn't break any existing JS functionality, it just extends it. All existing JS methods and variables still
work.

**Why should I install a whole package just to write `arr.last`?**

If you don't think SwiftlyJS's extensions would help you, that's cool. I prefer writing
`arr.last` instead of `arr[arr.length - 1]`, but it's all personal preference. 

**I would like X Feature from Swift added.**

Help with features would be greatly appreciated. Please check out existing code to see the style and open a PR.
