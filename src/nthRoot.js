function nthRoot(n, k, precision = 6) {
    if (n < 0 && k % 2 === 0) throw new Error("Even root of a negative number is not real.");
    
    let left = 0, right = Math.max(1, n), mid;
    let eps = Math.pow(10, - (precision + 2)); // Increase precision slightly to ensure correctness
    
    while (right - left > eps) {
        mid = (left + right) / 2;
        if (Math.pow(mid, k) < n) left = mid;
        else right = mid;
    }
    
    return parseFloat(((left + right) / 2).toFixed(precision));
}

module.exports = nthRoot;
