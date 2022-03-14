//PreventDefault //ngăn chặn hành vi mặc định

let aElement = document.querySelectorAll('a')
    // console.log(aElement)
for (let i = 0; i < aElement.length; i++) {
    aElement[i].onclick = function(e) {
        // console.log(e.target.href)
        if (!e.target.href.startsWith('http://facebook.com')) {
            e.preventDefault();
        }
    }
}

let valueInput
let inputElements = document.querySelector('input[placeholder="Tìm Kiếm"]')
inputElements.onchange = function(e) {
    console.log(valueInput = e.target.value)
}
document.querySelector('ul').onclick = function(e) {
    console.log(e.target)
}
document.querySelector('ul').onmousedown = function(e) {
        e.preventDefault();
    }
    //StopPropagation //ngăn chặn hành vi nổi bọt

document.querySelector('#amen').onclick = function(e) {
    console.log('DIV')
}
document.querySelector('button').onclick = function(e) {
    console.log('siu thoát!!')
    e.stopPropagation();
}