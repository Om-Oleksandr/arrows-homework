function MyArrayPrototype() {
    this.push = function () {
      for (let index = 0; index < arguments.length; index++) {
        this[this.length++] = arguments[index];
      }
      return this.length;
    };
    this.pop = function () {
      if (this.length === 0) {
        return;
      }
      const lastItem = this[this.length - 1];
      delete this[--this.length];
      return lastItem;
    };
    this.reverse = function () {
      const newMyArray = new MyArray();
      for (let index = this.length - 1; index >= 0; index--) {
        newMyArray.push(this[index]);
      }
      for (let index = 0; index < this.length; index++) {
        this[index] = newMyArray[index];
      }
      return newMyArray;
    };
    this.forEach = function (func) {
      for (let index = 0; index < this.length; index++) {
        func(this[index], index, this);
        // this[this.length++];
      }
    };
  
    this.some = function (func) {
      for (let index = 0; index < this.length; index++) {
        if (func(this[index], index, this)) {
          return true;
        }
      }
      return false;
    };
    this.every = function (func) {
      for (let index = 0; index < this.length; index++) {
        if (func(this[index], index, this) === false) {
          return false;
        }
      }
      return true;
    };
  
    /* */
    this.concat = function () {
      const newArray = new MyArray();
      for (let index = 0; index < arguments.length; index++) {
        for (let j = 0; j < arguments[index].length; j++) {
          newArray.push(arguments[index][j]);
        }
      }
      return newArray;
    };
  }
  function MyArray() {
    this.length = 0;
    for (let index = 0; index < arguments.length; index++) {
      this.push(arguments[index]);
    }
  }
  
  MyArray.prototype = new MyArrayPrototype();
  const arr1 = new MyArray(1, 1, 3, 5, 7, 99);
  const arr2 = new MyArray(6, 6, 6, 6, 6, 6);
  const arr3 = arr1.concat(arr2);
  const arr4 = new Array(8, 9, 10, 11);
  const string = 'hello world';
  // console.log(Array.isArray(string));
  // console.log(
  //   arr2.every(function (value) {
  //     return value >= 5;
  //   })
  // );
  // console.log(arr2);
  // console.log(arr3);
  