'use strict';

/**
 * @param {int} integer - Integer to decompose
 * @return {[int, int]} - [coefficient, exponent]
 */
exports.intexp = function (integer) {
    if (!Number.isSafeInteger(integer)) {
        throw Error('Unsupported Value for Decomposition');
    }

    // Bitwise magic:
    // The only bit == 1 in both a number AND its two's complement
    // corresponds to the largest power of 2 it is divisible by.
    const largestPowerOfTwoDivisor = integer & -integer;

    return largestPowerOfTwoDivisor > 0 // JS doesn't deal well when the number is divisible by 2^(>=31)
        ? [integer / largestPowerOfTwoDivisor, Math.log2(largestPowerOfTwoDivisor)]
        : _fallbackDecompose(integer);
};

/**
 * @param {int} coefficient
 * @param {int} exponent
 * @return {int}
 */
exports.ldexp = function (coefficient, exponent) {
    return coefficient * Math.pow(2, exponent);
};

/**
 * Very rarely an integer will be *too* divisible by two (2^(>=31)).
 * This iterative method still works, though.
 */
function _fallbackDecompose(int) {
    let coefficient = int, exponent = 0;
    while (coefficient % 2 === 0 && coefficient > 0) {
        coefficient /= 2;
        ++exponent;
    }
    return [coefficient, exponent];
}
