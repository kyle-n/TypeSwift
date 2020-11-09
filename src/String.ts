export {};

declare global {
  interface String {
    readonly isEmpty: boolean;
    readonly inserted: (substring: string, at: number) => string;
    readonly first: string | undefined;
    readonly last: string | undefined;
    readonly randomElement: () => string | undefined;
  }
}

Object.defineProperty(String.prototype, 'isEmpty', {
  get(this: String) {
    return this.valueOf().length === 0;
  }
});

// @ts-ignore
String.prototype['inserted'] = function (substring: string, at: number) {
  return this.slice(0, at) + substring + this.slice(at + 1);
}

Object.defineProperty(String.prototype, 'first', {
  get(this: String) {
    if (this.length > 0) return this[0];
    else return undefined;
  }
});

Object.defineProperty(String.prototype, 'last', {
  get(this: String) {
    if (this.length > 0) return this[this.length - 1];
    else return undefined;
  }
});

// @ts-ignore
String.prototype['randomElement'] = function () {
  if (this.length < 1) return undefined;
  const index = Math.floor(Math.random() * this.length);
  return this[index];
}
