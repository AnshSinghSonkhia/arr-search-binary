function squareRoot(n, precision = 6) {
    if (n < 0) throw new Error("Negative numbers don't have real square roots.");
    
    let left = 0, right = Math.max(1, n), mid;
    
    while (right - left > Math.pow(10, -precision)) {
        mid = (left + right) / 2;
        if (mid * mid < n) left = mid;
        else right = mid;
    }
    
    return parseFloat(mid.toFixed(precision));
}

module.exports = squareRoot;
