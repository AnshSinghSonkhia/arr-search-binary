const findRotationIndex = require('./findRotationIndex');

function minInRotatedSortedArray(arr) {
    return arr[findRotationIndex(arr)];
}

module.exports = minInRotatedSortedArray;
