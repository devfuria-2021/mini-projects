// console.log('oi');

const display = document.getElementById("display");
const number1 = document.getElementById("txt-number1");
const number2 = document.getElementById("txt-number2");

const btnPlus = document.getElementById("btn-plus");
const btnMinus = document.getElementById("btn-minus");
const btnTimes = document.getElementById("btn-times");
const btnDivided = document.getElementById("btn-divided");

btnPlus.onclick = function () {
    // console.log(number1.value, number2.value);
    var resultado = parseInt(number1.value) + parseInt(number2.value);
    display.value = resultado;
}

btnMinus.onclick = function () {
    var resultado = parseInt(number1.value) - parseInt(number2.value);
    display.value = resultado;
}

btnTimes.onclick = function () {
    var resultado = parseInt(number1.value) *+ parseInt(number2.value);
    display.value = resultado;
}

btnDivided.onclick = function () {
    var resultado = parseInt(number1.value) / parseInt(number2.value);
    display.value = resultado;
}
