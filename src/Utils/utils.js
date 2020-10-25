
export const sortlanguages = (arr, number = 10) => {

  const resultReduce = arr.reduce(function (acc, cur) {
    const name = cur.name
    if (!acc.hash[name]) {
      acc.hash[name] = { [name]: 1 };
      acc.map.set(acc.hash[name], 1);
      acc.result.push(acc.hash[name]);
    } else {
      acc.hash[name][name] += 1;
      acc.map.set(acc.hash[name], acc.hash[name][name]);
    }
    return acc;
  }, {
    hash: {},
    map: new Map(),
    result: []
  })

  number = resultReduce.length < number ? resultReduce.length : number

  return resultReduce.result.sort((a, b) => {
    return resultReduce.map.get(b) - resultReduce.map.get(a);
  }).slice(0, number)

}
