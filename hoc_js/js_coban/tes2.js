var courses = [{
        Name: 'java',
        Coin: 5,
    },
    {
        Name: 'js',
        Coin: 3,
    },
    {
        Name: 'c++',
        Coin: 3,
    },
    {
        Name: 'c#',
        Coin: 3,
    },
    {
        Name: 'PHP',
        Coin: 3,
    },
]
Array.prototype.foreach2 = function(callback) {
    let result
    for (let index in this) {
        if (this.hasOwnProperty(index)) {
            result = callback(this[index], index)
        }
    }
    return result
}
courses.foreach2(function(course, index) {
        console.log(index, course)
    })
    // Array.prototype.some2 = function(callback) {
    //     for (let i in this) {
    //         if (this.hasOwnProperty(i)) {
    //             if (callback(this[i], index, this)) {
    //                 return true
    //             }
    //         }
    //     }
    //     return false
    // }
    // let a = courses.some2(function(course) {
    //     return course.Name === 'PHP'
    // })
    // console.log(a)
    // Array.prototype.every2 = function(callback) {
    //     for (let i in this) {
    //         if (this.hasOwnProperty(i)) {
    //             if (!callback(this[i])) {
    //                 return false
    //             }
    //         }
    //     }
    //     return true
    // }
    // let b = courses.every2(function(course) {
    //     return course.Coin === 3
    // })
    // console.log(b)
Array.prototype.fill2 = function(callback) {
    let output = []
    for (let i in this) {
        if (this.hasOwnProperty(i)) {
            if (callback(this[i])) {
                output.push(this[i])
                break
            }
        }
    }
    return output
}
let x = courses.fill2(function(course) {
    return course.Coin === 3
})
console.log(x)