function fizzBuzz() {
  const entrada = prompt("Digite um número inteiro:");
  const numero = parseInt(entrada);

  if (isNaN(numero)) {
    alert("Entrada inválida. Por favor, digite um número inteiro.");
    return;
  }

  if (numero % 3 === 0 && numero % 5 === 0) {
    alert("fizzbuzz");
  } else if (numero % 3 === 0) {
    alert("fizz");
  } else if (numero % 5 === 0) {
    alert("buzz");
  }
}

fizzBuzz();