const firstOccurrence = require('./firstOccurrence');
const lastOccurrence = require('./lastOccurrence');

function countOccurrences(arr, target) {
    let first = firstOccurrence(arr, target);
    if (first === -1) return 0;
    let last = lastOccurrence(arr, target);
    return last - first + 1;
}

module.exports = countOccurrences;
