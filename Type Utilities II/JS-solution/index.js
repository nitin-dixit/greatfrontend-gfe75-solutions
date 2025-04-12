export function isArray(value) {
  return Array.isArray(value);
}

export function isFunction(value) {
  return typeof value === "function";
}

export function isObject(value) {
  //check if not null and typeof is object
  return (
    value !== null && (typeof value === "object" || typeof value === "function")
  );
}

export function isPlainObject(value) {
  return (
    Object.prototype.toString.call(value) === "[object Object]" &&
    (Object.getPrototypeOf(value) === Object.prototype ||
      Object.getPrototypeOf(value) === null)
  );
}
