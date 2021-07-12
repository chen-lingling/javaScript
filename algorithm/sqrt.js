/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let left = 0
    let right = x
    let result = -1
    while(left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (mid * mid <= x) {
            result = mid
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return result
};

console.log(mySqrt(32))
