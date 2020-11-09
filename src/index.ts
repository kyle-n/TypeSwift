export {};

declare global {
  interface Array<T> {
    readonly first: T | undefined;
    readonly last: T | undefined;
    readonly isEmpty: boolean;
    readonly randomElement: () => T | undefined;
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
