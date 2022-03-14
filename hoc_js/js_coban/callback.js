function myFuntion(ass, ass2) {
    ass('Taka', 'joune') //truyền dữ liệu cho ass cũng là truyền tham chiếu cho myCallback
    ass2('Saw')
}

function myCallback(value, value2) {
    console.log('Assassin: ', value, value2)
}
myFuntion(myCallback, myCallback) //lúc này myCallback là ass



var title = [
    'home',
    'story',
    'messenger',
    'finmyProfile',
]
Array.prototype.map2 = function(Callback) {
        var output = [],
            arrayLength = this.length
        for (var i = 0; i < arrayLength; i++) {
            var main = Callback(this[i], i)
            output.push(main)
        }
        return output
    }
    //Callback là funtion của map2 (callback)
var html = title.map2(function(title, index) {
    return ` <a>${title}</a>`
})
console.log(html.join(''))
var htmls = title.map(function(title) {
    return `<a>${title}</a>`
})
console.log(htmls.join(''))