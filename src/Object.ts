export {};

declare global {
  interface Object {
    readonly isEmpty: boolean;
    readonly count: number;
    readonly first: any;
    readonly randomElement: () => any;
    readonly merge: (objectToMerge: Object, uniquingKeysWith: (valueOne: any, valueTwo: any) => any) => Object;
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
    get(this: Object) {
      type KeyedObject = {[key: string]: any};
      return (objectToMerge: KeyedObject, uniquingKeysWith: (valueOne: any, valueTwo: any) => any): Object => {
        const merged = {...this} as any;
        Object.keys(objectToMerge).forEach(key => {
          if (merged.hasOwnProperty(key)) merged[key] = uniquingKeysWith(merged[key], objectToMerge[key] as any);
        });
        return merged;
      };
    }
  }
});
