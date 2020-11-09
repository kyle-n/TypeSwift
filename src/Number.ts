export {};

declare global {
  interface Number {
    readonly quotientAndRemainder: (dividingBy: number) => [quotient: number, remainder: number];
    readonly isMultiple: (of: number) => boolean;
    readonly zero: number;
    readonly isZero: boolean;
  }
}

// @ts-ignore
Number.prototype['quotientAndRemainder'] = function (dividingBy: number) {
  const n: number = this.valueOf();
  const divisionResult = n / dividingBy;
  const quotient = Math.floor(divisionResult);
  const remainder = n - (quotient * dividingBy);
  return [quotient, remainder];
}

// @ts-ignore
Number.prototype['isMultiple'] = function (of: number) {
  const n: number = this.valueOf();
  return (n % of === 0);
}

Object.defineProperty(Number, 'zero', {
  get() {
    return 0;
  }
});

Object.defineProperty(Number.prototype, 'isZero', {
  get(this: Number) {
    return this.valueOf() === 0;
  }
});
