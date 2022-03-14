var c = 1 + 2;
var Name = 'luan dep trai'; //toán tử gán
console.log(c);
console.log(Name);
var x = 1;
var y = 2;
if (x < y) {
    alert('luan dep real')
} //toán tử điều kiện
// ** : lũy thừa
var a = 1;
var b = 2;
var tong = a++ + a--;
console.log(tong);
var d = a++;
var e = d;
console.log(a);
console.log(d);
console.log(a++);
var id = Symbol('id');
var myFunction = function() {
    alert('luan dep troai');
}
console.log(myFunction());

console.log(typeof myFunction + ' ' + typeof myObject + ' ' + typeof myArray);
var nhanxet = '     luan luan luan luan     ';
console.log(nhanxet.indexOf('luan'));
console.log(nhanxet.slice(0, 4));
console.log(nhanxet.replace(/luan/g, 'anh luan '));
console.log(nhanxet.toUpperCase());
console.log(nhanxet.toLowerCase());
console.log(nhanxet.trim());
console.log(nhanxet.split(' '));
var result = 3 > 4;
console.log(result);
var abc = 40.340;
//abc.toString() ==> chuyển sang kiểu string
//abc.toFixed() ==> làm tròn số ==> chuyển sang kiểu string