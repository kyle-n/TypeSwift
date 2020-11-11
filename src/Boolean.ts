export {};

declare global {
  // static property: Boolean.random()
  interface Boolean {
  }
}

Object.defineProperties(Boolean, {
  random: {
    get() {
      return (): boolean => Math.random() >= 0.5;
    }
  }
});
