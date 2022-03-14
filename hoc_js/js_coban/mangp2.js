var data = [

        {
            id: 1,
            nName: 'hán',
            nPhone: '0938574844',
            age: 15,

        },
        {
            id: 2,
            nName: 'tề',
            nPhone: '0993840248',
            age: 15,
        },
        {
            id: 3,
            nName: 'sở',
            nPhone: '0838774444',
            age: 15,
        },
        {
            id: 4,
            nName: 'triệu',
            nPhone: '0938492422',
            age: 15,
        },
        {
            id: 5,
            nName: 'tần',
            nPhone: '0838774444',
            age: 15,
        },
        {
            id: 6,
            nName: 'triệu',
            nPhone: '0865466864',
            age: 15,
        },
    ]
    // console.log(data)
let user = {}

function xxx(data) {
    data.forEach(function(data, index) {
            return user[data.id] = data.nName
        }) //xuất tra vị trí và các phần tử trong mảng
    return user
}
// // var areAge = data.every(function(Data, index) {
// //     return Data.age === 15;
// // })
// // console.log(areAge) //kiểm tra điều kiện, true khi tất cả phần tử thỏa mãn điều kiện

// var isAge = data.some(function(data, index) {
//     return data.age === 15;
// })
// console.log(isAge) //kiểm tra điều kiện, true khi có 1 phần tử thỏa mãn điều kiện

// var nFind = data.find(function(data, index) {
//     return data.nName === 'triệu'
// })
// console.log(nFind) //tìm kiếm 1 phần tử đầu tiên thỏa nãm điều kiện

// var nFilter = data.filter(function(data, index) {
//     return data.nName === 'triệu';
// })
// console.log(nFilter)
//

//                    MAP():

//
// var newKing = data.map(function(data, index, originArray) {
//     // console.log(data)
//     return {
//         id: data.id,
//         nName: `nước ${data.nName}`,
//         nPhone: data.nPhone,
//         age: data.age,
//         kinger: 'lưu bang',
//         MangCu: originArray, // trả về mảng cũ(không cần vì ko có nó cũng tự trả về mảng cũ)
//     };
// }); //map() là sao chép số phần tử trong mảng và thay đổi các giấ trị trong mảng
// console.log(newKing)
//

// var Name = data.map(function(data) {
//     return `
//     <a>${data.nName}</a>
//     `
// })
// console.log(Name.join(''))
//


//                   RECUDE():


// var i = 0

// function Total(accumulator, currentValue, currentIndex, originArray) {
//     i++
//     var nTotal = accumulator + currentValue.age
//     console.table({
//             'lượt chạy': i,
//             'năm tích trữ được': accumulator,
//             'Năm cộng thêm': currentValue.age,
//             'tổng số năm': nTotal
//         })
//         // console.log(currentIndex)
//         //console.log(currentValue)
//     return nTotal //giá trị được lưu trữ
// }
// var totalAge = data.reduce(Total, 0)
// console.log(`tổng số năm: ${totalAge}`)


// var totalAge = data.reduce(function(total, course) {
//     return total + course.age
// }, 0)
// console.log(totalAge)