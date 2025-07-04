function fatorial(n) {
  let resultado = 1;
  for (let i = 2; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

function pedirNumero() {
    let numero;
    let entradaValida = false;
        
    while (!entradaValida) {
        const entrada = prompt("Digite um número inteiro positivo:");
        numero = parseInt(entrada);

        if (!isNaN(numero) && numero >= 0) {
            entradaValida = true;
        } else {
            alert("Entrada inválida. Digite apenas um número inteiro positivo.");
        }
    }

    return numero;
}

function perguntarContinuar() {
  let resposta;
  let respostaValida = false;

  while (!respostaValida) {
    resposta = prompt("Deseja calcular outro fatorial? (S/N)").trim().toUpperCase();

    if (resposta === "S" || resposta === "N") {
      respostaValida = true;
    } else {
      alert("Resposta inválida. Digite 'S' para sim ou 'N' para não.");
    }
  }

  return resposta === "S";
}

function start() {
  let continuar = true;

  while (continuar) {
    const numero = pedirNumero();
    const numFatorial = fatorial(numero);
    alert(`${numero}! = ${numFatorial}`);

    continuar = perguntarContinuar();
  }

  alert("Programa encerrado.");
}

start();