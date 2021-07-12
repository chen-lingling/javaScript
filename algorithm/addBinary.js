/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let result = ''
    let ca = 0
    for(let i = a.length - 1, j = b.length-1; i >= 0 || j >= 0; i--, j--){
        let sum = ca
        sum = sum + (a[i] ? parseInt(a[i]) : 0 )
        sum = sum + (b[j] ? parseInt(b[j]) : 0 )
        ca = Math.floor(sum / 2)
        result += sum % 2
    }
    result = ca === 0 ? result : (result + ca)
    return result.split('').reverse().join('')
};

console.log(addBinary('1010', '1111'))
