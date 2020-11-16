export {};

type UniquingKeysCallback = (valueOne: any, valueTwo: any) => any;
type KeyedObject = {[key: string]: any};
type KeyValueAssertionCallback = <E>(key: string | number, value: E) => boolean;

declare global {
  interface Object {
    readonly isEmpty: boolean;
    readonly count: number;
    readonly first: any;
    readonly randomElement: () => any;
    readonly merge: (objectToMerge: KeyedObject, uniquingKeysWith: UniquingKeysCallback) => void;
    readonly merging: (objectToMerge: KeyedObject, uniquingKeysWith: UniquingKeysCallback) => KeyedObject;
    readonly removeValue: (forKey: string | number) => void;
    readonly removeAll: () => void;
    readonly contains: (where: KeyValueAssertionCallback) => boolean;
    readonly allSatisfy: (callback: KeyValueAssertionCallback) => boolean;
  }
}

Object.defineProperties(Object.prototype, {
  isEmpty: {
    get(this: Object) {
      return Object.keys(this).length === 0;
    }
  },
  count: {
    get(this: Object) {
      return Object.keys(this).length;
    }
  },
  first: {
    get(this: Object) {
      return Object.values(this)[0];
    }
  },
  randomElement: {
    get(this: Object) {
      return () => {
        const index = Math.floor(Math.random() * Object.values(this).length);
        return Object.values(this)[index];
      };
    }
  },
  merge: {
    get(this: KeyedObject) {
      return (objectToMerge: KeyedObject, uniquingKeysWith: UniquingKeysCallback): void => {
        Object.keys(objectToMerge).forEach(key => {
          if (this.hasOwnProperty(key)) this[key] = uniquingKeysWith(this[key], objectToMerge[key]);
          else this[key] = objectToMerge[key];
        });
      };
    }
  },
  merging: {
    get(this: Object) {
      return (objectToMerge: KeyedObject, uniquingKeysWith: UniquingKeysCallback): KeyedObject => {
        const merged = {...this};
        merged.merge(objectToMerge, uniquingKeysWith);
        return merged;
      };
    }
  },
  removeValue: {
    get(this: any) {
      return (forKey: string | number): void => {
        delete this[forKey];
      };
    }
  },
  removeAll: {
    get(this: KeyedObject) {
      return (): void => {
        Object.keys(this).forEach(key => delete this[key]);
      };
    }
  },
  contains: {
    get(this: KeyedObject) {
      return (where: KeyValueAssertionCallback): boolean => {
        for (const key in this) {
          if (where(key, this[key])) return true;
        }
        return false;
      };
    }
  },
  allSatisfy: {
    get(this: KeyedObject) {
      return (callback: KeyValueAssertionCallback): boolean => {
        for (const key in this) {
          if (!callback(key, this[key])) return false;
        }
        return true;
      };
    }
  }
});
