function filter(array, filterFn) {
  let newArray = []
  for (let index = 0; index < array.length; index++) {
    const element = array[index]
    if (filterFn(element)) {
      newArray[newArray.length] = element
    }
  }
  return newArray
}

function filterWithOptions(
  array,
  {
    filterNull = true,
    filterUndefined = true,
    filterZero = true,
    filterEmptyString = false,
  } = {},
) {
  return filter(
    array,
    element =>
      !(
        (filterNull && element === null) ||
        (filterUndefined && element === undefined) ||
        (filterZero && element === 0) ||
        (filterEmptyString && element === '')
      ),
  )
}

const testArray = [0, 1, undefined, 2, null, 3, 'four', '']
console.log(filterWithOptions(testArray, {}))
