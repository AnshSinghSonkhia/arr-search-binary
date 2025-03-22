const findMountainPeak = require('./findMountainPeak');

function binarySearch(arr, target, left, right, ascending = true) {
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        if (ascending ? arr[mid] < target : arr[mid] > target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

function searchInMountainArray(arr, target) {
    let peak = findMountainPeak(arr);
    
    // Search in the left increasing part
    let leftResult = binarySearch(arr, target, 0, peak, true);
    if (leftResult !== -1) return leftResult;
    
    // Search in the right decreasing part
    return binarySearch(arr, target, peak + 1, arr.length - 1, false);
}

module.exports = searchInMountainArray;
