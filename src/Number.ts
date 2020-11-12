export {};

declare global {
  interface Number {
    readonly quotientAndRemainder: (dividingBy: number) => [number, number];
    readonly isMultiple: (of: number) => boolean;
    readonly zero: number;
    readonly isZero: boolean;
  }
}

Object.defineProperties(Number.prototype, {
  quotientAndRemainder: {
    get(this: Number) {
      return (dividingBy: number) => {
        const n: number = this.valueOf();
        const divisionResult = n / dividingBy;
        const quotient = Math.floor(divisionResult);
        const remainder = n - (quotient * dividingBy);
        return [quotient, remainder];
      };
    }
  },
  isMultiple: {
    get(this: Number) {
      return (of: number) => {
        const n: number = this.valueOf();
        return (n % of === 0);
      };
    }
  },
  zero: {
    get(this: Number) {
      return 0;
    }
  },
  isZero: {
    get(this: Number) {
      return this.valueOf() === this.zero;
    }
  }
});
