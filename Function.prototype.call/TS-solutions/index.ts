interface Function {
  myCall(this: Function, thisArg: unknown, ...argArray: unknown[]): unknown;
}

Function.prototype.myCall = function (thisArg, ...argArray) {
  if (typeof this !== "function") {
    throw new TypeError("myCall must be called on a function");
  }

  thisArg = thisArg ?? globalThis;

  const fnKey = Symbol();
  (thisArg as Record<symbol, unknown>)[fnKey] = this;

  const result = ((thisArg as Record<symbol, unknown>)[fnKey] as Function)(
    ...argArray
  );

  delete (thisArg as Record<symbol, unknown>)[fnKey];

  return result;
};
