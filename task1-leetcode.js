/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
    return n % 4 != 0;
};

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    var result = 0;

    var xbits = x.toString(2);
    var ybits = y.toString(2);

    // Left-pad the bits with 0's so they align.
    var diff = Math.abs(xbits.length - ybits.length);
    if (xbits.length < ybits.length) {
        for (var i=0; i<diff; i++) {
            xbits = '0' + xbits;
        }
    }
    else if (ybits.length < xbits.length) {
        for (var i=0; i<diff; i++) {
            ybits = '0' + ybits;
        }
    }

    for (var i=0; i<xbits.length; i++) {
        if (xbits[i] !== ybits[i]) {
            result++;
        }
    }

    return result;
};