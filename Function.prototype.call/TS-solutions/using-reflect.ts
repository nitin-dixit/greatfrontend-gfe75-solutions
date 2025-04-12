interface Function {
  myCall(this: Function, thisArg: unknown, ...argArray: unknown[]): unknown;
}

Function.prototype.myCall = function (thisArg, ...argArray) {
  if (typeof this !== "function") {
    throw new TypeError("myCall must be called on a function");
  }

  return Reflect.apply(this, thisArg ?? globalThis, argArray);
};
