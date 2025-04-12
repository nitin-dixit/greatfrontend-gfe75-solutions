interface Array<T> {
  myReduce<U>(
    callbackFn: (
      accumulator: U,
      currentValue: T,
      currentIndex: number,
      array: T[]
    ) => U,
    initialValue?: U
  ): U;
}

Array.prototype.myReduce = function (callbackFn, initialValue) {
  if (Array.length > 0) {
    let accumulator;
    let currentValue;
    if (initialValue) {
      accumulator = initialValue;
      for (let i = 0; i < this.length; i++) {
        currentValue = this[i];
        accumulator = callbackFn(accumulator, currentValue, i, this);
      }
      return accumulator;
    } else {
      for (let i = 1; i < this.length; i++) {
        currentValue = this[i];
        accumulator = callbackFn(accumulator, currentValue, i, this);
      }
      return accumulator;
    }
  } else {
    throw new TypeError("Array should not be empty");
  }
};
