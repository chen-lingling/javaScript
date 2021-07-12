/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i-- ) {
        digits[i] += 1
        digits[i] %= 10
        if(digits[i] !== 0) return digits
    }
    return [1, ...digits]
};
console.log(plusOne([0]))
