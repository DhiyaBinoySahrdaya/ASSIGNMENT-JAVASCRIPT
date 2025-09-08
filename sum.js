// 2.Write a function that takes an array of numbers and returns the sum.

function sumArray(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}
const myNumbers = [1, 2, 3, 4, 5];
const result = sumArray(myNumbers);
console.log(result); 

const anotherArray = [10, 20, 30];
console.log(sumArray(anotherArray)); 

const emptyArray = [10,20,30,40,50];

console.log(sumArray(emptyArray)); 
