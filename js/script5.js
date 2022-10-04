var n1 = parseFloat(prompt('Digite um número'));
var n2 = parseFloat(prompt('Digite outro número '));
//% Módulo é o resto da divisão
alert('O modulo da divisão é ' + (n1 % n2));
//Descobrindo se o número é impar ou par.
//Se o módulo for 0 para ser for 1 é impar
var modulo = parseInt(n1 % n2);
if (modulo != 0){
    alert('Este numero é impar');
}else{
    alert('Este numero é par');
}
//** exponenciação  n1^n2 = 8