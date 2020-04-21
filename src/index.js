

exports.cToF = function (c) {
    const res = c*9/5 + 32;
    return res.toFixed(2);
}

exports.fToC = function (f) {
    const res = (f-32) * 5/9
    return res.toFixed(2);
