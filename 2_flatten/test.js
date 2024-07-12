function flatten(){
    // your code
}


flatten(1); // 1
flatten([]); // []
flatten([1, 2, [3, 4, [], 5]]); // [1, 2, 3, 4, 5]
flatten({}); // {}
flatten({
  a: null,
  b: undefined,
  c: {
    d: true,
    e: 4,
    f: {},
    g: {
      h: 5
    },
  },
}); // {a: null, b: undefined, d: true, e: 4, h: 5}
flatten([1, 2, [3], {
  a: 4,
  b: {
    c: 5,
    d: [6, 7, [8, 9, [10]]],
  },
}]) // [1, 2, 3, {a: 4, c: 5, d: [6, 7, 8, 9, 10]}]