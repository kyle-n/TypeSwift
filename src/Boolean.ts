export {};

declare global {
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
