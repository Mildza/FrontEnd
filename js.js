// var fruits = ['Apple', 'Banana', "Lubence"];
// var pos = fruits.indexOf('Apple');
// console.log(pos);
//
// var remove = fruits.splice(pos, 1);
// console.log(fruits);
//
// var copy = fruits.slice();
// console.log(copy);
//
// var a = new Array(10);
// console.log(a);
//
// console.log(fruits.join('-'));
//
// var arr1 = [0, 1, 2];
// var arr2 = [3, 4, 5];
// arr1.push(...arr2);
// console.log(arr1);
//
// var sym = Symbol('foo');
// console.log(typeof sym);
// function createPony() {
//   var name = 'Rainbow Dash';
//   var color = 'blue';
//   return { name, color };
// }
// console.log(createPony());
//
// const httpOptions = { timeout: 2000, isCache: true };
// const { timeout, isCache } = httpOptions;
// console.log(timeout);
//
// function randomPonyInRace() {
// const pony = { name: 'Rainbow Dash' };
// const position = 2;
// // ...
// return { pony, position };
// }
// const { position, pony } = randomPonyInRace();
// console.log(position);

// function getPonies(size, page) {
// size = size || 10;
// page = page || 1;
// console.log(size, page);
// }
// getPonies(3);

function createPony() {
const name = 'Rainbow Dash';
const color = 'blue';
return { names: name, colors: color };
console.log(names, colors);

};
createPony();

function addPonies(...ponies) {
  var poniesInRace = [];
  for (let pony of ponies) {
    poniesInRace.push(pony);
  }
  console.log(poniesInRace);
};
addPonies(1, 2, 3, 4);

const ponyPrices = [12, 3, 4];
const minPrice = Math.min(...ponyPrices);
console.log(minPrice);
