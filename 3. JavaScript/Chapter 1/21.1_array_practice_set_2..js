/*
Q.1 Find the Maximum Value:
Write a function to find the maximum value in an array of numbers without changing array.
*/

let arr = [24, 45, 23, 63, 45, 89, 45, 97, 4, 53];

//need to improve logic (Jugad :D)
const gretherNumber = (arr) => {
  let arr2 = [arr[0], arr[1]];
  for (let i = 0; i < arr.length; i++) {
    arr2.push(arr[i + 2]);
    if (arr2[i] > arr2[i + 1]) {
      arr2[i + 1] = arr2[i];
    }
  }

  return `Maximum value is ${arr2[arr2.length - 3]}`;
};

let bigger_number = gretherNumber(arr);

console.log(bigger_number);
console.log(arr)


