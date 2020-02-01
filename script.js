function addTo(number) {
  return function addTwoNumbers(other) {
    console.log(`${number} + ${other} = `, number + other);
  };
}

const addToThree = addTo(3);
const addToOne = addTo(1);

console.dir(addToThree);
console.dir(addToOne);

addToThree(1); // 4
addToOne(5); // 6
