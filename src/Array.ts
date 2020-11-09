export {};

declare global {
  interface Array<T> {
    readonly first: T | undefined;
    readonly last: T | undefined;
    readonly isEmpty: boolean;
    readonly randomElement: () => T | undefined;
    readonly insert: (element: T, at: number) => void;
    readonly remove: (at: number) => T | undefined;
    readonly compactMap: (callback: (element: T) => any | undefined) => Array<any>;
    readonly shuffle: () => void;
    readonly shuffled: () => Array<T>;
    readonly swapAt: (indexA: number, indexB: number) => void;
    readonly startIndex: number | undefined;
    readonly endIndex: number | undefined;
  }
}

Object.defineProperty(Array.prototype, 'first', {
  get(this: Array<any>) {
    if (this.length > 0) return this[0];
    else return undefined;
  }
});

Object.defineProperty(Array.prototype, 'last', {
  get(this: Array<any>) {
    if (this.length > 0) return this[this.length - 1];
    else return undefined;
  }
});

Object.defineProperty(Array.prototype, 'isEmpty', {
  get(this: Array<any>) {
    return this.length < 1;
  }
});

// @ts-ignore
Array.prototype['randomElement'] = function () {
  if (this.isEmpty) return undefined;
  const index = Math.floor(Math.random() * this.length);
  return this[index];
};

// @ts-ignore
Array.prototype['insert'] = function (element: T, at: number) {
  this.splice(at, 0, element);
}

// @ts-ignore
Array.prototype['remove'] = function (at: number) {
  this.splice(at, 1);
}

// @ts-ignore
Array.prototype['compactMap'] = function (callback: (element) => any | undefined) {
  const results: Array<any> = [];
  for (let i = 0; i < this.length; i++) {
    const result = callback(this[i]);
    if (result !== undefined && result !== null) results.push(result);
  }
  return results;
}

// @ts-ignore
Array.prototype['shuffled'] = function () {
  const clone = this.slice();
  clone.shuffle();
  return clone;
}

// @ts-ignore
Array.prototype['shuffle'] = function () {
  this.sort(() => Math.random() - 0.5);
}

// @ts-ignore
Array.prototype['swapAt'] = function (indexA: number, indexB: number) {
  const temp = this[indexB];
  this[indexB] = this[indexA];
  this[indexA] = temp;
}

Object.defineProperty(Array.prototype, 'startIndex', {
  get(this: Array<any>) {
    const indices = Object.keys(this);
    if (indices.isEmpty || typeof indices.first !== 'string') return undefined;
    const startIndex: number = parseInt(indices.first);
    if (isNaN(startIndex)) return undefined;
    else return startIndex;
  }
});

Object.defineProperty(Array.prototype, 'endIndex', {
  get(this: Array<any>) {
    const indices = Object.keys(this);
    if (indices.isEmpty || typeof indices.last !== 'string') return undefined;
    const endIndex: number = parseInt(indices.last);
    if (isNaN(endIndex)) return undefined;
    else return endIndex;
  }
});
