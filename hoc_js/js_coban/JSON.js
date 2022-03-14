//number,boolean,null,array,object
//là 1 định dạng dữ liện (chuỗi)
//parse: từ JSON --> js
var object = '{"name":"Luân","age":18}'
    //CHÚ Ý:bắt buộc phải dùng dấu "" trong JSON
console.log(JSON.parse(object))

//Stringify: từ js --> JSON(chuỗi)
var object2 = {
    Name: 'Bảnh',
    age: 20
}
console.log(JSON.stringify(object2))