const findDuplicates = (numberList) => {
  const result = new Set();
  const hashSet = new Set();

  numberList.forEach((item) => {
    if (hashSet.has(item)) {
      result.add(item);
    } else {
      hashSet.add(item);
    }
  });
  return result;
};

const testSet = [3, 4, 5, 1, 4, 5, 8, 4, 6];
// console.log(findDuplicates(testSet));
