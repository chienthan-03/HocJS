// // var myInfo = {
// //     Name: 'thanh luan',
// //     LastName: 'khuc',
// //     address: 'Ha Noi',
// //     relative: function() {
// //         return this.LastName
// //     }

// // };

// // delete myInfo.address;
// // console.log(myInfo.relative())
// // var key = 'LastName';
// // console.log(myInfo[key])

// //object contructor

function User(firstName, lastName, phone) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
}

User.prototype.age = '18' //thêm thuộc tính bằng prototype
var king = new User('Luân', 'Thành', '0867672619')
var User = new User('Khá', 'Bảnh', '0123456789')
console.log(king)
console.log(User.constructor)

// // var date = new Date();
// // var Minutes = date.getMinutes();
// // var hours = date.getHours();
// // var Millseconds = date.getMilliseconds()
// // console.log(`${hours}:${Minutes}:${Millseconds}`)