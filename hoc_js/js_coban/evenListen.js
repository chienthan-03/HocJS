let btn = document.querySelector('#btn2')
let input = document.querySelector('input[placeholder="Tìm Kiếm"]')

function viec1(e) {
    console.log('viec 1')
}

function viec2(e) {
    console.log('viec 2')
}

function viec3(e) {
    console.log('viec 3')
}
btn
btn.addEventListener('click', viec1)
btn.addEventListener('click', viec2)
btn.addEventListener('click', viec3)
setTimeout(function() {
        btn.removeEventListener('click', viec3)
    }, 3000)
    //dẽ dàng xóa đi lắng nghe 1 công việc tron 1 trường hợp cụ thể
function viecz(e) {
    console.log(e.target.value)
}
input.addEventListener('input', viecz)