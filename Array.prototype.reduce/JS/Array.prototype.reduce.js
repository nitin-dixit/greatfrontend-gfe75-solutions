/**
 * @template T, U
 * @param {(previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U} callbackFn
 * @param {U} [initialValue]
 * @return {Array<U>}
 */
Array.prototype.myReduce = function (callbackFn, initialValue) {
  if (this.length > 0) {
    let accumulator;
    let currentValue;
    let startIndex;

    if (initialValue !== undefined) {
      accumulator = initialValue;
      startIndex = 0;
    } else {
      if (this.length === 1) return this[0];
      accumulator = this[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
      if (i in this) {
        //check if index exists in array, for ignoring holes in array (sparse array [1,2,,3])
        currentValue = this[i];
        accumulator = callbackFn(accumulator, currentValue, i, this);
      }
    }

    return accumulator;
  } else if (initialValue !== undefined) {
    return initialValue;
  } else {
    throw new TypeError("Array should not be empty");
  }
};

console.log([1, 2, 3].myReduce((prev, curr) => prev + curr)); // Output: 6
console.log([1, 2, 3].myReduce((prev, curr) => prev + curr, 10)); // Output: 16
console.log([].myReduce((prev, curr) => prev + curr, 5)); // Output: 5
console.log([1, 2, , 3].myReduce((prev, curr) => prev + curr, 5)); // Output: 5
