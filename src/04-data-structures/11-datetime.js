function slice(array, from, to) {
  let slicedArray = [];

  let startIndex = arguments.length ? from : 0;

  let length = to ? to : array.length;

  for (let i = startIndex; i < length; i++) {
    slicedArray.push(array[i]);
  }

  return slicedArray;
}

let newArr = ["jopa", "krokodil", "molnd", "head", "body", "nigga"];

console.log(slice(newArr));
