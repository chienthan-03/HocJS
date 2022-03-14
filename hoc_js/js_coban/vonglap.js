// //for in && for of
var User = {
    Name: 'thành luân',
    age: '18',
}
for (var key in User) {
    console.log(key)
}
var js = 'javascript'

for (var key of js) {
    console.log(key)

}
for (var key of Object.keys(User)) {
    console.log(User[key])
}
// //while && do while

var i = 0
    // while (i < 10) {
    //     console.log(i)
    //     i++

// }
var isSuccess = null;
do {
    i++
    console.log('Nạp thẻ lần ' + i)
    if (false) {
        isSuccess = true;
    }
}
while (!isSuccess && i <= 3)
for (var i = 0; i <= 100; i++) {
    if (i % 7 == 0 && i % 3 == 0) {
        console.log(i)
    }
}