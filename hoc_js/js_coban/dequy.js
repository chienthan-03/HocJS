// function deQuy(a = 10) {
//     if (a >= 1) {
//         console.log(a)
//         return deQuy(a - 1)
//     }
//     return a
// }
// deQuy()
// var arr = ['js', 'PHP', 'c']

// function loop(start, end, cb) {

//     if (start < end) {
//         cb(start)
//         return loop(start + 1, end, cb)
//     }
// }
// loop(0, arr.length, function(index) {
//     console.log('index: ', index, ':', arr[index])
// })

function giaithua(a) {
    if (a > 0) {

        return a * giaithua(a - 1)
    }
    return 1
}
console.log(giaithua(5))


// var b = 4
// c = 1
// for (var i = b; i > 0;) {
//     c *= i
//     i--
// }
// console.log(c)