// Write a function to find the largest number in an array.
function findLargestNumber(numbers) {
  
  if (numbers.length === 0) {
    return undefined; 
  }

  let largest = numbers[0]; 

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i]; 
    }
  }

  return largest;
}


console.log(findLargestNumber([1, 5, 3, 9, 2]));     
console.log(findLargestNumber([10, 2, 8, 4]));     
console.log(findLargestNumber([-5, -1, -10]));   
console.log(findLargestNumber([7]));                 
console.log(findLargestNumber([]));

