function calculadora() {

    var number1 = document.getElementById('number1').value;
    var number2 = document.getElementById('number2').value;
    var oper = document.getElementById('oper').value;

    if (oper == "somar") {
        soma = parseInt(number1) + parseInt(number2);
        console.log('<p> Total da soma foi = ', soma, '</p>');
    } else if (oper == "diminuir") {
        subtracao = parseInt(number1) - parseInt(number2);
        console.log('<p> Total da subtração foi = ', subtracao, '</p>');
    } else if (oper == "multiplicar") {
        multiplicacao = parseInt(number1) * parseInt(number2);
        console.log('<p> Total da multipicação foi = ', multiplicacao, '</p>');
    } else {
        divisao = parseInt(number1) / parseInt(number2);
        console.log('<p> Total da divisão foi = ', divisao, '</p>');
    }
}
