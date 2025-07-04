const elementos = ["a", "a", "b", "b", "c", "c", 1, 1, 3];

function encontrarElementoUnico(arr) {
    let resultado = 0;
    for (const numero of arr) {
        resultado ^= numero;
    }
    return resultado;
}

const elementoUnico = encontrarElementoUnico(elementos);
alert(`O elemento único é: ${elementoUnico}`);