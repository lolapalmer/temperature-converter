

exports.cToF = function (c) {
    return parseFloat((c*9/5)+32)
}

exports.fToC = function (f) {
    return parseFloat((f-32)*5/9)
}
