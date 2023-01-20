/*
not modify:
indexOf, lastIndexOf, includes
reduce
concat
slice
find, findIndex, findLast, findLastIndex

modify:
push, pop
unshift, shift
splice
reverse
fill
sort
*/
// "use strict";
// 1 - arrow
// const site = {
//   title: "My Site",
//   headers: ["Header1", "About us", "Contats", "Section title"],
//   showHeaders() {
//     this.headers.forEach((header) => {
//       console.log(this.title, "|", header);
//     });
//   },
// };

//2 - this in variable
// const site = {
//   title: "My Site",
//   headers: ["Header1", "About us", "Contats", "Section title"],
//   showHeaders() {
//     const self = this;
//     this.headers.forEach(function (header) {
//       console.log(self.title, "|", header);
//     });
//   },
// };

//3 - thisArgs in array method
// const site = {
//   title: "My Site",
//   headers: ["Header1", "About us", "Contats", "Section title"],
//   showHeaders() {
//     this.headers.forEach(logHeader, this);
//   },
// };
// function logHeader(header) {
//   console.log(this.title, '|', header);
// }

// const object = {
//   title: "123",
// };

// const site = {
//   title: "My Site",
//   headers: ["Header1", "About us", "Contats", "Section title"],
//   showHeaders() {
//     this.headers.forEach(logHeader.bind(this));
//   },
// };

// function logHeader(header) {
//   console.log(this.title, "|", header);
// }

// site.showHeaders();

// const sum = (num1, num2) => {
//   return num1 + num2;
// };

// const sum = (num1, num2) => num1 + num2;
// const getSquare = (n) => n * n;
// const logHi = () => console.log('hi');
// console.log(sum(2, 8));
// console.log(getSquare(6));
// logHi();

const f1 = function (...args) {
  console.log("f1 ", args);
};
const f2 = (...args) => {
  console.log("f2", args);
};
f1();
f2();

const multiply = (...numbers) =>
  numbers.length === 0
    ? null
    : numbers.reduce((accum, value) => accum * value);

const maxMin = (arr) => {
  const array = new Array();
  if (arr.length === 0) {
    return array;
  }
  let min = arr[0];
  let max = min;
  arr.forEach((element) => {
    if (element < min) {
      min = element;
    }
    if (element > max) {
      max = element;
    }
  });
  array.push(min, max);
  return array;
};

const maxMinSecondWay = (arr) => {
  const array = new Array();
  if (arr.length === 0) {
    return array;
  }
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  array.push(min, max);
  return array;
};

const askUser = (question) => {
  const userInput = confirm(question);
  if (userInput) {
    return 'ok'
  };
  return 'error';
}

console.log(multiply(1,2,3,4,5));

console.log(askUser('are you okay?'));