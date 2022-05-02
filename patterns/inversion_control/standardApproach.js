// let's pretend that Array.prototype.filter does not exist
function filter(
  array,
  {
    filterNull = true,
    filterUndefined = true,
    filterZero = false,
    filterEmptyString = false,
  } = {},
) {
  let newArray = []
  for (let index = 0; index < array.length; index++) {
    const element = array[index]
    if (
      (filterNull && element === null) ||
      (filterUndefined && element === undefined) ||
      (filterZero && element === 0) ||
      (filterEmptyString && element === '')
    ) {
      continue
    }

    newArray[newArray.length] = element
  }
  return newArray
}

console.log(filter([0, 1, undefined, 2, null, 3, 'four', '']))
// [0, 1, 2, 3, 'four', '']

console.log(
  filter([0, 1, undefined, 2, null, 3, 'four', ''], {filterNull: false}),
)
// [0, 1, 2, null, 3, 'four', '']

console.log(
  filter([0, 1, undefined, 2, null, 3, 'four', ''], {filterUndefined: false}),
)
// [0, 1, 2, undefined, 3, 'four', '']

console.log(
  filter([0, 1, undefined, 2, null, 3, 'four', ''], {filterZero: true}),
)
// [1, 2, 3, 'four', '']

console.log(
  filter([0, 1, undefined, 2, null, 3, 'four', ''], {filterEmptyString: true}),
)
// [0, 1, 2, 3, 'four']
