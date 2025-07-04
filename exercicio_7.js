function verificarPalindromo() {
    const frase = prompt("Digite uma frase para verificar se é um palíndromo:");
    
    if (frase === null) {
        return;
    }
    
    const fraseProcessada = frase
        .toLowerCase()
        .replace(/\s/g, '');
    
    const ehPalindromo = fraseProcessada === fraseProcessada
        .split('')
        .reverse()
        .join('');
    
    if (fraseProcessada.length === 0) {
        alert("Nenhum texto foi inserido!");
    } else {
        alert(`"${frase}" ${ehPalindromo ? 'é um palíndromo!' : 'não é um palíndromo.'}`);
    }
}

verificarPalindromo();