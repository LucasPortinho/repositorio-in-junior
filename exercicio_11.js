const numeros = [];
const quantidade = parseInt(prompt("Digite a quantidade de números:"));

for (let i = 0; i < quantidade; i++) {
    const numero = parseInt(prompt(`Digite o ${i + 1}º número:`));
    numeros.push(numero);
}

let contador = 0;

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > numeros[i - 1]) {
        contador++;
    }
}

console.log(contador);
