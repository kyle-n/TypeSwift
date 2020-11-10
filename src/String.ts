export {};

declare global {
  interface String {
    readonly isEmpty: boolean;
    readonly inserted: (substring: string, at: number) => string;
    readonly first: string | undefined;
    readonly last: string | undefined;
    readonly randomElement: () => string | undefined;
    readonly map: (callback: (char: string, index?: number, parent?: string) => string) => string;
    readonly compactMap: (callback: (char: string, index?: number, parent?: string) => string | undefined) => string;
    readonly forEach: (callback: (char: string, index?: number, parent?: string) => void) => void;
    readonly sorted: () => string;
    readonly reversed: () => string;
    readonly shuffled: () => string;
    readonly startIndex: number | undefined;
    readonly endIndex: number | undefined;
  }
}

Object.defineProperties(String.prototype, {
  isEmpty: {
    get(this: String) {
      return this.valueOf().length === 0;
    }
  },
  inserted: {
    get(this: String) {
      return (substring: string, at: number) => {
        return this.slice(0, at) + substring + this.slice(at);
      };
    }
  },
  first: {
    get(this: String) {
      if (this.length > 0) return this[0];
      else return undefined;
    }
  },
  last: {
    get(this: String) {
      if (this.length > 0) return this[this.length - 1];
      else return undefined;
    }
  },
  randomElement: {
    get(this: String) {
      return () => {
        if (this.length < 1) return undefined;
        const index = Math.floor(Math.random() * this.length);
        return this[index];
      };
    }
  },
  map: {
    get(this: String) {
      return (callback: (char: string, index?: number, parent?: string) => string) => {
        let mappedString = '';
        const s = this.valueOf();
        for (let i = 0; i < this.length; i++) {
          mappedString += callback(s[i]);
        }
        return mappedString;
      };
    }
  },
  compactMap: {
    get(this: String) {
      return (callback: (char: string, index?: number, parent?: string) => string | undefined) => {
        let mappedString = '';
        const s = this.valueOf();
        for (let i = 0; i < this.length; i++) {
          const mappedChar = callback(s[i]);
          if (typeof mappedChar === 'string') mappedString += mappedChar;
        }
        return mappedString;
      };
    }
  },
  forEach: {
    get(this: String) {
      return (callback: (char: string, index?: number, parent?: string) => void) => {
        const s: string = this.valueOf();
        for (let i = 0; i < this.length; i++) {
          callback(s[i]);
        }
      };
    }
  },
  startIndex: {
    get(this: String) {
      if (this.length > 0) return 0;
      else return undefined;
    }
  },
  endIndex: {
    get(this: String) {
      if (this.length > 0) return this.length - 1;
      else return undefined;
    }
  },
  sorted: {
    get(this: String) {
      return () => {
        return this.split('').sort().join('');
      };
    }
  },
  reversed: {
    get(this: String) {
      return () => {
        let reversed = '';
        for (let i = this.endIndex ?? -1; i >= 0; i--) {
          reversed += this[i];
        }
        return reversed;
      }
    }
  },
  shuffled: {
    get(this: String) {
      return () => {
        return this.split('').shuffled().join('')
      }
    }
  }
});
