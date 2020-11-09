interface Array<T> {
  readonly first: T | undefined;
  readonly last: T | undefined;
}

Object.defineProperty(Array.prototype, 'first', {
  get(): any | undefined {
    if (this.length > 0) return this[0];
    else return undefined;
  }
});

const x: string[] = ['1', '2'];
const y: string[] = [];
console.log(x.first, y.first);
