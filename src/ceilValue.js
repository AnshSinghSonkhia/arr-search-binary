function ceilValue(arr, target) {
    let left = 0, right = arr.length - 1, ceil = -1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] >= target) {
            ceil = arr[mid];
            right = mid - 1; // Try to find a smaller but valid ceil
        } else {
            left = mid + 1;
        }
    }
    return ceil;
}

module.exports = ceilValue;
