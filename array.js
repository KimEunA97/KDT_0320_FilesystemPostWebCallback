const exampleArray = [5, 2, 7, 3, 9, 324, 66, 43];

function minValue(array, callback) {
  let min = array[4];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
      console.log("stage:", i);
      console.log("array:", array[i])
      console.log("min:", min);
    }
  }
  return callback(min);
}
const minValueExample = minValue(exampleArray, function (result) {
  console.log("result:", result);
  return result * 2;
})