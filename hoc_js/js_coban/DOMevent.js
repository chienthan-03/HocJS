// let span = document.querySelectorAll('span');
// for (let i = 0; i < span.length; ++i) {
//     span[i].onclick = function(e) {
//         console.log(e.target)
//     }
// };
// let h1 = document.querySelector('h1');
// h1.onclick = function(e) {
//     console.log(e.target)
// }

//INPUT
let inputValue
let inputElement = document.querySelector('input[type="text"]')

inputElement.onchange = function(e) {
    console.log(inputValue = e.target.value)
}
inputElement.oninput = function(e) {
    console.log(e.target.value)
}

//CHECKBOX
let inputChecked
let checboxElement = document.querySelector('input[type="checkbox"]')
checboxElement.onchange = function(e) {
        console.log(inputChecked = e.target.checked)
    }
    //SELECT
let seleced
let selecElement = document.querySelector('select')
selecElement.onchange = function(e) {
        console.log(seleced = e.target.value)
    }
    //KEYUP/KEYDOWN/ONKEYPRESS
let onkeyUp
let inputElement1 = document.querySelector('input[type="text"]')

inputElement1.onkeyup = function(e) {
    console.log(onkeyUp = e.which)
}
document.onkeydown = function(e) {
    switch (onkeyUp = e.which) {
        case 27:
            console.log('ESC')
            break;
        case 13:
            console.log('ENTER')
            break;
    }
}