export default function appendToEachArrayValue(array, appendString) {
  for (const idx of  array) {
    const j = array.indexOf[idx];
    array[j] = appendString + idx;
  }

  return array;
}
