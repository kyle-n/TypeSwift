export {};

declare global {
  interface String {
    readonly isEmpty: boolean;
    readonly inserted: (substring: string, at: number) => string;
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
