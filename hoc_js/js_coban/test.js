// var courses = [{
//             Name: 'java',
//             Coin: 4,
//         },
//         {
//             Name: 'js',
//             Coin: 3,
//         },
//         {
//             Name: 'c++',
//             Coin: 3,
//         },
//         {
//             Name: 'c#',
//             Coin: 3,
//         },
//         {
//             Name: 'PHP',
//             Coin: 3,
//         },
//     ]
//     //             FOREACH
//     // courses.forEach(function(course, index) {
//     //         console.log(index, course)
//     //     })
//     //     //forEach bằng callback
//     // Array.prototype.forEach2 = function(Callback) {
//     //     var length = this.length
//     //     for (var i = 0; i < length; i++) {
//     //         Callback(this[i], i)
//     //     }
//     // }
//     // courses.forEach2(function(course, index) {
//     //     console.log(index, course)
//     // })



// // //            MAP()
// // var htmls = courses.map(function(course) {
// //     return `<a>${course}</a>`
// // })
// // console.log(htmls.join(' '))
// //     // map bằng callback

// // Array.prototype.map2 = function(callback) {
// //     var output = [],
// //         length = this.length
// //     for (var i = 1; i < length; i++) {
// //         var result = callback(this[i])
// //         output.push(result)
// //     }
// //     return output
// // }
// // var html2 = courses.map2(function(course) {
// //     return `<h2>${course}</2>`
// // })
// // console.log(html2.join(' '))
// // //           FILTER()
// // var filter = courses.filter(function(course) {
// //     return course.Coin === 7
// // })
// // console.log(filter)
// //     //filter2 bằng callback
// // Array.prototype.filter2 = function(callback) {
// //     var output = [],
// //         length = this.length
// //     for (var i = 0; i < length; ++i) {
// //         var result = callback(this[i])
// //         if (result) {
// //             output.push([this[i]])
// //         }
// //     }
// //     return output
// // }
// // var result = courses.filter2(function(course) {
// //     return course.Coin === 7
// // })
// // console.log(result)
// // //              SOME()
// // var some = courses.some(function(course) {
// //     return course.Name === 'js'
// // })
// // console.log(some)
// //     //some bằng callback
// // Array.prototype.some2 = function(callback) {
// //     length = this.length
// //     for (var i = 0; i < length; ++i) {
// //         if (callback(this[i])) {
// //             return true
// //         }
// //     }
// //     return false
// // }
// // var result2 = courses.some2(function(course) {
// //     return course.Name === 'js'
// // })
// // console.log(result2)
// //            EVERY()
// var every = courses.every(function(course) {
//     return course.Coin === 4
// })
// console.log(every)
// Array.prototype.every2 = function(callback) {
//     var output = true,
//         length = this.length
//     for (var i = 0; i < length; ++i) {
//         var result = callback(this[i])
//         if (!result) {
//             output = false
//             break;
//         }

//     }
//     return output
// }
// var result3 = courses.every2(function(course) {
//     return course.Coin === 4
// })
// console.log(result3)
//