export {};

type UniquingKeysCallback = (valueOne: any, valueTwo: any) => any;
type KeyedObject = {[key: string]: any};

declare global {
  interface Object {
    readonly isEmpty: boolean;
    readonly count: number;
    readonly first: any;
    readonly randomElement: () => any;
    readonly merge: (objectToMerge: KeyedObject, uniquingKeysWith: UniquingKeysCallback) => void;
    readonly merging: (objectToMerge: KeyedObject, uniquingKeysWith: UniquingKeysCallback) => KeyedObject;
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
  merged: {
    get(this: Object) {
      return (objectToMerge: KeyedObject, uniquingKeysWith: UniquingKeysCallback): KeyedObject => {
        const merged = {...this};
        merged.merge(objectToMerge, uniquingKeysWith);
        return merged;
      };
    }
  }
});
