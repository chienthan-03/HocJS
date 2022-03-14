var myArray = [
        'kha banh',
        'dung troc',
        'huan hoa hong',
    ]
    // console.log(typeof myObject, typeof myArray);
var luan = [
        'dep trai',
        'nha giau',
        '18 cm',
    ]
    // console.log(luan[2]);
    // for (let i = 0; i < luan.length; i++) {
    //     const element = luan[i];
    //     console.log(element)
    // }
    // console.log(Array.isArray(myArray))
    // console.log(luan.toString())
console.log(luan.join(' - ')) //chuyển thành string và thêm kí tự cách các phần tử trong mảng
    // console.log(luan);
    // console.log(luan.pop()) //xóa phần tử cuối mảng
    // console.log(luan.shift()) //xóa phần tử đầu mảng
    // console.log(luan);
    // console.log(luan.push('dang cap')) //thêm phần tử ở cuối mảng
    // console.log(luan.unshift('mua quat')) //thêm phần tử đầu mảng 
    // console.log(luan.splice(0, 1, 'cu nghe')) //chọn vị trí, số phần tử cần xóa, chèn phần tử
    // console.log(luan.concat(myArray)) //nối hai mảng
    // console.log(luan.slice(0, 2)) //cắt mảng
var value = Object.values(luan)
    // console.log(luan)
    // for (var value of Object.keys(luan)) {
    //     console.log(luan[value])
    // }