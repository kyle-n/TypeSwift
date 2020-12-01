export {};

declare global {
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
