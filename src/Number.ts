export {};

declare global {
  interface Number {
    readonly quotientAndRemainderOf: (dividingBy: number) => [number, number];
    readonly isMultipleOf: (number: number) => boolean;
    readonly isZero: boolean;
  }
}

Object.defineProperties(Number.prototype, {
  quotientAndRemainderOf: {
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
  isMultipleOf: {
    get(this: Number) {
      return (of: number) => {
        const n: number = this.valueOf();
        return (n % of === 0);
      };
    }
  },
  isZero: {
    get(this: Number) {
      return this.valueOf() === 0;
    }
  }
});
