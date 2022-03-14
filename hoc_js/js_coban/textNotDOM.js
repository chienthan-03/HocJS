// var a = document.querySelector('h2')
// a.innerText = 'abc'
// console.log(a.innerText) //trả phần giống như html truyền cũng vậy
// console.log(a.textContent) //trả phần giống như trên giao diện trên web ta nhìn thấy truyền cũng vậy
function hasNumber(a, b) {
    let result = false

    if (typeof(a) == Number || typeof(b) == Number) {
        result = true
    }

    return result
}
hasNumber(1, 2)
hasNumber('Hi guys', 10)