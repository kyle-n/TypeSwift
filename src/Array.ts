export {};

declare global {
  interface Array<T> {
    readonly first: T | undefined;
    readonly last: T | undefined;
    readonly isEmpty: boolean;
    readonly randomElement: () => T | undefined;
    readonly insert: (element: T, at: number) => void;
    readonly remove: (at: number) => T | undefined;
    readonly compactMap: () => Array<any>;
    readonly shuffle: () => void;
    readonly shuffled: () => Array<T>;
    readonly swapAt: (indexA: number, indexB: number) => void;
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
Array.prototype['compactMap'] = function (callback: (element: any) => any | undefined) {
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
