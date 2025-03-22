function firstOccurrence(arr, target) {
    let left = 0, right = arr.length - 1, result = -1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            result = mid;
            right = mid - 1; // Keep searching in the left half
        } else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return result;
}

module.exports = firstOccurrence;