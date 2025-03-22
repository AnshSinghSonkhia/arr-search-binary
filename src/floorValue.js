function floorValue(arr, target) {
    let left = 0, right = arr.length - 1, floor = -1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] <= target) {
            floor = arr[mid];
            left = mid + 1; // Try to find a larger but valid floor
        } else {
            right = mid - 1;
        }
    }
    return floor;
}

module.exports = floorValue;
