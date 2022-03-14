//class

class idol {
    constructor(name, skill) {
        this.name = name
        this.skill = skill
    }
    getName() {
        return this.name
    }
}

let khaBanh = new idol('Khá Bảnh', 'VinaHey')
let huanHoaHong = new idol('Huấn Hoa Hồng', 'GDCD cực mạnh')

console.log(khaBanh, huanHoaHong)
console.log(khaBanh.getName())

//rest

let array = ['luân', 'đẹp', 'trai']
let [a, b, c] = array
let [x, ...rest] = array

console.log(a)
console.log(rest)


let object = {
    name: 'Khá Bảnh',
    age: 18,
    price: '10 năm tù',
}

// let { name, price } = object
// console.log(name, age, price)

let { name, feel = 'rất buồnnn', ...newObject } = object

console.log(newObject)
console.log(feel)

function loggers(...params) {
    console.log(params)
}
loggers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

function sum(...rest) {
    let sum = 0
    rest.map((rest) => sum += rest)
    return sum
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)) // rest giúp truyền vô số tham số

//rest => truyền qua tham số
//spread => truyền qua đối số

//vd:

let array1 = ['Javascript', 'Ruby', 'PHP']
let array2 = ['ReactJS', 'NodeJS']
let array3 = [...array1, ...array2]
console.log(array3)

function rendle1(...rest) {
    for (let i = 0; i < rest.length; i++) {
        console.log(rest[i])
    }

}
rendle1(array1) //rest

function rendle2(a, b, c) {
    console.log(a, b, c)
}
rendle2(...array1) //spread

//vd spread
let Arr1 = [1, 4, 6, 35]
let Arr2 = [5, 3, 66, 4]
console.log(Math.max(...Arr1, ...Arr2)) //xử lý truyền đối số qua nhiều mảng, object

//tagged template literals

function highlight([first, ...strings], ...values) {
    console.log('first:', first)
    console.log('strings:', strings)
    console.log('values:', values)
    return values.reduce(
        (acc, curr) => acc + `<span>${curr}</span>` + strings.shift(),
        first)
}
let d = 'd'
let e = 'e'
let f = 'f'
const htmls = highlight `ta có ${d},${e},${f} là biến nội suy`
console.log(htmls)
document.getElementById('template-literals').innerHTML = htmls

//modules