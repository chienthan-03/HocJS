alert('hello world')
var fullName = 'luan dep trai';
var dai = '18cm';
console.log(fullName); //hiện thông báo trong console
console.error(dai); //hiện lỗi
confirm('di lay vo!!'); //hiện ô xác nhận
prompt('co lay khong'); //hiện ô xác nhận+ ô input
setTimeout(function() {
    alert('thong bao')
}, 2000); //hiện 1 thông báo trong khoảng thời gian 1000=1s
clearTimeout(timeout) //hủy setTimeout()
clearIntelval(interval) //hủy setIntervar()
setIntervar() //hiện 1 thông báo trong khoảng thời gian 1000=1s, có lặp lại
setInterval(function() {
        console.log('luan dep trai!!')
    }, 5000) // hiên thông báo lặp lại trong khoảng thời gian