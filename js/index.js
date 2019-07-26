//Solicitar ao usuario 3 dados
//Numero 1
//numero 2
//operação */-+
//usar if, else if parseInt document.body.append
//mostrar o resultado

var valor1 = parseInt(prompt("Digite o primeiro valor"));
var operation = prompt("Insira a operação * ou / ou + ou -");
var valor2 = parseInt(prompt("Digite o segundo valor"));
var result = ""
var errormessage = "Favor verifique os valores digitados"

if (operation === "/") {
  result = valor1 / valor2;
} else if (operation === "*") {
  result = valor1 * valor2;
} else if (operation === "+") {
  result = valor1 + valor2;
} else if (operation === "-") {
  result = valor1 - valor2;
} else {
  result = errormessage;
}
if (result != operation){
  result = errormessage
} else if (result = " "){
  result = errormessage
}
document.body.append (result);
