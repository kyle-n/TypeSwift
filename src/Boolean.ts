export {};

declare global {
  // static properties (e.x. Boolean.random())
  interface BooleanConstructor {
    readonly random: () => boolean;
  }
}

Object.defineProperties(Boolean, {
  random: {
    get(this: Boolean) {
      return () => Math.random() > 0.5;
    }
  }
});
