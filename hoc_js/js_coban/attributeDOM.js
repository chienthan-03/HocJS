let x = document.querySelector('h1')
    // console.log([x])
    //truyền attribute
x.id = 'tika'

x.setAttribute('call', 'luan') // truyền attribute tùy í(không hợp lệ cũng được)
    //lấy ttribute
console.log(x.id) //chỉ lấy attribute hợp lệ
console.log(x.getAttribute('call')) //lấy cả attribute hợp lệ và không hợp lệ
console.log("luan dep trai")