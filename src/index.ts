export {};

declare global {
  interface Array<T> {
    readonly first: T | undefined;
    readonly last: T | undefined;
    readonly count: number;
  }
}

Object.defineProperty(Array.prototype, 'first', {
  get(this: Array<any>): number | undefined {
    if (this.length > 0) return this[0];
    else return undefined;
  },
  configurable: true
});
