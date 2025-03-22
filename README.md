# arr-search-binary

Efficient binary search utilities for sorted arrays, including variations like first & last occurrence, element count, and floor value search.


<code><img height="30" src="https://img.shields.io/badge/NPM-111111?style=for-the-badge&logo=npm&logoColor=#c63635"></code>  <code><img height="30" src="https://img.shields.io/badge/JavaScript-111111?style=for-the-badge&logo=javascript&logoColor=F7DF1E"></code>


## Installation
Install the package via npm:

```sh
npm i arr-search-binary
```

--- 

# Usage

```js
const asb = require('arr-search-binary');

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(asb.binarySearch(arr, 9));  // Output: 8

// OR use it like this:
console.log(asb.binarySearch([1, 2, 3, 4, 5], 3));  // Output: 2
```

---

# API Reference

| Function                          | Description                                                      | Parameters                                      | Returns                                      | Example                                           |
|-----------------------------------|------------------------------------------------------------------|-------------------------------------------------|----------------------------------------------|---------------------------------------------------|
| binarySearch(arr, target)         | Standard binary search to find an element in a sorted array.     | arr (sorted array), target (number to find)     | Index of target or -1 if not found.          | binarySearch([1, 2, 3, 4, 5], 3) → 2              |
| firstOccurrence(arr, target)      | Finds the first occurrence of target in a sorted array.          | arr (sorted array), target (number to find)     | Index of first occurrence or -1 if not found.| firstOccurrence([1, 2, 2, 3], 2) → 1              |
| lastOccurrence(arr, target)       | Finds the last occurrence of target in a sorted array.           | arr (sorted array), target (number to find)     | Index of last occurrence or -1 if not found. | lastOccurrence([1, 2, 2, 3], 2) → 2               |
| countOccurrences(arr, target)     | Counts occurrences of target in a sorted array.                  | arr (sorted array), target (number to count)    | Number of times target appears.              | countOccurrences([1, 2, 2, 3], 2) → 2             |
| floorValue(arr, target)           | Finds the largest element ≤ target.                              | arr (sorted array), target (number to find floor of) | Floor value or null if none exists.          | floorValue([1, 3, 5, 7], 6) → 5                   |
| ceilValue(arr, target)            | Finds the smallest element ≥ target.                             | arr (sorted array), target (number to find ceil of)  | Ceil value or null if none exists.           | ceilValue([1, 3, 5, 7], 6) → 7                    |
| searchInRotatedSortedArray(arr, target) | Finds target in a rotated sorted array.                         | arr (rotated sorted array), target (number to find) | Index of target or -1 if not found.          | searchInRotatedSortedArray([4, 5, 6, 7, 0, 1, 2], 0) → 4 |
| findRotationIndex(arr)            | Finds the index where a sorted array was rotated.                | arr (rotated sorted array)                      | Rotation index.                              | findRotationIndex([4, 5, 6, 7, 0, 1, 2]) → 4      |
| minInRotatedSortedArray(arr)      | Finds the minimum element in a rotated sorted array.             | arr (rotated sorted array)                      | Minimum element.                             | minInRotatedSortedArray([4, 5, 6, 7, 0, 1, 2]) → 0|
| maxInRotatedSortedArray(arr)      | Finds the maximum element in a rotated sorted array.             | arr (rotated sorted array)                      | Maximum element.                             | maxInRotatedSortedArray([4, 5, 6, 7, 0, 1, 2]) → 7|
| findPeakElement(arr)              | Finds a peak element where an element is greater than its neighbors. | arr (array)                                     | A peak element.                              | findPeakElement([1, 3, 4, 3, 2]) → 4              |
| findMountainPeak(arr)             | Finds the peak in a mountain (bitonic) array.                    | arr (mountain array)                            | Index of the peak.                           | findMountainPeak([1, 3, 5, 4, 2]) → 2             |
| searchInMountainArray(arr, target)| Searches for target in a mountain array.                         | arr (mountain array), target (number to find)   | Index of target or -1 if not found.          | searchInMountainArray([1, 3, 5, 4, 2], 4) → 3     |
| squareRoot(n, precision)          | Finds the square root of n using binary search.                  | n (number), precision (decimal places, default: 6) | Approximate square root.                     | squareRoot(9, 6) → 3.000000                       |
| nthRoot(n, k, precision)          | Finds the kth root of n using binary search.                     | n (number), k (root degree), precision (decimal places, default: 6) | Approximate kth root.                        | nthRoot(27, 3, 6) → 3.000000                      |
| minInSortedRotatedDuplicates(arr) | Finds the minimum in a sorted, rotated array with duplicates.    | arr (rotated sorted array with duplicates)      | Minimum element.                             | minInSortedRotatedDuplicates([3, 3, 1, 3]) → 1     |
