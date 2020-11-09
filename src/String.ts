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

Object.defineProperty(String.prototype, 'isEmpty', {
  get(this: String) {
    return this.valueOf().length === 0;
  }
});

// @ts-ignore
String.prototype['inserted'] = function (substring: string, at: number) {
  return this.slice(0, at) + substring + this.slice(at + 1);
}

Object.defineProperty(String.prototype, 'first', {
  get(this: String) {
    if (this.length > 0) return this[0];
    else return undefined;
  }
});

Object.defineProperty(String.prototype, 'last', {
  get(this: String) {
    if (this.length > 0) return this[this.length - 1];
    else return undefined;
  }
});

// @ts-ignore
String.prototype['randomElement'] = function () {
  if (this.length < 1) return undefined;
  const index = Math.floor(Math.random() * this.length);
  return this[index];
}

// @ts-ignore
String.prototype['map'] = function (callback: (char: string, index?: number, parent?: string) => string) {
  let mappedString = '';
  const s = this.valueOf();
  for (let i = 0; i < this.length; i++) {
    mappedString += callback(s[i]);
  }
  return mappedString;
}

// @ts-ignore
String.prototype['compactMap'] = function (callback: (char: string, index?: number, parent?: string) => string | undefined) {
  let mappedString = '';
  const s = this.valueOf();
  for (let i = 0; i < this.length; i++) {
    const mappedChar = callback(s[i]);
    if (typeof mappedChar === 'string') mappedString += mappedChar;
  }
  return mappedString;
}

// @ts-ignore
String.prototype['forEach'] = function (callback: (char: string, index?: number, parent?: string) => void) {
  const s: string = this.valueOf();
  for (let i = 0; i < this.length; i++) {
    callback(s[i]);
  }
}

Object.defineProperty(String.prototype, 'startIndex', {
  get(this: String) {
    if (this.length > 0) return 0;
    else return undefined;
  }
});

Object.defineProperty(String.prototype, 'endIndex', {
  get(this: String) {
    if (this.length > 0) return this.length - 1;
    else return undefined;
  }
});

// @ts-ignore
String.prototype['sorted'] = function () {
  return this.split('').sort().join('');
}

// @ts-ignore
String.prototype['reversed'] = function () {
  let reversed = '';
  for (let i = this.endIndex ?? -1; i >= 0; i--) {
    reversed += this[i];
  }
  return reversed;
}

// @ts-ignore
String.prototype['shuffled'] = function () {
  return this.split('').shuffled().join('')
}
