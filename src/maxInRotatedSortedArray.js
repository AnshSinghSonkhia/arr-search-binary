function maxInRotatedSortedArray(arr) {
    let left = 0, right = arr.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] > arr[right]) left = mid + 1;
        else right = mid;
    }
    return arr[(left - 1 + arr.length) % arr.length]; // Get the previous index
}

module.exports = maxInRotatedSortedArray;
