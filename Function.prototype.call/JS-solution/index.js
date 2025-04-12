/**
 * @param {any} thisArg
 * @param {...*} argArray
 * @return {any}
 */
Function.prototype.myCall = function (thisArg, ...argArray) {
    //check if function is callable
    if (typeof this !== "function") {
      throw new TypeError("myCall must be called on a function");
    }
  
    //assign globalThis if thisArg is undefined or null
    thisArg = thisArg ?? globalThis;
  
    //create unique key for function
    const funKey = Symbol();
  
    //add function as method to thisArg
    thisArg[funKey] = this;
  
    //execute the function with new context
    const result = thisArg[funKey](...argArray);
  
    //cleanup: delele temporary method attached to thisArg
    delete thisArg[funKey];
  
    return result;
  };
  