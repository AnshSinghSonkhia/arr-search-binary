function minInSortedRotatedDuplicates(arr) {
    let left = 0, right = arr.length - 1;
    
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        
        if (arr[mid] > arr[right]) left = mid + 1;
        else if (arr[mid] < arr[right]) right = mid;
        else right--; // Handle duplicates by reducing search space
        
    }
    
    return arr[left];
}

module.exports = minInSortedRotatedDuplicates;
