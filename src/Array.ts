export {};

declare global {
  interface Array<T> {
    readonly first: T | undefined;
    readonly last: T | undefined;
    readonly isEmpty: boolean;
    readonly randomElement: () => T | undefined;
    readonly insert: (element: T, at: number) => void;
    readonly remove: (at: number) => T | undefined;
    readonly compactMap: (callback: (element: T, index?: number, parent?: Array<T>) => any | undefined) => Array<any>;
    readonly shuffle: () => void;
    readonly shuffled: () => Array<T>;
    readonly swapAt: (indexA: number, indexB: number) => void;
    readonly startIndex: number | undefined;
    readonly endIndex: number | undefined;
  }
}

Object.defineProperties(Array.prototype, {
  first: {
    get<T>(this: Array<T>) {
      if (this.length > 0) return this[0];
      else return undefined;
    }
  },
  last: {
    get<T>(this: Array<T>) {
      if (this.length > 0) return this[this.length - 1];
      else return undefined;
    }
  },
  isEmpty: {
    get<T>(this: Array<T>) {
      return this.length < 1;
    }
  },
  randomElement: {
    get<T>(this: Array<T>) {
      return () => {
        if (this.isEmpty) return undefined;
        const index = Math.floor(Math.random() * this.length);
        return this[index];
      };
    }
  },
  insert: {
    get<T>(this: Array<T>) {
      return (element: any, at: number) => {
        this.splice(at, 0, element);
      }
    }
  },
  remove: {
    get<T>(this: Array<T>) {
      return (at: number) => {
        this.splice(at, 1);
      }
    }
  },
  compactMap: {
    get<T>(this: Array<T>) {
      return (callback: (element: T, index?: number, parent?: Array<T>) => any | undefined): Array<any> => {
        const results: Array<T> = [];
        for (let i = 0; i < this.length; i++) {
          const result = callback(this[i], i, this);
          if (result !== undefined && result !== null) results.push(result);
        }
        return results;
      };
    }
  },
  shuffled: {
    get<T>(this: Array<T>) {
      return () => {
        const clone = this.slice();
        clone.shuffle();
        return clone;
      };
    }
  },
  shuffle: {
    get<T>(this: Array<T>) {
      return () => {
        for (let i = this.endIndex ?? -1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          let tmp = this[i];
          this[i] = this[j];
          this[j] = tmp;
        }
      };
    }
  },
  swapAt: {
    get<T>(this: Array<T>) {
      return (indexA: number, indexB: number) => {
        const temp = this[indexB];
        this[indexB] = this[indexA];
        this[indexA] = temp;
      };
    }
  },
  startIndex: {
    get<T>(this: Array<T>) {
      const indices = Object.keys(this);
      if (indices.isEmpty || typeof indices.first !== 'string') return undefined;
      const startIndex: number = parseInt(indices.first);
      if (isNaN(startIndex)) return undefined;
      else return startIndex;
    }
  },
  endIndex: {
    get<T>(this: Array<T>) {
      const indices = Object.keys(this);
      if (indices.isEmpty || typeof indices.last !== 'string') return undefined;
      const endIndex: number = parseInt(indices.last);
      if (isNaN(endIndex)) return undefined;
      else return endIndex;
    }
  }
});
